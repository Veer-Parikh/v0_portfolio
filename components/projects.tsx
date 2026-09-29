"use client"

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react"
import { ArrowUpRight, Lock } from "lucide-react"
import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

const linkClass =
  "label inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3.5 py-2 text-[10px] text-bone transition-colors duration-300 hover:border-signal hover:bg-signal hover:text-ink"

export default function Projects() {
  const [active, setActive] = useState<number | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const motion = useRef({ x: 0, y: 0, tx: 0, ty: 0, frame: 0, hovering: false })

  // Ease the floating preview toward the cursor, tilting with horizontal velocity.
  const tick = useCallback(() => {
    const m = motion.current
    const dx = m.tx - m.x
    m.x += dx * 0.15
    m.y += (m.ty - m.y) * 0.15
    const tilt = Math.max(-8, Math.min(8, dx * 0.06))
    if (previewRef.current) {
      previewRef.current.style.transform = `translate3d(${m.x}px, ${m.y}px, 0) translate(-50%, -50%) rotate(${tilt}deg)`
    }
    const settled = Math.abs(dx) < 0.2 && Math.abs(m.ty - m.y) < 0.2
    m.frame = settled && !m.hovering ? 0 : requestAnimationFrame(tick)
  }, [])

  useEffect(() => () => cancelAnimationFrame(motion.current.frame), [])

  const onPointerMove = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return
    const m = motion.current
    m.tx = e.clientX
    m.ty = e.clientY
    if (!m.hovering) {
      m.hovering = true
      m.x = m.tx
      m.y = m.ty
    }
    if (!m.frame) m.frame = requestAnimationFrame(tick)
  }

  const onPointerLeave = () => {
    motion.current.hovering = false
    setActive(null)
  }

  return (
    <section id="projects" className="relative py-28 md:py-40">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Selected work"
          title="Things I've *built*."
          aside={`${String(projects.length).padStart(2, "0")} projects`}
        >
          Production systems, hackathon builds and side projects — mostly backend, always end-to-end.
        </SectionHeading>

        <ul onPointerMove={onPointerMove} onPointerLeave={onPointerLeave} className="border-b border-line">
          {projects.map((project, i) => {
            const primary = project.link || project.github
            return (
              <Reveal
                as="li"
                key={project.title}
                onPointerEnter={() => setActive(i)}
                className="group relative border-t border-line"
              >
                <div className="grid grid-cols-12 items-start gap-x-6 gap-y-4 py-8 transition-[padding] duration-700 ease-expo md:items-center md:py-10 md:group-hover:pl-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt=""
                    loading="lazy"
                    className="col-span-12 aspect-[16/10] w-full rounded-2xl border border-line object-cover md:hidden"
                  />

                  <span className="label col-span-2 pt-2 text-dim transition-colors duration-300 group-hover:text-signal md:col-span-1 md:pt-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="col-span-10 font-display text-[clamp(2rem,4.4vw,4rem)] leading-[0.95] font-semibold tracking-[-0.04em] transition-colors duration-500 group-hover:text-signal md:col-span-5">
                    {primary ? (
                      <a href={primary} target="_blank" rel="noreferrer" className="outline-none">
                        {project.title}
                        <span className="absolute inset-0 md:hidden" aria-hidden />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <div className="col-span-10 col-start-3 md:col-span-3 md:col-start-auto">
                    <p className="leading-relaxed text-mute">{project.description}</p>
                    <p className="label mt-3 text-[10px] leading-relaxed text-dim">{project.tags.join(" · ")}</p>
                  </div>

                  <div className="relative col-span-10 col-start-3 flex gap-2 md:col-span-3 md:col-start-auto md:justify-end">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className={linkClass}>
                        Live <ArrowUpRight className="size-3" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className={linkClass}>
                        Code <ArrowUpRight className="size-3" />
                      </a>
                    )}
                    {!primary && (
                      <span className="label inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-[10px] text-dim">
                        <Lock className="size-3" /> Private
                      </span>
                    )}
                  </div>
                </div>
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-signal transition-transform duration-700 ease-expo group-hover:scale-x-100"
                />
              </Reveal>
            )
          })}
        </ul>
      </div>

      {/* Floating preview — kept outside transformed ancestors so `fixed` stays viewport-relative. */}
      <div ref={previewRef} aria-hidden className="pointer-events-none fixed top-0 left-0 z-30 hidden md:block">
        <div
          className={cn(
            "relative aspect-[16/10] w-[26rem] overflow-hidden rounded-2xl border border-line-strong bg-ink-3 shadow-[0_40px_120px_-20px_rgb(0_0_0/0.8)] transition-[opacity,scale] duration-500 ease-expo",
            active === null ? "scale-50 opacity-0" : "scale-100 opacity-100",
          )}
        >
          {projects.map((project, i) => (
            <img
              key={project.title}
              src={project.image || "/placeholder.svg"}
              alt=""
              className={cn(
                "absolute inset-0 size-full object-cover transition-[opacity,scale] duration-700 ease-expo",
                active === i ? "scale-100 opacity-100" : "scale-110 opacity-0",
              )}
            />
          ))}
          <span className="label absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1.5 text-[10px] text-bone backdrop-blur">
            {active !== null ? projects[active].title : ""}
          </span>
        </div>
      </div>
    </section>
  )
}
