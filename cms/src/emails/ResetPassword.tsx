import type { Locale } from "@/i18n"
import { DEFAULT_LOCALE } from "@/i18n/config"
import {
  Button,
  Container,
  Heading,
  Hr,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import type { User } from "better-auth"
import type { ComponentProps } from "react"
import { EmailLayout } from "./EmailLayout"
import { getEmailMessages } from "./getEmailMessages"

export default async function ResetPassword({
  user,
  url,
  locale,
}: {
  user: User
  url: string
  locale: Locale
}) {
  const { t } = await getEmailMessages(locale, "resetPassword")
  return (
    <EmailLayout>
      <Preview>{t("preview")}</Preview>
      <Container className="mx-auto my-10 max-w-116 rounded border border-solid border-gray-200 p-5">
        <Section className="mt-8">
          {user.image && (
            <Img
              src={user.image}
              width="40"
              height="40"
              alt="Logo"
              className="mx-auto my-0 rounded-md"
            />
          )}
        </Section>

        <Heading className="mx-0 my-7.5 p-0 text-center text-[24px] font-normal text-black">
          {t("title")}
        </Heading>

        <Text className="text-[14px] leading-6 text-black">{t("hello", { name: user.name })}</Text>

        <Text className="text-[14px] leading-6 text-black">
          {t("requestReceived", { email: user.email })}
        </Text>

        <Section className="mt-8 mb-8 text-center">
          <Button
            className="bg-primary rounded px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
            href={url}
          >
            {t("buttonText")}
          </Button>
        </Section>

        <Text className="text-[14px] leading-6 text-black">
          {t("orCopyAndPaste")}
          <Link href={url} className="break-all text-blue-600 no-underline">
            {url}
          </Link>
        </Text>

        <Text className="text-[14px] leading-6 text-black">{t("expirationNotice")}</Text>

        <Hr className="mx-0 my-6.5 w-full border border-solid border-gray-200" />

        <Text className="text-[12px] leading-6 text-gray-400">{t("didntRequest")}</Text>

        <Text className="text-[12px] leading-6 text-gray-400">{t("securityWarning")}</Text>
      </Container>
    </EmailLayout>
  )
}

ResetPassword.PreviewProps = {
  user: {
    id: "1234",
    email: "user@panter.ch",
    emailVerified: false,
    name: "John Doe",
    image: "https://lipsum.app/random/128x128",
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  url: "https://example.com/verify?token=eydalgb2JhbC5tZXRhZGF0YS5lbWFpbC50b2tlbiAnMTIzNDU2Nzg5MCcgOyB9",
  locale: DEFAULT_LOCALE,
} satisfies ComponentProps<typeof ResetPassword>
