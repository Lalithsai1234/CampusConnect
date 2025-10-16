import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { colleges } from '../data/colleges'
import CollegeCard from '../components/CollegeCard'
import { useState } from 'react'
import { createEvent, type NewEventInput } from '../services/events'

export default function DashboardPage() {
  const { user, getFollowedColleges } = useAuth()
  if (!user) return <Navigate to="/auth" replace />
  if (user.role === 'organizer') {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Organizer Dashboard</h1>
        <p className="text-white/70">Welcome, {user.organizer.username}</p>
        <EventForm collegeId={user.organizer.collegeId} />
      </div>
    )
  }

  const followedIds = getFollowedColleges()
  const followed = colleges.filter(c => followedIds.includes(c.id))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Student Dashboard</h1>
      <p className="text-white/70">Colleges you follow</p>
      {followed.length === 0 ? (
        <div className="rounded-lg bg-card p-4 border border-white/10">You are not following any colleges yet. Explore <Link to="/colleges" className="text-primary">Colleges</Link>.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {followed.map((c) => (
            <CollegeCard key={c.id} college={c} />
          ))}
        </div>
      )}
    </div>
  )
}

function EventForm({ collegeId }: { collegeId: string }) {
  const [title, setTitle] = useState('')
  const [type, setType] = useState<'hackathon' | 'workshop' | 'competition'>('hackathon')
  const [startAt, setStartAt] = useState('')
  const [endAt, setEndAt] = useState('')
  const [posterFile, setPosterFile] = useState<File | undefined>()
  const [status, setStatus] = useState<string | null>(null)
  const [registerUrl, setRegisterUrl] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('Saving...')
    try {
      const input: NewEventInput = {
        title,
        type,
        collegeId,
        startAt: new Date(startAt),
        endAt: new Date(endAt),
        posterFile,
        registerUrl,
      }
      const id = await createEvent(input)
      if (id) setStatus('Event created!')
      else setStatus('Firebase not configured; skipped upload.')
      setTitle('')
      setPosterFile(undefined)
      setRegisterUrl('')
    } catch (err) {
      setStatus((err as Error).message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl bg-card p-6 border border-white/10 shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Create Event</h2>
      <label className="block text-sm font-medium mb-1">Event Title</label>
      <input className="w-full rounded-md bg-transparent border border-white/20 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 transition" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Type</label>
          <select value={type} onChange={(e)=>setType(e.target.value as any)} className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 transition">
            <option value="hackathon">Hackathon</option>
            <option value="workshop">Workshop</option>
            <option value="competition">Competition</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input type="date" value={startAt} onChange={(e)=>setStartAt(e.target.value)} className="w-full rounded-md bg-transparent border border-white/20 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 transition" required />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input type="date" value={endAt} onChange={(e)=>setEndAt(e.target.value)} className="w-full rounded-md bg-transparent border border-white/20 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 transition" required />
        </div>
      </div>
      <label className="block text-sm font-medium mb-1 mt-2">Event Poster</label>
      <input type="file" accept="image/*" onChange={(e)=>setPosterFile(e.target.files?.[0])} className="text-sm" />
      <label className="block text-sm font-medium mb-1 mt-2">Registration Link</label>
      <input className="w-full rounded-md bg-transparent border border-white/20 px-3 py-2 focus:border-primary focus:ring-2 focus:ring-primary/30 transition" placeholder="https://..." value={registerUrl} onChange={(e)=>setRegisterUrl(e.target.value)} />
      <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 mt-2 shadow hover:brightness-110 transition">Save Event</button>
      {status && <p className="text-sm text-white/70 mt-2">{status}</p>}
    </form>
  )
}


