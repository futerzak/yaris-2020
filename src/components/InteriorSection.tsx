import { carData } from '../data/carData'
import { interiorDetail, interiorHero, interiorRearPhoto } from '../data/photos'
import { OptimizedImage } from './OptimizedImage'
import { SectionHeader } from './SectionHeader'

export function InteriorSection() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <SectionHeader kicker="Wnętrze" title="Kokpit i kanapa" />
        <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 text-neutral-700">
          {carData.interiorHighlights.map((h) => (
            <li key={h} className="inline-flex items-center gap-2">
              <span className="h-1 w-1 bg-[--color-tokyo-red]" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          <figure className="overflow-hidden rounded-md border border-neutral-200 md:col-span-2">
            <OptimizedImage
              src={interiorHero.url}
              alt={interiorHero.alt}
              className="aspect-[16/10] w-full object-cover"
              sizes="(max-width: 768px) calc(100vw - 2rem), 780px"
            />
            <figcaption className="bg-neutral-50 px-3 py-2.5 text-sm text-neutral-600">
              {interiorHero.alt}
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-md border border-neutral-200">
            <OptimizedImage
              src={interiorDetail.url}
              alt={interiorDetail.alt}
              className="aspect-[4/3] h-full w-full object-cover"
              sizes="(max-width: 768px) calc(100vw - 2rem), 380px"
            />
            <figcaption className="bg-neutral-50 px-3 py-2.5 text-sm text-neutral-600">
              {interiorDetail.alt}
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-md border border-neutral-200 md:col-span-3">
            <OptimizedImage
              src={interiorRearPhoto.url}
              alt={interiorRearPhoto.alt}
              className="aspect-[21/9] w-full object-cover"
              sizes="(max-width: 768px) calc(100vw - 2rem), 1168px"
            />
            <figcaption className="bg-neutral-50 px-3 py-2.5 text-sm text-neutral-600">
              {interiorRearPhoto.alt}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
