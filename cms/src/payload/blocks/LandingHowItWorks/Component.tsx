import { IconComponent } from "@/utils/icon-map"
import { Typography } from "@/components/ui/typography"
import type { LandingHowItWorksBlock } from "@/payload-types"

export function LandingHowItWorksBlock({
  heading,
  subtitle,
  steps,
  featureItems,
}: LandingHowItWorksBlock) {
  return (
    <section data-slot="how-it-works-section" className="relative overflow-hidden py-16">
      <div className="relative z-10 container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Typography variant="h2" className="mb-6">
              {heading}
            </Typography>
            {subtitle && (
              <Typography variant="lead" className="mx-auto max-w-2xl">
                {subtitle}
              </Typography>
            )}
          </div>

          {steps && steps.length > 0 && (
            <div className="relative mb-12">
              <div className="from-accent/20 via-accent to-accent/20 absolute top-1/2 right-0 left-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r lg:block" />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    <div className="bg-card h-full rounded-2xl border p-6 transition-all hover:shadow-md">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                          <div className="bg-accent text-accent-foreground inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
                            <IconComponent name={step.icon} className="h-8 w-8" />
                          </div>
                          <div className="bg-primary text-primary-foreground absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <Typography variant="h4" as="h3" className="mb-2">
                          {step.title}
                        </Typography>
                        <Typography variant="muted" className="text-sm leading-relaxed">
                          {step.description}
                        </Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {featureItems && featureItems.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {featureItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-card/50 flex items-start gap-4 rounded-xl border p-6"
                >
                  <div className="bg-accent/10 text-accent inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <IconComponent name={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <Typography variant="h4" as="h4" className="mb-1 text-base font-semibold">
                      {item.title}
                    </Typography>
                    <Typography variant="muted" className="text-sm">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
