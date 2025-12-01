import { admin, adminOrMe } from "@/access/admin"
import type { CollectionConfig } from "payload"
import { authenticated } from "../../access/authenticated"

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    create: authenticated,
    admin: admin,
    delete: admin,
    read: adminOrMe,
    update: adminOrMe,
  },
  admin: {
    defaultColumns: ["name", "email"],
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    // fields are created by Payload Auth plugin
  ],
  timestamps: true,
}
