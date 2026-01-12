import { sendEmail } from "@/lib/email"
import type { User } from "better-auth"
import InviteUser from "./InviteUser"
import ResetPassword from "./ResetPassword"
import UserVerification from "./UserVerification"

// TODO: setup localization https://react.email/docs/guides/internationalization/react-intl

export async function sendResetPassword({ user, url }: { user: User; url: string }) {
  return await sendEmail({
    to: user.email,
    subject: "Reset your password",
    react: <ResetPassword user={user} url={url} />,
  })
}

export async function sendInvite({ email, url }: { email: string; url: string }) {
  return await sendEmail({
    to: email,
    subject: "You've been invited to join our platform",
    react: <InviteUser url={url} />,
  })
}

export async function sendEmailVerification({ user, url }: { user: User; url: string }) {
  return await sendEmail({
    to: user.email,
    subject: "Verify your email address",
    react: <UserVerification url={url} user={user} />,
  })
}
