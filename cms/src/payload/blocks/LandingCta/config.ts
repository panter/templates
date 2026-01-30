import type { Block } from "payload"
import { iconSelect } from "../../fields/iconSelect"
import { linkGroup } from "../../fields/linkGroup"

export const LandingCta: Block = {
  slug: "landingCta",
  interfaceName: "LandingCtaBlock",
  labels: {
    singular: "Landing CTA",
    plural: "Landing CTAs",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "subtitle",
      type: "textarea",
      localized: true,
    },
    {
      name: "partnerCards",
      type: "array",
      maxRows: 6,
      fields: [
        iconSelect(),
        { name: "title", type: "text", required: true, localized: true },
        { name: "description", type: "textarea", localized: true },
      ],
    },
    {
      name: "ctaBox",
      type: "group",
      fields: [
        { name: "heading", type: "text", localized: true },
        { name: "description", type: "textarea", localized: true },
        linkGroup({
          appearances: ["default", "outline"],
          overrides: { maxRows: 3 },
        }),
      ],
    },
    {
      name: "contactText",
      type: "text",
      localized: true,
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      type: "text",
    },
  ],
}
