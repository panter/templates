import { cookies } from "next/headers"
import type { User } from "../payload-types"
import { getURL } from "./getURL"

// TODO: use better auth instead

export async function getMeUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get("payload-token")?.value
  if (!token) {
    return null
  }

  const meUserReq = await fetch(`${getURL()}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

  if (!meUserReq.ok) {
    return null
  }

  const {
    user,
  }: {
    user: User
  } = await meUserReq.json()

  return {
    token: token,
    user,
  }
}
