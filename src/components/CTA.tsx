import { carData } from '../data/carData'

export function CTA() {
  const phonePretty = carData.phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
  return (
    <footer className="bg-[--color-night-sky] text-white">
      <div className="container py-12 md:py-16">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Jazda Próbna Zmienia Zdanie. Zadzwoń.</h2>
        <p className="mt-3 max-w-prose text-neutral-300">
          Sprzedaż prywatna. Możliwość weryfikacji stanu i historii. Lokalizacja oględzin: {carData.location}.
        </p>
        <div className="mt-6">
          <a href={`tel:${carData.phone}`} className="btn-primary">
            SKONTAKTUJ SIĘ: {phonePretty}
          </a>
        </div>
      </div>
    </footer>
  )
}


