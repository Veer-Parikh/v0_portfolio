"use client"

import type { CSSProperties } from "react"
import { stack } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { TechIcon } from "./tech-icons"

function MarqueeRow({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
  return (
    <div className="marquee edge-fade overflow-hidden select-none">
      <div
        className="marquee-track flex w-max"
        data-reverse={reverse}
        style={{ "--marquee-duration": "70s" } as CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden className="flex shrink-0 items-center">
            {words.map((word, i) => (
              <span
                key={word}
                className="font-condensed flex items-center font-display text-[clamp(3.5rem,10vw,9rem)] leading-[1.05] font-bold tracking-[-0.03em] uppercase"
              >
                <span
                  className={cn(
                    "px-[0.25em] transition-colors duration-300",
                    i % 2 ? "text-outline hover:text-signal" : "text-bone hover:text-signal",
                  )}
                >
                  {word}
                </span>
                <span className="text-[0.3em] text-signal">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const tools = stack.flatMap((group) => group.items)
  const half = Math.ceil(tools.length / 2)

  return (
    <section id="stack" className="relative overflow-hidden py-28 md:py-40">
      <div className="container-x">
        <SectionHeading index="04" label="Toolkit" title="The *stack*." aside={`${tools.length} tools`}>
          Backend-heavy by choice, full-stack when it counts — and increasingly, AI by trade.
        </SectionHeading>
      </div>

      <div
        aria-hidden
        className="relative left-1/2 w-[112vw] -translate-x-1/2 -rotate-2 border-y border-line bg-ink-2 py-4"
        style={{ "--outline-fill": "var(--ink-2)" } as CSSProperties}
      >
        <MarqueeRow words={tools.slice(0, half)} />
        <MarqueeRow words={tools.slice(half)} reverse />
      </div>

      <div className="container-x mt-20 md:mt-28">
        {stack.map((group, gi) => (
          <Reveal
            key={group.group}
            className="grid grid-cols-12 items-start gap-x-6 gap-y-5 border-t border-line py-8 last:border-b md:py-10"
          >
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <div className="flex items-baseline gap-4">
                <span className="label text-dim">{String(gi + 1).padStart(2, "0")}</span>
                <h3 className={cn("font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl", group.focus && "text-signal")}>
                  {group.group}
                </h3>
                <span className="label ml-auto text-dim md:ml-0">[{group.items.length}]</span>
              </div>
              {group.focus && (
                <span className="label mt-3 ml-9 inline-flex items-center gap-2 rounded-full bg-signal px-2.5 py-1 text-[10px] text-ink">
                  <span className="size-1.5 rounded-full bg-ink" />
                  Current focus
                </span>
              )}
            </div>
            <ul className="col-span-12 flex flex-wrap gap-2.5 md:col-span-8 lg:col-span-9">
              {group.items.map((tool) => (
                <li
                  key={tool}
                  className={cn(
                    "group inline-flex items-center gap-2.5 rounded-full border py-2 pr-4 pl-3 text-[15px] transition-all duration-300 ease-expo hover:-translate-y-0.5 hover:border-signal/70 hover:text-signal",
                    group.focus ? "border-signal/25 bg-signal-soft" : "border-line bg-ink-2/50",
                  )}
                >
                  <TechIcon
                    name={tool}
                    className={cn(
                      "size-4 transition-colors duration-300 group-hover:text-signal",
                      group.focus ? "text-signal" : "text-mute",
                    )}
                  />
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
