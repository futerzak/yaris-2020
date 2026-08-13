import { ownerStory } from '../data/carData'
import { deliveryPhoto, documentsPhoto } from '../data/photos'
import { OptimizedImage } from './OptimizedImage'
import { SectionHeader } from './SectionHeader'

export function OwnerStory() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader kicker="Sprzedający" title={ownerStory.headline} />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-700">
            {ownerStory.story}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">{ownerStory.whySelling}</p>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            <figure className="overflow-hidden rounded-md border border-neutral-200">
              <OptimizedImage
                src={deliveryPhoto.url}
                alt={deliveryPhoto.alt}
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width: 768px) calc(100vw - 2rem), 430px"
              />
              <figcaption className="px-3 py-2.5 text-sm text-neutral-600">{deliveryPhoto.alt}</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-md border border-neutral-200">
              <OptimizedImage
                src={documentsPhoto.url}
                alt={documentsPhoto.alt}
                className="aspect-[4/3] w-full object-cover object-top"
                sizes="(max-width: 768px) calc(100vw - 2rem), 430px"
              />
              <figcaption className="px-3 py-2.5 text-sm text-neutral-600">{documentsPhoto.alt}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
