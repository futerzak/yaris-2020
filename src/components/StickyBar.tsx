import { useEffect, useState } from 'react'
import { formatPhone, telHref, whatsappHref } from '../utils/contact'
import { StickyContactInfo } from './ContactButtons'

export function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('header')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  const phonePretty = formatPhone()

  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md"
        role="region"
        aria-label="Szybki kontakt"
      >
        <div className="container flex items-center justify-between gap-3 py-3 md:py-4">
          <StickyContactInfo />

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={telHref()}
              className="btn-primary px-4 py-2.5 text-sm md:px-6 md:py-3 md:text-base"
              aria-label={`Zadzwoń: ${phonePretty}`}
            >
              <span className="md:hidden" aria-hidden="true">
                📞
              </span>
              <span className="hidden md:inline">Zadzwoń: {phonePretty}</span>
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-whatsapp--outline px-4 py-2.5 text-sm md:px-6 md:py-3 md:text-base"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      {/* Spacer so footer content isn't hidden behind the bar */}
      <div className="h-[72px] md:h-[80px]" aria-hidden="true" />
    </>
  )
}
