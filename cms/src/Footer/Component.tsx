import { CMSLink } from "@/components/Link"
import { Logo } from "@/components/Logo"
import { Separator } from "@/components/ui/separator"
import type { Footer } from "@/payload-types"
import { getCachedGlobal } from "@/utils/globals"
import Link from "next/link"

export async function Footer() {
  const footerData: Footer = await getCachedGlobal("footer", 1)
  const navItems = footerData?.navItems || []
  const currentYear = new Date().getFullYear()

  return (
    <footer data-slot="footer" className="bg-muted mt-auto border-t">
      <div className="container py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex shrink-0 items-center">
            <Logo />
          </Link>

          {navItems.length > 0 && (
            <nav className="flex flex-wrap gap-4 md:gap-6">
              {navItems.map(({ link }, i) => (
                <CMSLink
                  key={i}
                  {...link}
                  appearance="inline"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                />
              ))}
            </nav>
          )}
        </div>

        <Separator className="my-6" />

        <div className="text-muted-foreground flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
