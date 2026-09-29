"use client"

import type { CSSProperties } from "react"
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react"
import { heroStatement, profile } from "@/lib/data"
import { useMagnetic } from "@/hooks/use-magnetic"
import { Accent } from "./accent"
import { ISTClock } from "./clock"
import DotField from "./dot-field"
import Ticker from "./ticker"

function NameWord({ word, offset }: { word: string; offset: number }) {
  return (
    <span aria-hidden className="-mb-[0.06em] flex overflow-hidden pt-[0.04em] pb-[0.06em]">
      {word.split("").map((char, i) => (
        <span key={i} className="hero-char" style={{ "--i": offset + i } as CSSProperties}>
          {char}
        </span>
      ))}
    </span>
  )
}

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties

export default function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25)
  const [first, last] = profile.name.toUpperCase().split(" ")

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <DotField className="dot-mask absolute inset-0 h-full w-full" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-40 size-[36rem] rounded-full bg-signal/10 blur-[140px]"
      />

      <div className="container-x relative flex flex-1 flex-col pt-28 pb-10 md:pt-32 md:pb-14">
        <div className="label grid grid-cols-2 gap-4 text-mute md:grid-cols-4">
          <span className="fade-in" style={delay(600)}>
            Portfolio <span className="text-dim">/</span> 2026
          </span>
          <span className="fade-in text-right md:text-left" style={delay(680)}>
            {profile.location.split(",")[0]}, IN <span className="hidden text-dim sm:inline">— {profile.coordinates}</span>
          </span>
          <span className="fade-in hidden md:block" style={delay(760)}>
            Backend <span className="text-dim">·</span> AI <span className="text-dim">·</span> Systems
          </span>
          <span className="fade-in hidden md:block md:text-right" style={delay(840)}>
            Local <ISTClock className="text-bone" />
          </span>
        </div>

        <div className="mt-auto pt-12">
          <a
            href="#experience"
            className="fade-in group label inline-flex items-center gap-3 rounded-full border border-line bg-ink/60 py-2 pr-2 pl-4 text-bone backdrop-blur transition-colors duration-300 hover:border-signal/60"
            style={delay(500)}
          >
            <span className="relative flex size-2">
              <span className="ping-soft absolute inset-0 rounded-full bg-signal" />
              <span className="relative size-2 rounded-full bg-signal" />
            </span>
            Now — {profile.role} @ {profile.company}
            <span className="grid size-6 place-items-center rounded-full bg-bone/10 transition-colors duration-300 group-hover:bg-signal group-hover:text-ink">
              <ArrowDownRight className="size-3" />
            </span>
          </a>

          <h1
            aria-label={profile.name}
            className="font-condensed mt-6 flex flex-wrap gap-x-[0.16em] font-display text-[37vw] leading-[0.82] font-extrabold tracking-[-0.005em] select-none sm:text-[min(22.6vw,20.5rem,40svh)]"
          >
            <NameWord word={first} offset={0} />
            <NameWord word={last} offset={first.length} />
          </h1>

          <div className="mt-10 grid grid-cols-12 items-end gap-x-6 gap-y-10 md:mt-12">
            <p
              className="fade-in col-span-12 max-w-xl text-xl leading-snug text-bone/85 text-pretty md:col-span-7 md:text-2xl lg:col-span-6"
              style={delay(900)}
            >
              <Accent text={heroStatement} className="text-signal" />
            </p>

            <div
              className="fade-in col-span-12 flex flex-col gap-6 md:col-span-5 md:items-end lg:col-span-6"
              style={delay(1000)}
            >
              <div className="flex flex-wrap gap-3">
                <a
                  ref={ctaRef}
                  href="#projects"
                  className="group inline-flex items-center gap-4 rounded-full bg-signal py-2 pr-2 pl-6 font-medium text-ink transition-transform duration-300 ease-expo"
                >
                  See the work
                  <span className="grid size-10 place-items-center rounded-full bg-ink text-signal transition-transform duration-500 ease-expo group-hover:rotate-[-45deg]">
                    <ArrowDownRight className="size-4" />
                  </span>
                </a>
                <a
                  href={profile.resume}
                  download
                  className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium transition-colors duration-300 hover:border-bone hover:bg-bone hover:text-ink"
                >
                  Résumé
                  <ArrowDown className="size-4 transition-transform duration-500 ease-expo group-hover:translate-y-0.5" />
                </a>
              </div>
              <div className="label flex gap-6 text-mute">
                {[
                  { label: "GitHub", href: profile.github },
                  { label: "LinkedIn", href: profile.linkedin },
                  { label: "Email", href: `mailto:${profile.email}` },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 transition-colors hover:text-signal"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fade-in relative" style={delay(1150)}>
        <Ticker />
      </div>
    </section>
  )
}
