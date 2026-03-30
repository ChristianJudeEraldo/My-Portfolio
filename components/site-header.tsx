import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/5 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Name */}
        <Link href="/" className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity">
          Jude<span className="text-blue-500">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link href="/projects" className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
            Contact
          </Link>
          
          <div className="ml-2 border-l border-foreground/10 pl-6">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}