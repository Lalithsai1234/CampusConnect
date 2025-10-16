import CollegeCard from '../components/CollegeCard'
import { colleges } from '../data/colleges'

export default function CollegesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Colleges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map((c) => (
          <CollegeCard key={c.id} college={c} />
        ))}
      </div>
    </div>
  )
}


