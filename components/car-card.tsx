import Image from "next/image"
import Link from "next/link"
import { Gauge, Calendar, Fuel } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Car } from "@/lib/types"
import { formatPrice, formatMileage } from "@/lib/utils"

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      href={`/catalogo/${car.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={`${car.brand} ${car.model} ${car.year}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge variant="secondary" className="absolute left-3 top-3">
          {car.bodyType}
        </Badge>
        {car.sold && <Badge className="absolute right-3 top-3 bg-destructive text-white">Vendido</Badge>}
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
