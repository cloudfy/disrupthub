import { Badge, Card } from "@/components/ui"
import { CTABanner } from "@/components/sections/CTABanner"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const PROJECT_RESOURCES = [
  {
    title: "Billing experts",
    description: "Expertise across quote-to-cash, optimal pricing and packaging, and cross-platform software integration. We help you turn billing into a driver of value realization across the customer lifecycle.",
    accent: "purple",
  },
  {
    title: "Technical architects",
    description: "Deep experience in billing infrastructure and financial systems integration, including ETL, process flows and middleware services that support the build and connect the wider platform estate.",
    accent: "blue",
  },
  {
    title: "Project and program managers",
    description: "Delivery leadership across Agile, Scrum and fixed-scope engagements, with clear RACI ownership, budget and cost controls, milestones and governance that keep teams accountable.",
    accent: "blue",
  },
  {
    title: "Developer and AI consultants",
    description: "Practical support for modernizing developer infrastructure, from CI/CD and engineering standards to responsible AI adoption that helps teams build and operate at a higher pace.",
    accent: "purple",
  },
]

const ENGAGEMENT_MODELS = [
  {
    title: "We Lead",
    summary: "Your lead delivery partner, responsible for keeping the project moving and the targets in view.",
    accent: "purple",
    responsibilities: [
      {
        label: "Project operation",
        text: "We manage delivery against the RACI, budget, cost, milestones and agreed targets.",
      },
      {
        label: "Domain ownership",
        text: "You own the subject matter experts (SMEs) and domain knowledge.",
      },
      {
        label: "Resources",
        text: "You provide resources; we may add implementation resources and operate on your behalf.",
      },
    ],
  },
  {
    title: "We Assist",
    summary: "An experienced partner providing the knowledge, insight and support your team needs.",
    accent: "blue",
    responsibilities: [
      {
        label: "Project operation",
        text: "You run the project and program, with us contributing specialist input at key points.",
      },
      {
        label: "Domain ownership",
        text: "You own the subject matter experts (SMEs) and domain knowledge.",
      },
      {
        label: "Resources",
        text: "You provide resources; we may provide additional resources where needed.",
      },
    ],
  },
  {
    title: "Hybrid",
    summary: "A tailored operating model that combines leadership and assistance around your needs.",
    accent: "mixed",
    responsibilities: [
      {
        label: "Project operation",
        text: "We shape the right split of delivery leadership, advice and execution with your team.",
      },
      {
        label: "Domain ownership",
        text: "Your team provides the domain context and business knowledge.",
      },
      {
        label: "Resources",
        text: "The mix of customer and Disrupt.hub resources is agreed around the engagement.",
      },
    ],
  },
]

export default function ProjectModel() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const modelsRef = useScrollReveal<HTMLDivElement>()
  const resourcesRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="reveal text-center mb-20">
            <Badge variant="purple" className="mb-4">Project engagement</Badge>
            <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl font-extrabold text-[var(--color-text-primary)] mb-6 leading-tight">
              How We Run Projects
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Choose a lead partner, an assisting partner or a tailored hybrid. We adapt the engagement to your team and delivery needs.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="pb-24">
        <div
          ref={modelsRef}
          className="reveal-group max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {ENGAGEMENT_MODELS.map((model, index) => {
              const accentColor = model.accent === "blue"
                ? "var(--color-brand-blue)"
                : "var(--color-brand-purple)"

              return (
                <div key={model.title} className="reveal h-full">
                  <Card
                    padding="lg"
                    hover
                    className="h-full flex flex-col relative overflow-hidden"
                  >
                    {model.accent === "mixed" ? (
                      <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-1"
                        style={{
                          background: "linear-gradient(90deg, var(--color-brand-purple), var(--color-brand-blue))",
                        }}
                      />
                    ) : null}

                    <div className="mb-8">
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <span
                          className="font-[var(--font-display)] text-sm font-extrabold"
                          style={{ color: accentColor }}
                        >
                          0{index + 1}
                        </span>
                        <Badge variant={model.accent === "blue" ? "blue" : "purple"}>
                          {model.accent === "mixed" ? "Flexible" : "Engagement model"}
                        </Badge>
                      </div>
                      <h2 className="font-[var(--font-display)] text-3xl font-extrabold text-[var(--color-text-primary)] mb-3">
                        {model.title}
                      </h2>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {model.summary}
                      </p>
                    </div>

                    <div className="border-t border-[var(--color-border)] mt-auto">
                      {model.responsibilities.map((responsibility) => (
                        <div
                          key={responsibility.label}
                          className="grid grid-cols-[7.25rem_1fr] gap-4 py-5 border-b border-[var(--color-border)] last:border-b-0"
                        >
                          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-muted)] leading-relaxed">
                            {responsibility.label}
                          </p>
                          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                            {responsibility.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specialist resources */}
      <section className="py-24 section-alt">
        <div
          ref={resourcesRef}
          className="reveal-group max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="reveal text-center mb-14">
            <Badge variant="gray" className="mb-4">Resources we offer</Badge>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-[var(--color-text-primary)] mb-4">
              Specialist expertise, shaped to the engagement
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Bring in focused expertise alongside your team, matched to the model and outcomes of your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECT_RESOURCES.map((resource, index) => (
              <div key={resource.title} className="reveal h-full">
                <Card padding="lg" hover className="h-full relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1"
                    style={{
                      background: resource.accent === "blue"
                        ? "var(--color-brand-blue)"
                        : "var(--color-brand-purple)",
                    }}
                  />
                  <div className="flex items-start gap-5">
                    <span
                      className="flex-none w-10 h-10 rounded-lg flex items-center justify-center text-sm font-extrabold border"
                      style={{
                        color: resource.accent === "blue"
                          ? "var(--color-brand-blue)"
                          : "var(--color-brand-purple)",
                        background: resource.accent === "blue"
                          ? "rgb(59 130 246 / 0.08)"
                          : "rgb(139 92 246 / 0.08)",
                        borderColor: resource.accent === "blue"
                          ? "rgb(59 130 246 / 0.18)"
                          : "rgb(139 92 246 / 0.18)",
                      }}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-[var(--font-display)] text-xl font-bold text-[var(--color-text-primary)] mb-3">
                        {resource.title}
                      </h3>
                      <p className="text-[0.9375rem] text-[var(--color-text-secondary)] leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}