import { wheelSets } from '../data/carData'
import { OptimizedImage } from './OptimizedImage'
import { SectionHeader } from './SectionHeader'

export function WheelsSection() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            kicker="Koła"
            title="Dwa komplety 17″"
            subtitle="Letnie Premiere Edition i zimowe Nokian — oba na alufelgach, z salonu Toyota."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {wheelSets.map((set) => (
              <div key={set.season} className="overflow-hidden rounded-md border border-neutral-200">
                <OptimizedImage
                  src={set.photo.url}
                  alt={set.photo.alt}
                  className="aspect-square w-full object-cover"
                  sizes="(max-width: 768px) calc(100vw - 2rem), 490px"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <div className={`h-1.5 w-1.5 ${set.seasonColor}`} />
                    <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                      {set.season}
                    </div>
                  </div>
                  <h3 className="font-display mt-2 text-2xl">{set.title}</h3>
                  <p className="mt-2 text-neutral-600">{set.rims}</p>
                  <p className="mt-3 text-sm text-neutral-800">{set.tires}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {set.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
