import { carData } from '../data/carData'
import { expertSidePhoto } from '../data/photos'

export function ExpertSection() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
              Technologia Hybrid
            </div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              ⚡ Samochód Roku w Trybie Ultra-Premium
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Hybrydowy napęd <strong>116 KM (e-CVT)</strong> łączy dynamikę z oszczędnością. Program gwarancyjny
              Toyoty na akumulator hybrydowy to nawet <strong>do 10 lat ochrony</strong> przy regularnych przeglądach,
              potwierdzonych testami baterii.
            </p>
            <div className="mt-8 rounded-2xl bg-neutral-50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1 w-12 bg-[--color-tokyo-red]" />
                <div className="text-sm font-bold uppercase tracking-wide text-neutral-600">
                  Toyota Safety Sense
                </div>
              </div>
              <ul className="grid gap-3 text-neutral-800">
                {carData.tssSystems.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[--color-tokyo-red]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src={expertSidePhoto.url}
              alt={expertSidePhoto.alt}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
