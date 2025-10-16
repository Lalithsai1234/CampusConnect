import type { Event } from '../data/events'

export default function EventCard({ event }: { event: Event }) {
  const getRegisterButtonText = (url?: string) => {
    if (!url) return null
    if (url.startsWith('mailto:')) return 'Contact'
    return 'Register'
  }

  const handleRegisterClick = (url?: string) => {
    if (!url) return
    window.open(url, '_blank')
  }

  const buttonText = getRegisterButtonText(event.registerUrl)

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-card hover:border-primary/60 transition-all hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">
      <div className="aspect-[3/2] w-full overflow-hidden">
        <img src={event.posterUrl || `https://picsum.photos/seed/${event.id}/800/500`} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 space-y-2">
        <div className="text-xs uppercase tracking-wide text-white/60">{event.type}</div>
        <h3 className="text-base font-medium">{event.title}</h3>
        <div className="text-sm text-white/70">
          {new Date(event.startAt).toLocaleString()} – {new Date(event.endAt).toLocaleString()}
        </div>
        {buttonText && (
          <button 
            onClick={() => handleRegisterClick(event.registerUrl)}
            className="inline-block text-sm bg-primary text-primary-foreground rounded-md px-3 py-1 hover:brightness-110 transition-all"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  )
}


