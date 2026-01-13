import { sendEmail } from "@/lib/email"
import type { ComponentProps } from "react"
import InviteUser from "./InviteUser"
import ResetPassword from "./ResetPassword"
import UserVerification from "./UserVerification"

export async function sendResetPassword(props: ComponentProps<typeof ResetPassword>) {
  return await sendEmail({
    to: props.user.email,
    subject: "Reset your password",
    react: <ResetPassword {...props} />,
  })
}

export async function sendInvite(props: ComponentProps<typeof InviteUser> & { email: string }) {
  return await sendEmail({
    to: props.email,
    subject: "You've been invited to join our platform",
    react: <InviteUser {...props} />,
  })
}

export async function sendEmailVerification(props: ComponentProps<typeof UserVerification>) {
  return await sendEmail({
    to: props.user.email,
    subject: "Verify your email address",
    react: <UserVerification {...props} />,
  })
}
