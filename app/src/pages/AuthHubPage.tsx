export default function AuthHubPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Authentication</h1>
      <div className="grid sm:grid-cols-3 gap-4">
        <a href="/auth/student/login" className="rounded-xl border border-white/10 p-4 hover:border-primary/60 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">Student Login</a>
        <a href="/auth/organizer/login" className="rounded-xl border border-white/10 p-4 hover:border-primary/60 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">Organizer Login</a>
        <a href="/auth/student/signup" className="rounded-xl border border-white/10 p-4 hover:border-primary/60 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">Student Sign Up</a>
      </div>
      <p className="text-sm text-white/70">Organizer sign up is disabled; organizers are created by admin only.</p>
    </div>
  )
}


