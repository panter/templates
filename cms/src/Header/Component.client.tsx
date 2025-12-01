"use client"

import { Logo } from "@/components/Logo"
import type { Header } from "@/payload-types"
import Link from "next/link"
import { HeaderNav } from "./Nav"

export function HeaderClient({ data }: { data: Header }) {
  return (
    <header className="container mx-auto">
      <div className="flex justify-between py-8">
        <Link href="/">
          <Logo />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
