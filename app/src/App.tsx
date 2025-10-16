import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { useEffect, useRef, useState } from 'react'

function App() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [loginOpen, setLoginOpen] = useState(false)
  const loginRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!loginRef.current) return
      if (!loginRef.current.contains(e.target as Node)) setLoginOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

  useEffect(() => {
    setLoginOpen(false)
  }, [location.pathname])
  return (
    <div className="min-h-screen flex flex-col relative bg-grid">
      <div className="gradient-spotlight">
        <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/3 h-72 w-72 rounded-full bg-pink-600/20 blur-3xl animate-blob"></div>
      </div>
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="container-responsive flex items-center justify-between py-3">
          <Link to="/" className="text-lg font-semibold hover:tracking-wide transition-all">CampusConnect</Link>
          <nav className="flex items-center gap-1 text-sm bg-black/40 rounded-xl px-2 py-1 shadow-lg">
            {[
              { to: '/events', label: 'Events' },
              { to: '/colleges', label: 'Colleges' },
              { to: '/dashboard', label: 'Dashboard', className: 'bg-primary text-primary-foreground hover:brightness-110 ml-1' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-md transition-all duration-300 relative group ${item.className || ''}`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 rounded-md group-hover:bg-gradient-to-r group-hover:from-purple-600/30 group-hover:to-blue-600/30 group-hover:blur-sm transition-all"></span>
              </Link>
            ))}
            {!user && (
              <div className="relative" ref={loginRef}>
                <button onClick={() => setLoginOpen((v) => !v)} className="px-3 py-2 rounded-md hover:bg-white/10">Login</button>
                {loginOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-md border border-white/10 bg-card shadow-lg">
                    <Link to="/auth/student/login" className="block px-3 py-2 hover:bg-white/10">Student Login</Link>
                    <Link to="/auth/organizer/login" className="block px-3 py-2 hover:bg-white/10">Organizer Login</Link>
                    <Link to="/auth/student/signup" className="block px-3 py-2 hover:bg-white/10">Student Sign Up</Link>
                  </div>
                )}
              </div>
            )}
            {user && (
              <button onClick={() => { logout(); navigate('/') }} className="ml-1 px-3 py-2 rounded-md border border-white/20 hover:bg-white/10">Logout</button>
            )}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container-responsive py-8">
          <Outlet />
        </div>
      </main>
      <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="container-responsive py-4 text-xs text-white/60">
          © {new Date().getFullYear()} CampusConnect
        </div>
      </footer>
    </div>
  )
}

export default App
