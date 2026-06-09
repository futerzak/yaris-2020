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
  const sizeClass = size === 'lg' ? 'text-lg' : size === 'md' ? 'text-base' : 'text-sm'
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
        className={`btn-whatsapp ${sizeClass} ${paddingClass} ${variant === 'on-light' ? 'btn-whatsapp--outline' : ''}`}
      >
        WhatsApp
      </a>
    </div>
  )
}

export function StickyContactInfo() {
  return (
    <div className="min-w-0">
      <div className="truncate text-xs font-semibold uppercase tracking-wide text-neutral-500">Toyota Yaris Hybrid</div>
      <div className="text-lg font-black text-neutral-900">
        {carData.price} {carData.negotiable && <span className="text-sm font-semibold text-neutral-500">(do negocjacji)</span>}
      </div>
    </div>
  )
}
