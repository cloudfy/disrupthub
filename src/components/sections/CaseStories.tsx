import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Badge } from '@/components/ui/Badge'

const CASES = [
  {
    company: 'Keepit',
    type: 'Enterprise SaaS — Data Protection',
    challenge:
      "Legacy billing infrastructure couldn't support both contracted subscriptions and usage-based billing at scale. Quote-to-cash was fragmented across multiple systems.",
    outcome: [
      { metric: '80%', label: 'Reduction in billing cycle time' },
      { metric: '1 platform', label: 'Quote-to-cash, end-to-end' },
    ],
    tags: ['Billing Infrastructure', 'Usage-Based', 'Quote-to-Cash'],
    accentColor: '#8B5CF6',
  },
  {
    company: 'Norlys',
    type: 'Energy & Utilities',
    challenge:
      'Fragmented billing systems across business units made it impossible to onboard new workloads and services without expensive custom work each time.',
    outcome: [
      { metric: '3x', label: 'Faster service onboarding' },
      { metric: 'Unified', label: 'Single billing platform across BUs' },
    ],
    tags: ['Platform Consolidation', 'Multi-Service Billing', 'Operations'],
    accentColor: '#3B82F6',
  },
  {
    company: 'Camall',
    type: 'Identity & Access Management',
    challenge:
      'Needed a modern, standards-compliant OpenID Connect authentication provider built for European compliance requirements, deployed at scale for enterprise customers.',
    outcome: [
      { metric: 'OIDC', label: 'Standards-compliant from day one' },
      { metric: 'EU-ready', label: 'GDPR & regional data residency' },
    ],
    tags: ['OpenID Connect', 'Authentication', 'European Compliance'],
    accentColor: '#8B5CF6',
  },
]

export function CaseStories() {
  const sectionRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24 section-alt" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <Badge variant="purple" className="mb-4">Case Stories</Badge>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] mb-4">
            Built alongside real teams
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Here's how we've partnered with companies to deliver production systems, not promises.
          </p>
        </div>

        {/* Cards */}
        <div className="reveal-group grid md:grid-cols-3 gap-8">
          {CASES.map(({ company, type, challenge, outcome, tags, accentColor }) => (
            <article
              key={company}
              className="reveal bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden card-hover flex flex-col"
            >
              {/* Header accent bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${accentColor}, #3B82F6)` }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Company */}
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-text-muted)] mb-1">
                    {type}
                  </p>
                  <h3
                    className="font-[var(--font-display)] text-2xl font-extrabold"
                    style={{ color: accentColor }}
                  >
                    {company}
                  </h3>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-text-muted)] mb-2">
                    Challenge
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {challenge}
                  </p>
                </div>

                {/* Outcomes */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {outcome.map(({ metric, label }) => (
                    <div
                      key={label}
                      className="rounded-xl p-4"
                      style={{ background: `${accentColor}0D` }}
                    >
                      <p
                        className="font-[var(--font-display)] text-2xl font-extrabold mb-0.5"
                        style={{ color: accentColor }}
                      >
                        {metric}
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-snug">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-surface-alt)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
