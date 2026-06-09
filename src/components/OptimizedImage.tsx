type OptimizedImageProps = {
  src?: string
  alt: string
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, className, priority = false }: OptimizedImageProps) {
  if (!src) return null

  const webp = src.replace(/\.(jpe?g|png)$/i, '.webp')

  return (
    <picture className="contents">
      {webp !== src && <source srcSet={webp} type="image/webp" />}
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
