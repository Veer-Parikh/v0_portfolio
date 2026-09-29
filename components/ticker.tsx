import type { CSSProperties } from "react"
import { tickerStats } from "@/lib/data"

/** Exchange-style tape of real stats, looping forever. */
export default function Ticker() {
  return (
    <div className="marquee edge-fade relative overflow-hidden border-y border-line bg-ink-2/70 backdrop-blur-sm">
      <div className="marquee-track flex w-max" style={{ "--marquee-duration": "55s" } as CSSProperties}>
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {tickerStats.map((stat) => (
              <li key={stat.label} className="label flex items-center gap-3 py-3.5 pl-7">
                <span className="text-dim">{stat.label}</span>
                <span className="text-bone">{stat.value}</span>
                <span className="text-signal">▲</span>
                <span className="pl-4 text-line-strong">/</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
