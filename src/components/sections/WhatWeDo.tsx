import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Badge } from '@/components/ui/Badge'

const OFFERINGS = [
  {
    badge: 'AI Agents',
    badgeVariant: 'purple' as const,
    title: 'AI Agents for Development',
    description:
      'Custom AI agents that accelerate every stage of your software development lifecycle — from automated code review and documentation to intelligent test generation and incident triage.',
    bullets: ['Autonomous PR review agents', 'AI-powered test coverage', 'Intelligent incident response', 'Code generation pipelines'],
    gradient: 'from-[#8B5CF6] to-[#6D28D9]',
    iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    badge: 'Digitalization',
    badgeVariant: 'blue' as const,
    title: 'Digitalization of Business Processes',
    description:
      'We replace manual, error-prone workflows with intelligent, automated systems. From quote-to-cash pipelines to authentication infrastructure — built to scale with your business.',
    bullets: ['End-to-end billing automation', 'Subscription & usage billing', 'OpenID / auth platforms', 'Legacy system modernisation'],
    gradient: 'from-[#3B82F6] to-[#2563EB]',
    iconPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  },
  {
    badge: 'CI/CD',
    badgeVariant: 'purple' as const,
    title: 'CI/CD for an Agentic World',
    description:
      'Modern delivery pipelines purpose-built for AI-heavy workloads. Ship agents, models, and traditional code with the same confidence — observable, testable, and rollback-ready.',
    bullets: ['Agentic deployment pipelines', 'AI model versioning & rollback', 'Observability & alerting', 'Multi-environment promotion'],
    gradient: 'from-[#8B5CF6] to-[#3B82F6]',
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
]

export function WhatWeDo() {
  const sectionRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="what-we-do" className="py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <Badge variant="gray" className="mb-4">What We Do</Badge>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] mb-4">
            Three ways we drive impact
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Whether you're modernising processes, shipping AI products, or rebuilding delivery pipelines — we have a proven approach.
          </p>
        </div>

        {/* Offering cards */}
        <div className="reveal-group grid md:grid-cols-3 gap-8">
          {OFFERINGS.map(({ badge, badgeVariant, title, description, bullets, gradient, iconPath }) => (
            <div
              key={title}
              className="reveal bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden card-hover flex flex-col"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${gradient} p-8 flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                  </svg>
                </div>
              </div>

              {/* Card body */}
              <div className="p-7 flex flex-col flex-1">
                <Badge variant={badgeVariant} className="mb-4 self-start">{badge}</Badge>
                <h3 className="font-[var(--font-display)] text-xl font-bold text-[var(--color-text-primary)] mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <ul className="mt-auto space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-0.5 text-[var(--color-brand-purple)] font-bold">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
