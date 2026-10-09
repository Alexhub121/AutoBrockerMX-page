import type { Metadata } from "next"
import { Button, ButtonArrow } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { whatsappLink } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Vende tu auto",
  alternates: {
    canonical: "/vende",
  },
  description:
    "Vende tu auto con AutoBroker MX. Nos encargamos de la promoción, el filtrado de compradores y el cierre de la venta. Comisión solo por venta exitosa.",
}

const steps = [
  { title: "Envíanos tu auto", description: "Mándanos fotos y datos del vehículo por WhatsApp." },
  { title: "Lo promocionamos", description: "Creamos contenido profesional y lo publicamos en varios canales." },
  { title: "Filtramos compradores", description: "Seleccionamos al mejor postor y coordinamos las citas." },
  { title: "Cerramos la venta", description: "Te asesoramos en trámites y documentación hasta concretar." },
]

const services = [
  { title: "Fotografía profesional", description: "Edición de imágenes para que tu auto luzca al máximo." },
  { title: "Publicación destacada", description: "Mayor visibilidad en redes sociales y plataformas." },
  { title: "Gestión documental", description: "Apoyo en avalúo, trámites y documentación." },
  { title: "Acondicionamiento", description: "Reparación y detallado con nuestros contactos profesionales." },
]

/** Lo que el vendedor debe tener a la mano: coincide con el mensaje de WhatsApp. */
const checklist = ["Marca y modelo", "Año", "Kilometraje", "Ciudad", "Estado del auto", "Fotos (frente, lados, interior)"]

export default function VendePage() {
  // Mensaje con campos vacíos para que el cliente solo los rellene y envíe.
  // Los saltos de línea se conservan en WhatsApp (%0A).
  const message = [
    "Hola AutoBroker MX, quiero vender mi auto.",
    "",
    "Marca:",
    "Modelo:",
    "Año:",
    "Kilometraje:",
    "Ciudad:",
    "Estado del auto:",
    "",
    "(Sigue adjuntando fotos por aquí)",
  ].join("\n")

  return (
    <>
      <PageHeader
        title="Vende tu auto sin complicaciones"
        description="Tú solo envías las fotos y los datos. Nosotros nos encargamos de todo lo demás hasta concretar la venta."
      >
        <div className="animate-rise mt-9" style={{ "--delay": "180ms" } as React.CSSProperties}>
          <Button
            size="lg"
            render={<a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" />}
          >
            Quiero vender mi auto
            <ButtonArrow />
          </Button>
        </div>
      </PageHeader>

      {/* Proceso: lista ordenada con número grande; el orden es la información */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="reveal-title font-display text-5xl text-foreground md:text-6xl lg:col-span-4">El proceso</h2>
          <ol className="grid gap-px overflow-hidden rounded-2xl bg-border/70 sm:grid-cols-2 lg:col-span-8">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-background p-7 md:p-8">
                <span className="font-display tabular text-5xl text-[oklch(0.36_0.006_264)]">{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Comisión + qué preparar */}
      <section className="bg-floor border-y border-border/70">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 md:py-28 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <h2 className="reveal-title font-display text-5xl text-foreground md:text-6xl">Comisión transparente</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground md:text-lg">
              Solo cobramos cuando logramos vender tu auto. Nuestra comisión estándar es del 5% sobre el valor final del
              vehículo. Para autos de gama media y alta puede ajustarse entre 6% y 8% según el nivel de servicio.
            </p>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 sm:gap-6 border-t border-border/70 pt-8">
              <div>
                <dt className="text-xs text-muted-foreground">Comisión desde</dt>
                <dd className="font-display tabular mt-2 text-4xl text-foreground sm:text-5xl">5%</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Por adelantado</dt>
                <dd className="font-display tabular mt-2 text-4xl text-foreground sm:text-5xl">$0</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Asesoría inicial</dt>
                <dd className="font-display mt-2 text-4xl text-foreground sm:text-5xl">Gratis</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="shadow-ambient rounded-2xl bg-card p-7 md:p-8">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">Ten esto a la mano</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Al pulsar el botón se abre WhatsApp con un mensaje listo: solo rellena los datos y adjunta las fotos.
              </p>
              <ul className="mt-6 space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <svg viewBox="0 0 16 16" className="size-4 shrink-0 text-brake" fill="none" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                variant="whatsapp"
                className="mt-8 w-full"
                render={<a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" />}
              >
                Enviar datos por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios complementarios: lista editorial, no tarjetas */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="reveal-title font-display text-5xl text-foreground md:text-6xl">Servicios extra</h2>
            <p className="mt-5 max-w-xs leading-relaxed text-muted-foreground">
              Servicios adicionales para potenciar la venta de tu vehículo.
            </p>
          </div>
          <ul className="border-t border-border/70 lg:col-span-8">
            {services.map((service) => (
              <li
                key={service.title}
                className="reveal-row grid gap-2 border-b border-border/70 py-6 sm:grid-cols-[1fr_1.3fr] sm:items-baseline sm:gap-8"
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
