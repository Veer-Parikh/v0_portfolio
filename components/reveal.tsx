"use client"

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function useInView<T extends Element>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return [ref, inView] as const
}

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  delay?: number
}

export function Reveal({ as: Tag = "div", delay = 0, className, style, children, ...rest }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      data-in={inView}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  )
}
