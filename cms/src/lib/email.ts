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

const send = getSendFunction()

type SendFunction = Resend["emails"]["send"]

function getSendFunction(): SendFunction {
  if (!process.env.RESEND_API_KEY) {
    return async (...args) => {
      const payload = await getPayload()

      payload.logger.warn(
        "RESEND_API_KEY not set, emails will not be sent. Set RESEND_API_KEY to enable email sending.",
      )

      const html = await render(args[0].react)
      const text = toPlainText(html)

      payload.logger.info(
        {
          to: args[0].to,
          replyTo: args[0].replyTo,
          from: args[0].from,
          subject: args[0].subject,
          cc: args[0].cc,
          bcc: args[0].bcc,
          tags: args[0].tags,
          attachments: args[0].attachments?.map((att) => att.filename),
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

  const resend = new Resend(process.env.RESEND_API_KEY)
  return resend.emails.send
}
