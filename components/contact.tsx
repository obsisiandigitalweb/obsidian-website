'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const countryOptions = [
  { value: '', label: 'Select a country', flag: '🌍', dial: '' },
  { value: 'India', label: 'India', flag: '🇮🇳', dial: '+91' },
  { value: 'United States', label: 'United States', flag: '🇺🇸', dial: '+1' },
  { value: 'United Kingdom', label: 'United Kingdom', flag: '🇬🇧', dial: '+44' },
  { value: 'Canada', label: 'Canada', flag: '🇨🇦', dial: '+1' },
  { value: 'Australia', label: 'Australia', flag: '🇦🇺', dial: '+61' },
  { value: 'Other', label: 'Other', flag: '🌐', dial: '+' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [country, setCountry] = useState('')

  const selectedCountry = countryOptions.find((option) => option.value === country)
  const phonePrefix = selectedCountry?.dial || '+91'
  const phonePlaceholder = selectedCountry?.dial ? `${selectedCountry.dial} 98765 43210` : '+91 98765 43210'

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      country: formData.get('country')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Unable to send message.')
      }

      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.35em] text-primary uppercase">
            Contact
          </p>
          <h2 className="text-3xl font-light tracking-tight text-balance md:text-5xl">
            Let&apos;s build something worth remembering.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Tell us about your project. We reply within one business day —
            usually much faster.
          </p>
          <div className="mt-10 text-sm text-muted-foreground">
            <p className="text-primary">obsidian.digitalweb@gmail.com</p>
            <p className="mt-1">Working worldwide, based in India</p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 backdrop-blur-xl md:p-10">
          {submitted ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/15">
                <Check className="size-6 text-primary" aria-hidden="true" />
              </span>
              <p className="mt-6 text-lg font-medium">Message sent</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you — we&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs tracking-widest text-muted-foreground uppercase">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="rounded-xl border border-input bg-background/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs tracking-widest text-muted-foreground uppercase">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="rounded-xl border border-input bg-background/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring focus:outline-none"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2 max-w-[18rem]">
                  <label htmlFor="country" className="text-xs tracking-widest text-muted-foreground uppercase">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      required
                      value={country}
                      onChange={(event) => setCountry(event.target.value)}
                      className="appearance-none w-full rounded-xl border border-input bg-background/40 px-4 py-3 pr-10 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                    >
                      {countryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.flag} {option.label}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">
                      ▼
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 max-w-[18rem]">
                  <label htmlFor="phone" className="text-xs tracking-widest text-muted-foreground uppercase">
                    Phone
                  </label>
                  <div className="flex overflow-hidden rounded-xl border border-input bg-background/40">
                    <span className="flex items-center px-4 text-sm text-muted-foreground">
                      {phonePrefix}
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="numeric"
                      pattern="[0-9 ]*"
                      placeholder="98765 43210"
                      onInput={(event) => {
                        const input = event.currentTarget
                        input.value = input.value.replace(/[^0-9 ]/g, '')
                      }}
                      className="min-w-0 flex-1 border-none bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs tracking-widest text-muted-foreground uppercase">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you looking to build?"
                  className="resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring focus:outline-none"
                />
              </div>

              {error ? (
                <p className="text-sm text-destructive">{error}</p>
              ) : null}
              <button
                type="submit"
                disabled={submitting}
                className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
