import type { Block } from "payload"
import { linkGroup } from "../../fields/linkGroup"

export const LandingHero: Block = {
  slug: "landingHero",
  interfaceName: "LandingHeroBlock",
  labels: {
    singular: "Landing Hero",
    plural: "Landing Heroes",
  },
  fields: [
    {
      name: "badgeText",
      type: "text",
      localized: true,
    },
    {
      name: "heading",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "headingAccent",
      type: "text",
      localized: true,
      admin: {
        description: "Text displayed with accent gradient styling",
      },
    },
    {
      name: "subtitle",
      type: "textarea",
      localized: true,
    },
    linkGroup({
      appearances: ["default", "outline"],
      overrides: { maxRows: 3 },
    }),
    {
      name: "stats",
      type: "array",
      maxRows: 4,
      fields: [
        { name: "value", type: "text", required: true, localized: true },
        { name: "label", type: "text", required: true, localized: true },
      ],
    },
  ],
}
