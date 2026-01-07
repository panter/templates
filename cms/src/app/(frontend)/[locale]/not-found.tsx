import { FileQuestion, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="container flex flex-1 items-center justify-center py-16">
      <div
        className="flex min-h-[50vh] flex-col items-center justify-center gap-6 p-8 text-center md:p-12"
        role="status"
        aria-label="Page not found"
      >
        <div className="bg-muted text-muted-foreground flex size-16 items-center justify-center rounded-full">
          <FileQuestion className="size-8" />
        </div>

        <div className="flex max-w-md flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">404</h1>
          <p className="text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button asChild>
            <Link href="/">
              <Home />
              Go home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
