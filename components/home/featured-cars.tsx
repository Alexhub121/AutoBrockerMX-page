import Link from "next/link"
import { Button, ButtonArrow } from "@/components/ui/button"
import { CarCard } from "@/components/car-card"
import { getAllCars, getFeaturedCars } from "@/lib/cars"
import { cn } from "@/lib/utils"

/** Botón hacia el catálogo completo; el número dice que hay más autos. */
function CatalogButton({ total, className }: { total: number; className?: string }) {
  return (
    <Button size="lg" variant="outline" className={className} render={<Link href="/catalogo" />}>
      Ver los {total} autos del catálogo
      <ButtonArrow className="bg-white/10" />
    </Button>
  )
}

export function FeaturedCars() {
  const cars = getFeaturedCars().slice(0, 3)
  const [lead, ...rest] = cars
  const available = getAllCars().filter((car) => !car.sold).length

  return (
    <section className="border-b border-border/70">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-8">
          <div>
            <h2 className="reveal-title font-display text-5xl text-foreground md:text-6xl">Autos destacados</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Una selección de los <span className="tabular font-medium text-foreground">{available}</span> autos
              disponibles hoy. Hay más en el catálogo.
            </p>
          </div>
          {/* En escritorio el botón acompaña al título */}
          <CatalogButton total={available} className="hidden md:inline-flex" />
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

        {/* En móvil va al final, justo cuando el usuario terminó de ver los destacados */}
        <CatalogButton total={available} className="mt-12 w-full md:hidden" />
      </div>
    </section>
  )
}
