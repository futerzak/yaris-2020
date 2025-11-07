import { carData } from '../data/carData'
import { interiorHero, interiorDetail } from '../data/photos'
import { PhotoOrPlaceholder } from './ImagePlaceholder'

export function InteriorSection() {
  return (
    <section className="relative border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container py-12 md:py-16">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Wnętrze: Skupienie na Doświadczeniu Kierowcy</h2>
        <p className="mt-3 text-neutral-600 md:max-w-prose">
          {carData.interiorHighlights.join(' • ')}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <PhotoOrPlaceholder src={interiorHero.url} alt={interiorHero.alt} external={interiorHero.external} />
          <PhotoOrPlaceholder src={interiorDetail.url} alt={interiorDetail.alt} external={interiorDetail.external} />
        </div>
      </div>
    </section>
  )
}


