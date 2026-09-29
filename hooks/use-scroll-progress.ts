"use client"

import { useEffect, type RefObject } from "react"

/**
 * Writes a `--progress` CSS variable (0 → 1) onto the element as it scrolls
 * through the viewport. 0 when its top crosses `start` (fraction of viewport
 * height), 1 when its bottom crosses `end`. No React re-renders.
 */
export function useScrollProgress<T extends HTMLElement>(ref: RefObject<T | null>, start = 0.85, end = 0.4) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0

    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const distance = rect.height + vh * (start - end)
      const progress = Math.min(Math.max((vh * start - rect.top) / distance, 0), 1)
      el.style.setProperty("--progress", progress.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [ref, start, end])
}
