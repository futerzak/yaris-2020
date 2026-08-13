import { keyFacts } from '../data/carData'

export function KeyFacts() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
      {keyFacts.map((item) => (
        <div key={item.label} className="tile px-3 py-2.5">
          <div className="tile-title">{item.label}</div>
          <div className="tile-value">{item.value}</div>
        </div>
      ))}
    </div>
  )
}
