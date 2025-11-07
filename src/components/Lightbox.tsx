import { useEffect } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  src?: string
  alt: string
  external?: string
}

export function Lightbox({ open, onClose, src, alt, external }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="container flex h-full items-center justify-center">
        <div className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
          {src ? (
            <img src={src} alt={alt} className="max-h-[85vh] w-full rounded-xl object-contain" />
          ) : (
            <div className="rounded-xl bg-white p-6 text-center">
              <div className="text-sm text-neutral-700">{alt}</div>
              {external ? (
                <a className="btn-primary mt-4 inline-flex" href={external} target="_blank" rel="noreferrer">
                  Otwórz w albumie
                </a>
              ) : null}
            </div>
          )}
          <button onClick={onClose} className="absolute right-2 top-2 rounded-full bg-black/70 px-3 py-1 text-white">
            Zamknij
          </button>
        </div>
      </div>
    </div>
  )
}


