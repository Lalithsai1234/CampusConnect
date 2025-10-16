import { events, splitByTiming } from '../data/events'
import EventCard from '../components/EventCard'

export default function EventsPage() {
  const { present, upcoming, past } = splitByTiming(events)
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Events</h1>

      {present.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-medium">Present (Running)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {present.map(e => <EventCard key={e.id} event={e} />)}
          </div>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Upcoming</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcoming.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Past</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {past.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </section>
    </div>
  )
}


