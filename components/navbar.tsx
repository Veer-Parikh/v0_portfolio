"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { profile } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ISTClock } from "./clock"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Journey" },
  { id: "projects", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
]

const observedSections = ["top", "about", "experience", "projects", "stack", "community", "recognition", "contact"]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > last && y > 320)
      last = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Track which section sits in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    observedSections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Slide the highlight pill under the active link.
  useLayoutEffect(() => {
    const measure = () => {
      const el = active ? linkRefs.current[active] : null
      setPill(el ? { left: el.offsetLeft, width: el.offsetWidth } : null)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [active])

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-expo",
          hidden && !menuOpen && "-translate-y-full",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-transparent transition-opacity duration-500",
            scrolled && !menuOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div className="container-x relative flex h-18 items-center justify-between gap-4 md:h-20">
          <a href="#top" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="grid size-9 place-items-center rounded-[10px] bg-signal font-mono text-[13px] font-bold tracking-tight text-ink transition-transform duration-500 ease-expo group-hover:-rotate-6">
              VP
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">{profile.name}</span>
              <span className="label block text-[10px] text-mute">GET · AI @ MCX</span>
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="relative hidden items-center rounded-full border border-line bg-ink/60 p-1 backdrop-blur-xl md:flex"
          >
            <span
              aria-hidden
              className={cn(
                "absolute top-1 bottom-1 rounded-full bg-bone transition-all duration-500 ease-expo",
                pill ? "opacity-100" : "opacity-0",
              )}
              style={pill ? { left: pill.left, width: pill.width } : undefined}
            />
            {navItems.map((item) => (
              <a
                key={item.id}
                ref={(el) => {
                  linkRefs.current[item.id] = el
                }}
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  active === item.id ? "text-ink" : "text-mute hover:text-bone",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="label hidden text-mute lg:inline">
              <span className="text-dim">MUM</span> <ISTClock />
            </span>
            <a
              href={profile.resume}
              download
              className="group hidden items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm transition-colors duration-300 hover:border-bone hover:bg-bone hover:text-ink sm:inline-flex"
            >
              Résumé
              <ArrowDown className="size-3.5 transition-transform duration-500 ease-expo group-hover:translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="relative grid size-11 place-items-center rounded-full border border-line-strong md:hidden"
            >
              <span
                className={cn(
                  "absolute h-px w-4 bg-bone transition-transform duration-500 ease-expo",
                  menuOpen ? "rotate-45" : "-translate-y-[3px]",
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-4 bg-bone transition-transform duration-500 ease-expo",
                  menuOpen ? "-rotate-45" : "translate-y-[3px]",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu lives outside the header so its fixed positioning isn't trapped by backdrop filters. */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink px-5 pt-28 pb-8 transition-[clip-path] duration-700 ease-expo sm:px-8 md:hidden",
          menuOpen ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
        )}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "flex items-baseline gap-4 border-b border-line py-4 font-display text-5xl font-semibold tracking-[-0.04em] transition-all duration-700 ease-expo",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms" }}
            >
              <span className="label text-signal">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          <a
            href={profile.resume}
            download
            tabIndex={menuOpen ? 0 : -1}
            className="flex items-center justify-between rounded-full bg-signal px-6 py-4 font-medium text-ink"
          >
            Download résumé <ArrowDown className="size-4" />
          </a>
          <div className="label flex justify-between text-mute">
            <a href={profile.github} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1} className="inline-flex items-center gap-1">
              GitHub <ArrowUpRight className="size-3" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" tabIndex={menuOpen ? 0 : -1} className="inline-flex items-center gap-1">
              LinkedIn <ArrowUpRight className="size-3" />
            </a>
            <ISTClock />
          </div>
        </div>
      </div>
    </>
  )
}
