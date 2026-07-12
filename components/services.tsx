import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Web Design',
    description:
      'Bespoke websites engineered around your brand. Refined typography, deliberate motion, and interfaces that feel effortless — built to convert without ever shouting.',
    image: '/images/service-3d.png',
    alt: 'Abstract chrome and glass 3D shapes floating in dark space',
    tags: ['Art Direction', 'UI/UX', 'Design Systems'],
  },
  {
    number: '02',
    title: '3D Interactive Sites',
    description:
      'Immersive WebGL experiences that turn a visit into a moment. Real-time 3D, scroll-driven storytelling, and interactions your audience will remember.',
    image: '/images/service-web-design.png',
    alt: 'Dark minimalist website design mockup on a floating glass panel',
    tags: ['WebGL', 'Three.js', 'Motion'],
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <div className="mb-16 flex items-end justify-between gap-6">
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.35em] text-primary uppercase">
            Services
          </p>
          <h2 className="text-3xl font-light tracking-tight text-balance md:text-5xl">
            What we do best
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.number}
            className="group overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-xl transition-colors hover:border-primary/30"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={service.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <span className="absolute top-5 left-6 text-sm text-muted-foreground">
                {service.number}
              </span>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-light tracking-tight">
                  {service.title}
                </h3>
                <ArrowUpRight
                  className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
