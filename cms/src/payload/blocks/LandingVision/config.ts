import type { Block } from "payload"
import { iconSelect } from "../../fields/iconSelect"

export const LandingVision: Block = {
  slug: "landingVision",
  interfaceName: "LandingVisionBlock",
  labels: {
    singular: "Landing Vision",
    plural: "Landing Visions",
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
      name: "badgeText",
      type: "text",
      localized: true,
    },
    {
      name: "roadmapCards",
      type: "array",
      maxRows: 6,
      fields: [
        iconSelect(),
        { name: "phase", type: "text", required: true, localized: true },
        { name: "badge", type: "text", localized: true },
        { name: "title", type: "text", required: true, localized: true },
        { name: "subtitle", type: "text", localized: true },
        {
          name: "items",
          type: "array",
          fields: [{ name: "text", type: "text", required: true, localized: true }],
        },
      ],
    },
    {
      name: "pillarsHeading",
      type: "text",
      localized: true,
    },
    {
      name: "pillars",
      type: "array",
      maxRows: 6,
      fields: [
        { name: "title", type: "text", required: true, localized: true },
        { name: "description", type: "textarea", required: true, localized: true },
      ],
    },
  ],
}
