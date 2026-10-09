import Image from "next/image"
import Link from "next/link"
import { Button, ButtonArrow } from "@/components/ui/button"
import { whatsappLink } from "@/lib/utils"
import { HERO_IMAGE } from "@/lib/constants"

/**
 * Cierre: la comisión es el argumento de venta más fuerte, así que el cierre
 * la pone al frente. Se reutiliza en Inicio y Nosotros.
 */
export function CtaSection() {
  return (
    <section className="bg-floor relative overflow-hidden">
      {/* El mismo auto del hero, de vuelta en la penumbra: cierra el recorrido */}
      <Image
        src={HERO_IMAGE.src}
        alt=""
        fill
        sizes="100vw"
        className="cta-car object-cover object-[70%_70%] opacity-35"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[var(--floor)] via-[var(--floor)]/85 to-[var(--floor)]/30" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <h2 className="reveal-title font-display text-5xl text-foreground md:text-7xl">
            Solo cobramos
            <span className="block">si vendemos.</span>
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground md:text-lg">
            Comisión estándar del <span className="tabular font-semibold text-foreground">5%</span> sobre el valor
            final de venta. Para autos de gama media y alta puede ajustarse entre 6% y 8% según el nivel de servicio.
            Sin costos por adelantado y con asesoría inicial gratuita.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
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
              Escríbenos por WhatsApp
              <ButtonArrow />
            </Button>
            <Link
              href="/vende"
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-[0.4em] transition-[text-decoration-color] duration-200 hover:decoration-primary"
            >
              Cómo vendemos tu auto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
