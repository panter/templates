import { CMSLink } from "@/components/Link"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import type { LandingHeroBlock } from "@/payload-types"

export function LandingHeroBlock({
  badgeText,
  heading,
  headingAccent,
  subtitle,
  links,
  stats,
}: LandingHeroBlock) {
  return (
    <section
      data-slot="hero-section"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 container py-16">
        <div className="mx-auto max-w-4xl text-center">
          {badgeText && (
            <Badge
              variant="outline"
              className="border-accent/20 bg-accent/10 text-foreground mb-6 gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
              </span>
              {badgeText}
            </Badge>
          )}

          <Typography variant="h1" className="mb-6 text-balance">
            {heading}{" "}
            {headingAccent && (
              <span className="from-accent to-accent/70 bg-gradient-to-r bg-clip-text text-transparent">
                {headingAccent}
              </span>
            )}
          </Typography>

          {subtitle && (
            <Typography variant="lead" className="mx-auto mb-8 max-w-3xl text-balance">
              {subtitle}
            </Typography>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {links.map(({ link }, i) => (
                <CMSLink key={i} size="lg" className="h-12 px-8 text-base" {...link} />
              ))}
            </div>
          )}

          {stats && stats.length > 0 && (
            <div
              className="mx-auto mt-12 grid max-w-2xl gap-8"
              style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
            >
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <Typography variant="h3" as="div" className="mb-1">
                    {stat.value}
                  </Typography>
                  <Typography variant="muted">{stat.label}</Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="via-border absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent" />
    </section>
  )
}
