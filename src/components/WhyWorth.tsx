export function WhyWorth() {
  const reasons = [
    {
      icon: '🔧',
      title: 'Serwisowany Jak Zegarek',
      description: 'Każdy przegląd, każda wymiana oleju, każdy test baterii — wyłącznie w autoryzowanym serwisie Toyota.',
      color: 'from-blue-500/10 to-blue-600/10',
    },
    {
      icon: '💎',
      title: 'Dbany Jak Klejnot',
      description: 'Powłoka ceramiczna, dwa komplety kół na alufelgach, bagażnik dachowy — każdy detal dopięty na ostatni guzik.',
      color: 'from-purple-500/10 to-purple-600/10',
    },
    {
      icon: '📋',
      title: 'Transparentny Jak Kryształ',
      description: 'Pokazujemy wszystko: pełną historię ASO, drobne rysy na plastikach, każdą fakturę. Bez niespodzianek.',
      color: 'from-green-500/10 to-green-600/10',
    },
    {
      icon: '❤️',
      title: 'Kochany Jak Członek Rodziny',
      description: 'Miał zostać z nami do końca. Sprzedajemy tylko dlatego, że 5-osobowa rodzina wymaga większego auta.',
      color: 'from-red-500/10 to-red-600/10',
    },
  ]

  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
            Dlaczego Ten Yaris
          </div>
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
            Cztery Powody, Dla Których Warto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-700">
            To nie jest zwykłe ogłoszenie. To oferta od rodziny, która traktowała to auto jak członka rodziny.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${reason.color} p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="relative z-10">
                  <div className="text-5xl">{reason.icon}</div>
                  <h3 className="mt-4 text-2xl font-black text-neutral-900">{reason.title}</h3>
                  <p className="mt-3 leading-relaxed text-neutral-700">{reason.description}</p>
                </div>
                <div className="absolute -bottom-4 -right-4 text-8xl opacity-5 transition-transform duration-300 group-hover:scale-110">
                  {reason.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-[--color-tokyo-red]/5 via-neutral-50 to-[--color-tokyo-red]/5 p-8">
            <div className="text-center">
              <div className="text-4xl">🏆</div>
              <h3 className="mt-4 text-2xl font-black text-neutral-900">
                Nie Kupujesz Auta — Przejmujesz Odpowiedzialność
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
                Ten Yaris zasługuje na kolejnego fana motoryzacji, kogoś, kto doceni każdy detal i będzie kontynuował
                historię dbałości. Jeśli to Ty — zadzwoń.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

