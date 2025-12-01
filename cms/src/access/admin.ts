import type { User } from "@/payload-types"
import type { AccessArgs, Where } from "payload"

export const admin = ({ req: { user } }: AccessArgs<User>) => {
  return !!user?.role?.includes("admin")
}

export const adminOrMe = (args: AccessArgs<User>) => {
  return adminOrWhere(args, (user) => ({ id: { equals: user?.id } }))
}

export const adminOrWhere = (
  args: AccessArgs<User>,
  where: (user: typeof args.req.user) => Where,
) => {
  return admin(args) ? true : where(args.req.user)
}
