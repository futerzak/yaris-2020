import { carData } from '../data/carData'
import { formatPhone, telHref, whatsappHref } from '../utils/contact'

type ContactButtonsProps = {
  size?: 'lg' | 'md' | 'sm'
  layout?: 'row' | 'stack'
  variant?: 'on-dark' | 'on-light'
  showPhoneLabel?: boolean
}

export function ContactButtons({
  size = 'lg',
  layout = 'row',
  variant = 'on-dark',
  showPhoneLabel = true,
}: ContactButtonsProps) {
  const phonePretty = formatPhone()
  const sizeClass = size === 'lg' ? 'text-base' : size === 'md' ? 'text-sm' : 'text-sm'
  const paddingClass = size === 'sm' ? 'px-4 py-2' : 'px-6 py-3'
  const layoutClass = layout === 'stack' ? 'flex-col' : 'flex-row flex-wrap'

  return (
    <div className={`flex items-center gap-3 ${layoutClass}`}>
      <a href={telHref()} className={`btn-primary ${sizeClass} ${paddingClass}`}>
        {showPhoneLabel ? `Zadzwoń: ${phonePretty}` : phonePretty}
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={`${variant === 'on-dark' ? 'btn-ghost' : 'btn-whatsapp btn-whatsapp--outline'} ${sizeClass} ${paddingClass}`}
      >
        WhatsApp
      </a>
    </div>
  )
}

export function StickyContactInfo() {
  return (
    <div className="min-w-0">
      <div className="truncate text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
        Yaris Hybrid · 2020
      </div>
      <div className="font-display text-xl tabular-nums text-neutral-900">
        {carData.price}
      </div>
    </div>
  )
}
