import { carData, formatKm, formatPlnNumber } from '../data/carData'
import { heroPhoto } from '../data/photos'
import { ContactButtons } from './ContactButtons'
import { KeyFacts } from './KeyFacts'
import { OptimizedImage } from './OptimizedImage'

export function Hero() {
  return (
    <header id="hero" className="relative min-h-[100svh] overflow-hidden bg-brand-hero">
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroPhoto.url}
          alt={heroPhoto.alt}
          className="h-full w-full object-cover object-[center_55%]"
          priority
          sizes="100vw"
          srcWidth={1400}
        />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-20 text-white sm:justify-center sm:pb-16">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
            Premiere Edition · Polski salon 2020
          </p>
          <h1 className="font-display mt-3 text-5xl leading-none sm:text-6xl md:text-7xl">
            Yaris Hybrid
          </h1>
          <p className="font-display mt-6 text-6xl leading-none tabular-nums text-tokyo-red sm:text-7xl md:text-8xl">
            {formatPlnNumber(carData.pricePln)}
          </p>
          <p className="mt-2 text-sm font-medium tracking-wide text-white/80">
            PLN · {formatKm(carData.mileageKm)} · {carData.location}
            {carData.negotiable ? ' · do rozmowy' : ''}
          </p>
          <div className="mt-8">
            <ContactButtons size="lg" variant="on-dark" />
          </div>
        </div>

        <div className="mt-10 sm:mt-14">
          <KeyFacts />
        </div>
      </div>
    </header>
  )
}
