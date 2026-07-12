import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.png"
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/wq7zhjos/video/upload/v1783856816/12978459-hd_1920_1080_24fps_1_1_xxedms.mp4"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-40 pb-24">
        <p className="mb-6 text-xs font-medium tracking-[0.35em] text-primary uppercase">
          Digital Agency
        </p>
        <h1 className="max-w-3xl text-5xl leading-[1.05] font-light tracking-tight text-balance md:text-7xl">
          Digital craft for brands that refuse the ordinary.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
          We design and build luxury web experiences — from precision-crafted
          websites to immersive 3D worlds that make people stop and stay.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a Project
          </Link>
          <Link
            href="#services"
            className="flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm text-foreground backdrop-blur-xl transition-colors hover:border-primary/40"
          >
            Explore Services
            <ArrowDown className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
