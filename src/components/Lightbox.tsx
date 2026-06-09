import { useEffect, useRef } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  src?: string
  alt: string
  onPrev?: () => void
  onNext?: () => void
}

export function Lightbox({ open, onClose, src, alt, onPrev, onNext }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev?.()
      else if (e.key === 'ArrowRight') onNext?.()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      lastFocused.current?.focus()
    }
  }, [open, onClose, onPrev, onNext])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Podgląd zdjęcia'}
    >
      <div className="container flex h-full items-center justify-center">
        <div className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
          {src ? (
            <img src={src} alt={alt} className="max-h-[85vh] w-full rounded-xl object-contain" />
          ) : (
            <div className="rounded-xl bg-white p-6 text-center">
              <div className="text-sm text-neutral-700">{alt}</div>
            </div>
          )}

          {onPrev && (
            <button
              onClick={onPrev}
              aria-label="Poprzednie zdjęcie"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-xl text-white transition hover:bg-black/90"
            >
              <span aria-hidden="true">‹</span>
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              aria-label="Następne zdjęcie"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-xl text-white transition hover:bg-black/90"
            >
              <span aria-hidden="true">›</span>
            </button>
          )}

          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Zamknij podgląd"
            className="absolute right-2 top-2 rounded-full bg-black/70 px-3 py-1 text-white transition hover:bg-black/90"
          >
            Zamknij
          </button>

          {alt && (
            <div className="absolute inset-x-0 bottom-0 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent p-4 text-center text-sm text-white">
              {alt}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
