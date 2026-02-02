import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { ArrowUpRightIcon, FolderIcon } from "lucide-react"
import Link from "next/link"

export function EmptyPage() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No Pages Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any pages yet. <br />
          Get started by creating your first one.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button asChild>
          <Link href="/admin/collections/pages/create">
            Create Page <ArrowUpRightIcon />
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  )
}
