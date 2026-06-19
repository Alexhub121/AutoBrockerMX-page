import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/utils"

export function Hero() {
  return (
    <section className="bg-carbon relative overflow-hidden border-b border-border">
      {/* Acentos rojos difusos */}
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Intermediación automotriz profesional
          </span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Vende tu auto de forma <span className="text-chrome-red">rápida</span>, segura y profesional
          </h1>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            En AutoBroker MX nos encargamos de todo: publicamos, promocionamos y filtramos compradores por ti. Tú solo
            envías las fotos y los datos de tu vehículo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/catalogo" />}>
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={
                <a
                  href={whatsappLink("Hola AutoBroker MX, quiero vender mi auto. ¿Me pueden asesorar?")}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Vende tu auto
            </Button>
          </div>
        </div>

        {/* Showcase del logo real con resplandor y reflejo */}
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 scale-90 rounded-full bg-primary/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-xl border border-border bg-black/40 shadow-2xl glow-red">
            <Image
              src="/brand/autobroker-logo.jpeg"
              alt="Logo de AutoBroker MX"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
          {/* Reflejo sutil */}
          <div
            className="pointer-events-none mx-auto mt-1 h-16 w-[88%] scale-y-[-1] overflow-hidden opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]"
            aria-hidden="true"
          >
            <Image
              src="/brand/autobroker-logo.jpeg"
              alt=""
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
