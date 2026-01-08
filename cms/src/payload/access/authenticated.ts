import type { User } from "@/payload-types"
import type { AccessArgs } from "payload"

export const authenticated = ({ req: { user } }: AccessArgs<User>) => {
  return Boolean(user)
}
