import { carData } from '../data/carData'
import { interiorDetail, interiorHero, interiorRearPhoto } from '../data/photos'
import { OptimizedImage } from './OptimizedImage'

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
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl shadow-xl md:col-span-2">
            <OptimizedImage
              src={interiorHero.url}
              alt={interiorHero.alt}
              className="aspect-[16/10] w-full object-cover"
            />
            <figcaption className="bg-neutral-50 px-4 py-3 text-sm text-neutral-600">{interiorHero.alt}</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl shadow-xl">
            <OptimizedImage
              src={interiorDetail.url}
              alt={interiorDetail.alt}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="bg-neutral-50 px-4 py-3 text-sm text-neutral-600">{interiorDetail.alt}</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl shadow-xl md:col-span-3">
            <OptimizedImage
              src={interiorRearPhoto.url}
              alt={interiorRearPhoto.alt}
              className="aspect-[21/9] w-full object-cover"
            />
            <figcaption className="bg-neutral-50 px-4 py-3 text-sm text-neutral-600">{interiorRearPhoto.alt}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
