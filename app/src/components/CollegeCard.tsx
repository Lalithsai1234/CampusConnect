import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export type College = {
  id: string
  name: string
  imageUrl?: string
}

type Props = {
  college: College
}

export default function CollegeCard({ college }: Props) {
  const { user, getFollowedColleges, toggleFollowCollege } = useAuth()
  const isStudent = user?.role === 'student'
  const isFollowing = isStudent && getFollowedColleges().includes(college.id)
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(college.id)}/600/400`
  const imageSrc = college.imageUrl ?? fallback
  return (
    <div className="group rounded-xl border border-white/10 overflow-hidden bg-card hover:border-primary/60 transition-all hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">
      <Link to={`/college/${college.id}`} className="block">
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <img src={imageSrc} alt={college.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </Link>
      <div className="p-4 flex items-center justify-between gap-3">
        <Link to={`/college/${college.id}`} className="block flex-1 min-w-0">
          <h3 className="text-base font-medium group-hover:text-primary transition-colors truncate">{college.name}</h3>
        </Link>
        {isStudent && (
          <button
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); toggleFollowCollege(college.id) }}
            className={`shrink-0 px-2.5 py-1.5 rounded-md text-xs border ${isFollowing ? 'border-primary text-primary bg-black/30' : 'border-white/20 text-white hover:bg-white/10'}`}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        )}
      </div>
    </div>
  )
}


