"use client"

import { ArrowUpRight } from "lucide-react"
import { recognition } from "@/lib/data"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export default function Certifications() {
  return (
    <section id="recognition" className="relative py-28 md:py-40">
      <div className="container-x">
        <SectionHeading index="06" label="Recognition" title="Proof of *work*." />

        <div className="grid gap-6 md:grid-cols-2">
          {recognition.map((item, i) => (
            <Reveal key={item.title} delay={i * 110}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-line bg-ink-2 transition-colors duration-500 hover:border-signal/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink-3">
                  {item.badge ? (
                    <>
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,var(--signal-soft),transparent_60%)] opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                      />
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="relative size-full object-contain p-10 transition-transform duration-1000 ease-expo group-hover:scale-105"
                      />
                    </>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="size-full object-cover object-[center_30%] brightness-[0.85] grayscale transition-[filter,scale] duration-1000 ease-expo group-hover:scale-[1.04] group-hover:brightness-100 group-hover:grayscale-0"
                    />
                  )}
                  <span className="label absolute top-4 left-4 rounded-full bg-ink/75 px-3 py-1.5 text-[10px] text-bone backdrop-blur">
                    {item.kind} · {item.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
                  <div>
                    <span className="label text-dim">
                      № 0{i + 1} — {item.issuer}
                    </span>
                    <h3 className="mt-3 font-display text-2xl leading-tight font-semibold tracking-[-0.03em] text-balance md:text-[1.9rem]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-5">
                    <span className="label text-signal">{item.level}</span>
                    <span className="label inline-flex items-center gap-2 text-bone">
                      {item.cta}
                      <span className="grid size-8 place-items-center rounded-full border border-line-strong transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:border-signal group-hover:bg-signal group-hover:text-ink">
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
