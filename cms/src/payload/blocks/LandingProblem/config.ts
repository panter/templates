import type { Block } from "payload"
import { iconSelect } from "../../fields/iconSelect"

export const LandingProblem: Block = {
  slug: "landingProblem",
  interfaceName: "LandingProblemBlock",
  labels: {
    singular: "Landing Problem",
    plural: "Landing Problems",
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
      name: "statCards",
      type: "array",
      maxRows: 6,
      fields: [
        iconSelect(),
        { name: "value", type: "text", required: true, localized: true },
        { name: "label", type: "text", required: true, localized: true },
      ],
    },
    {
      name: "bulletItems",
      type: "array",
      fields: [
        { name: "boldText", type: "text", localized: true },
        { name: "text", type: "text", required: true, localized: true },
      ],
    },
  ],
}
