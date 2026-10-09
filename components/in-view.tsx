"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * Marca `data-inview="true"` cuando el bloque entra en pantalla (una sola vez).
 * El CSS decide qué animar con ese atributo; sin JS el contenido sigue visible
 * porque los estilos de reposo solo atenúan, nunca ocultan.
 */
export function InView({
  children,
  className,
  threshold = 0.35,
}: {
  children: ReactNode
  className?: string
  threshold?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
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
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} data-inview={inView} className={className}>
      {children}
    </div>
  )
}
