import { ownerStory } from '../data/carData'
import { deliveryPhoto, documentsPhoto } from '../data/photos'
import { OptimizedImage } from './OptimizedImage'

export function OwnerStory() {
  return (
    <section className="border-b border-neutral-200 bg-gradient-to-b from-white to-neutral-50">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
            Od Rodziny Fana Motoryzacji
          </div>
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">{ownerStory.headline}</h2>

          <div className="mt-10 rounded-2xl bg-white p-8 shadow-xl md:p-12">
            <div className="relative pl-8 pr-8">
              <div className="absolute left-0 top-0 text-6xl leading-none text-[--color-tokyo-red]/20" aria-hidden="true">
                "
              </div>
              <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">{ownerStory.story}</p>
              <div
                className="absolute -bottom-2 right-0 text-6xl leading-none text-[--color-tokyo-red]/20"
                aria-hidden="true"
              >
                "
              </div>
            </div>

            <div className="mt-10 border-t border-neutral-200 pt-8">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[--color-tokyo-red]/10 text-2xl"
                  aria-hidden="true"
                >
                  👨‍👩‍👧‍👦
                </div>
                <div>
                  <div className="font-bold text-neutral-900">Dlaczego sprzedajemy?</div>
                  <p className="mt-2 text-neutral-600">{ownerStory.whySelling}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <OptimizedImage
                src={deliveryPhoto.url}
                alt={deliveryPhoto.alt}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-neutral-600">{deliveryPhoto.alt}</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <OptimizedImage
                src={documentsPhoto.url}
                alt={documentsPhoto.alt}
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <figcaption className="p-4 text-sm text-neutral-600">{documentsPhoto.alt}</figcaption>
            </figure>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 text-center shadow-md">
              <div className="text-3xl" aria-hidden="true">
                🔧
              </div>
              <div className="mt-2 font-bold text-neutral-900">100% ASO</div>
              <div className="mt-1 text-sm text-neutral-600">Każdy przegląd w autoryzowanym serwisie</div>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-md">
              <div className="text-3xl" aria-hidden="true">
                📋
              </div>
              <div className="mt-2 font-bold text-neutral-900">Pełna Dokumentacja</div>
              <div className="mt-1 text-sm text-neutral-600">Każdy wpis, każda faktura, każdy test</div>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-md">
              <div className="text-3xl" aria-hidden="true">
                ❤️
              </div>
              <div className="mt-2 font-bold text-neutral-900">Dbany z Pasją</div>
              <div className="mt-1 text-sm text-neutral-600">Ceramika, dwa komplety kół, każdy detal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
