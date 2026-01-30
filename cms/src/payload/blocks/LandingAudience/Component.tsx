import { IconComponent } from "@/utils/icon-map"
import { Typography } from "@/components/ui/typography"
import type { LandingAudienceBlock } from "@/payload-types"

export function LandingAudienceBlock({ heading, subtitle, audienceCards }: LandingAudienceBlock) {
  return (
    <section data-slot="audience-section" className="bg-muted/30 relative py-16">
      <div className="container">
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

          {audienceCards && audienceCards.length > 0 && (
            <div className="grid gap-8 lg:grid-cols-3">
              {audienceCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-card flex flex-col rounded-2xl border p-8 transition-all hover:shadow-md"
                >
                  <div className="bg-accent/10 text-accent mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl">
                    <IconComponent name={card.icon} className="h-7 w-7" />
                  </div>
                  <Typography variant="h4" as="h3" className="mb-4">
                    {card.title}
                  </Typography>
                  {card.items && card.items.length > 0 && (
                    <ul className="mb-6 flex-grow space-y-3 pl-0">
                      {card.items.map((item) => (
                        <li key={item.id} className="flex list-none items-start gap-2">
                          <span className="bg-accent mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                          <Typography variant="muted" className="text-sm">
                            {item.text}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                  {card.footer && (
                    <div className="border-t pt-6">
                      <Typography variant="small" className="text-accent font-medium">
                        {card.footer}
                      </Typography>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
