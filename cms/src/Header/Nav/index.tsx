"use client"

import { CMSLink } from "@/components/Link"
import type { Header as HeaderType } from "@/payload-types"
import { SearchIcon } from "lucide-react"
import Link from "next/link"

export function HeaderNav({ data }: { data: HeaderType }) {
  const navItems = data?.navItems || []

  return (
    <nav className="flex items-center gap-3">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="text-primary w-5" />
      </Link>
    </nav>
  )
}
