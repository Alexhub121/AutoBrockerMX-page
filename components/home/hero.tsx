import Image from "next/image"
import Link from "next/link"
import { Button, ButtonArrow } from "@/components/ui/button"
import { whatsappLink } from "@/lib/utils"
import { HERO_IMAGE } from "@/lib/constants"

const facts = ["Comisión solo si vendemos", "Sin costos por adelantado", "Servicio en toda la República"]

export function Hero() {
  return (
    <section className="hero bg-floor relative -mt-16 flex flex-col overflow-hidden md:block md:min-h-[min(100dvh,980px)]">
      {/* El auto bajo el reflector. En móvil va debajo del texto; en escritorio
          llena la sección y el texto vive en la zona oscura superior. */}
      <div className="hero-car relative order-2 aspect-[16/10] md:absolute md:top-[30%] md:right-0 md:bottom-0 md:left-[30%] md:aspect-auto">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="animate-lights-on object-cover object-[50%_75%] md:object-[60%_85%]"
        />
        {/* Fundidos al color del piso para que la foto no tenga bordes duros */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-[var(--floor)] to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-linear-to-r from-[var(--floor)] to-transparent md:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-[var(--floor)] to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="hero-copy relative order-1 mx-auto flex w-full max-w-7xl flex-col px-4 pt-28 sm:px-6 md:min-h-[min(100dvh,980px)] md:pt-36 lg:px-8">
        <h1 className="font-display text-[clamp(3.25rem,9vw,6rem)] text-foreground">
          <span className="animate-rise block">Vende tu auto.</span>
          <span
            className="animate-rise block text-[oklch(0.62_0.006_264)]"
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            Nosotros hacemos el resto.
          </span>
        </h1>

        <p
          className="animate-rise mt-7 max-w-md leading-relaxed text-muted-foreground md:text-lg"
          style={{ "--delay": "240ms" } as React.CSSProperties}
        >
          Publicamos, promocionamos y filtramos compradores por ti. Tú solo nos mandas las fotos y los datos de tu
          vehículo por WhatsApp.
        </p>

        <div
          className="animate-rise mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
          style={{ "--delay": "340ms" } as React.CSSProperties}
        >
          <Button
            size="lg"
            render={
              <a
                href={whatsappLink("Hola AutoBroker MX, quiero vender mi auto. ¿Me pueden asesorar?")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Quiero vender mi auto
            <ButtonArrow />
          </Button>
          <Button size="lg" variant="outline" className="bg-background/40 backdrop-blur-sm" render={<Link href="/catalogo" />}>
            Ver autos en venta
          </Button>
        </div>

        {/* Hechos del servicio, al ras del piso */}
        <ul
          className="animate-rise mt-auto hidden flex-wrap gap-x-8 gap-y-2 border-t border-white/10 py-6 text-sm text-muted-foreground md:flex"
          style={{ "--delay": "700ms" } as React.CSSProperties}
        >
          {facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2.5">
              <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
