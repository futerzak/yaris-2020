import { useEffect, useRef } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  src?: string
  alt: string
  onPrev?: () => void
  onNext?: () => void
  currentIndex?: number
  totalCount?: number
}

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
const SWIPE_THRESHOLD = 50

export function Lightbox({ open, onClose, src, alt, onPrev, onNext, currentIndex, totalCount }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)
  const touchStartX = useRef<number | null>(null)

  // Najświeższe callbacki dla stabilnego listenera klawiatury
  const callbacks = useRef({ onClose, onPrev, onNext })
  useEffect(() => {
    callbacks.current = { onClose, onPrev, onNext }
  })

  // Focus + scroll-lock wyłącznie przy przejściu zamknięte → otwarte.
  // Nawigacja prev/next NIE re-runuje tego effectu, więc focus nie skacze,
  // a po zamknięciu wraca na miniaturę, która otworzyła podgląd.
  useEffect(() => {
    if (!open) return
    lastFocused.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = prevOverflow
      lastFocused.current?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      const cb = callbacks.current
      if (e.key === 'Escape') {
        cb.onClose()
        return
      }
      if (e.key === 'ArrowLeft') cb.onPrev?.()
      else if (e.key === 'ArrowRight') cb.onNext?.()
      else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  const webp = src?.replace(/\.(jpe?g|png)$/i, '.webp')

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) < SWIPE_THRESHOLD) return
    if (dx > 0) onPrev?.()
    else onNext?.()
  }

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Podgląd zdjęcia'}
    >
      <div className="container flex h-full items-center justify-center">
        <div
          className="relative max-h-[85vh] w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {src ? (
            <picture>
              {webp && webp !== src && <source srcSet={webp} type="image/webp" />}
              <img src={src} alt={alt} className="max-h-[85vh] w-full rounded-xl object-contain" />
            </picture>
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

          {typeof currentIndex === 'number' && totalCount ? (
            <div className="absolute left-2 top-2 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white">
              {currentIndex + 1} / {totalCount}
            </div>
          ) : null}

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
