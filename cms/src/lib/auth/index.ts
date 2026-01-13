import { headers as getHeaders } from "next/headers"
import { getPayload } from "../getPayload"

export async function getCurrentUser() {
  const payload = await getPayload()
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })
  return user
}

export async function getCurrentSession() {
  const payload = await getPayload()
  const headers = await getHeaders()
  type Session = (typeof payload.betterAuth.$Infer)["Session"]
  const session = (await payload.betterAuth.api.getSession({ headers })) as Session
  return session
}

export async function getCurrentUserAccounts() {
  const payload = await getPayload()
  const headers = await getHeaders()
  const accounts = await payload.betterAuth.api.listUserAccounts({ headers })
  return accounts
}

export async function getDeviceSessions() {
  const payload = await getPayload()
  const headers = await getHeaders()
  const sessions = await payload.betterAuth.api.listSessions({ headers })
  return sessions
}
