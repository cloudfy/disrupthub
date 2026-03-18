import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Logo } from '@/assets/Logo'
import { Button } from '@/components/ui/Button'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/how-we-build', label: 'How We Build' },
  { to: '/about', label: 'About' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      role="banner"
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'navbar-scrolled' : 'bg-transparent',
      ].join(' ')}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <NavLink to="/" aria-label="Disrupt.hub — Home" className="flex-shrink-0">
          <Logo />
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'px-4 py-2 rounded-lg text-[0.9375rem] font-medium transition-colors duration-150',
                    isActive
                      ? 'text-[var(--color-brand-purple)] bg-[rgb(139_92_246/0.06)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <NavLink to="/contact" tabIndex={-1}>
            <Button variant="primary" size="sm">
              Get in Touch
            </Button>
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-[var(--color-surface-alt)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-brand-purple)]"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={[
              'block w-5 h-0.5 bg-[var(--color-text-primary)] transition-all duration-200',
              menuOpen ? 'translate-y-[6px] rotate-45' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-5 h-0.5 bg-[var(--color-text-primary)] my-1 transition-all duration-200',
              menuOpen ? 'opacity-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block w-5 h-0.5 bg-[var(--color-text-primary)] transition-all duration-200',
              menuOpen ? '-translate-y-[6px] -rotate-45' : '',
            ].join(' ')}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[var(--color-surface)] border-t border-[var(--color-border)]',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-1 p-4 list-none m-0">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                    isActive
                      ? 'text-[var(--color-brand-purple)] bg-[rgb(139_92_246/0.06)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)]',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <NavLink to="/contact" tabIndex={-1}>
              <Button variant="primary" size="md" fullWidth>
                Get in Touch
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
