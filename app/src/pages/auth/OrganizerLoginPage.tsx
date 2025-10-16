import { FormEvent, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { colleges } from '../../data/colleges'

export default function OrganizerLoginPage() {
  const { loginOrganizer } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const help = useMemo(() => {
    return ''
  }, [])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    const ok = await loginOrganizer({ username, password })
    if (!ok) setError('Invalid credentials')
    else navigate('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Organizer Login</h1>
      {/* <p className="text-white/60 text-sm mb-4">{help}</p> */}
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="w-full rounded-md bg-transparent border border-white/20 px-3 py-2" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required />
        <input className="w-full rounded-md bg-transparent border border-white/20 px-3 py-2" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="w-full bg-primary text-primary-foreground rounded-md px-3 py-2">Sign in</button>
      </form>
      <details className="mt-6 text-white/70">
        <summary className="cursor-pointer">Supported colleges (for usernames)</summary>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
          {colleges.map(c => (
            <li key={c.id}><span className="text-white/90">{c.name}</span></li>
          ))}
        </ul>
      </details>
    </div>
  )
}


