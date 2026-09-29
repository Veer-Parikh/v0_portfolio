import { Fragment } from "react"
import { cn } from "@/lib/utils"

/** Renders `*phrase*` segments of a string in the italic serif accent face. */
export function Accent({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className={cn("font-serif font-normal italic tracking-[-0.01em]", className)}>
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
