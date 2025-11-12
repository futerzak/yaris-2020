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
          <div className="mx-auto mt-6 max-w-3xl space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <p className="text-lg leading-relaxed text-neutral-700">
                <strong>Samochody bez rysek są podejrzane.</strong> Ten egzemplarz ma drobne rysy eksploatacyjne{' '}
                <strong>wyłącznie na plastikowych elementach</strong> (zderzaki, listwy). Lakier nadwozia chroniony
                powłoką ceramiczną jest w doskonałym stanie.
              </p>
              <p className="mt-4 text-neutral-600">
                Poniżej zdjęcia pokazują rzeczywisty stan — żadnych niespodzianek przy oględzinach.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                  ℹ️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Historia Naprawy (2021)</h3>
                  <p className="mt-3 text-blue-800">
                    <strong>4 grudnia 2021:</strong> Incydent parkingowy — wgniecenie i obtarcie lewych tylnych drzwi.
                  </p>
                  <p className="mt-2 text-blue-800">
                    <strong>Naprawa w ASO Toyota:</strong> Wymiana drzwi na nowe oryginalne + profesjonalne nałożenie
                    powłoki ceramicznej na nowy element (zgodnie z resztą nadwozia).
                  </p>
                  <p className="mt-3 text-sm text-blue-700">
                    ✓ Pełna dokumentacja naprawy dostępna do wglądu
                    <br />
                    ✓ Części oryginalne Toyota
                    <br />
                    ✓ Ceramika aplikowana przez tego samego specjalistę
                  </p>
                </div>
              </div>
            </div>
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

