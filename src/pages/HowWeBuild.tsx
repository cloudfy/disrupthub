import { Link } from 'react-router-dom'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const PHASES = [
  {
    number: '01',
    name: 'Specify',
    tagline: 'Align on the problem before the solution',
    description:
      'We run structured discovery sessions to deeply understand your business context, existing systems, and desired outcomes. The output is a concrete specification — not a vague brief.',
    activities: [
      'Stakeholder alignment workshops',
      'Existing system audit',
      'AI opportunity mapping',
      'Defined success metrics & KPIs',
      'Technical specification document',
    ],
    accentColor: '#8B5CF6',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    number: '02',
    name: 'Adopt',
    tagline: 'Build iteratively, validate constantly',
    description:
      'We run short, focused build cycles — embedding AI tooling at every step. Your team is hands-on from day one, building genuine ownership and competence alongside us.',
    activities: [
      'AI-assisted development sprints',
      'Weekly demos to stakeholders',
      'Continuous integration from sprint one',
      'Team knowledge transfer sessions',
      'Architecture decision records (ADRs)',
    ],
    accentColor: '#6366F1',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    number: '03',
    name: 'Deploy',
    tagline: 'Ship with confidence, not prayers',
    description:
      'Production deployments are automated, observable, and reversible. We configure the full delivery pipeline — from CI/CD to monitoring — before ever going live.',
    activities: [
      'Automated CI/CD pipeline setup',
      'Environment promotion strategy',
      'Rollback & incident playbooks',
      'Observability & alerting setup',
      'Load & security testing',
    ],
    accentColor: '#3B82F6',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
  },
  {
    number: '04',
    name: 'Operate',
    tagline: 'AI systems need AI operations',
    description:
      "We don't disappear after launch. We help you establish the operational practices \u2014 monitoring AI outputs, managing model drift, and continuously improving \u2014 that keep systems healthy in production.",
    activities: [
      'AI output monitoring & drift detection',
      'Incident response & on-call handover',
      'Performance tuning & cost optimisation',
      'Continuous model/agent improvement',
      'Platform capability evolution',
    ],
    accentColor: '#8B5CF6',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
]

const PRINCIPLES = [
  { title: 'Outcome contracts, not time-and-materials', description: 'We sign up to outcomes, not hours. Every engagement has defined milestones with clear, measurable success criteria.' },
  { title: 'AI-native toolchain, no bolt-ons', description: 'AI is woven into every stage — code review, test generation, documentation, deployment — not added as an afterthought.' },
  { title: 'Full stack visibility', description: "You always know what's in the pipeline, what's in production, and what's on the critical path. No black boxes." },
]

interface PhaseProps {
  number: string
  name: string
  tagline: string
  description: string
  activities: string[]
  accentColor: string
  icon: string
}

function PhaseCard({ number, name, tagline, description, activities, accentColor, icon }: PhaseProps) {
  const phaseRef = useScrollReveal<HTMLDivElement>()
  return (
    <div
      id={`phase-${number}`}
      ref={phaseRef}
      className="reveal bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden card-hover"
    >
      <div className="grid md:grid-cols-[1fr_2fr] gap-0">
        {/* Left accent panel */}
        <div
          className="p-8 md:p-10 flex flex-col justify-between"
          style={{ background: `linear-gradient(145deg, ${accentColor}10 0%, ${accentColor}05 100%)` }}
        >
          <div>
            <span
              className="font-[var(--font-display)] text-6xl font-extrabold leading-none mb-4 block opacity-15"
              style={{ color: accentColor }}
            >
              {number}
            </span>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: `${accentColor}15` }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke={accentColor}
                strokeWidth={1.75}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
              </svg>
            </div>
            <h2
              className="font-[var(--font-display)] text-3xl font-extrabold mb-2"
              style={{ color: accentColor }}
            >
              {name}
            </h2>
            <p className="text-sm font-semibold text-[var(--color-text-secondary)] leading-snug">
              {tagline}
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="p-8 md:p-10">
          <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-8">
            {description}
          </p>
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-text-muted)] mb-4">
              Key Activities
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {activities.map((activity) => (
                <li
                  key={activity}
                  className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]"
                >
                  <span
                    className="mt-0.5 font-bold text-base leading-none"
                    style={{ color: accentColor }}
                  >
                    →
                  </span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowWeBuild() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const principlesRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="reveal text-center mb-20">
            <Badge variant="purple" className="mb-4">Our Methodology</Badge>
            <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl font-extrabold text-[var(--color-text-primary)] mb-6 leading-tight">
              How We Build
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              A four-phase framework designed for AI-native delivery. From alignment to active operation — with your team every step.
            </p>

            {/* Phase overview pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {PHASES.map(({ name, number }) => (
                <a
                  key={name}
                  href={`#phase-${number}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text-secondary)] hover:border-[var(--color-brand-purple)] hover:text-[var(--color-brand-purple)] transition-colors"
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: 'var(--color-brand-purple)' }}
                  >
                    {number}
                  </span>
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Phase cards */}
          <div className="space-y-8">
            {PHASES.map((phase) => (
              <PhaseCard key={phase.name} {...phase} />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={principlesRef}>
            <div className="reveal text-center mb-14">
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-[var(--color-text-primary)] mb-3">
                Guiding principles
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                The commitments that underpin every engagement, regardless of scope.
              </p>
            </div>
            <div className="reveal-group grid md:grid-cols-3 gap-8">
              {PRINCIPLES.map(({ title, description }) => (
                <div
                  key={title}
                  className="reveal bg-white rounded-2xl border border-[var(--color-border)] p-8"
                >
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-text-primary)] mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold text-[var(--color-text-primary)] mb-4">
            Ready to start with Specify?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Book a free 45-minute discovery session. We'll scope your first sprint and define what "done" looks like.
          </p>
          <Link to="/contact" tabIndex={-1}>
            <Button variant="primary" size="lg">Book a Discovery Session →</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
