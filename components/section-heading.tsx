import type { ReactNode } from "react"
import { Accent } from "./accent"
import { Reveal } from "./reveal"

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  aside?: ReactNode
  children?: ReactNode
}

export function SectionHeading({ index, label, title, aside, children }: SectionHeadingProps) {
  return (
    <div className="mb-14 grid grid-cols-12 gap-x-6 gap-y-6 border-t border-line pt-6 md:mb-20 md:pt-8">
      <Reveal className="label col-span-12 flex items-center justify-between gap-3 text-mute md:col-span-3 md:items-start md:justify-start">
        <span>
          <span className="text-signal">({index})</span>&nbsp;&nbsp;{label}
        </span>
        {aside && <span className="text-dim md:hidden">{aside}</span>}
      </Reveal>
      <div className="col-span-12 md:col-span-9">
        <Reveal
          as="h2"
          delay={80}
          className="font-display text-[clamp(2.75rem,7.2vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-balance"
        >
          <Accent text={title} className="pr-[0.04em] text-signal" />
        </Reveal>
        {(children || aside) && (
          <Reveal delay={160} className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {children && <p className="max-w-xl text-lg leading-relaxed text-mute text-pretty">{children}</p>}
            {aside && <span className="label hidden shrink-0 text-dim md:block">{aside}</span>}
          </Reveal>
        )}
      </div>
    </div>
  )
}
