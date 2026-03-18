import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const paddingStyles = {
  sm: 'p-5',
  md: 'p-7',
  lg: 'p-8 md:p-10',
}

export function Card({
  children,
  className = '',
  hover = false,
  gradient = false,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={[
        'bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)]',
        hover ? 'card-hover' : '',
        gradient ? 'gradient-border' : 'border border-[var(--color-border)]',
        paddingStyles[padding],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
