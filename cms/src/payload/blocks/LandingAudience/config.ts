import type { Block } from "payload"
import { iconSelect } from "../../fields/iconSelect"

export const LandingAudience: Block = {
  slug: "landingAudience",
  interfaceName: "LandingAudienceBlock",
  labels: {
    singular: "Landing Audience",
    plural: "Landing Audiences",
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
      name: "audienceCards",
      type: "array",
      maxRows: 6,
      fields: [
        iconSelect(),
        { name: "title", type: "text", required: true, localized: true },
        {
          name: "items",
          type: "array",
          fields: [{ name: "text", type: "text", required: true, localized: true }],
        },
        { name: "footer", type: "text", localized: true },
      ],
    },
  ],
}
