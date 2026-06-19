"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Gauge, Calendar, Fuel, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Car } from "@/lib/types"
import { formatPrice, formatMileage } from "@/lib/utils"
import { cn } from "@/lib/utils"

export function CarCard({ car }: { car: Car }) {
  // Índice de la foto que se está mostrando en el carrusel de la tarjeta.
  const [index, setIndex] = useState(0)
  const images = car.images.length > 0 ? car.images : ["/placeholder.svg"]
  const hasMultiple = images.length > 1

  // Avanza/retrocede la foto. preventDefault evita que el clic abra el detalle.
  function go(e: React.MouseEvent, dir: 1 | -1) {
    e.preventDefault()
    e.stopPropagation()
    setIndex((prev) => (prev + dir + images.length) % images.length)
  }

  return (
    <Link
      href={`/catalogo/${car.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={images[index] || "/placeholder.svg"}
          alt={`${car.brand} ${car.model} ${car.year}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <Badge variant="secondary" className="absolute left-3 top-3">
          {car.bodyType}
        </Badge>
        {car.sold && <Badge className="absolute right-3 top-3 bg-destructive text-white">Vendido</Badge>}

        {/* Controles del carrusel: solo aparecen si el auto tiene más de una foto */}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={(e) => go(e, -1)}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={(e) => go(e, 1)}
              aria-label="Foto siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Puntos indicadores de la cantidad de fotos */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((img, i) => (
                <span
                  key={img + i}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    i === index ? "bg-primary" : "bg-background/60",
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold leading-tight text-foreground">
          {car.brand} {car.model}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{car.location}</p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {car.year}
          </span>
          <span className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" />
            {formatMileage(car.mileage)}
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel className="h-3.5 w-3.5" />
            {car.fuel}
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <span className="text-lg font-semibold text-foreground">{formatPrice(car.price)}</span>
          <span className="text-sm font-medium text-primary group-hover:underline">Ver detalle</span>
        </div>
      </div>
    </Link>
  )
}
