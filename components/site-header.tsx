import Link from 'next/link'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="#"
          className="text-sm font-semibold tracking-[0.25em] uppercase"
        >
          obsidian<span className="text-primary">.</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 rounded-full border border-border bg-card px-8 py-3 backdrop-blur-xl md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-xl transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Start a Project
        </Link>
      </div>
    </header>
  )
}
