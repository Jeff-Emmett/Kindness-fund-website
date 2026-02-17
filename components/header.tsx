import Link from "next/link"
import { Sparkles, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Droplets className="h-6 w-6 text-primary animate-pulse" />
            <div className="absolute inset-0 bg-primary/50 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            dokindthings<span className="text-primary">.fund</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#submit"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Submit Kindness
          </Link>
          <Link
            href="#dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Live Stream
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </Link>
          <a
            href="https://funz.quest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors flex items-center gap-1"
          >
            🎲 Funz Quest
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex border-primary/20 hover:bg-primary/10 hover:text-primary bg-transparent"
          >
            Connect Wallet
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 border-0">
            <Sparkles className="mr-2 h-4 w-4" />
            Start Flow
          </Button>
        </div>
      </div>
    </header>
  )
}
