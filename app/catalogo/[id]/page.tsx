import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CarGallery } from "@/components/catalog/car-gallery"
import { getAllCars, getCarById } from "@/lib/cars"
import { formatPrice, formatMileage, whatsappLink } from "@/lib/utils"
import { OG_IMAGE, carBreadcrumbJsonLd, carJsonLd } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"

export function generateStaticParams() {
  return getAllCars().map((car) => ({ id: car.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const car = getCarById(id)
  if (!car) return { title: "Auto no encontrado" }
  const title = `${car.brand} ${car.model} ${car.year}`
  return {
    title,
    description: car.description,
    alternates: {
      canonical: `/catalogo/${car.id}`,
    },
    openGraph: {
      type: "article",
      title: `${title} | AutoBroker MX`,
      description: car.description,
      url: `/catalogo/${car.id}`,
      images: [
        {
          url: car.images[0] ?? OG_IMAGE,
          width: 1024,
          height: 1024,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AutoBroker MX`,
      description: car.description,
      images: [car.images[0] ?? OG_IMAGE],
    },
  }
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const car = getCarById(id)

  if (!car) notFound()

  // Vehículos vecinos del catálogo para navegar sin volver al listado
  const list = getAllCars()
  const index = list.findIndex((c) => c.id === id)
  const prevCar = index > 0 ? list[index - 1] : null
  const nextCar = index >= 0 && index < list.length - 1 ? list[index + 1] : null

  // Todas las fotos del auto vienen del campo `images` en lib/cars.ts
  const images = car.images
  const title = `${car.brand} ${car.model} ${car.year}`
  const message = `Hola AutoBroker MX, me interesa el ${title} que vi en su sitio web (${formatPrice(car.price)}). ¿Sigue disponible?`

  const specs = [
    { label: "Año", value: String(car.year) },
    { label: "Kilometraje", value: formatMileage(car.mileage) },
    { label: "Transmisión", value: car.transmission },
    { label: "Combustible", value: car.fuel },
    { label: "Color", value: car.color },
    { label: "Ubicación", value: car.location },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      {/* Datos estructurados: precio, kilometraje y disponibilidad para Google */}
      <JsonLd data={carJsonLd(car)} />
      <JsonLd data={carBreadcrumbJsonLd(car)} />

      <Link
        href="/catalogo"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Volver al catálogo
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-12">
        <div className="min-w-0">
          <CarGallery images={images} alt={title} />

          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">Descripción</h2>
              <p className="mt-4 leading-relaxed text-foreground/90">{car.description}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">Equipamiento</h2>
              <ul className="mt-4 border-t border-border/70">
                {car.features.map((feature) => (
                  <li key={feature} className="border-b border-border/70 py-2.5 text-sm text-foreground/90">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Panel de compra */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="shadow-ambient rounded-2xl bg-card p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-foreground">{car.bodyType}</span>
              {car.sold && (
                <span className="rounded-full bg-primary px-2.5 py-1 font-semibold text-primary-foreground">Vendido</span>
              )}
            </div>
            <h1 className="font-display mt-5 text-4xl text-foreground md:text-5xl">
              {car.brand} {car.model}
              <span className="tabular mt-1 block text-[oklch(0.62_0.006_264)]">{car.year}</span>
            </h1>
            <p className="tabular mt-5 text-3xl font-semibold tracking-tight text-foreground">{formatPrice(car.price)}</p>

            {car.sold ? (
              <div className="mt-7 space-y-3">
                <Button size="lg" disabled className="w-full">
                  Este auto ya fue vendido
                </Button>
                <Button size="lg" variant="outline" className="w-full" render={<Link href="/catalogo" />}>
                  Ver autos disponibles
                </Button>
              </div>
            ) : (
              <>
                <Button
                  size="lg"
                  variant="whatsapp"
                  className="mt-7 w-full"
                  render={<a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" />}
                >
                  Me interesa este auto
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Te responderemos lo antes posible para coordinar una cita.
                </p>
              </>
            )}

            <h2 className="mt-8 border-t border-border/70 pt-6 text-sm font-medium text-muted-foreground">Ficha técnica</h2>
            <dl className="mt-3">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between gap-4 border-b border-border/50 py-3 text-sm last:border-b-0"
                >
                  <dt className="text-muted-foreground">{spec.label}</dt>
                  <dd className="tabular text-right font-medium text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Navegación a los vehículos vecinos: no hace falta volver al catálogo */}
      {(prevCar || nextCar) && (
        <nav
          aria-label="Otros vehículos del catálogo"
          className="mt-20 flex items-stretch justify-between gap-4 border-t border-border/70 pt-8"
        >
          {prevCar ? (
            <Link
              href={`/catalogo/${prevCar.id}`}
              className="group flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-card p-5 transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Anterior</span>
                <span className="block truncate text-sm font-medium text-foreground">
                  {prevCar.brand} {prevCar.model} {prevCar.year}
                </span>
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" className="flex-1" />
          )}

          {nextCar ? (
            <Link
              href={`/catalogo/${nextCar.id}`}
              className="group flex min-w-0 flex-1 flex-row-reverse items-center justify-end gap-3 rounded-lg border border-border bg-card p-4 text-right transition-colors hover:bg-secondary/60"
            >
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Siguiente</span>
                <span className="block truncate text-sm font-medium text-foreground">
                  {nextCar.brand} {nextCar.model} {nextCar.year}
                </span>
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" className="flex-1" />
          )}
        </nav>
      )}
    </section>
  )
}
