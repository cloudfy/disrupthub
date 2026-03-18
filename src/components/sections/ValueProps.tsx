import { useScrollReveal } from '@/hooks/useScrollReveal'

const PROPS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Outcomes in weeks, not quarters',
    description:
      'We cut through the noise with AI-accelerated delivery. Specification to running code in your environment — fast.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="#3B82F6" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'We build with you, not for you',
    description:
      'Your team gains full ownership. We embed alongside you, transfer knowledge, and raise the bar on how your organisation ships.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <polyline points="16 18 22 12 16 6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Code in production, not slide decks',
    description:
      'No roadmaps for roadmaps. No strategy decks without shipping targets. Every engagement ends with deployed, observable software.',
  },
]

export function ValueProps() {
  const sectionRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="py-24 section-alt" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-group grid md:grid-cols-3 gap-8">
          {PROPS.map(({ icon, title, description }) => (
            <div
              key={title}
              className="reveal bg-white rounded-2xl border border-[var(--color-border)] p-8 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-alt)] flex items-center justify-center mb-5">
                {icon}
              </div>
              <h3 className="font-[var(--font-display)] text-xl font-bold text-[var(--color-text-primary)] mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-[0.9375rem]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
