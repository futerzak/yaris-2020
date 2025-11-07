import { carData } from '../data/carData'

export function CTA() {
  const phonePretty = carData.phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
  return (
    <footer className="relative overflow-hidden bg-footer-gradient text-white">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[--color-tokyo-red]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative z-10 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
            Jazda Próbna Zmienia Zdanie. Zadzwoń.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
            Sprzedaż prywatna. Możliwość weryfikacji stanu i historii. Lokalizacja oględzin: <strong>{carData.location}</strong>.
          </p>
          <div className="mt-10">
            <a href={`tel:${carData.phone}`} className="btn-primary text-xl">
              SKONTAKTUJ SIĘ: {phonePretty}
            </a>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-sm text-neutral-400">
            © 2025 Toyota Yaris Hybrid 1.5 — Raport Sprzedażowy
          </div>
        </div>
      </div>
    </footer>
  )
}
