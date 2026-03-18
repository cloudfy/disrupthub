import { Link } from 'react-router-dom'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Button } from '@/components/ui/Button'

export function CTABanner() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      className="reveal relative overflow-hidden py-24 section-dark"
    >
      {/* Background glow effects */}
      <div
        aria-hidden
        className="absolute top-0 left-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgb(139 92 246 / 0.3) 0%, transparent 65%)',
          filter: 'blur(60px)',
          transform: 'translateY(-50%)',
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-1/4 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgb(59 130 246 / 0.2) 0%, transparent 65%)',
          filter: 'blur(50px)',
          transform: 'translateY(50%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest font-semibold text-[#A78BFA] mb-4">
          Ready for production?
        </p>
        <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Ready to{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            disrupt?
          </span>
        </h2>
        <p className="text-lg text-[#A1A1AA] leading-relaxed max-w-xl mx-auto mb-10">
          Let's scope your first sprint together. No decks, no delays — just a conversation about what you want to ship.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" tabIndex={-1}>
            <Button variant="primary" size="lg">
              Start a Conversation →
            </Button>
          </Link>
          <Link to="/how-we-build" tabIndex={-1}>
            <Button variant="outline" size="lg">
              See Our Process
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
