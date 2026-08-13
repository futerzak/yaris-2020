import type { ReactNode } from 'react'

type SectionHeaderProps = {
  kicker: string
  title: ReactNode
  subtitle?: string
  align?: 'center' | 'left'
}

export function SectionHeader({ kicker, title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'text-center' : undefined}>
      <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[--color-tokyo-red]">
        {kicker}
      </div>
      <h2 className="font-display mt-2 text-3xl leading-tight text-neutral-900 md:text-4xl">{title}</h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-base text-neutral-600 ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
