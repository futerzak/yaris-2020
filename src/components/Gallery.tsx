import { useState } from 'react'
import { designPhotos } from '../data/photos'
import { Lightbox } from './Lightbox'

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const active = openIdx !== null ? designPhotos[openIdx!] : undefined
  return (
    <section className="border-b border-neutral-200 bg-section-tint">
      <div className="container py-16 md:py-20">
        <div className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-[--color-tokyo-red]">
          Galeria
        </div>
        <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">
          ⭐ Detale, Które Robią Różnicę
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-700">
          Stylistyka Tokyo Fusion: 17" Alufelgi, Pełny LED, Kontrastowy Czarny Dach.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {designPhotos.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setOpenIdx(idx)}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <img src={p.url} alt={p.alt} className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-left text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                {p.alt}
              </div>
            </button>
          ))}
        </div>
      </div>
      <Lightbox
        open={openIdx !== null}
        onClose={() => setOpenIdx(null)}
        src={active?.url}
        alt={active?.alt ?? ''}
        external={active?.external}
      />
    </section>
  )
}
