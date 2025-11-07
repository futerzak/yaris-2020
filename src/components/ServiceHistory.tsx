import { carData } from '../data/carData'
import { serviceSidePhoto } from '../data/photos'
import { PhotoOrPlaceholder } from './ImagePlaceholder'

export function ServiceHistory() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-12 md:py-16">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">🛠️ Karta Serwisowa ASO: Pełna Transparentność i Dodatki</h2>
            <p className="mt-3 text-neutral-600 md:max-w-prose">
              Serwis wyłącznie w ASO, regularne testy baterii hybrydowej. Pozycja dotycząca bagażnika dachowego została
              wyróżniona poniżej.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-[--color-tokyo-red]/30">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">Data</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">Przebieg</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">Zdarzenie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {carData.serviceHistory.map((e, idx) => (
                    <tr key={idx} className={e.highlight ? 'bg-[--color-tokyo-red]/5 font-semibold' : ''}>
                      <td className="px-4 py-2 text-sm text-neutral-800">{new Date(e.date).toLocaleDateString('pl-PL')}</td>
                      <td className="px-4 py-2 text-sm text-neutral-800">{e.odometerKm ? `${e.odometerKm.toLocaleString('pl-PL')} km` : '—'}</td>
                      <td className="px-4 py-2 text-sm text-neutral-800">
                        {e.title}
                        {e.note ? (
                          <>
                            {': '}
                            <span className={e.highlight ? 'font-extrabold text-[--color-tokyo-red]' : 'font-medium'}>{e.note}</span>
                          </>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Lista Unikalnych Dodatków</div>
              <ul className="mt-3 grid list-disc gap-2 pl-5 text-neutral-800">
                {carData.addons.map((a) => (
                  <li key={a} className={a.toLowerCase().includes('bagażnik') ? 'font-extrabold text-[--color-tokyo-red]' : ''}>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <PhotoOrPlaceholder src={serviceSidePhoto.url} alt={serviceSidePhoto.alt} external={serviceSidePhoto.external} />
          </div>
        </div>
      </div>
    </section>
  )
}


