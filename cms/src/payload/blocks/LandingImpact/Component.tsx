import { IconComponent } from "@/utils/icon-map"
import { Typography } from "@/components/ui/typography"
import { Quote } from "lucide-react"
import type { LandingImpactBlock } from "@/payload-types"

export function LandingImpactBlock({
  heading,
  subtitle,
  metricCards,
  testimonial,
  statusBoxes,
}: LandingImpactBlock) {
  return (
    <section data-slot="impact-section" className="bg-muted/30 relative py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Typography variant="h2" className="mb-6">
              {heading}
            </Typography>
            {subtitle && <Typography variant="lead">{subtitle}</Typography>}
          </div>

          {metricCards && metricCards.length > 0 && (
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              {metricCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-card rounded-2xl border p-8 text-center transition-all hover:shadow-md"
                >
                  <div className="bg-accent/10 text-accent mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl">
                    <IconComponent name={card.icon} className="h-7 w-7" />
                  </div>
                  <Typography variant="h2" as="div" className="mb-2">
                    {card.value}
                  </Typography>
                  <Typography as="div" className="mb-2 font-semibold">
                    {card.title}
                  </Typography>
                  {card.description && (
                    <Typography variant="muted" className="text-sm">
                      {card.description}
                    </Typography>
                  )}
                </div>
              ))}
            </div>
          )}

          {testimonial?.quote && (
            <div className="relative">
              <div className="border-accent from-accent/5 to-accent/10 rounded-2xl border-l-4 bg-gradient-to-br p-8 md:p-12">
                <Quote className="text-accent/30 mb-6 h-12 w-12" />
                <blockquote className="mb-6 border-none p-0 text-2xl font-semibold text-balance md:text-3xl">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  {testimonial.authorName && (
                    <div className="bg-accent/20 text-accent flex h-12 w-12 items-center justify-center rounded-full font-bold">
                      {testimonial.authorName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    {testimonial.authorName && (
                      <Typography as="div" className="font-semibold">
                        {testimonial.authorName}
                      </Typography>
                    )}
                    {(testimonial.authorRole || testimonial.organization) && (
                      <Typography variant="muted">
                        {[testimonial.authorRole, testimonial.organization]
                          .filter(Boolean)
                          .join(" - ")}
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {statusBoxes && statusBoxes.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {statusBoxes.map((box) => (
                <div key={box.id} className="text-center">
                  <Typography variant="small" className="text-accent mb-2 font-semibold">
                    {box.label}
                  </Typography>
                  <Typography as="div" className="text-lg font-medium">
                    {box.text}
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
