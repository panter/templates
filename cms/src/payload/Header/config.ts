import { link } from "@/payload/fields/link"
import { revalidateGlobal } from "@/utils/globals"
import type { GlobalConfig } from "payload"

export const Header: GlobalConfig = {
  slug: "header",
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
          RowLabel: "@/Header/RowLabel#RowLabel",
        },
      },
    },
  ],
  hooks: {
    afterChange: [({ req: { payload } }) => revalidateGlobal("header", payload)],
  },
}
