import Link from "next/link"
import { CarCard } from "@/components/car-card"
import { getFeaturedCars } from "@/lib/cars"
import { cn } from "@/lib/utils"

export function FeaturedCars() {
  const cars = getFeaturedCars().slice(0, 3)
  const [lead, ...rest] = cars

  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal-title font-display text-5xl text-foreground md:text-6xl">En venta ahora</h2>
          <Link
            href="/catalogo"
            className="text-sm font-medium text-foreground underline decoration-border underline-offset-[0.4em] transition-[text-decoration-color] duration-200 hover:decoration-primary"
          >
            Ver todo el catálogo
          </Link>
        </div>

        {/* Un auto protagonista + dos de apoyo. Rompe la fila de 3 tarjetas iguales. */}
        <div className={cn("mt-12 grid gap-x-8 gap-y-12", rest.length > 0 && "lg:grid-cols-12")}>
          {lead && (
            <div className="reveal-card flex lg:col-span-7 lg:row-span-2">
              <CarCard car={lead} size="large" />
            </div>
          )}
          {rest.map((car) => (
            <div key={car.id} className="reveal-card lg:col-span-5">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
