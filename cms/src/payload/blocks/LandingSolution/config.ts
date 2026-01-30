import type { Block } from "payload"
import { iconSelect } from "../../fields/iconSelect"

export const LandingSolution: Block = {
  slug: "landingSolution",
  interfaceName: "LandingSolutionBlock",
  labels: {
    singular: "Landing Solution",
    plural: "Landing Solutions",
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
      name: "subtitle",
      type: "textarea",
      localized: true,
    },
    {
      name: "featureCards",
      type: "array",
      maxRows: 8,
      fields: [
        iconSelect(),
        { name: "title", type: "text", required: true, localized: true },
        { name: "description", type: "textarea", required: true, localized: true },
      ],
    },
  ],
}
