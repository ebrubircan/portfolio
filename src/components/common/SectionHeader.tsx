import type { ReactNode } from 'react'

type SectionHeaderProps = { label?: string; title: string; description?: ReactNode }

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <header className="max-w-2xl">
      {label ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-accent">{label}</p> : null}
      <h2 className="font-display text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl">{title}</h2>
      {description ? <div className="mt-4 text-text-secondary">{description}</div> : null}
    </header>
  )
}
