import type { FormEvent } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function StudentLoginPage() {
  const { loginStudent } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      await loginStudent({ email })
      navigate('/dashboard')
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Student Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full rounded-md bg-transparent border border-white/20 px-3 py-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="w-full bg-primary text-primary-foreground rounded-md px-3 py-2">Sign in</button>
      </form>
    </div>
  )
}


