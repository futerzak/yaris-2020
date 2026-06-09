import { valueAddedItems } from '../data/carData'

export function ValueBreakdown() {
  const totalValue = valueAddedItems
    .filter((item) => typeof item.value === 'number')
    .reduce((sum, item) => sum + (item.value as number), 0)

  return (
    <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
            Wartość Dodana
          </div>
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
            Co Tracisz, Nie Kupując Tego Auta
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-700">
            To nie tylko samochód — to kompletny pakiet, który oszczędza Ci tysiące złotych.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {valueAddedItems.map((item) => (
              <div
                key={item.item}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"
              >
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[--color-tokyo-red]/10 text-2xl"
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-neutral-900">{item.item}</div>
                  <div className="mt-2 text-2xl font-black text-[--color-tokyo-red]">
                    {typeof item.value === 'number' ? `${item.value.toLocaleString('pl-PL')} PLN` : item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[--color-tokyo-red] to-red-600 p-8 text-white shadow-2xl md:p-12">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide opacity-90">Łączna Wartość Dodatków</div>
                <div className="mt-2 text-4xl font-black md:text-5xl">~{totalValue.toLocaleString('pl-PL')} PLN</div>
                <div className="mt-2 text-sm opacity-90">+ Pełna historia ASO (bezcenna)</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-sm font-semibold uppercase tracking-wide opacity-90">Oszczędzasz</div>
                <div className="mt-1 text-3xl font-black">Tysiące Złotych</div>
                <div className="mt-2 text-sm opacity-90">Wszystko w cenie auta</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-green-100 text-2xl">
                ✓
              </div>
              <div>
                <div className="font-bold text-neutral-900">Kompletny Pakiet — Bez Ukrytych Kosztów</div>
                <p className="mt-2 text-neutral-700">
                  Kupujesz auto gotowe do użytkowania przez cały rok. Nie musisz dokupować kół zimowych, bagażnika ani
                  ceramiki. Wszystko jest już zrobione i opłacone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

