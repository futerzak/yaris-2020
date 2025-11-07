import { carData } from '../data/carData'
import { expertSidePhoto } from '../data/photos'
import { PhotoOrPlaceholder } from './ImagePlaceholder'

export function ExpertSection() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-12 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">⚡ Samochód Roku w Trybie Ultra-Premium</h2>
            <p className="mt-4 text-neutral-600 md:max-w-prose">
              Hybrydowy napęd 116 KM (e-CVT) łączy dynamikę z oszczędnością. Program gwarancyjny Toyoty na akumulator
              hybrydowy to nawet do 10 lat ochrony przy regularnych przeglądach, potwierdzonych testami baterii.
            </p>
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Pakiet bezpieczeństwa Toyota Safety Sense</div>
              <ul className="mt-3 grid list-disc gap-1 pl-5 text-neutral-800">
                {carData.tssSystems.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <PhotoOrPlaceholder src={expertSidePhoto.url} alt={expertSidePhoto.alt} external={expertSidePhoto.external} />
          </div>
        </div>
      </div>
    </section>
  )
}


