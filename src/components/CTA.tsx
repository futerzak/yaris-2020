import { carData } from '../data/carData'
import { ContactButtons } from './ContactButtons'

export function CTA() {
  return (
    <footer id="kontakt" className="relative overflow-hidden bg-footer-gradient text-white">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[--color-tokyo-red]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative z-10 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-5xl">🏠</div>
          <h2 className="mt-6 text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">Daj Temu Yaris Nowy Dom</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
            Ten samochód zasługuje na kolejnego fana motoryzacji. Przekażemy Ci całą dokumentację, porady i historię.
            To nie tylko samochód — to kawałek naszej rodzinnej historii.
          </p>
          <div className="mx-auto mt-8 max-w-xl rounded-xl bg-white/10 p-6 backdrop-blur-md">
            <div className="text-sm font-semibold uppercase tracking-wide text-white/80">Sprzedaż Prywatna</div>
            <div className="mt-2 text-white">
              Możliwość weryfikacji w ASO • Pełna dokumentacja • Lokalizacja:{' '}
              <strong>{carData.location}</strong>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <ContactButtons size="lg" layout="row" variant="on-dark" />
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            Zadzwoń, napisz na WhatsApp — odpowiemy na wszystkie pytania i umówimy oględziny.
          </p>
          <div className="mt-12 border-t border-white/10 pt-8 text-sm text-neutral-400">
            © 2026 Toyota Yaris Hybrid 1.5 — Od Rodziny Fana Motoryzacji
          </div>
        </div>
      </div>
    </footer>
  )
}
