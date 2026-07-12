import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase">
          Obsidian<span className="text-primary">.</span>
        </p>
        <nav aria-label="Footer navigation" className="flex gap-6">
          <Link
            href="#services"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#why-us"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Why Us
          </Link>
          <Link
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">
          © 2026 Obsidian Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
