"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react"
import { profile } from "@/lib/data"
import { ISTClock } from "./clock"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "in/veer-parikh", href: profile.linkedin },
  { label: "GitHub", value: "@Veer-Parikh", href: profile.github },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined)
  const [user, domain] = profile.email.split("@")

  useEffect(() => () => clearTimeout(timeout.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden pt-28 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-signal/[0.07] blur-[160px]"
      />
      <div className="container-x relative">
        <SectionHeading index="07" label="Contact" title="Let's build *something*.">
          A role, a collaboration or a gnarly backend problem — my inbox is always open.
        </SectionHeading>

        <Reveal>
          <button type="button" onClick={copyEmail} className="group block w-full text-left" aria-live="polite">
            <span className="label inline-flex items-center gap-2 text-mute">
              {copied ? <Check className="size-3.5 text-signal" /> : <Copy className="size-3.5" />}
              {copied ? "Copied to clipboard" : "Click to copy"}
            </span>
            <span className="relative mt-4 block pb-4 font-display text-[clamp(1.6rem,6.4vw,6.5rem)] leading-none font-semibold tracking-[-0.045em] break-words">
              {user}
              <span className="text-signal">@</span>
              {domain}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-[0.12] bg-signal transition-transform duration-1000 ease-expo group-hover:scale-x-100"
              />
            </span>
          </button>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 70} className="bg-ink">
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full min-h-28 flex-col justify-between gap-6 p-6 sm:min-h-36 sm:gap-8 transition-colors duration-500 hover:bg-ink-2"
              >
                <span className="label flex items-center justify-between text-dim">
                  {channel.label}
                  <ArrowUpRight className="size-4 text-mute transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:text-signal" />
                </span>
                <span className="font-display text-lg font-medium tracking-[-0.02em] break-all transition-colors group-hover:text-signal">
                  {channel.value}
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={channels.length * 70} className="bg-signal sm:col-span-2 lg:col-span-1">
            <a
              href={profile.resume}
              download
              className="group flex h-full min-h-28 flex-col justify-between gap-6 p-6 sm:min-h-36 sm:gap-8 text-ink"
            >
              <span className="label flex items-center justify-between">
                Résumé
                <ArrowUpRight className="size-4 rotate-90 transition-transform duration-500 ease-expo group-hover:translate-y-1" />
              </span>
              <span className="font-display text-lg font-semibold tracking-[-0.02em]">Download PDF</span>
            </a>
          </Reveal>
        </div>
      </div>

      <footer className="container-x relative mt-28 md:mt-40">
        <div className="label flex flex-col gap-4 border-t border-line py-6 text-mute sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>
            Mumbai <span className="text-dim">—</span> <ISTClock className="text-bone" />
          </span>
          <a href="#top" className="group inline-flex items-center gap-2 transition-colors hover:text-signal">
            Back to top
            <ArrowUp className="size-3.5 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5" />
          </a>
        </div>
      </footer>

      <div
        aria-hidden
        className="font-condensed relative -mb-[4vw] text-center font-display text-[23vw] leading-[0.8] font-extrabold tracking-[-0.005em] whitespace-nowrap uppercase select-none"
      >
        <span className="text-outline transition-colors duration-700 hover:text-signal/90">{profile.name}</span>
      </div>
    </section>
  )
}
