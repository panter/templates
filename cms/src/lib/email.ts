import type { CreateEmailOptions, CreateEmailRequestOptions } from "resend"
import { Resend } from "resend"
import { getPayload } from "./getPayload"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(
  options: Omit<CreateEmailOptions, "from"> & { from?: string },
  request?: CreateEmailRequestOptions,
) {
  const payload = await getPayload()

  const optionsWithDefaults = {
    ...options,
    from: options.from || `${payload.email.defaultFromName} <${payload.email.defaultFromAddress}>`,
  } as CreateEmailOptions // typescript go home, you are drunk

  payload.logger.info(
    {
      to: optionsWithDefaults.to,
      subject: optionsWithDefaults.subject,
      from: optionsWithDefaults.from,
    },
    `sending email`,
  )

  const result = await resend.emails.send(optionsWithDefaults, request)

  if (result.error) {
    payload.logger.error({ error: result.error }, `error sending email`)
  } else {
    payload.logger.info({ id: result.data.id }, `email sent successfully`)
  }

  return result
}
