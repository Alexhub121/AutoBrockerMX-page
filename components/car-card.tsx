"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Car } from "@/lib/types"
import { formatPrice, formatMileage } from "@/lib/utils"
import { cn } from "@/lib/utils"

type CarCardProps = {
  car: Car
  /** Variante grande para el auto principal de la portada. */
  size?: "default" | "large"
  /** Carga prioritaria de la foto (solo para tarjetas visibles al cargar). */
  priority?: boolean
}

export function CarCard({ car, size = "default", priority = false }: CarCardProps) {
  // Índice de la foto que se está mostrando en el carrusel de la tarjeta.
  const [index, setIndex] = useState(0)
  const images = car.images.length > 0 ? car.images : ["/placeholder.svg"]
  const hasMultiple = images.length > 1
  const large = size === "large"

  // Avanza/retrocede la foto. preventDefault evita que el clic abra el detalle.
  function go(e: React.MouseEvent, dir: 1 | -1) {
    e.preventDefault()
    e.stopPropagation()
    setIndex((prev) => (prev + dir + images.length) % images.length)
  }

  const arrowClass =
    "absolute top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition-[opacity,background-color] duration-200 hover:bg-background [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 focus-visible:opacity-100"

  return (
    <Link
      href={`/catalogo/${car.id}`}
      className="group flex h-full w-full flex-col rounded-2xl focus-visible:outline-offset-4"
    >
      <div
        className={cn(
          "reveal-photo relative overflow-hidden rounded-2xl bg-card",
          large ? "aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:flex-1" : "aspect-[4/3]",
        )}
      >
        <Image
          src={images[index] || "/placeholder.svg"}
          alt={`${car.brand} ${car.model} ${car.year}`}
          fill
          priority={priority}
          sizes={large ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"}
          className={cn(
            "object-cover transition-[transform,filter] duration-700 ease-[var(--ease-out)] [@media(hover:hover)]:group-hover:scale-[1.035]",
            car.sold && "grayscale-[0.6] brightness-75",
          )}
        />

        {/* Velo inferior para que los indicadores sean legibles sobre fotos claras */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/40 to-transparent"
          aria-hidden="true"
        />

        <span className="absolute left-3 top-3 rounded-full bg-background/75 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          {car.bodyType}
        </span>
        {car.sold && (
          <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
            Vendido
          </span>
        )}

        {/* Controles del carrusel: solo aparecen si el auto tiene más de una foto */}
        {hasMultiple && (
          <>
            <button type="button" onClick={(e) => go(e, -1)} aria-label="Foto anterior" className={cn(arrowClass, "left-3")}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={(e) => go(e, 1)} aria-label="Foto siguiente" className={cn(arrowClass, "right-3")}>
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Indicadores: el activo se alarga en vez de solo cambiar de color */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1" aria-hidden="true">
              {images.map((img, i) => (
                <span
                  key={img + i}
                  className={cn(
                    "h-1 rounded-full transition-[width,background-color] duration-300 ease-[var(--ease-out)]",
                    i === index ? "w-4 bg-white" : "w-1 bg-white/50",
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={cn("flex items-baseline justify-between gap-4 px-1", large ? "pt-5" : "pt-4")}>
        <div className="min-w-0">
          <h3
            className={cn(
              "truncate font-semibold tracking-tight text-foreground",
              large ? "text-xl md:text-2xl" : "text-base",
            )}
          >
            {car.brand} {car.model}
          </h3>
        </div>
        <p
          className={cn(
            "tabular shrink-0 font-semibold text-foreground",
            large ? "text-xl md:text-2xl" : "text-base",
            car.sold && "text-muted-foreground line-through decoration-1",
          )}
        >
          {formatPrice(car.price)}
        </p>
      </div>
      <p className="tabular mt-1 truncate px-1 text-sm text-muted-foreground">
        {car.year} · {formatMileage(car.mileage)} · {car.transmission} · {car.location}
      </p>
    </Link>
  )
}
