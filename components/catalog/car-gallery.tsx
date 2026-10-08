"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Galería del detalle del auto.
 * - Miniaturas debajo de la foto principal.
 * - Flechas ‹ › sobre la foto principal.
 * - Lightbox a pantalla completa al pulsar la foto (Esc / clic fuera / ✕ para
 *   cerrar, ← → para cambiar de foto, contador "1 de 3").
 */
export function CarGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const openBtnRef = useRef<HTMLButtonElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const safeImages = images.length > 0 ? images : ["/placeholder.svg"]
  const total = safeImages.length
  const hasMultiple = total > 1

  const go = (dir: 1 | -1) => setActive((prev) => (prev + dir + total) % total)

  // Comportamiento del lightbox: teclado + bloqueo de scroll de la página.
  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowRight") setActive((p) => (p + 1) % total)
      if (e.key === "ArrowLeft") setActive((p) => (p - 1 + total) % total)
    }

    document.addEventListener("keydown", onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const opener = openBtnRef.current // copia: el cleanup no debe leer el ref vivo
    closeBtnRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previousOverflow
      opener?.focus()
    }
  }, [open, total])

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
        <Image
          src={safeImages[active] || "/placeholder.svg"}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />

        {/* Ampliar a pantalla completa */}
        <button
          ref={openBtnRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Ampliar foto ${active + 1} de ${total}`}
          className="group/zoom absolute inset-0 flex cursor-zoom-in items-end justify-end p-3 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#25D366]"
        >
          <span className="inline-flex items-center gap-1.5 rounded-md bg-background/75 px-2 py-1 text-xs font-medium text-foreground opacity-0 backdrop-blur transition-opacity group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100">
            <ZoomIn className="h-3.5 w-3.5" />
            Ampliar
          </span>
        </button>

        {/* Flechas sobre la foto principal */}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground opacity-100 backdrop-blur transition-opacity hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Foto siguiente"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground opacity-100 backdrop-blur transition-opacity hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Contador */}
        <span className="absolute right-2 bottom-2 rounded-md bg-background/75 px-2 py-0.5 text-xs font-medium text-foreground backdrop-blur">
          {active + 1} de {total}
        </span>
      </div>

      {/* Miniaturas */}
      {hasMultiple && (
        <div className="mt-3 flex gap-3">
          {safeImages.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1}`}
              aria-current={active === i}
              className={cn(
                "relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-md border bg-muted transition-colors",
                active === i ? "border-primary ring-1 ring-primary" : "border-border hover:border-muted-foreground",
              )}
            >
              <Image src={img || "/placeholder.svg"} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — foto ${active + 1} de ${total}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4"
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar vista ampliada"
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative flex max-h-[82vh] w-full max-w-5xl items-center justify-center">
            {hasMultiple && (
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Foto anterior"
                className="absolute left-0 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <Image
              src={safeImages[active] || "/placeholder.svg"}
              alt={`${alt} — foto ${active + 1} de ${total}`}
              width={1024}
              height={1024}
              priority
              className="max-h-[82vh] w-auto max-w-full rounded-md object-contain"
            />

            {hasMultiple && (
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Foto siguiente"
                className="absolute right-0 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          <p className="mt-4 text-sm text-white/70" aria-live="polite">
            {active + 1} de {total}
            {hasMultiple && " · usa ← → y Esc para cerrar"}
          </p>
        </div>
      )}
    </div>
  )
}
