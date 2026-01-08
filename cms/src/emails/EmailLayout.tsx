import { Tailwind, pixelBasedPreset, Body, Html, Head } from "@react-email/components"
import type { PropsWithChildren } from "react"

export function EmailLayout({ children }: PropsWithChildren) {
  // NOTE: Tailwind limitations in emails: https://react.email/docs/components/tailwind#known-limitations

  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                // TODO: can we get our tokens from app's tailwind config?
                primary: "#101010",
              },
            },
          },
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">{children}</Body>
      </Tailwind>
    </Html>
  )
}
