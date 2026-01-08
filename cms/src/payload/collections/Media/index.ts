import { admin } from "@/payload/access/admin"
import path from "path"
import type { CollectionConfig } from "payload"
import { fileURLToPath } from "url"
import { anyone } from "../../access/anyone"
import { createPlaceholder } from "./createPlaceholder"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: "media",
  folders: true,
  admin: {
    defaultColumns: ["filename", "alt", "caption", "createdAt"],
  },
  access: {
    create: admin,
    delete: admin,
    read: anyone,
    update: admin,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: false,
    },
    {
      name: "caption",
      type: "richText",
      required: false,
    },
    {
      name: "placeholder",
      type: "text",
      admin: {
        hidden: true,
      },
      required: false,
    },
  ],
  hooks: {
    beforeChange: [createPlaceholder],
  },
  upload: {
    staticDir: path.resolve(dirname, "../../../../public/media"),
    adminThumbnail: "thumbnail",
    focalPoint: true,
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        formatOptions: {
          format: "avif",
        },
      },
      {
        name: "square",
        width: 500,
        height: 500,
        formatOptions: {
          format: "avif",
        },
      },
      {
        name: "small",
        width: 600,
        formatOptions: {
          format: "avif",
        },
      },
      {
        name: "medium",
        width: 900,
        formatOptions: {
          format: "avif",
        },
      },
      {
        name: "large",
        width: 1400,
        formatOptions: {
          format: "avif",
        },
      },
      {
        name: "xlarge",
        width: 1920,
        formatOptions: {
          format: "avif",
        },
      },
      {
        name: "og",
        width: 1200,
        height: 630,
        crop: "center",
        background: "#ffffff",
        formatOptions: {
          format: "jpg",
        },
      },
    ],
  },
}
