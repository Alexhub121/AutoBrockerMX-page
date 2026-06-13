import type { Metadata } from "next"
import { Camera, FileText, Search, Handshake, Check, MessageCircle, Wrench, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { whatsappLink } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Vende tu auto",
  description:
    "Vende tu auto con AutoBroker MX. Nos encargamos de la promoción, el filtrado de compradores y el cierre de la venta. Comisión solo por venta exitosa.",
}

const steps = [
  { icon: MessageCircle, title: "Envíanos tu auto", description: "Mándanos fotos y datos del vehículo por WhatsApp." },
  { icon: Camera, title: "Lo promocionamos", description: "Creamos contenido profesional y lo publicamos en varios canales." },
  { icon: Search, title: "Filtramos compradores", description: "Seleccionamos al mejor postor y coordinamos las citas." },
  { icon: Handshake, title: "Cerramos la venta", description: "Te asesoramos en trámites y documentación hasta concretar." },
]

const services = [
  { icon: Camera, title: "Fotografía profesional", description: "Edición de imágenes para que tu auto luzca al máximo." },
  { icon: Sparkles, title: "Publicación destacada", description: "Mayor visibilidad en redes sociales y plataformas." },
  { icon: FileText, title: "Gestión documental", description: "Apoyo en avalúo, trámites y documentación." },
  { icon: Wrench, title: "Acondicionamiento", description: "Reparación y detallado con nuestros contactos profesionales." },
]

export default function VendePage() {
  const message = "Hola AutoBroker MX, quiero vender mi auto. Estos son los datos: marca, modelo, año y kilometraje."

  return (
    <>
      <PageHeader
        title="Vende tu auto sin complicaciones"
        description="Tú solo envías las fotos y los datos. Nosotros nos encargamos de todo lo demás hasta concretar la venta."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {/* Proceso */}
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">El proceso</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Comisión */}
        <div className="mt-16 grid gap-8 rounded-lg border border-border bg-secondary/40 p-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Comisión transparente</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Solo cobramos cuando logramos vender tu auto. Nuestra comisión estándar es del 5% sobre el valor final del
              vehículo. Para autos de gama media y alta puede ajustarse entre 6% y 8% según el nivel de servicio.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Sin costos por adelantado",
                "Pagas únicamente por venta exitosa",
                "Asesoría inicial gratuita",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Comisión desde</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-foreground">5%</p>
            <p className="mt-2 text-sm text-muted-foreground">sobre el valor final de venta</p>
            <Button asChild size="lg" className="mt-6 w-full bg-[#25D366] text-white hover:bg-[#1faa54]">
              <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Quiero vender mi auto
              </a>
            </Button>
          </div>
        </div>

        {/* Servicios complementarios */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Servicios complementarios</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Servicios adicionales para potenciar la venta de tu vehículo.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-lg border border-border bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
