import { addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage, isFirebaseEnabled } from '../lib/firebase'
import { supabase, isSupabaseEnabled } from '../lib/supabase'
import { uploadToCloudinary } from '../lib/cloudinary'
import type { Event } from '../data/events'

export type NewEventInput = Omit<Event, 'id' | 'posterUrl' | 'startAt' | 'endAt'> & {
  startAt: Date
  endAt: Date
  posterFile?: File
}

export async function createEvent(input: NewEventInput): Promise<string | null> {
  if (isSupabaseEnabled() && supabase) {
    // Insert event row first
    const { data, error } = await supabase
      .from('events')
      .insert({
        title: input.title,
        type: input.type,
        college_id: input.collegeId,
        start_at: input.startAt.toISOString(),
        end_at: input.endAt.toISOString(),
      })
      .select('id')
      .single();
    if (error) throw error;

    let posterUrl: string | undefined;
    if (input.posterFile) {
      // Use the 'posters' bucket for all event images
      const ext = input.posterFile.type.split('/')[1] || 'jpg';
      const filePath = `colleges/${input.collegeId}/events/${data.id}/poster_${Date.now()}.${ext}`;
      const { data: up, error: upErr } = await supabase.storage.from('posters').upload(filePath, input.posterFile, { upsert: true });
      if (upErr) {
        console.error('Supabase upload error:', upErr);
        throw upErr;
      }
      if (!up) {
        console.error('Supabase upload returned no data:', up);
      }
      // Get public URL for the uploaded image
      const { data: pub } = supabase.storage.from('posters').getPublicUrl(filePath);
      if (!pub || !pub.publicUrl) {
        console.error('Supabase public URL error:', pub);
      }
      posterUrl = pub.publicUrl;
      console.log('Generated poster URL:', posterUrl);
      // Update event row with poster URL
      await supabase.from('events').update({ poster_url: posterUrl }).eq('id', data.id);
    }
    return data.id as string;
  }

  if (!isFirebaseEnabled() || !db) return null
  const col = collection(db, 'events')
  const eventRef = await addDoc(col, {
    title: input.title,
    type: input.type,
    collegeId: input.collegeId,
    startAt: input.startAt.toISOString(),
    endAt: input.endAt.toISOString(),
    createdAt: serverTimestamp(),
  })

  let posterUrl: string | undefined
  if (input.posterFile) {
    if (storage) {
      const path = `colleges/${input.collegeId}/events/${eventRef.id}/poster.jpg`
      const storageRef = ref(storage, path)
      await uploadBytes(storageRef, input.posterFile)
      posterUrl = await getDownloadURL(storageRef)
    } else {
      // Cloudinary fallback (no Firebase Storage)
      posterUrl = await uploadToCloudinary(input.posterFile, input.collegeId, eventRef.id)
    }
    await setDoc(eventRef, { posterUrl }, { merge: true })
  }

  return eventRef.id
}

export async function fetchEvents(): Promise<Event[]> {
  if (isSupabaseEnabled() && supabase) {
    const { data, error } = await supabase
      .from('events')
      .select('id,title,type,college_id,start_at,end_at,poster_url')
      .order('start_at', { ascending: true })
    if (error) throw error
    return (data || []).map((r: any) => ({
      id: r.id,
      title: r.title,
      type: r.type,
      collegeId: r.college_id,
      startAt: r.start_at,
      endAt: r.end_at,
      posterUrl: r.poster_url,
    }))
  }
  if (!isFirebaseEnabled() || !db) return []
  const q = query(collection(db, 'events'), orderBy('startAt', 'asc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as Event[]
}

export function subscribeEvents(cb: (events: Event[]) => void) {
  if (isSupabaseEnabled() && supabase) {
    const channel = supabase
      .channel('events-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'events' }, async () => {
        cb(await fetchEvents())
      })
      .subscribe()
    fetchEvents().then(cb)
    return () => { supabase?.removeChannel(channel) }
  }
  if (!isFirebaseEnabled() || !db) return () => {}
  const q = query(collection(db, 'events'), orderBy('startAt', 'asc'))
  return onSnapshot(q, (snap) => {
    const list = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as Event[]
    cb(list)
  })
}


