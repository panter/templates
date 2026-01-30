import { IconComponent } from "@/utils/icon-map"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import type { LandingVisionBlock } from "@/payload-types"

export function LandingVisionBlock({
  heading,
  subtitle,
  badgeText,
  roadmapCards,
  pillarsHeading,
  pillars,
}: LandingVisionBlock) {
  return (
    <section data-slot="vision-section" className="relative overflow-hidden py-16">
      <div className="relative z-10 container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Typography variant="h2" className="mb-6">
              {heading}
            </Typography>
            {subtitle && (
              <Typography variant="lead" className="mx-auto mb-8 max-w-3xl">
                {subtitle}
              </Typography>
            )}
            {badgeText && (
              <Badge variant="outline" className="border-accent/20 bg-accent/10 text-foreground">
                {badgeText}
              </Badge>
            )}
          </div>

          {roadmapCards && roadmapCards.length > 0 && (
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {roadmapCards.map((card) => (
                <div
                  key={card.id}
                  className="group bg-card relative rounded-2xl border p-8 transition-all hover:shadow-md"
                >
                  {card.badge && (
                    <div className="bg-accent/10 text-accent absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-semibold">
                      {card.badge}
                    </div>
                  )}
                  <div className="bg-accent text-accent-foreground mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                    <IconComponent name={card.icon} className="h-6 w-6" />
                  </div>
                  <Typography variant="small" className="text-accent mb-1 font-semibold">
                    {card.phase}
                  </Typography>
                  <Typography variant="h4" as="h3" className="mb-3">
                    {card.title}
                  </Typography>
                  {card.subtitle && (
                    <Typography variant="muted" className="mb-6">
                      {card.subtitle}
                    </Typography>
                  )}
                  {card.items && card.items.length > 0 && (
                    <ul className="space-y-2 pl-0">
                      {card.items.map((item) => (
                        <li key={item.id} className="flex list-none items-start gap-2 text-sm">
                          <span className="bg-accent mt-2 inline-block h-1 w-1 shrink-0 rounded-full" />
                          <Typography variant="muted" className="text-sm">
                            {item.text}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {pillars && pillars.length > 0 && (
            <div className="border-primary/10 bg-primary/5 rounded-2xl border p-8 text-center">
              {pillarsHeading && (
                <Typography variant="h3" className="mb-4">
                  {pillarsHeading}
                </Typography>
              )}
              <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                {pillars.map((pillar, index) => (
                  <div key={pillar.id} className="text-left">
                    <Typography as="div" className="mb-2 text-lg font-semibold">
                      {index + 1}. {pillar.title}
                    </Typography>
                    <Typography variant="muted">{pillar.description}</Typography>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
