import { carData } from '../data/carData'
import { serviceSidePhoto } from '../data/photos'
import { OptimizedImage } from './OptimizedImage'
import { SectionHeader } from './SectionHeader'

const formatDate = (iso: string) => iso.split('-').reverse().join('.')

export function ServiceHistory() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="container py-16 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" kicker="Serwis" title="Karta ASO" />
            <p className="mt-4 text-neutral-700">
              Wyłącznie ASO, regularne testy baterii. Wyróżnione: bagażnik i naprawa drzwi.
            </p>
            <div className="mt-8 overflow-x-auto border border-neutral-200 bg-white">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-600">
                      Data
                    </th>
                    <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-600">
                      Przebieg
                    </th>
                    <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-600">
                      Zdarzenie
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {carData.serviceHistory.map((e, idx) => (
                    <tr key={idx} className={e.highlight ? 'bg-[--color-tokyo-red]/5' : ''}>
                      <td className="px-4 py-3 text-sm tabular-nums text-neutral-800">
                        {formatDate(e.date)}
                      </td>
                      <td className="px-4 py-3 text-sm tabular-nums text-neutral-800">
                        {e.odometerKm ? `${e.odometerKm.toLocaleString('pl-PL')} km` : '—'}
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-800">
                        {e.title}
                        {e.note ? (
                          <>
                            {': '}
                            <span className={e.highlight ? 'font-semibold text-[--color-tokyo-red]' : ''}>
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
          </div>
          <div className="lg:sticky lg:top-8">
            <OptimizedImage
              src={serviceSidePhoto.url}
              alt={serviceSidePhoto.alt}
              className="aspect-[4/3] w-full rounded-md object-cover"
              sizes="(max-width: 1024px) calc(100vw - 2rem), 580px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
