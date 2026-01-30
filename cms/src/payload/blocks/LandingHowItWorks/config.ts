import type { Block } from "payload"
import { iconSelect } from "../../fields/iconSelect"

export const LandingHowItWorks: Block = {
  slug: "landingHowItWorks",
  interfaceName: "LandingHowItWorksBlock",
  labels: {
    singular: "Landing How It Works",
    plural: "Landing How It Works",
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
      name: "steps",
      type: "array",
      maxRows: 6,
      fields: [
        iconSelect(),
        { name: "title", type: "text", required: true, localized: true },
        { name: "description", type: "textarea", required: true, localized: true },
      ],
    },
    {
      name: "featureItems",
      type: "array",
      maxRows: 4,
      fields: [
        iconSelect(),
        { name: "title", type: "text", required: true, localized: true },
        { name: "description", type: "textarea", required: true, localized: true },
      ],
    },
  ],
}
