import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Intermediación automotriz profesional
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Vende tu auto de forma rápida, segura y profesional
          </h1>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            En AutoBroker MX nos encargamos de todo: publicamos, promocionamos y filtramos compradores por ti. Tú solo
            envías las fotos y los datos de tu vehículo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/catalogo">
                Ver catálogo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={whatsappLink("Hola AutoBroker MX, quiero vender mi auto. ¿Me pueden asesorar?")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vende tu auto
              </a>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted md:aspect-square">
          <Image
            src="/cars/hero.png"
            alt="Automóvil moderno en exhibición"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
