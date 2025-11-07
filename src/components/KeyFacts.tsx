import { keyFacts } from '../data/carData'

export function KeyFacts() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
      {keyFacts.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-neutral-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{item.label}</div>
          <div className="mt-1 text-sm font-medium text-neutral-900">{item.value}</div>
        </div>
      ))}
    </div>
  )
}


