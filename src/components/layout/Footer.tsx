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
          <div className="flex items-center gap-4">
            <p className="text-xs text-[#71717A]">
              Built with an AI-native workflow.
            </p>
            <a
              href="http://linkedin.com/company/disrupt-hub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Disrupt Hub on LinkedIn"
              className="text-[#71717A] hover:text-white transition-colors duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
