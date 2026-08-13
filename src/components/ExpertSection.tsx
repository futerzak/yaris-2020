import { carData } from '../data/carData'
import { expertSidePhoto, hybridClusterPhoto } from '../data/photos'
import { OptimizedImage } from './OptimizedImage'
import { SectionHeader } from './SectionHeader'

export function ExpertSection() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              kicker="Hybryda"
              title="Europejski Samochód Roku 2021"
            />
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Napęd <strong>116 KM (e-CVT)</strong>. Program Toyoty na akumulator hybrydowy to nawet{' '}
              <strong>do 10 lat</strong> przy regularnych przeglądach i testach baterii — wpisy są w
              tabeli ASO.
            </p>
            <div className="mt-8 border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                Toyota Safety Sense
              </div>
              <ul className="mt-4 grid gap-2.5 text-neutral-800">
                {carData.tssSystems.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1 w-1 flex-none bg-[--color-tokyo-red]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-3">
            <OptimizedImage
              src={expertSidePhoto.url}
              alt={expertSidePhoto.alt}
              className="aspect-[4/3] w-full rounded-md object-cover"
              sizes="(max-width: 768px) calc(100vw - 2rem), 580px"
            />
            <figure className="overflow-hidden rounded-md border border-neutral-200">
              <OptimizedImage
                src={hybridClusterPhoto.url}
                alt={hybridClusterPhoto.alt}
                className="aspect-[16/9] w-full object-cover"
                sizes="(max-width: 768px) calc(100vw - 2rem), 580px"
              />
              <figcaption className="bg-neutral-50 px-3 py-2.5 text-sm text-neutral-600">
                {hybridClusterPhoto.alt}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
