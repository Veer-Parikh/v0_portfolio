/**
 * Decorative candlestick chart with a gentle upward drift. Uses a seeded PRNG
 * so server and client render identical markup.
 */
export function Candles({ count = 60, seed = 11, className }: { count?: number; seed?: number; className?: string }) {
  let state = seed
  const rand = () => {
    state = (state * 16807) % 2147483647
    return state / 2147483647
  }

  const candles: { open: number; close: number; high: number; low: number }[] = []
  let price = 40
  for (let i = 0; i < count; i++) {
    const open = price
    const close = open + (rand() - 0.42) * 9
    candles.push({
      open,
      close,
      high: Math.max(open, close) + rand() * 4,
      low: Math.min(open, close) - rand() * 4,
    })
    price = close
  }

  const max = Math.max(...candles.map((c) => c.high))
  const min = Math.min(...candles.map((c) => c.low))
  const H = 200
  const STEP = 12
  const y = (v: number) => +(H - 4 - ((v - min) / (max - min)) * (H - 8)).toFixed(2)

  return (
    <svg viewBox={`0 0 ${count * STEP} ${H}`} preserveAspectRatio="none" aria-hidden className={className}>
      {candles.map((c, i) => {
        const x = i * STEP + STEP / 2
        const top = y(Math.max(c.open, c.close))
        const bottom = y(Math.min(c.open, c.close))
        const up = c.close >= c.open
        return (
          <g key={i} stroke="currentColor" vectorEffect="non-scaling-stroke">
            <line x1={x} x2={x} y1={y(c.high)} y2={y(c.low)} vectorEffect="non-scaling-stroke" />
            <rect
              x={x - 3.5}
              y={top}
              width={7}
              height={Math.max(bottom - top, 1.5)}
              fill={up ? "currentColor" : "none"}
              vectorEffect="non-scaling-stroke"
            />
          </g>
        )
      })}
    </svg>
  )
}
