"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/utils/ui"
import { Check, Code, Copy } from "lucide-react"
import { useState, type PropsWithChildren } from "react"

interface ComponentPreviewProps extends PropsWithChildren {
  code: string
  className?: string
}

export function ComponentPreview({ children, code, className }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)
  const [showCode, setShowCode] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group border-border relative rounded-lg border">
      <div className={cn("p-4 md:p-6", className)}>{children}</div>

      <div className="absolute top-2 right-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => setShowCode(!showCode)}
          className="bg-background/80 h-7 w-7 backdrop-blur"
        >
          <Code className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={handleCopy}
          className="bg-background/80 h-7 w-7 backdrop-blur"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>

      {showCode && (
        <div className="border-border bg-muted/50 border-t">
          <pre className="overflow-x-auto p-4 text-xs md:text-sm">
            <code className="text-foreground">{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
