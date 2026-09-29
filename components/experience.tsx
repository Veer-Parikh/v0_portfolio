"use client"

import { useRef } from "react"
import { Check } from "lucide-react"
import { currentRole, experience, type ExperienceItem } from "@/lib/data"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { Candles } from "./candles"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

function SpinBadge() {
  return (
    <div className="relative size-36 shrink-0 sm:size-44">
      <svg viewBox="0 0 200 200" className="spin-slow size-full" aria-hidden>
        <defs>
          <path id="now-badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-ink font-mono text-[13px] font-medium uppercase">
          <textPath href="#now-badge-circle" textLength="488" lengthAdjust="spacing">
            Currently at MCX ✦ Graduate Engineer Trainee ✦ AI ✦
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-16 place-items-center rounded-full bg-ink font-serif text-3xl text-signal italic sm:size-20 sm:text-4xl">
          AI
        </span>
      </span>
    </div>
  )
}

function NowCard() {
  return (
    <Reveal className="relative overflow-hidden rounded-[28px] bg-signal text-ink">
      <Candles className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 w-full text-ink opacity-[0.12]" />
      <div className="relative grid grid-cols-12 gap-y-10 p-6 sm:p-10 md:p-14">
        <div className="col-span-12 lg:col-span-9">
          <div className="label flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 text-signal">
              <span className="relative flex size-1.5">
                <span className="ping-soft absolute inset-0 rounded-full bg-signal" />
                <span className="relative size-1.5 rounded-full bg-signal" />
              </span>
              Current role
            </span>
            <span>{currentRole.period}</span>
            <span className="opacity-40">/</span>
            <span>{currentRole.location}</span>
          </div>

          <h3 className="mt-8 font-display text-[clamp(2.4rem,6.4vw,5.75rem)] leading-[0.9] font-semibold tracking-[-0.045em] text-balance">
            {currentRole.role}
            <span className="font-serif font-normal italic">, {currentRole.track}</span>
          </h3>

          <p className="mt-6 font-display text-xl font-medium tracking-[-0.02em] md:text-2xl">
            {currentRole.company} <span className="opacity-40">—</span> {currentRole.companyFull}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">{currentRole.summary}</p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {currentRole.tags.map((tag) => (
              <li key={tag} className="label rounded-full border border-ink/25 px-3 py-1.5 text-[10px]">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 flex lg:col-span-3 lg:justify-end">
          <SpinBadge />
        </div>
      </div>
    </Reveal>
  )
}

function LedgerRow({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <Reveal
      as="article"
      className="group relative grid grid-cols-12 gap-x-6 gap-y-6 border-t border-line py-10 pl-9 md:py-12 md:pl-14"
    >
      <span
        aria-hidden
        className="absolute top-[3.05rem] left-[3px] size-[9px] rounded-full border border-line-strong bg-ink transition-colors duration-500 group-hover:border-signal group-hover:bg-signal md:top-[3.55rem] md:left-[7px]"
      />

      <div className="col-span-12 flex flex-wrap items-center gap-x-4 gap-y-2 md:col-span-4 md:flex-col md:items-start lg:col-span-3">
        <span className="label text-bone">{item.period}</span>
        <span className="label text-dim">{item.location}</span>
        <span className="label inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[10px] text-mute md:mt-3">
          <Check className="size-3 text-signal" />
          {item.status}
        </span>
      </div>

      <div className="col-span-12 md:col-span-8 lg:col-span-4">
        <span className="label text-dim">0{index + 1}</span>
        <h3 className="mt-2 font-display text-3xl leading-[0.95] font-semibold tracking-[-0.035em] transition-colors duration-500 group-hover:text-signal md:text-4xl">
          {item.org}
        </h3>
        <p className="mt-3 text-mute">{item.role}</p>
      </div>

      <div className="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-5 lg:col-start-auto">
        {item.steps ? (
          <ol className="relative space-y-6 border-l border-line pl-6">
            {item.steps.map((step) => (
              <li key={step.role} className="relative">
                <span
                  aria-hidden
                  className="absolute top-[0.35rem] -left-[28.5px] size-2 rounded-full border border-signal bg-ink"
                />
                <span className="label text-dim">{step.period}</span>
                <p className="mt-1 font-medium text-bone">{step.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-mute">{step.detail}</p>
              </li>
            ))}
          </ol>
        ) : (
          <ul className="space-y-3">
            {item.points?.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed text-mute">
                <span aria-hidden className="mt-[0.6rem] h-px w-3 shrink-0 bg-signal" />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  )
}

export default function Experience() {
  const ledgerRef = useRef<HTMLDivElement>(null)
  useScrollProgress(ledgerRef, 0.65, 0.55)

  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="container-x">
        <SectionHeading index="02" label="Journey" title="Where I've *been*, where I *am*." aside="2022 — Now">
          From my first Node.js mentorship to my first full-time role — internships, community leadership and a lot of
          deploys along the way.
        </SectionHeading>

        <NowCard />

        <div className="label mt-24 mb-2 flex items-baseline justify-between text-mute md:mt-32">
          <span>Previously</span>
          <span className="text-dim">{String(experience.length).padStart(2, "0")} entries</span>
        </div>

        <div ref={ledgerRef} className="relative border-b border-line">
          <div aria-hidden className="absolute top-0 bottom-0 left-[7px] w-px bg-line md:left-[11px]">
            <div
              className="absolute inset-0 origin-top bg-signal"
              style={{ transform: "scaleY(var(--progress, 0))" }}
            />
          </div>
          {experience.map((item, i) => (
            <LedgerRow key={item.org} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
