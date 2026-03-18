interface LogoProps {
  variant?: 'full' | 'mark'
  className?: string
  /** Force light/dark regardless of context */
  theme?: 'light' | 'dark'
}

export function Logo({ variant = 'full', className = '', theme }: LogoProps) {
  const textColor = theme === 'dark' ? '#FAFAFA' : 'var(--color-text-primary)'

  if (variant === 'mark') {
    return (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Disrupt.hub logo mark"
      >
        <rect width="36" height="36" rx="9" fill="url(#logo-grad)" />
        {/* D glyph */}
        <path
          d="M10 10h4.5c4.142 0 7.5 3.358 7.5 7.5v1c0 4.142-3.358 7.5-7.5 7.5H10V10z"
          fill="white"
          opacity="0.9"
        />
        {/* H glyph */}
        <path d="M24 10v16M24 18h0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M29 10v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 18h5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  return (
    <div className="flex items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple">
        <span className="text-sm font-bold text-white">D</span>
    </div>
    <span className="text-lg font-bold tracking-tight text-foreground">
            Disrupt<span className="text-brand-purple">.hub</span>
          </span>
    </div>
  )
}
