import { CMSLink } from "@/components/Link"
import { IconComponent } from "@/utils/icon-map"
import { Typography } from "@/components/ui/typography"
import type { LandingFooter } from "@/payload-types"

export function LandingFooterBlock({
  brandName,
  brandIcon,
  navLinks,
  copyrightText,
  tagline,
}: LandingFooter) {
  return (
    <footer data-slot="landing-footer" className="bg-card border-t">
      <div className="container py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="bg-accent flex h-8 w-8 items-center justify-center rounded-lg">
                <IconComponent name={brandIcon} className="text-accent-foreground h-5 w-5" />
              </div>
              {brandName && (
                <Typography as="span" className="text-xl font-bold">
                  {brandName}
                </Typography>
              )}
            </div>
            {navLinks && navLinks.length > 0 && (
              <div className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm">
                {navLinks.map(({ link }, i) => (
                  <CMSLink key={i} className="hover:text-foreground transition-colors" {...link} />
                ))}
              </div>
            )}
            {copyrightText && (
              <Typography variant="muted" className="text-sm">
                {copyrightText}
              </Typography>
            )}
          </div>
          {tagline && (
            <div className="mt-6 border-t pt-6 text-center">
              <Typography variant="muted" className="text-sm">
                {tagline}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
