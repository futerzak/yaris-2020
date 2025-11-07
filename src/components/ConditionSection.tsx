import { conditionPhotos } from '../data/photos'

export function ConditionSection() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
            Transparentność
          </div>
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
            Stan Techniczny: Pełna Uczciwość
          </h2>
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-neutral-700">
              <strong>Samochody bez rysek są podejrzane.</strong> Ten egzemplarz ma drobne rysy eksploatacyjne{' '}
              <strong>wyłącznie na plastikowych elementach</strong> (zderzaki, listwy). Lakier nadwozia chroniony
              powłoką ceramiczną jest w doskonałym stanie.
            </p>
            <p className="mt-4 text-neutral-600">
              Poniżej zdjęcia pokazują rzeczywisty stan — żadnych niespodzianek przy oględzinach.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {conditionPhotos.map((p, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
                <img src={p.url} alt={p.alt} className="h-full w-full object-cover" />
                <div className="bg-white p-4 text-sm text-neutral-600">{p.alt}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-gradient-to-r from-[--color-tokyo-red]/5 to-neutral-100 p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[--color-tokyo-red] text-white">
                ✓
              </div>
              <div>
                <div className="font-bold text-neutral-900">Dlaczego pokazujemy defekty?</div>
                <p className="mt-2 text-neutral-700">
                  Uczciwość buduje zaufanie. Każdy używany samochód ma ślady eksploatacji. Ważne, że te rysy są
                  powierzchowne, na plastikach, i nie wpływają na funkcjonalność ani wartość auta. Lakier chroniony
                  ceramiką jest bez uszkodzeń.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

