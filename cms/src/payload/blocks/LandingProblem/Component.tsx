import { IconComponent } from "@/utils/icon-map"
import { Typography } from "@/components/ui/typography"
import type { LandingProblemBlock } from "@/payload-types"

export function LandingProblemBlock({
  heading,
  subtitle,
  statCards,
  bulletItems,
}: LandingProblemBlock) {
  return (
    <section data-slot="problem-section" className="relative py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
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

          {statCards && statCards.length > 0 && (
            <div className="mb-8 grid gap-8 md:grid-cols-3">
              {statCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-card rounded-xl border p-6 text-center transition-shadow hover:shadow-md"
                >
                  <div className="bg-destructive/10 text-destructive mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                    <IconComponent name={card.icon} className="h-6 w-6" />
                  </div>
                  <Typography variant="h3" as="div" className="mb-2">
                    {card.value}
                  </Typography>
                  <Typography variant="muted">{card.label}</Typography>
                </div>
              ))}
            </div>
          )}

          {bulletItems && bulletItems.length > 0 && (
            <div className="bg-muted/50 rounded-2xl border p-8">
              <ul className="space-y-4 pl-0">
                {bulletItems.map((item) => (
                  <li key={item.id} className="flex list-none items-start gap-3">
                    <span className="bg-accent mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span className="text-foreground">
                      {item.boldText && <strong>{item.boldText}</strong>}
                      {item.boldText && " – "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
