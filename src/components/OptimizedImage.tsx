type OptimizedImageProps = {
  src?: string
  alt: string
  className?: string
  priority?: boolean
  /** CSS sizes dla srcSet — domyślnie 100vw (bezpieczne) */
  sizes?: string
  /** Szerokość bazowego pliku .webp (hero: 1920, pozostałe: 1400) */
  srcWidth?: number
}

// Warianty -640/-1024 generuje scripts/optimize-images.mjs — po dodaniu
// nowego zdjęcia do photos.ts trzeba uruchomić `pnpm optimize:images`.
export function OptimizedImage({ src, alt, className, priority = false, sizes = '100vw', srcWidth = 1400 }: OptimizedImageProps) {
  if (!src) return null

  const stem = src.replace(/\.(jpe?g|png)$/i, '')
  const srcSet =
    stem !== src
      ? `${stem}-640.webp 640w, ${stem}-1024.webp 1024w, ${stem}.webp ${srcWidth}w`
      : undefined

  return (
    <picture className="contents">
      {srcSet && <source srcSet={srcSet} sizes={sizes} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : undefined}
      />
    </picture>
  )
}
