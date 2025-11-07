import { carData } from '../data/carData'
import { ImagePlaceholder, PhotoOrPlaceholder } from './ImagePlaceholder'
import { ceramicCoatingPhoto } from '../data/photos'

export function Addons() {
  // ceramic photo provided via data/photos
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="container py-12 md:py-16">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Dodatki i stan</div>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">Pakiet Dodatków ASO & Stan</h3>
            <ul className="mt-5 space-y-3">
              {carData.addons.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span
                    className={
                      'mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full ' +
                      (a.toLowerCase().includes('bagażnik') ? 'bg-[--color-tokyo-red]' : 'bg-neutral-400')
                    }
                  />
                  <span className={a.toLowerCase().includes('bagażnik') ? 'font-extrabold text-[--color-tokyo-red]' : ''}>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Wizualnie</div>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <PhotoOrPlaceholder alt={ceramicCoatingPhoto.alt} src={ceramicCoatingPhoto.url} external={ceramicCoatingPhoto.external} />
              <ImagePlaceholder label="Czujniki parkowania — integracja z kamerą" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


