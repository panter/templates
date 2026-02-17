import { render, toPlainText } from "@react-email/components"
import type { CreateEmailOptions, CreateEmailRequestOptions } from "resend"
import { Resend } from "resend"
import { getPayload } from "./getPayload"

export async function sendEmail(
  options: Omit<CreateEmailOptions, "from"> & { from?: string },
  request?: CreateEmailRequestOptions,
) {
  const payload = await getPayload()

  const optionsWithDefaults = {
    ...options,
    from: options.from || `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
  } as CreateEmailOptions // typescript go home, you are drunk

  payload.logger.info(
    {
      to: optionsWithDefaults.to,
      subject: optionsWithDefaults.subject,
      from: optionsWithDefaults.from,
    },
    `sending email`,
  )

  const result = await send(optionsWithDefaults, request)

  if (result.error) {
    payload.logger.error({ error: result.error }, `error sending email`)
  } else {
    payload.logger.info({ id: result.data.id }, `email sent successfully`)
  }

  return result
}

async function send(options: CreateEmailOptions, request?: CreateEmailRequestOptions) {
  const canSendEmail = !!process.env.RESEND_API_KEY

  if (canSendEmail) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    return await resend.emails.send(options, request)
  } else {
    const payload = await getPayload()

    payload.logger.warn(
      "RESEND_API_KEY not set, emails will not be sent. Set RESEND_API_KEY to enable email sending.",
    )

    const html = await render(options.react)
    const text = toPlainText(html)

    payload.logger.info(
      {
        to: options.to,
        replyTo: options.replyTo,
        from: options.from,
        subject: options.subject,
        cc: options.cc,
        bcc: options.bcc,
        tags: options.tags,
        attachments: options.attachments?.map((att) => att.filename),
      },
      `Email message: \n${text}`,
    )

    return {
      error: null,
      headers: null,
      data: {
        id: "dummy-id",
      },
    }
  }
}
