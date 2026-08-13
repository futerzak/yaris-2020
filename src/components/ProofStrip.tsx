import { proofFacts } from '../data/carData'

export function ProofStrip() {
  return (
    <section className="border-b border-neutral-200 bg-[--color-night-sky] text-white">
      <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:py-10">
        {proofFacts.map((fact) => (
          <div key={fact.label}>
            <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
              {fact.label}
            </div>
            <div className="mt-1 text-sm font-medium leading-snug">{fact.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
