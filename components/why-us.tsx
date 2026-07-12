import { Gem, Gauge, Handshake, ShieldCheck, Globe2 } from 'lucide-react'

const reasons = [
  {
    icon: Gem,
    title: 'Craft over templates',
    description:
      'Every project is designed from a blank canvas. No themes, no shortcuts — only work that could belong to your brand and no one else.',
  },
  {
    icon: Gauge,
    title: 'Performance obsessed',
    description:
      'Beauty that loads fast. We ship experiences that score where it matters: Core Web Vitals, accessibility, and SEO.',
  },
  {
    icon: Handshake,
    title: 'A true partner',
    description:
      'Senior people on every engagement, direct communication, and honest counsel from first call to launch and beyond.',
  },
]

const extraReasons = [
  {
    icon: ShieldCheck,
    title: 'Privacy first',
    description:
      'We protect your website with secure hosting, access controls, and careful data handling so your brand and visitors stay safe.',
  },
  {
    icon: Globe2,
    title: 'Free domain included',
    description:
      'Every project comes with a complimentary domain setup, so your new website launches faster with a professional web address.',
  },
]

const stats = [
  { value: '120+', label: 'Projects shipped' },
  { value: '3', label: 'Years of practice' },
  { value: '4', label: 'Industry awards' },
]

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-16">
          <p className="mb-4 text-xs font-medium tracking-[0.35em] text-primary uppercase">
            Why Us
          </p>
          <h2 className="max-w-2xl text-3xl font-light tracking-tight text-balance md:text-5xl">
            Fewer clients. Deeper work. Better outcomes.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-border bg-card p-8 backdrop-blur-xl"
            >
              <reason.icon
                className="size-6 text-primary"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-lg font-medium">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:max-w-3xl md:mx-auto">
          {extraReasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-border bg-card p-8 backdrop-blur-xl"
            >
              <reason.icon
                className="size-6 text-primary"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-lg font-medium">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="order-last mt-2 text-xs tracking-widest text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="text-4xl font-light text-primary md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
