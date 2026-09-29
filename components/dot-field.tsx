"use client"

import { useEffect, useRef } from "react"

const GAP = 28
const RADIUS = 190

/**
 * Canvas grid of "pixels" that breathe with a slow wave and swell toward the
 * cursor, lighting up in the signal colour. Pauses when off-screen and stays
 * static for reduced-motion users.
 */
export default function DotField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const styles = getComputedStyle(document.documentElement)
    const bone = styles.getPropertyValue("--bone").trim() || "#eeebe3"
    const signal = styles.getPropertyValue("--signal").trim() || "#d4ff3f"

    let width = 0
    let height = 0
    let frame = 0
    let running = false
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, strength: 0, target: 0, seen: false }

    const draw = (t: number) => {
      pointer.x += (pointer.tx - pointer.x) * 0.12
      pointer.y += (pointer.ty - pointer.y) * 0.12
      pointer.strength += (pointer.target - pointer.strength) * 0.08

      ctx.clearRect(0, 0, width, height)
      const cols = Math.floor(width / GAP) + 2
      const rows = Math.floor(height / GAP) + 2
      const ox = (width % GAP) / 2
      const oy = (height % GAP) / 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = ox + i * GAP
          let y = oy + j * GAP
          const wave = reduceMotion ? 0 : Math.sin(i * 0.3 + t * 0.0011) * Math.cos(j * 0.27 - t * 0.0008)
          let size = 1.5 + wave * 0.4
          let alpha = 0.19 + wave * 0.08
          let heat = 0

          if (pointer.strength > 0.01) {
            const dx = x - pointer.x
            const dy = y - pointer.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < RADIUS) {
              const f = 1 - dist / RADIUS
              heat = f * f * pointer.strength
              const push = (heat * 14) / (dist || 1)
              x += dx * push
              y += dy * push
              size += heat * 2.6
              alpha += heat * 0.8
            }
          }

          ctx.globalAlpha = Math.min(alpha, 1)
          ctx.fillStyle = heat > 0.08 ? signal : bone
          ctx.fillRect(x - size / 2, y - size / 2, size, size)
        }
      }
      ctx.globalAlpha = 1
    }

    const loop = (t: number) => {
      draw(t)
      frame = requestAnimationFrame(loop)
    }
    const start = () => {
      if (running || reduceMotion) return
      running = true
      frame = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(frame)
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!running) draw(performance.now())
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return
      const rect = canvas.getBoundingClientRect()
      pointer.tx = e.clientX - rect.left
      pointer.ty = e.clientY - rect.top
      if (!pointer.seen) {
        pointer.x = pointer.tx
        pointer.y = pointer.ty
        pointer.seen = true
      }
      pointer.target = 1
      if (reduceMotion) draw(0)
    }
    const onLeave = () => {
      pointer.target = 0
    }

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    visibility.observe(canvas)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.documentElement.addEventListener("pointerleave", onLeave)

    return () => {
      stop()
      resizeObserver.disconnect()
      visibility.disconnect()
      window.removeEventListener("pointermove", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className={className} />
}
