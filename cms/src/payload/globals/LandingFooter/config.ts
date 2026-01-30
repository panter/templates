import { link } from "@/payload/fields/link"
import { iconSelect } from "@/payload/fields/iconSelect"
import { revalidateGlobal } from "@/utils/globals"
import type { GlobalConfig } from "payload"

export const LandingFooter: GlobalConfig = {
  slug: "landing-footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "brandName",
      type: "text",
      localized: true,
    },
    iconSelect({ name: "brandIcon" }),
    {
      name: "navLinks",
      type: "array",
      maxRows: 8,
      fields: [link({ appearances: false })],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: "copyrightText",
      type: "text",
      localized: true,
    },
    {
      name: "tagline",
      type: "text",
      localized: true,
    },
  ],
  hooks: {
    afterChange: [({ req: { payload } }) => revalidateGlobal("landing-footer", payload)],
  },
}
