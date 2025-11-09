export function TrustBadges() {
  const badges = [
    {
      icon: '🇵🇱',
      title: 'Polska Salon',
      description: 'Zakup w ASO Toyota Polska, grudzień 2020',
    },
    {
      icon: '✓',
      title: 'Serwis ASO',
      description: '100% przeglądów w autoryzowanym serwisie',
    },
    {
      icon: '📋',
      title: 'Pełna Dokumentacja',
      description: 'Każdy wpis, każda faktura, każdy test baterii',
    },
    {
      icon: '🔢',
      title: '34 036 km',
      description: 'Przebieg potwierdzony dokumentacją ASO',
    },
    {
      icon: '🚫',
      title: 'Bez Wypadków',
      description: 'Nigdy nie uczestniczył w kolizji',
    },
    {
      icon: '💰',
      title: 'Wolne od Obciążeń',
      description: 'W pełni opłacone, gotowe do przerejestrowania',
    },
  ]

  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-neutral-600">Gwarancja Zaufania</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-green-100 text-2xl">
                  {badge.icon}
                </div>
                <div>
                  <div className="font-bold text-neutral-900">{badge.title}</div>
                  <div className="mt-1 text-sm text-neutral-600">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

