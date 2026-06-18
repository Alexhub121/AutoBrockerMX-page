import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  /** Tamaño del wordmark. */
  size?: "sm" | "md" | "lg"
  /** Muestra el emblema "AM" antes del nombre. */
  showEmblem?: boolean
}

const sizeMap = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl sm:text-5xl",
}

const emblemSizeMap = {
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-12 w-12 text-base",
}

/** Emblema circular "AM" inspirado en el rin del logo. */
export function LogoEmblem({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-border bg-gradient-to-b from-secondary to-background font-brand font-extrabold not-italic shadow-inner",
        className,
      )}
      aria-hidden="true"
    >
      <span className="text-chrome italic">A</span>
      <span className="text-chrome-red italic">M</span>
    </span>
  )
}

export function Logo({ className, size = "md", showEmblem = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="AutoBroker MX, inicio"
    >
      {showEmblem && (
        <LogoEmblem
          className={cn(
            "ring-1 ring-primary/40 transition-shadow group-hover:shadow-[0_0_18px_-4px] group-hover:shadow-primary/60",
            emblemSizeMap[size],
          )}
        />
      )}
      <span className={cn("font-brand font-extrabold uppercase leading-none tracking-tight", sizeMap[size])}>
        <span className="text-chrome">Auto</span>
        <span className="text-chrome-red">Broker</span>
        <span className="text-chrome"> MX</span>
      </span>
    </Link>
  )
}
