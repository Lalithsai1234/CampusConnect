import { useParams } from 'react-router-dom'
import { colleges } from '../data/colleges'
import { events } from '../data/events'
import { splitByTiming } from '../data/events'
import EventCard from '../components/EventCard'
import { useAuth } from '../context/AuthContext'

export default function CollegeProfilePage() {
  const { collegeId } = useParams()
  const college = colleges.find(c => c.id === collegeId)
  const list = events.filter(e => e.collegeId === collegeId)
  const { present, upcoming, past } = splitByTiming(list)
  const { user, getFollowedColleges, toggleFollowCollege } = useAuth()
  const isStudent = user?.role === 'student'
  const isFollowing = isStudent && getFollowedColleges().includes(collegeId || '')
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold">{college?.name ?? 'College'}</h1>
          {isStudent && collegeId && (
            <button onClick={() => toggleFollowCollege(collegeId)} className={`px-3 py-2 rounded-md border ${isFollowing ? 'border-primary text-primary' : 'border-white/20 hover:bg-white/10'}`}>
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          )}
        </div>
      </div>

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
        {upcoming.length === 0 ? (
          <div className="rounded-lg bg-card p-4 border border-white/10">No upcoming events.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcoming.map(e => <EventCard key={e.id} event={e} />)}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Past</h2>
        {past.length === 0 ? (
          <div className="rounded-lg bg-card p-4 border border-white/10">No past events yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {past.map(e => <EventCard key={e.id} event={e} />)}
          </div>
        )}
      </section>
    </div>
  )
}


