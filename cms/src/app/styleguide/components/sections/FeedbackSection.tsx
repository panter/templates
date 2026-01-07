"use client"

import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { ErrorBoundary } from "@/components/feedback/error-boundary"
import { AlertCircle, CheckCircle2, Info, TriangleAlert, FileText } from "lucide-react"
import { toast } from "sonner"
import { ComponentPreview } from "../shared/ComponentPreview"
import { SectionWrapper, Subsection } from "../shared/SectionWrapper"
import { Typography } from "@/components/ui/typography"

function BuggyButton() {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error("Test error triggered!")
  }

  return (
    <Button variant="destructive" onClick={() => setShouldError(true)}>
      Trigger Error
    </Button>
  )
}

export function FeedbackSection() {
  return (
    <SectionWrapper
      id="feedback"
      title="Feedback"
      description="Components for displaying status, progress, and notifications."
    >
      <Subsection title="Alerts">
        <ComponentPreview
          code={`<Alert>
  <Terminal className="size-4" />
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>This is a default alert.</AlertDescription>
</Alert>

<Alert variant="success">
  <CheckCircle2 className="size-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>

<Alert variant="warning">
  <TriangleAlert className="size-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please check your input.</AlertDescription>
</Alert>

<Alert variant="info">
  <Info className="size-4" />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>Here is some information.</AlertDescription>
</Alert>`}
        >
          <div className="max-w-xl space-y-4">
            <Alert>
              <AlertTitle>Default</AlertTitle>
              <AlertDescription>This is a default alert with neutral styling.</AlertDescription>
            </Alert>

            <Alert variant="success">
              <CheckCircle2 className="size-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Your changes have been saved successfully.</AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Something went wrong. Please try again later.</AlertDescription>
            </Alert>

            <Alert variant="warning">
              <TriangleAlert className="size-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>Please check your input before continuing.</AlertDescription>
            </Alert>

            <Alert variant="info">
              <Info className="size-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>Here is some helpful information.</AlertDescription>
            </Alert>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Badges">
        <ComponentPreview
          code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Progress">
        <ComponentPreview
          code={`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
        >
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="text-muted-foreground">25%</span>
              </div>
              <Progress value={25} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="text-muted-foreground">50%</span>
              </div>
              <Progress value={50} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="text-muted-foreground">75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="text-muted-foreground">100%</span>
              </div>
              <Progress value={100} />
            </div>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Skeleton">
        <ComponentPreview
          code={`<div className="flex items-center gap-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-50" />
    <Skeleton className="h-4 w-40" />
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-50" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full max-w-md" />
              <Skeleton className="h-4 w-full max-w-sm" />
              <Skeleton className="h-4 w-full max-w-xs" />
            </div>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Toast (Sonner)">
        <ComponentPreview
          code={`import { toast } from "sonner"

// Default
toast("Default toast notification")

// Success
toast.success("Operation completed successfully!")

// Error
toast.error("Something went wrong")

// Warning
toast.warning("Please check your input")

// Info
toast.info("Here is some information")

// With action
toast("Event created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo clicked"),
  },
})`}
        >
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => toast("Default toast notification")}>
              Default Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.success("Operation completed successfully!")}
            >
              Success Toast
            </Button>
            <Button variant="outline" onClick={() => toast.error("Something went wrong")}>
              Error Toast
            </Button>
            <Button variant="outline" onClick={() => toast.warning("Please check your input")}>
              Warning Toast
            </Button>
            <Button variant="outline" onClick={() => toast.info("Here is some information")}>
              Info Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
                  loading: "Loading...",
                  success: "Done!",
                  error: "Error",
                })
              }
            >
              Promise Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo clicked"),
                  },
                })
              }
            >
              Toast with Action
            </Button>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Empty States">
        <ComponentPreview
          code={`<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FileText />
    </EmptyMedia>
    <EmptyTitle>No documents</EmptyTitle>
    <EmptyDescription>
      You haven't created any documents yet.
    </EmptyDescription>
  </EmptyHeader>
</Empty>

<SkeletonEmpty
  title="No Team Members"
  description="Invite your team to collaborate."
  avatarCount={3}
/>`}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon" className="p-2">
                  <FileText />
                </EmptyMedia>
                <EmptyTitle>No items in the list</EmptyTitle>
                <EmptyDescription>There are currently no items to display.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Error Boundary">
        <Typography className="text-muted-foreground mb-2">
          Without error boundaries, a single JavaScript error in one component crashes the entire
          React app with a white screen. ErrorBoundary catches these errors and shows a friendly
          fallback UI, keeping the rest of the app functional. Use it around components that fetch
          data, render user content, or integrate third-party code.
        </Typography>
        <ComponentPreview
          code={`import { ErrorBoundary } from "@/components/feedback/error-boundary"

<ErrorBoundary
  onError={(error) => console.error(error)}
  onReset={() => console.log("Reset")}
>
  <ComponentThatMightFail />
</ErrorBoundary>

// With custom fallback
<ErrorBoundary fallback={<div>Custom error UI</div>}>
  <ComponentThatMightFail />
</ErrorBoundary>`}
        >
          <div className="max-w-md">
            <p className="text-muted-foreground mb-4 text-sm">
              Click the button below to trigger an error and see the ErrorBoundary in action. Use
              the retry button to reset.
            </p>
            <ErrorBoundary>
              <BuggyButton />
            </ErrorBoundary>
          </div>
        </ComponentPreview>
      </Subsection>
    </SectionWrapper>
  )
}
