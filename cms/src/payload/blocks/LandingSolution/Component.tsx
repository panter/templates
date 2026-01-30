import { IconComponent } from "@/utils/icon-map"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import type { LandingSolutionBlock } from "@/payload-types"

export function LandingSolutionBlock({
  badgeText,
  heading,
  subtitle,
  featureCards,
}: LandingSolutionBlock) {
  return (
    <section data-slot="solution-section" className="bg-muted/30 relative py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            {badgeText && (
              <Badge
                variant="outline"
                className="border-accent/20 bg-accent/10 text-foreground mb-6"
              >
                {badgeText}
              </Badge>
            )}
            <Typography variant="h2" className="mb-6">
              {heading}
            </Typography>
            {subtitle && (
              <Typography variant="lead" className="mx-auto max-w-2xl">
                {subtitle}
              </Typography>
            )}
          </div>

          {featureCards && featureCards.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {featureCards.map((card) => (
                <div
                  key={card.id}
                  className="group bg-card hover:border-accent/50 rounded-2xl border p-8 transition-all hover:shadow-md"
                >
                  <div className="bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                    <IconComponent name={card.icon} className="h-6 w-6" />
                  </div>
                  <Typography variant="h4" as="h3" className="mb-3">
                    {card.title}
                  </Typography>
                  <Typography variant="muted" className="leading-relaxed">
                    {card.description}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
