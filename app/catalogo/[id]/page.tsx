import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, Check, MessageCircle, Gauge, Calendar, Fuel, Settings2, Palette, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CarGallery } from "@/components/catalog/car-gallery"
import { getAllCars, getCarById } from "@/lib/cars"
import { formatPrice, formatMileage, whatsappLink } from "@/lib/utils"

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
  return {
    title: `${car.brand} ${car.model} ${car.year}`,
    description: car.description,
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

  const images = [car.image, ...(car.gallery ?? [])]
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
            <Badge variant="secondary">{car.bodyType}</Badge>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
            <p className="mt-2 text-3xl font-semibold text-foreground">{formatPrice(car.price)}</p>

            <Button asChild size="lg" className="mt-6 w-full bg-[#25D366] text-white hover:bg-[#1faa54]">
              <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Te responderemos lo antes posible para coordinar una cita.
            </p>

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
    </section>
  )
}
