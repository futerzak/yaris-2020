import { useCallback, useState } from 'react'
import { designPhotos } from '../data/photos'
import { Lightbox } from './Lightbox'
import { OptimizedImage } from './OptimizedImage'
import { SectionHeader } from './SectionHeader'

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const active = openIdx !== null ? designPhotos[openIdx] : undefined

  const handleClose = useCallback(() => setOpenIdx(null), [])
  const handlePrev = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i - 1 + designPhotos.length) % designPhotos.length)),
    [],
  )
  const handleNext = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i + 1) % designPhotos.length)),
    [],
  )

  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="container py-16 md:py-20">
        <SectionHeader
          kicker="Galeria"
          title="Zdjęcia"
          subtitle={`${designPhotos.length} ujęć tego egzemplarza — bez stocku.`}
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {designPhotos.map((p, idx) => (
            <button
              key={p.url}
              onClick={() => setOpenIdx(idx)}
              className={`group relative block w-full overflow-hidden rounded-md ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <OptimizedImage
                src={p.url}
                alt={p.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                  idx === 0 ? 'aspect-[16/9] lg:aspect-[16/8]' : 'aspect-[4/3]'
                }`}
                sizes={
                  idx === 0
                    ? '(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 2rem), 780px'
                    : '(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(50vw - 2rem), 380px'
                }
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-left text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {p.alt}
              </div>
            </button>
          ))}
        </div>
      </div>
      <Lightbox
        open={openIdx !== null}
        onClose={handleClose}
        src={active?.url}
        alt={active?.alt ?? ''}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={openIdx ?? undefined}
        totalCount={designPhotos.length}
      />
    </section>
  )
}
