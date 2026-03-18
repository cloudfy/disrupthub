import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  fullWidth?: boolean
  loading?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#8B5CF6] text-white hover:bg-[#7C3AED] btn-shimmer shadow-md hover:shadow-[var(--shadow-glow-purple)]',
  secondary:
    'bg-[var(--color-surface-alt)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-brand-purple)] hover:bg-white',
  ghost:
    'bg-transparent text-[var(--color-brand-purple)] hover:bg-[rgb(139_92_246/0.06)]',
  outline:
    'bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/10',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-md gap-1.5',
  md: 'px-6 py-3 text-[0.9375rem] rounded-lg gap-2',
  lg: 'px-8 py-4 text-base rounded-xl gap-2.5',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  loading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-[var(--font-display)] font-semibold tracking-tight transition-all duration-200 cursor-pointer border-0 select-none focus-visible:outline-2 focus-visible:outline-[var(--color-brand-purple)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <button
      className={[
        base,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : null}
      {children}
    </button>
  )
}
