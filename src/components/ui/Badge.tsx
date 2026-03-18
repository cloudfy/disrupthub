import type { ReactNode } from 'react'

type BadgeVariant = 'purple' | 'blue' | 'gray' | 'green'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  purple: 'bg-[rgb(139_92_246/0.1)] text-[var(--color-brand-purple)] border-[rgb(139_92_246/0.2)]',
  blue:   'bg-[rgb(59_130_246/0.1)] text-[var(--color-brand-blue)] border-[rgb(59_130_246/0.2)]',
  gray:   'bg-[var(--color-surface-alt)] text-[var(--color-text-secondary)] border-[var(--color-border)]',
  green:  'bg-[rgb(34_197_94/0.1)] text-[#16A34A] border-[rgb(34_197_94/0.2)]',
}

export function Badge({ children, variant = 'purple', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border font-[var(--font-body)] tracking-wide uppercase',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
