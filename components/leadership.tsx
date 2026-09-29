"use client"

import { community } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export default function Leadership() {
  return (
    <section id="community" className="relative py-28 md:py-40">
      <div className="container-x">
        <SectionHeading index="05" label="Community" title="Leadership & *community*.">
          Most of what I know, I learned by teaching it — or by shipping it alongside a team.
        </SectionHeading>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-3">
          {community.map((item, i) => (
            <Reveal as="article" key={item.title} delay={i * 110} className={cn("group", i === 1 && "md:mt-24")}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-line bg-ink-3">
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.org}`}
                  loading="lazy"
                  className="size-full object-cover brightness-[0.8] contrast-[1.08] grayscale transition-[filter,scale] duration-1000 ease-expo group-hover:scale-[1.04] group-hover:brightness-100 group-hover:grayscale-0"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent transition-opacity duration-700 group-hover:opacity-60"
                />
                <span className="label absolute top-4 left-4 rounded-full bg-ink/70 px-3 py-1.5 text-[10px] text-bone backdrop-blur">
                  {item.org}
                </span>
                <span className="label absolute right-5 bottom-5 left-5 flex items-center justify-between text-[10px] text-signal">
                  <span>{item.period}</span>
                  <span className="text-bone/60">0{i + 1} / 0{community.length}</span>
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em] md:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-mute">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
