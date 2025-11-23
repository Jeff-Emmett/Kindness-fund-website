import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeartHandshake } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xs supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <HeartHandshake className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-primary">
            dokindthings<span className="text-secondary">.fund</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#" className="hover:text-foreground transition-colors">
            The Stream
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Impact
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Community
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-sm text-right">
            <p className="text-muted-foreground">Current Stream</p>
            <p className="font-bold text-primary">$10,000.00</p>
          </div>
          <Button
            variant="default"
            size="sm"
            className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  )
}
