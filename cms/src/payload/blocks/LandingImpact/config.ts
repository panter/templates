import type { Block } from "payload"
import { iconSelect } from "../../fields/iconSelect"

export const LandingImpact: Block = {
  slug: "landingImpact",
  interfaceName: "LandingImpactBlock",
  labels: {
    singular: "Landing Impact",
    plural: "Landing Impacts",
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
      name: "metricCards",
      type: "array",
      maxRows: 6,
      fields: [
        iconSelect(),
        { name: "value", type: "text", required: true, localized: true },
        { name: "title", type: "text", required: true, localized: true },
        { name: "description", type: "textarea", localized: true },
      ],
    },
    {
      name: "testimonial",
      type: "group",
      fields: [
        { name: "quote", type: "textarea", localized: true },
        { name: "authorName", type: "text", localized: true },
        { name: "authorRole", type: "text", localized: true },
        { name: "organization", type: "text", localized: true },
      ],
    },
    {
      name: "statusBoxes",
      type: "array",
      maxRows: 6,
      fields: [
        { name: "label", type: "text", required: true, localized: true },
        { name: "text", type: "text", required: true, localized: true },
      ],
    },
  ],
}
