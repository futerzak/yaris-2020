import { designPhotos } from '../data/photos'
import { PhotoOrPlaceholder } from './ImagePlaceholder'

export function Gallery() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="container py-12 md:py-16">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">⭐ Detale, Które Robią Różnicę: Stylistyka Tokyo Fusion</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {designPhotos.map((p, idx) => (
            <PhotoOrPlaceholder key={idx} src={p.url} alt={p.alt} external={p.external} />
          ))}
        </div>
        <p className="mt-6 text-neutral-700 md:text-lg">17" Alufelgi, Pełny LED, Kontrastowy Czarny Dach.</p>
      </div>
    </section>
  )
}


