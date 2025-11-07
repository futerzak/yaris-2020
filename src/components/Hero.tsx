import { carData } from '../data/carData'
import { heroPhoto } from '../data/photos'
import { KeyFacts } from './KeyFacts'

export function Hero() {
  const phonePretty = carData.phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
  return (
    <header className="relative min-h-[85vh] overflow-hidden bg-brand-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroPhoto.url}
          alt={heroPhoto.alt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[85vh] flex-col justify-center py-16 text-white">
        <div className="max-w-3xl">
          <span className="badge animate-fade-in">Raport Sprzedażowy</span>
          <h1 className="mt-6 animate-slide-up text-4xl font-black tracking-tight drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            TOYOTA YARIS
            <br />
            <span className="bg-gradient-to-r from-[--color-tokyo-red] to-red-400 bg-clip-text text-transparent drop-shadow-lg">
              HYBRID 1.5
            </span>
          </h1>
          <p className="mt-4 animate-slide-up text-lg font-semibold text-white drop-shadow-lg md:text-xl" style={{ animationDelay: '0.1s' }}>
            PREMIERE EDITION 2020 | KOMPLETNY PAKIET PREMIUM | NISKI PRZEBIEG ASO
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href={`tel:${carData.phone}`} className="btn-primary text-lg">
              SKONTAKTUJ SIĘ: {phonePretty}
            </a>
            <div className="rounded-lg border-2 border-white/50 bg-white/20 px-6 py-3 font-bold text-white shadow-2xl backdrop-blur-md">
              Cena: {carData.price} {carData.negotiable ? '(do negocjacji)' : ''}
            </div>
          </div>
        </div>

        {/* Key Facts at Bottom */}
        <div className="mt-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <KeyFacts />
        </div>
      </div>
    </header>
  )
}
