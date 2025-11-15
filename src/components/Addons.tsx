import { carData } from '../data/carData'
import { ceramicCoatingPhoto, parkingSensorsPhoto } from '../data/photos'

export function Addons() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
              Dodatki i Stan
            </div>
            <h3 className="text-3xl font-black tracking-tight md:text-4xl">Pakiet Dodatków ASO & Stan</h3>
            <ul className="mt-8 space-y-4">
              {carData.addons.map((a) => (
                <li key={a} className="flex items-start gap-4 rounded-xl bg-neutral-50 p-4 transition hover:bg-neutral-100">
                  <span
                    className={
                      'mt-1 inline-flex h-3 w-3 flex-none rounded-full ' +
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
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-600">Wizualnie</div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src={ceramicCoatingPhoto.url} alt={ceramicCoatingPhoto.alt} className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src={parkingSensorsPhoto.url} alt={parkingSensorsPhoto.alt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
