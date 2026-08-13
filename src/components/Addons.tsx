import { carData } from '../data/carData'
import { ceramicCoatingPhoto, gtechniqCertPhoto, parkingSensorsPhoto } from '../data/photos'
import { OptimizedImage } from './OptimizedImage'
import { SectionHeader } from './SectionHeader'

export function Addons() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" kicker="W cenie" title="Dodatki" />
            <ul className="mt-8 space-y-3">
              {carData.addons.map((a) => (
                <li
                  key={a.text}
                  className="flex items-start gap-3 border-b border-neutral-100 py-3 last:border-0"
                >
                  <span
                    className={
                      'mt-2 inline-block h-1.5 w-1.5 flex-none ' +
                      (a.highlight ? 'bg-[--color-tokyo-red]' : 'bg-neutral-400')
                    }
                  />
                  <span className={a.highlight ? 'font-medium text-neutral-900' : 'text-neutral-700'}>
                    {a.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-md border border-neutral-200 sm:col-span-2">
              <OptimizedImage
                src={gtechniqCertPhoto.url}
                alt={gtechniqCertPhoto.alt}
                className="aspect-[16/9] w-full object-cover object-center"
                sizes="(max-width: 1024px) calc(100vw - 2rem), 580px"
              />
              <figcaption className="bg-neutral-50 px-3 py-2.5 text-sm text-neutral-700">
                {gtechniqCertPhoto.alt}
              </figcaption>
            </figure>
            <OptimizedImage
              src={ceramicCoatingPhoto.url}
              alt={ceramicCoatingPhoto.alt}
              className="aspect-square w-full rounded-md object-cover"
              sizes="(max-width: 640px) calc(100vw - 2rem), 280px"
            />
            <OptimizedImage
              src={parkingSensorsPhoto.url}
              alt={parkingSensorsPhoto.alt}
              className="aspect-square w-full rounded-md object-cover"
              sizes="(max-width: 640px) calc(100vw - 2rem), 280px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
