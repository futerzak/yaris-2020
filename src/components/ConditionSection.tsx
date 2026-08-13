import { conditionPhotos } from '../data/photos'
import { OptimizedImage } from './OptimizedImage'
import { SectionHeader } from './SectionHeader'

export function ConditionSection() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            kicker="Stan"
            title="Bez niedomówień"
            subtitle="Samochody bez rysek są podejrzane. Tu widać to, co widać przy oględzinach."
          />

          <div className="mt-8 border border-neutral-200 bg-white p-6 md:p-8">
            <p className="text-neutral-700 leading-relaxed">
              Powierzchowne rysy i odpryski na lakierze zderzaków — poniżej. Główne panele chronione
              ceramiką są w bardzo dobrym stanie.
            </p>
            <div className="mt-6 border-t border-neutral-200 pt-6">
              <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-[--color-tokyo-red]">
                Naprawa ASO · 2021–2022
              </div>
              <p className="mt-2 text-neutral-700 leading-relaxed">
                4 grudnia 2021: incydent parkingowy — lewe tylne drzwi. Styczeń/luty 2022: wymiana
                drzwi na nowe oryginalne w ASO Toyota i ceramika na nowy element. Dokumentacja do
                wglądu.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {conditionPhotos.map((p) => (
              <figure key={p.url} className="overflow-hidden rounded-md border border-neutral-200 bg-white">
                <OptimizedImage
                  src={p.url}
                  alt={p.alt}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 640px) calc(100vw - 2rem), 280px"
                />
                <figcaption className="px-3 py-2.5 text-xs text-neutral-600">{p.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
