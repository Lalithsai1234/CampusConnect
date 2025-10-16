import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export let supabase: SupabaseClient | null = null

if (url && anonKey) {
  supabase = createClient(url, anonKey, {
    auth: { persistSession: false },
  })
}

export function isSupabaseEnabled() {
  return Boolean(supabase)
}






