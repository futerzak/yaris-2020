import { carData } from '../data/carData'
import { serviceSidePhoto } from '../data/photos'

export function ServiceHistory() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="container py-16 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
              Historia Serwisowa
            </div>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              🛠️ Karta Serwisowa ASO: Pełna Transparentność
            </h2>
            <p className="mt-4 text-lg text-neutral-700">
              Serwis <strong>wyłącznie w ASO</strong>, regularne testy baterii hybrydowej. Pozycja dotycząca bagażnika
              dachowego została wyróżniona poniżej.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[--color-tokyo-red]/30 shadow-lg">
              <table className="min-w-full divide-y divide-neutral-200 bg-white">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-neutral-700">
                      Data
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-neutral-700">
                      Przebieg
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-neutral-700">
                      Zdarzenie
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {carData.serviceHistory.map((e, idx) => (
                    <tr key={idx} className={e.highlight ? 'bg-[--color-tokyo-red]/5 font-semibold' : ''}>
                      <td className="px-4 py-3 text-sm text-neutral-800">
                        {new Date(e.date).toLocaleDateString('pl-PL')}
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-800">
                        {e.odometerKm ? `${e.odometerKm.toLocaleString('pl-PL')} km` : '—'}
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-800">
                        {e.title}
                        {e.note ? (
                          <>
                            {': '}
                            <span className={e.highlight ? 'font-extrabold text-[--color-tokyo-red]' : 'font-medium'}>
                              {e.note}
                            </span>
                          </>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1 w-12 bg-[--color-tokyo-red]" />
                <div className="text-sm font-bold uppercase tracking-wide text-neutral-600">
                  Lista Unikalnych Dodatków
                </div>
              </div>
              <ul className="grid gap-3">
                {carData.addons.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span
                      className={
                        'mt-1.5 inline-block h-2 w-2 flex-none rounded-full ' +
                        (a.toLowerCase().includes('bagażnik') ? 'bg-[--color-tokyo-red]' : 'bg-neutral-400')
                      }
                    />
                    <span className={a.toLowerCase().includes('bagażnik') ? 'font-bold text-[--color-tokyo-red]' : ''}>
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sticky top-8">
            <img
              src={serviceSidePhoto.url}
              alt={serviceSidePhoto.alt}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
