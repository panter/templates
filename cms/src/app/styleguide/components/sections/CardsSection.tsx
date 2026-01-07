import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, ImageIcon, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { ComponentPreview } from "../shared/ComponentPreview"
import { SectionWrapper, Subsection } from "../shared/SectionWrapper"

export function CardsSection() {
  return (
    <SectionWrapper
      id="cards"
      title="Cards"
      description="Card components for grouping related content."
    >
      <Subsection title="Basic Card">
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description with supporting text.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Card content goes here.
    </p>
  </CardContent>
</Card>`}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description with supporting text.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Card content goes here. This can contain any type of content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Footer</CardTitle>
                <CardDescription>Card with action buttons in footer.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Some content that describes the card purpose.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
                <Button size="sm">Confirm</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Action</CardTitle>
                <CardDescription>Card with action button in header.</CardDescription>
                <CardAction>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Pencil className="h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Content with an action button in the corner.
                </p>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Form Card">
        <ComponentPreview
          code={`<Card className="max-w-md">
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>Enter your details to create a new account.</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="John Doe" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="john@example.com" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Create Account</Button>
  </CardFooter>
</Card>`}
        >
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Enter your details to create a new account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create Account</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Stats Card">
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <CardDescription>Total Revenue</CardDescription>
    <CardTitle className="text-3xl">$45,231.89</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
  </CardContent>
</Card>`}
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-3xl">$45,231.89</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Subscriptions</CardDescription>
                <CardTitle className="text-3xl">+2,350</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Active Users</CardDescription>
                <CardTitle className="text-3xl">+12,234</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs">+19% from last month</p>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Product Card (Vertical)">
        <ComponentPreview
          code={`<Card className="group overflow-hidden p-0 transition-shadow hover:shadow-lg">
  <div className="bg-muted relative aspect-square overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <ImageIcon className="text-muted-foreground/40 size-12" />
    </div>
    <div className="bg-primary/5 absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
  </div>
  <CardContent className="space-y-2 p-4 pt-0">
    <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
      Category
    </p>
    <Typography variant="h3" className="h4">
      Product Name
    </Typography>
    <p className="text-primary text-lg font-bold">$99.00</p>
  </CardContent>
</Card>`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="group overflow-hidden p-0 transition-shadow hover:shadow-lg">
              <div className="bg-muted relative aspect-square overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="text-muted-foreground/40 size-12" />
                </div>
                <div className="bg-primary/5 absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <CardContent className="space-y-2 p-4 pt-0">
                <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  Electronics
                </p>
                <Typography variant="h3" className="h4">
                  Wireless Headphones
                </Typography>
                <p className="text-primary text-lg font-bold">$99.00</p>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
      </Subsection>

      <Subsection title="Product Card (Horizontal)">
        <ComponentPreview
          code={`<div className="bg-card text-card-foreground group flex overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-lg">
  <div className="bg-primary/5 flex w-40 shrink-0 items-center justify-center sm:w-56">
    <ImageIcon className="text-muted-foreground/40 size-16" />
  </div>
  <div className="flex flex-1 flex-col space-y-1 p-4 sm:p-6">
    <Typography variant="small" className="text-muted-foreground font-medium uppercase">
      Category
    </Typography>
    <Typography variant="h3" className="h4">
      Product Name
    </Typography>
    <Typography variant="h3" className="text-primary text-lg font-bold">
      $99.00
    </Typography>
    <Typography variant="muted" className="line-clamp-2">
      Product description goes here.
    </Typography>
  </div>
</div>`}
        >
          <div className="bg-card text-card-foreground group flex overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-lg">
            <div className="bg-primary/5 flex w-40 shrink-0 items-center justify-center sm:w-56">
              <ImageIcon className="text-muted-foreground/40 size-16" />
            </div>
            <div className="flex flex-1 flex-col space-y-1 p-4 sm:p-6">
              <Typography variant="small" className="text-muted-foreground font-medium uppercase">
                Electronics
              </Typography>
              <Typography variant="h3" className="h4">
                Wireless Headphones
              </Typography>
              <Typography variant="h3" className="text-primary text-lg font-bold">
                $99.00
              </Typography>
              <Typography variant="muted" className="line-clamp-2">
                High-quality wireless headphones with active noise cancellation and 30-hour battery
                life.
              </Typography>
            </div>
          </div>
        </ComponentPreview>
      </Subsection>
    </SectionWrapper>
  )
}
