"use client"

import { Button } from "@/components/ui/button"
import { CookieBanner as Banner } from "@c15t/nextjs"

export function CookieBanner({
  translations: { title, description, rejectAll, acceptAll, customize },
}: {
  translations: {
    title: string
    description: string
    rejectAll: string
    acceptAll: string
    customize: string
  }
}) {
  return (
    <Banner.Root>
      <Banner.Card autoFocus={false}>
        <Banner.Header>
          <Banner.Title>{title}</Banner.Title>
          <Banner.Description>{description}</Banner.Description>
        </Banner.Header>

        <Banner.Footer>
          <Banner.FooterSubGroup>
            <Banner.AcceptButton noStyle asChild themeKey="banner.root">
              <Button autoFocus>{acceptAll}</Button>
            </Banner.AcceptButton>

            <Banner.RejectButton noStyle asChild themeKey="banner.root">
              <Button variant="ghost">{rejectAll}</Button>
            </Banner.RejectButton>
          </Banner.FooterSubGroup>

          <Banner.CustomizeButton noStyle asChild themeKey="banner.root">
            <Button variant="outline">{customize}</Button>
          </Banner.CustomizeButton>
        </Banner.Footer>
      </Banner.Card>
    </Banner.Root>
  )
}
