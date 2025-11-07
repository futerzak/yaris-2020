import { carData } from '../data/carData'
import { heroPhoto } from '../data/photos'
import { PhotoOrPlaceholder } from './ImagePlaceholder'
import { KeyFacts } from './KeyFacts'

export function Hero() {
  const phonePretty = carData.phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
  return (
    <header className="relative border-b border-neutral-200 bg-brand-hero">
      <div className="container py-10 sm:py-14 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="badge">Raport Sprzedażowy</span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              TOYOTA YARIS HYBRID 1.5 — RAPORT SPECJALNY
            </h1>
            <p className="mt-3 text-neutral-600 md:text-lg">
              PREMIERE EDITION 2020 | KOMPLETNY PAKIET PREMIUM | NISKI PRZEBIEG ASO
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={`tel:${carData.phone}`} className="btn-primary">
                SKONTAKTUJ SIĘ: {phonePretty}
              </a>
              <div className="btn-outline">
                Cena: {carData.price} {carData.negotiable ? '(do negocjacji)' : ''}
              </div>
            </div>
            <div className="mt-8">
              <KeyFacts />
            </div>
          </div>
          <div>
            <PhotoOrPlaceholder src={heroPhoto.url} alt={heroPhoto.alt} external={heroPhoto.external} />
          </div>
        </div>
      </div>
    </header>
  )
}


