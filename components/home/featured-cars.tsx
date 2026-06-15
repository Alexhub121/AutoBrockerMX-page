import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CarCard } from "@/components/car-card"
import { getFeaturedCars } from "@/lib/cars"

export function FeaturedCars() {
  const cars = getFeaturedCars()

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">Autos destacados</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Algunos de los vehículos disponibles en nuestra cartera.
            </p>
          </div>
          <Button variant="outline" render={<Link href="/catalogo" />}>
            Ver todo el catálogo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
