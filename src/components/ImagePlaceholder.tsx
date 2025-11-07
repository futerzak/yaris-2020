
type Props = {
  label: string
  href?: string
  className?: string
}

export function ImagePlaceholder({ label, href, className }: Props) {
  const content = (
    <div className={`img-placeholder ${className ?? ''}`}>
      <div className="px-4">
        <div className="mb-1 text-xs font-semibold tracking-wide text-neutral-400">MIEJSCE NA ZDJĘCIE</div>
        <div className="text-neutral-600">{label}</div>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    )
  }
  return content
}

type PhotoProps = {
  src?: string
  alt: string
  external?: string
  className?: string
}

export function PhotoOrPlaceholder({ src, alt, external, className }: PhotoProps) {
  if (src) {
    const img = <img src={src} alt={alt} className={`aspect-[16/9] w-full rounded-xl object-cover ${className ?? ''}`} />
    return external ? (
      <a href={external} target="_blank" rel="noreferrer" className="block">
        {img}
      </a>
    ) : (
      img
    )
  }
  return <ImagePlaceholder label={alt} href={external} className={className} />
}


