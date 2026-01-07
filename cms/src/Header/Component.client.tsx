"use client"

import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Header } from "@/payload-types"
import { MenuIcon, SearchIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { HeaderNav } from "./Nav"

type HeaderClientProps = {
  data: Header
}

export function HeaderClient({ data }: HeaderClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = data?.navItems || []

  return (
    <header
      data-slot="header"
      className="bg-background/80 z-sticky sticky top-0 border-b backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <Logo />
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <HeaderNav navItems={navItems} />
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <SearchIcon className="size-icon-md" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <SearchIcon className="size-icon-md" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="size-icon-md" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Logo />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                <HeaderNav navItems={navItems} mobile onNavigate={() => setMobileMenuOpen(false)} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
