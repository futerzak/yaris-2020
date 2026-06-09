import { wheelSets } from '../data/carData'
import { tiresInTrunkPhoto, wheelsPhotos } from '../data/photos'
import { OptimizedImage } from './OptimizedImage'

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
            Oba zestawy na alufelgach 17" z oryginalnymi oponami z salonu Toyota — oszczędność czasu i pieniędzy przy
            zmianie sezonowej.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {wheelSets.map((set, index) => (
              <div
                key={set.season}
                className="overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-50 to-white shadow-xl"
              >
                <div className="aspect-square overflow-hidden">
                  <OptimizedImage
                    src={wheelsPhotos[index].url}
                    alt={wheelsPhotos[index].alt}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${set.seasonColor}`} />
                    <div className="text-xs font-bold uppercase tracking-wide text-neutral-600">{set.season}</div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">{set.title}</h3>
                  <p className="mt-2 text-neutral-600">{set.rims}</p>
                  <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4">
                    <div className="text-xs font-bold uppercase tracking-wide text-neutral-500">Opony</div>
                    <p className="mt-1 text-sm font-medium text-neutral-800">{set.tires}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {set.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <figure className="mt-10 overflow-hidden rounded-2xl shadow-lg">
            <OptimizedImage
              src={tiresInTrunkPhoto.url}
              alt={tiresInTrunkPhoto.alt}
              className="aspect-[21/9] w-full object-cover"
            />
            <figcaption className="bg-neutral-50 px-4 py-3 text-sm text-neutral-600">{tiresInTrunkPhoto.alt}</figcaption>
          </figure>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-[--color-tokyo-red]/5 to-blue-50 p-6">
            <div className="flex items-start gap-4">
              <div
                className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[--color-tokyo-red] text-xl text-white"
                aria-hidden="true"
              >
                ✓
              </div>
              <div>
                <div className="text-lg font-bold text-neutral-900">Oszczędność i Wygoda</div>
                <p className="mt-2 text-neutral-700">
                  Nie musisz inwestować w drugi komplet felg ani dokupywać opon — oba zestawy są gotowe do użycia.
                  Wymiana sezonowa zajmuje kilka minut, a aluminiowe felgi zimowe zapewniają lepszą estetykę niż
                  stalowe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
