import { carData } from '../data/carData'
import { interiorHero, interiorDetail } from '../data/photos'

export function InteriorSection() {
  return (
    <section className="relative border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
          Wnętrze
        </div>
        <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
          Skupienie na Doświadczeniu Kierowcy
        </h2>
        <div className="mx-auto mt-6 grid max-w-4xl gap-3 text-center text-lg text-neutral-700">
          {carData.interiorHighlights.map((h, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[--color-tokyo-red]" />
              {h}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={interiorHero.url} alt={interiorHero.alt} className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={interiorDetail.url} alt={interiorDetail.alt} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
