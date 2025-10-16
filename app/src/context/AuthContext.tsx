import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Student = { id: string; name: string; email: string }
type Organizer = { username: string; collegeId: string }

type AuthUser =
  | { role: 'student'; student: Student }
  | { role: 'organizer'; organizer: Organizer }
  | null

type AuthContextValue = {
  user: AuthUser
  loginStudent: (data: { email: string; name?: string; password?: string }) => Promise<void>
  signupStudent: (data: { email: string; name: string; password?: string }) => Promise<void>
  logout: () => void
  loginOrganizer: (data: { username: string; password: string }) => Promise<boolean>
  getFollowedColleges: () => string[]
  toggleFollowCollege: (collegeId: string) => void
  followVersion: number
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const STORAGE_KEY = 'campusconnect_auth'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null)
  const [followVersion, setFollowVersion] = useState(0)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) setUser(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  }, [user])

  async function loginStudent({ email }: { email: string }) {
    const existing = JSON.parse(localStorage.getItem('campusconnect_students') || '{}') as Record<string, Student>
    const student = existing[email]
    if (!student) throw new Error('Account not found. Please sign up.')
    setUser({ role: 'student', student })
  }

  async function signupStudent({ email, name }: { email: string; name: string }) {
    const db = JSON.parse(localStorage.getItem('campusconnect_students') || '{}') as Record<string, Student>
    if (db[email]) throw new Error('Email already registered')
    const newStudent: Student = { id: crypto.randomUUID(), name, email }
    db[email] = newStudent
    localStorage.setItem('campusconnect_students', JSON.stringify(db))
    setUser({ role: 'student', student: newStudent })
  }

  async function loginOrganizer({ username, password }: { username: string; password: string }) {
    const ok = password === '123456789'
    if (!ok) return false
    setUser({ role: 'organizer', organizer: { username, collegeId: username.toLowerCase() } })
    return true
  }

  function logout() {
    setUser(null)
  }

  function keyForFollows(studentId: string) {
    return `campusconnect_follow_${studentId}`
  }

  function getFollowedColleges(): string[] {
    if (!user || user.role !== 'student') return []
    const raw = localStorage.getItem(keyForFollows(user.student.id))
    return raw ? (JSON.parse(raw) as string[]) : []
  }

  function toggleFollowCollege(collegeId: string) {
    if (!user || user.role !== 'student') return
    const key = keyForFollows(user.student.id)
    const set = new Set<string>(getFollowedColleges())
    if (set.has(collegeId)) set.delete(collegeId)
    else set.add(collegeId)
    localStorage.setItem(key, JSON.stringify(Array.from(set)))
    setFollowVersion((v) => v + 1)
  }

  const value = useMemo<AuthContextValue>(
    () => ({ user, loginStudent, signupStudent, logout, loginOrganizer, getFollowedColleges, toggleFollowCollege, followVersion }),
    [user, followVersion]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


