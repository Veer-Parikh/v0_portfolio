"use client"

import { useMemo, useRef, type CSSProperties } from "react"
import { aboutText, facts } from "@/lib/data"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

/** Splits text into words, flagging those inside `*...*` as accented. */
function tokenize(text: string) {
  return text.split(/(\*[^*]+\*)/g).flatMap((part) => {
    const accent = part.startsWith("*") && part.endsWith("*")
    return (accent ? part.slice(1, -1) : part)
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => ({ word, accent }))
  })
}

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null)
  useScrollProgress(textRef, 0.88, 0.5)
  const words = useMemo(() => tokenize(aboutText), [])

  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 border-t border-line pt-6 md:pt-8">
          <Reveal className="label col-span-12 flex justify-between text-mute md:col-span-3 md:flex-col md:justify-start md:gap-3">
            <span>
              <span className="text-signal">(01)</span>&nbsp;&nbsp;About
            </span>
            <span className="text-dim">Est. 2022 — Mumbai</span>
          </Reveal>

          <p
            ref={textRef}
            className="col-span-12 font-display text-[clamp(1.75rem,3.7vw,3.4rem)] leading-[1.12] font-medium tracking-[-0.03em] md:col-span-9"
            style={{ "--n": words.length + 8 } as CSSProperties}
          >
            {words.map(({ word, accent }, i) => (
              <span
                key={i}
                className={cn("scroll-word", accent && "font-serif font-normal text-signal italic")}
                style={{ "--i": i } as CSSProperties}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:mt-28 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 80} className="flex flex-col gap-6 bg-ink p-5 sm:p-7 md:min-h-44">
              <dt className="label flex items-center justify-between text-dim">
                {fact.label}
                <span className="text-line-strong">0{i + 1}</span>
              </dt>
              <dd className="mt-auto">
                <span className="block font-display text-lg leading-tight font-medium tracking-[-0.02em] sm:text-2xl">
                  {fact.value}
                </span>
                {fact.sub && <span className="label mt-2 block text-signal">{fact.sub}</span>}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
