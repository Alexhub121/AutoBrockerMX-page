import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight, Check, MessageCircle, Gauge, Calendar, Fuel, Settings2, Palette, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
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
    { icon: Calendar, label: "Año", value: String(car.year) },
    { icon: Gauge, label: "Kilometraje", value: formatMileage(car.mileage) },
    { icon: Settings2, label: "Transmisión", value: car.transmission },
    { icon: Fuel, label: "Combustible", value: car.fuel },
    { icon: Palette, label: "Color", value: car.color },
    { icon: MapPin, label: "Ubicación", value: car.location },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
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

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <CarGallery images={images} alt={title} />

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">Descripción</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{car.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">Equipamiento</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {car.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Panel de compra */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{car.bodyType}</Badge>
              {car.sold && <Badge className="bg-destructive text-white">Vendido</Badge>}
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
            <p className="mt-2 text-3xl font-semibold text-foreground">{formatPrice(car.price)}</p>

            {car.sold ? (
              <div className="mt-6 space-y-3">
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
                  className="mt-6 w-full bg-[#25D366] text-[#052E19] hover:bg-[#1faa54]"
                  render={<a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" />}
                >
                  <MessageCircle className="h-4 w-4" />
                  Contactar por WhatsApp
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Te responderemos lo antes posible para coordinar una cita.
                </p>
              </>
            )}

            <Separator className="my-6" />

            <h2 className="text-sm font-semibold text-foreground">Ficha técnica</h2>
            <dl className="mt-4 space-y-3">
              {specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between text-sm">
                  <dt className="flex items-center gap-2 text-muted-foreground">
                    <spec.icon className="h-4 w-4" />
                    {spec.label}
                  </dt>
                  <dd className="font-medium text-foreground">{spec.value}</dd>
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
          className="mt-12 flex items-stretch justify-between gap-4 border-t border-border pt-6"
        >
          {prevCar ? (
            <Link
              href={`/catalogo/${prevCar.id}`}
              className="group flex min-w-0 flex-1 items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary/60"
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
