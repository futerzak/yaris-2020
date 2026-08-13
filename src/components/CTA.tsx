import { carData } from '../data/carData'
import { ContactButtons } from './ContactButtons'

export function CTA() {
  return (
    <footer id="kontakt" className="bg-[--color-night-sky] text-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
            Kraków · sprzedaż prywatna
          </p>
          <h2 className="font-display mt-3 text-4xl md:text-5xl">Oględziny</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            Dokumentacja, jazda próbna, wspólna wizyta w ASO — po umówieniu. Weryfikacja historii z
            mechanikiem jest na stole.
          </p>
          <p className="mt-3 text-sm text-white/55">
            {carData.location} · możliwość sprawdzenia w ASO · pełna dokumentacja
          </p>
          <div className="mt-8">
            <ContactButtons size="lg" layout="row" variant="on-dark" />
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/35">
            Toyota Yaris Hybrid 1.5 Premiere Edition · {carData.price}
          </div>
        </div>
      </div>
    </footer>
  )
}
