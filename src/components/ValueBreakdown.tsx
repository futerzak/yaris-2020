import { carData, formatKm, formatPln, formatPlnNumber, marketComparables, valueAddedItems } from '../data/carData'
import { SectionHeader } from './SectionHeader'

export function ValueBreakdown() {
  const totalValue = valueAddedItems
    .filter((item) => typeof item.value === 'number')
    .reduce((sum, item) => sum + (item.value as number), 0)

  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            kicker="Cena"
            title={`Skąd ${formatPlnNumber(carData.pricePln)}`}
            subtitle="Cena z sierpnia 2025 (82 000 PLN) jest nieaktualna. Poniżej rynek z sierpnia 2026 i to, co jest w komplecie."
          />

          <div className="mt-10 border border-neutral-200 bg-white">
            {valueAddedItems.map((item) => (
              <div
                key={item.item}
                className="flex items-baseline justify-between gap-4 border-b border-neutral-100 px-5 py-4 last:border-0"
              >
                <div className="text-neutral-800">{item.item}</div>
                <div className="shrink-0 font-display text-lg tabular-nums text-neutral-900">
                  {typeof item.value === 'number' ? formatPln(item.value) : item.value}
                </div>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 bg-[--color-night-sky] px-5 py-5 text-white">
              <div className="text-sm uppercase tracking-[0.12em] text-white/60">Dodatki policzalne</div>
              <div className="font-display text-3xl tabular-nums">~{formatPln(totalValue)}</div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Porównania Otomoto · 2026
            </h3>
            <div className="mt-3 border border-neutral-200 bg-white">
              <div className="flex items-baseline justify-between gap-4 border-b border-[--color-tokyo-red]/30 bg-[--color-tokyo-red]/5 px-5 py-4">
                <div>
                  <div className="font-medium text-neutral-900">Ten egzemplarz</div>
                  <div className="mt-0.5 text-sm text-neutral-600">
                    Premiere Edition, 1. właściciel, {formatKm(carData.mileageKm)}, ASO, dodatki
                  </div>
                </div>
                <div className="shrink-0 font-display text-2xl tabular-nums text-[--color-tokyo-red]">
                  {formatPln(carData.pricePln)}
                </div>
              </div>
              {marketComparables.map((comp) => (
                <div
                  key={comp.note}
                  className="flex items-baseline justify-between gap-4 border-b border-neutral-100 px-5 py-4 last:border-0"
                >
                  <div className="text-sm text-neutral-600">{comp.note}</div>
                  <div className="shrink-0 text-right">
                    <div className="font-display text-lg tabular-nums">{formatPln(comp.price)}</div>
                    <div className="text-xs text-neutral-500">{formatKm(comp.km)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
