import type { PayloadPreference } from "@/payload-types"
import { getPayload } from "./getPayload"

export async function getUserPreference<T extends PayloadPreference["value"]>(
  userId: number,
  key: "locale" | "nav",
) {
  const payload = await getPayload()
  const preference = await payload.find({
    collection: "payload-preferences",
    depth: 0,
    where: {
      key: { equals: key },
      "user.relationTo": {
        equals: "users",
      },
      "user.value": { equals: userId },
    },
    limit: 1,
  })

  return preference?.docs?.[0]?.value as T | undefined
}
