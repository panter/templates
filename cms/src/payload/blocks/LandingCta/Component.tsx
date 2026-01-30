import { CMSLink } from "@/components/Link"
import { IconComponent } from "@/utils/icon-map"
import { Typography } from "@/components/ui/typography"
import type { LandingCtaBlock } from "@/payload-types"

export function LandingCtaBlock({
  heading,
  subtitle,
  partnerCards,
  ctaBox,
  contactText,
  email,
  phone,
}: LandingCtaBlock) {
  return (
    <section data-slot="cta-section" className="relative overflow-hidden py-16">
      <div className="relative z-10 container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <Typography variant="h2" className="mb-6">
              {heading}
            </Typography>
            {subtitle && (
              <Typography variant="lead" className="mx-auto max-w-2xl">
                {subtitle}
              </Typography>
            )}
          </div>

          {partnerCards && partnerCards.length > 0 && (
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              {partnerCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-card rounded-xl border p-6 text-center transition-all hover:shadow-md"
                >
                  <div className="bg-accent/10 text-accent mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                    <IconComponent name={card.icon} className="h-6 w-6" />
                  </div>
                  <Typography as="h3" className="mb-2 font-semibold">
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

          {ctaBox && (
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-xl md:p-12">
              {ctaBox.heading && (
                <Typography variant="h3" as="h3" className="text-primary-foreground mb-4">
                  {ctaBox.heading}
                </Typography>
              )}
              {ctaBox.description && (
                <Typography as="p" className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                  {ctaBox.description}
                </Typography>
              )}
              {ctaBox.links && ctaBox.links.length > 0 && (
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  {ctaBox.links.map(({ link }, i) => (
                    <CMSLink key={i} size="lg" className="h-12 px-8 text-base" {...link} />
                  ))}
                </div>
              )}
            </div>
          )}

          {(contactText || email || phone) && (
            <div className="mt-8 text-center">
              {contactText && (
                <Typography variant="muted" className="mb-4 text-sm">
                  {contactText}
                </Typography>
              )}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                {email && <span className="text-accent font-medium">{email}</span>}
                {email && phone && <span className="text-muted-foreground">&bull;</span>}
                {phone && <span className="text-accent font-medium">{phone}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
