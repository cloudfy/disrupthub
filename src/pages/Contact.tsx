import { useState, type FormEvent } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input, Select, Textarea } from '@/components/ui/FormFields'
import { sendContactEmail, type ContactFormData } from '@/lib/contact'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const ROLE_OPTIONS = [
  { value: '', label: 'Select a role...' },
  { value: 'cto', label: 'CTO / VP Engineering' },
  { value: 'cfo', label: 'CFO / Finance' },
  { value: 'cpo', label: 'CPO / Product' },
  { value: 'ceo', label: 'CEO / Founder' },
  { value: 'engineering-lead', label: 'Engineering Lead' },
  { value: 'other', label: 'Other' },
]

const CONTACT_DETAILS = [
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    label: 'Email',
    value: 'hello@disrupt.hub',
    href: 'mailto:hello@disrupt.hub',
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    label: 'Location',
    value: 'Remote-first. Aarhus, Denmark.',
    href: undefined,
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    label: 'Response time',
    value: 'We reply within 1 business day.',
    href: undefined,
  },
]

function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-[rgb(34_197_94/0.12)] flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text-primary)] mb-3">
        Message sent!
      </h3>
      <p className="text-[var(--color-text-secondary)] max-w-sm">
        We'll be in touch within one business day. Looking forward to building together.
      </p>
    </div>
  )
}

export default function Contact() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  })

  function validate(): boolean {
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function update<K extends keyof ContactFormData>(key: K, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setFormState('loading')
    try {
      await sendContactEmail(formData)
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="reveal text-center mb-16">
            <Badge variant="purple" className="mb-4">Get in Touch</Badge>
            <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl font-extrabold text-[var(--color-text-primary)] mb-6 leading-tight">
              Ready to Build With Us?
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Tell us about your challenge. We'll scope a first sprint and show you what's possible in weeks, not quarters.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
            {/* Form card */}
            <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] p-8 md:p-10">
              {formState === 'success' ? (
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text-primary)] mb-8">
                    Send us a message
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <Input
                      label="Full Name"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => update('name', e.target.value)}
                      error={errors.name}
                      autoComplete="name"
                      required
                    />
                    <Input
                      label="Work Email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => update('email', e.target.value)}
                      error={errors.email}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <Input
                      label="Company"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => update('company', e.target.value)}
                      error={errors.company}
                      autoComplete="organization"
                      required
                    />
                    <Select
                      label="Your Role"
                      value={formData.role}
                      onChange={(e) => update('role', e.target.value)}
                    >
                      {ROLE_OPTIONS.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="mb-8">
                    <Textarea
                      label="What would you like to build?"
                      placeholder="Describe your challenge, current situation, or what you're hoping to achieve..."
                      value={formData.message}
                      onChange={(e) => update('message', e.target.value)}
                      error={errors.message}
                      required
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                      Something went wrong. Please try again or email us directly at{' '}
                      <a href="mailto:hello@disrupt.hub" className="font-semibold underline">
                        hello@disrupt.hub
                      </a>
                      .
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={formState === 'loading'}
                  >
                    Send Message →
                  </Button>

                  <p className="text-xs text-[var(--color-text-muted)] text-center mt-4">
                    We respect your privacy. Your data is never shared with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Contact details */}
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-7">
                <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-text-primary)] mb-6">
                  Contact Info
                </h3>
                <div className="space-y-5">
                  {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[rgb(139_92_246/0.08)] flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[var(--color-brand-purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--color-text-muted)] font-semibold uppercase tracking-wide mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a href={href} className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-brand-purple)] transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-[var(--color-text-secondary)]">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(135deg, rgb(139 92 246 / 0.07) 0%, rgb(59 130 246 / 0.05) 100%)',
                  border: '1px solid rgb(139 92 246 / 0.15)',
                }}
              >
                <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-text-primary)] mb-5">
                  What to expect
                </h3>
                <ol className="space-y-4">
                  {[
                    { step: '1', text: 'We review your message and get context on your situation.' },
                    { step: '2', text: 'A short intro call (30 min) to explore fit and define scope.' },
                    { step: '3', text: 'A concrete proposal — not a pitch deck, a sprint plan.' },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[var(--color-brand-purple)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step}
                      </span>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
