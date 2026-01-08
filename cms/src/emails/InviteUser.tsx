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
import { EmailLayout } from "./EmailLayout"
import type { ComponentProps } from "react"

export default function InviteUser({ url }: { url: string }) {
  return (
    <EmailLayout>
      <Preview>You&apos;ve been invited to join our platform</Preview>
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
          You&apos;ve been <strong>invited</strong>
        </Heading>

        <Text className="text-[14px] leading-6 text-black">Hello,</Text>

        <Text className="text-[14px] leading-6 text-black">
          You&apos;ve been invited to join our platform. We&apos;re excited to have you on board!
        </Text>

        <Text className="text-[14px] leading-6 text-black">
          Click the button below to accept your invitation and create your account.
        </Text>

        <Section className="mt-8 mb-8 text-center">
          <Button
            className="bg-primary rounded px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
            href={url}
          >
            Accept Invitation
          </Button>
        </Section>

        <Text className="text-[14px] leading-6 text-black">
          or copy and paste this URL into your browser:{" "}
          <Link href={url} className="break-all text-blue-600 no-underline">
            {url}
          </Link>
        </Text>

        <Hr className="mx-0 my-6.5 w-full border border-solid border-gray-200" />

        <Text className="text-[12px] leading-6 text-gray-400">
          If you weren&apos;t expecting this invitation, you can safely ignore this email. No
          account will be created unless you click the link above.
        </Text>

        <Text className="text-[12px] leading-6 text-gray-400">
          If you have any questions or need assistance, please don&apos;t hesitate to contact our
          support team.
        </Text>
      </Container>
    </EmailLayout>
  )
}

InviteUser.PreviewProps = {
  url: "https://example.com/verify?token=eydalgb2JhbC5tZXRhZGF0YS5lbWFpbC50b2tlbiAnMTIzNDU2Nzg5MCcgOyB9",
} satisfies ComponentProps<typeof InviteUser>
