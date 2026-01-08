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

export default function ResetPassword({ user, url }: { user: User; url: string }) {
  return (
    <EmailLayout>
      <Preview>Reset your password</Preview>
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
          Reset your password
        </Heading>

        <Text className="text-[14px] leading-6 text-black">Hello {user.name || "there"},</Text>

        <Text className="text-[14px] leading-6 text-black">
          We received a request to reset the password for your account associated with{" "}
          <strong>{user.email}</strong>.
        </Text>

        <Section className="mt-8 mb-8 text-center">
          <Button
            className="bg-primary rounded px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
            href={url}
          >
            Reset Password
          </Button>
        </Section>

        <Text className="text-[14px] leading-6 text-black">
          or copy and paste this URL into your browser:{" "}
          <Link href={url} className="break-all text-blue-600 no-underline">
            {url}
          </Link>
        </Text>

        <Text className="text-[14px] leading-6 text-black">
          <strong>Important:</strong> This link will expire in 1 hour for security reasons.
        </Text>

        <Hr className="mx-0 my-6.5 w-full border border-solid border-gray-200" />

        <Text className="text-[12px] leading-6 text-gray-400">
          If you didn&apos;t request a password reset, you can safely ignore this email. Your
          password will not be changed unless you click the link above and create a new one.
        </Text>

        <Text className="text-[12px] leading-6 text-gray-400">
          For security reasons, never share this link with anyone. If you&apos;re concerned about
          your account&apos;s safety, please contact support.
        </Text>
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
} satisfies ComponentProps<typeof ResetPassword>
