import { wheelsPhotos } from '../data/photos'

export function WheelsSection() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
            Kompletne Wyposażenie
          </div>
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
            Dwa Komplety Kół — Gotowy na Każdy Sezon
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-700">
            Oba zestawy na alufelgach 17" — oszczędność czasu i pieniędzy przy zmianie opon.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Summer wheels */}
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-50 to-white shadow-xl">
              <div className="aspect-square overflow-hidden">
                <img
                  src={wheelsPhotos[0].url}
                  alt={wheelsPhotos[0].alt}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[--color-tokyo-red]" />
                  <div className="text-xs font-bold uppercase tracking-wide text-neutral-600">Letnie</div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">17" Premiere Edition</h3>
                <p className="mt-2 text-neutral-600">
                  Dwukolorowe alufelgi z oryginalnego wyposażenia Premiere Edition — sportowy design z diamentowym
                  wykończeniem.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    Oryginalne
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    17"
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    Dwukolorowe
                  </span>
                </div>
              </div>
            </div>

            {/* Winter wheels */}
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-50 to-white shadow-xl">
              <div className="aspect-square overflow-hidden">
                <img
                  src={wheelsPhotos[1].url}
                  alt={wheelsPhotos[1].alt}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <div className="text-xs font-bold uppercase tracking-wide text-neutral-600">Zimowe</div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">17" Alufelgi</h3>
                <p className="mt-2 text-neutral-600">
                  Kompletny zestaw zimowy na aluminiowych felgach 17" — gotowy do montażu, bez konieczności kupowania
                  dodatkowych kół.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    Kompletny zestaw
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    17"
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    Alufelgi
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-[--color-tokyo-red]/5 to-blue-50 p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[--color-tokyo-red] text-xl text-white">
                ✓
              </div>
              <div>
                <div className="text-lg font-bold text-neutral-900">Oszczędność i Wygoda</div>
                <p className="mt-2 text-neutral-700">
                  Nie musisz inwestować w drugi komplet felg — oba zestawy są gotowe do użycia. Wymiana sezonowa zajmuje
                  kilka minut, a aluminiowe felgi zimowe zapewniają lepszą estetykę niż stalowe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

