export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Discover Campus Events</h1>
      <p className="text-white/70">Search hackathons, workshops, and competitions across colleges.</p>
      <div className="flex gap-3">
        <a href="/auth/student/login" className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm">Student Login</a>
        <a href="/auth/student/signup" className="rounded-md px-4 py-2 text-sm border border-white/20">Student Sign Up</a>
        <a href="/auth/organizer/login" className="rounded-md px-4 py-2 text-sm border border-white/20">Organizer Login</a>
      </div>
    </div>
  )
}


