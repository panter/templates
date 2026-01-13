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
import type { ComponentProps } from "react"
import { EmailLayout } from "./EmailLayout"
import { getEmailMessages } from "./getEmailMessages"

export default async function InviteUser({ url, locale }: { url: string; locale: Locale }) {
  const { t } = await getEmailMessages(locale, "inviteUser")

  return (
    <EmailLayout>
      <Preview>{t("preview")}</Preview>
      <Container className="mx-auto my-10 max-w-116 rounded border border-solid border-gray-200 p-5">
        <Section className="mt-8">
          <Img
            src="https://lipsum.app/random/128x128"
            width="40"
            height="40"
            alt="Logo"
            className="mx-auto my-0 rounded-md"
          />
        </Section>

        <Heading className="mx-0 my-7.5 p-0 text-center text-[24px] font-normal text-black">
          {t("title")}
        </Heading>

        <Text className="text-[14px] leading-6 text-black">{t("hello")}</Text>

        <Text className="text-[14px] leading-6 text-black">{t("youHaveBeenInvited")}</Text>

        <Text className="text-[14px] leading-6 text-black">{t("clickTheButtonBelow")}</Text>

        <Section className="mt-8 mb-8 text-center">
          <Button
            className="bg-primary rounded px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
            href={url}
          >
            {t("acceptInvitation")}
          </Button>
        </Section>

        <Text className="text-[14px] leading-6 text-black">
          {t("orCopyAndPaste")}
          <Link href={url} className="break-all text-blue-600 no-underline">
            {url}
          </Link>
        </Text>

        <Hr className="mx-0 my-6.5 w-full border border-solid border-gray-200" />

        <Text className="text-[12px] leading-6 text-gray-400">{t("notExpectingThisEmail")}</Text>

        <Text className="text-[12px] leading-6 text-gray-400">{t("questions")}</Text>
      </Container>
    </EmailLayout>
  )
}

InviteUser.PreviewProps = {
  url: "https://example.com/verify?token=eydalgb2JhbC5tZXRhZGF0YS5lbWFpbC50b2tlbiAnMTIzNDU2Nzg5MCcgOyB9",
  locale: DEFAULT_LOCALE,
} satisfies ComponentProps<typeof InviteUser>
