import { useState } from 'react'
import { designPhotos } from '../data/photos'
import { PhotoOrPlaceholder } from './ImagePlaceholder'
import { Lightbox } from './Lightbox'

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const active = openIdx !== null ? designPhotos[openIdx!] : undefined
  return (
    <section className="border-b border-neutral-200 bg-section-tint">
      <div className="container py-12 md:py-16">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">⭐ Detale, Które Robią Różnicę: Stylistyka Tokyo Fusion</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {designPhotos.map((p, idx) => (
            <button key={idx} onClick={() => setOpenIdx(idx)} className="text-left">
              <PhotoOrPlaceholder src={p.url} alt={p.alt} external={p.external} />
            </button>
          ))}
        </div>
        <p className="mt-6 text-neutral-700 md:text-lg">17" Alufelgi, Pełny LED, Kontrastowy Czarny Dach.</p>
      </div>
      <Lightbox open={openIdx !== null} onClose={() => setOpenIdx(null)} src={active?.url} alt={active?.alt ?? ''} external={active?.external} />
    </section>
  )
}


