"use client"

import { useEffect, useState } from "react"

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
})

/** Live Mumbai time. Renders a placeholder until mounted to avoid hydration drift. */
export function ISTClock({ className }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return <span className={`tabular-nums ${className ?? ""}`}>{now ? formatter.format(now) : "--:--:--"} IST</span>
}
