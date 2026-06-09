type OptimizedImageProps = {
  src?: string
  alt: string
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, className, priority = false }: OptimizedImageProps) {
  if (!src) return null

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}
