import { useEffect, useState } from 'react'
import { formatPhone, telHref, whatsappHref } from '../utils/contact'
import { StickyContactInfo } from './ContactButtons'

export function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
      rootMargin: '-80px 0px 0px 0px',
    })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  const phonePretty = formatPhone()

  return (
    <>
      <div
        className="animate-sticky-in fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md"
        role="region"
        aria-label="Szybki kontakt"
      >
        <div className="container flex items-center justify-between gap-3 py-3">
          <StickyContactInfo />

          <div className="flex shrink-0 items-center gap-2">
            <a href={telHref()} className="btn-primary px-3 py-2 text-sm md:px-5 md:py-2.5">
              <span className="md:hidden">{phonePretty}</span>
              <span className="hidden md:inline">Zadzwoń: {phonePretty}</span>
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-whatsapp--outline px-3 py-2 text-sm md:px-5 md:py-2.5"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="h-[68px] md:h-[76px]" aria-hidden="true" />
    </>
  )
}
