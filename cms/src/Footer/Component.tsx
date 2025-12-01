import { CMSLink } from "@/components/Link"
import { Logo } from "@/components/Logo"
import type { Footer } from "@/payload-types"
import { getCachedGlobal } from "@/utils/globals"
import { getTranslations } from "@panter/translate/next-intl/server"
import Link from "next/link"

export async function Footer() {
  const footerData: Footer = await getCachedGlobal("footer", 1)
  const t = await getTranslations("footer")

  const navItems = footerData?.navItems || []

  return (
    <footer className="border-border dark:bg-card mt-auto border-t bg-black text-white">
      <div className="container mx-auto flex flex-col gap-8 py-8 md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        {t("copyright")}

        <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center">
          <nav className="flex flex-col gap-4 md:flex-row">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
