import { Link } from 'react-router-dom'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const VALUES = [
  {
    title: 'Ship, then iterate',
    description:
      'Working code in production is worth a hundred slide decks. We bias toward delivery and learn from real feedback.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  },
  {
    title: 'Radical transparency',
    description:
      'You always know where you stand. Weekly demos, living backlogs, and honest risk flags — no surprises.',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    title: 'Ownership by design',
    description:
      'Every engagement ends with your team holding the wheel. We build capability, not dependency.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
]

const TEAM = [
  {
    name: 'Alex Thornton',
    title: 'Co-founder & CTO',
    bio: 'Spent a decade building billing and payment infrastructure at fintech scale. Now obsessed with applying AI to the hard parts of software operations.',
    initials: 'AT',
    color: '#8B5CF6',
  },
  {
    name: 'Sara Lindqvist',
    title: 'Co-founder & Head of Delivery',
    bio: 'Former engineering lead at a Nordic energy major. Specialises in legacy modernisation and building high-trust delivery cultures.',
    initials: 'SL',
    color: '#3B82F6',
  },
  {
    name: 'Marcus Holt',
    title: 'Principal AI Engineer',
    bio: 'AI systems engineer with deep experience in agentic architectures, model drift management, and production ML operations.',
    initials: 'MH',
    color: '#6366F1',
  },
  {
    name: 'Nadia Petrov',
    title: 'Platform & DevOps Lead',
    bio: 'Kubernetes, CI/CD, and observability expert. Has shipped dozens of production platforms from greenfield to enterprise scale.',
    initials: 'NP',
    color: '#8B5CF6',
  },
]

const STATS = [
  { value: '12+', label: 'Production systems shipped' },
  { value: '3', label: 'Countries with active clients' },
  { value: '100%', label: 'Engagements with code in production' },
  { value: 'Weeks', label: 'Typical time-to-first-deploy' },
]

export default function About() {
  const missionRef = useScrollReveal<HTMLDivElement>()
  const valuesRef = useScrollReveal<HTMLDivElement>()
  const teamRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Mission hero */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={missionRef} className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="reveal mb-6">
                <Badge variant="purple">About Us</Badge>
              </div>
              <h1
                className="reveal font-[var(--font-display)] text-5xl sm:text-6xl font-extrabold text-[var(--color-text-primary)] mb-8 leading-tight"
                style={{ transitionDelay: '80ms' }}
              >
                AI-native
                <br />
                from day one
              </h1>
              <p
                className="reveal text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6"
                style={{ transitionDelay: '160ms' }}
              >
                Disrupt.hub was founded on a simple observation: most software consultancies add AI as a layer on top of their existing processes. We built ours around it from the start.
              </p>
              <p
                className="reveal text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10"
                style={{ transitionDelay: '220ms' }}
              >
                We believe the highest-value thing we can do is help companies ship real software — fast, with confidence, and with teams who understand what they've built. Not handovers to the client with no path forward.
              </p>
              <div className="reveal" style={{ transitionDelay: '280ms' }}>
                <Link to="/contact" tabIndex={-1}>
                  <Button variant="primary" size="lg">Work With Us →</Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="reveal-scale grid grid-cols-2 gap-5">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-[var(--color-border)] p-7 card-hover text-center"
                >
                  <p className="font-[var(--font-display)] text-4xl font-extrabold gradient-text mb-2">
                    {value}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-alt" ref={valuesRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <h2 className="font-[var(--font-display)] text-4xl font-extrabold text-[var(--color-text-primary)] mb-4">
              How we operate
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Three principles that govern every project, regardless of size or complexity.
            </p>
          </div>
          <div className="reveal-group grid md:grid-cols-3 gap-8">
            {VALUES.map(({ title, description, icon }) => (
              <div
                key={title}
                className="reveal bg-white rounded-2xl border border-[var(--color-border)] p-8 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgb(139_92_246/0.08)] flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-[var(--color-brand-purple)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <h3 className="font-[var(--font-display)] text-xl font-bold text-[var(--color-text-primary)] mb-3">
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

      {/* Team */}
      <section className="py-24" ref={teamRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <Badge variant="gray" className="mb-4">The Team</Badge>
            <h2 className="font-[var(--font-display)] text-4xl font-extrabold text-[var(--color-text-primary)] mb-4">
              Built by practitioners, not advisors
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Everyone on our team has shipped production software. No career consultants — only engineers who've been in the trenches.
            </p>
          </div>
          <div className="reveal-group grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {TEAM.map(({ name, title, bio, initials, color }) => (
              <div
                key={name}
                className="reveal bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden card-hover"
              >
                {/* Avatar */}
                <div
                  className="h-32 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${color}20 0%, ${color}08 100%)`,
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-[var(--font-display)] text-2xl font-extrabold"
                    style={{
                      background: `linear-gradient(135deg, ${color} 0%, #3B82F6 100%)`,
                    }}
                  >
                    {initials}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-[var(--font-display)] text-base font-bold text-[var(--color-text-primary)] mb-0.5">
                    {name}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-brand-purple)] mb-3 uppercase tracking-wide">
                    {title}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
