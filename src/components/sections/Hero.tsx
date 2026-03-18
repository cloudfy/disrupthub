import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Hero() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background mesh gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 0%, rgb(139 92 246 / 0.12) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 100% 60%, rgb(59 130 246 / 0.08) 0%, transparent 60%)',
        }}
      />

      {/* Decorative circles */}
      <div
        aria-hidden
        className="absolute top-24 right-8 w-64 h-64 rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-16 left-4 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — content */}
        <div>
          <div
            className="reveal mb-6"
            style={{ animationDelay: '0ms' }}
          >
            <Badge variant="purple">AI-Native from day one</Badge>
          </div>

          <h1
            className="reveal font-[var(--font-display)] text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--color-text-primary)] mb-6"
            style={{ transitionDelay: '80ms' }}
          >
            AI-Native
            <br />
            <span className="gradient-text">Software</span>
            <br />
            Operations
          </h1>

          <p
            className="reveal text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-lg mb-8"
            style={{ transitionDelay: '160ms' }}
          >
            We don't build systems <em>for</em> you — we build them <strong>with</strong> you.
            From specification to production in weeks, not quarters.
          </p>

          <div
            className="reveal flex flex-wrap gap-4"
            style={{ transitionDelay: '240ms' }}
          >
            <Link to="/contact" tabIndex={-1}>
              <Button variant="primary" size="lg">
                Start Building →
              </Button>
            </Link>
            <Link to="/how-we-build" tabIndex={-1}>
              <Button variant="secondary" size="lg">
                How We Build
              </Button>
            </Link>
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="reveal-scale hidden md:grid grid-cols-2 gap-4">
          {[
            { value: 'Weeks', label: 'Time to first production deploy', accent: '#8B5CF6' },
            { value: '100%', label: 'AI-assisted delivery pipeline', accent: '#3B82F6' },
            { value: '3→1', label: 'Spec, build and operate in one team', accent: '#8B5CF6' },
            { value: 'Zero', label: 'Slide decks without running code', accent: '#3B82F6' },
          ].map(({ value, label, accent }) => (
            <div
              key={label}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-6 card-hover"
            >
              <p
                className="font-[var(--font-display)] text-3xl font-bold mb-1"
                style={{ color: accent }}
              >
                {value}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
