import { Link } from 'react-router-dom'
import { Logo } from '@/assets/Logo'

const FOOTER_LINKS = {
  Company: [
    { to: '/about', label: 'About Us' },
    { to: '/how-we-build', label: 'How We Build' },
    { to: '/contact', label: 'Contact' },
  ],
  Services: [
    { to: '/#what-we-do', label: 'AI Agents' },
    { to: '/#what-we-do', label: 'Digitalization' },
    { to: '/#what-we-do', label: 'CI/CD for Agents' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-surface-dark)] text-[var(--color-text-inverse)] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Logo theme="dark" className="mb-4" />
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-xs">
              AI-native software operations. We build with you, not for you — from specification to production.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#71717A] mb-4">
                {section}
              </h3>
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {links.map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#71717A]">
            © {year} Disrupt Hub ApS. All rights reserved.
          </p>
          <p className="text-xs text-[#71717A]">
            Built with an AI-native workflow.
          </p>
        </div>
      </div>
    </footer>
  )
}
