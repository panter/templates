import { link } from "@/fields/link"
import { revalidateGlobal } from "@/utils/globals"
import type { GlobalConfig } from "payload"

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: "@/Footer/RowLabel#RowLabel",
        },
      },
    },
  ],
  hooks: {
    afterChange: [({ req: { payload } }) => revalidateGlobal("footer", payload)],
  },
}
