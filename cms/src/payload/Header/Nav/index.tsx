"use client"

import { CMSLink } from "@/components/Link"
import { Button } from "@/components/ui/button"
import type { Header } from "@/payload-types"
import { cn } from "@/utils/ui"

type NavItem = NonNullable<Header["navItems"]>[number]

type HeaderNavProps = {
  navItems: NavItem[]
  mobile?: boolean
  onNavigate?: () => void
}

export function HeaderNav({ navItems, mobile, onNavigate }: HeaderNavProps) {
  if (navItems.length === 0) {
    return null
  }

  return (
    <nav
      data-slot="header-nav"
      className={cn("flex", mobile ? "flex-col gap-1" : "items-center gap-1")}
    >
      {navItems.map(({ link }, i) => (
        <Button
          key={i}
          variant="ghost"
          size={mobile ? "default" : "sm"}
          className={cn(mobile && "justify-start")}
          asChild
        >
          <CMSLink {...link} appearance="inline" onClick={onNavigate}>
            {link.label}
          </CMSLink>
        </Button>
      ))}
    </nav>
  )
}
