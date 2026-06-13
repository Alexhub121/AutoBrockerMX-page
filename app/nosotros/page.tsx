import type { Metadata } from "next"
import { Target, ShieldCheck, TrendingUp, Award, Network, Wallet } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce AutoBroker MX: intermediación automotriz profesional que conecta propietarios con compradores en todo México.",
}

const advantages = [
  { icon: Award, title: "Atención personalizada", description: "Acompañamos a cada cliente de principio a fin." },
  { icon: Wallet, title: "Bajo costo operativo", description: "Solo cobramos una comisión cuando logramos la venta." },
  { icon: Network, title: "Amplio alcance", description: "Promoción en múltiples plataformas y redes sociales." },
  { icon: ShieldCheck, title: "Operaciones seguras", description: "Filtramos compradores y prevenimos fraudes." },
  { icon: TrendingUp, title: "Modelo escalable", description: "Servicio con cobertura en toda la República Mexicana." },
  { icon: Target, title: "Experiencia en ventas", description: "Conocemos el mercado automotriz mexicano." },
]

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        title="Sobre AutoBroker MX"
        description="Una plataforma de intermediación automotriz que simplifica la compra-venta de vehículos en México."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Quiénes somos</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              AutoBroker MX conecta de manera profesional a propietarios de vehículos con compradores potenciales en
              todo México. Nuestro objetivo es simplificar el proceso de venta mediante asesoría personalizada,
              promoción digital, filtrado de compradores y acompañamiento durante toda la negociación.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sabemos que vender un auto entre particulares puede ser complicado: pérdida de tiempo, riesgo de fraudes y
              desconocimiento del valor real del vehículo. Nosotros resolvemos eso para que tú no te preocupes por nada.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-base font-semibold text-foreground">Nuestra misión</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Que cada persona que quiera vender su auto se acerque con nosotros para asesorarlo y concretar ventas
                seguras, tanto para el comprador como para el vendedor, ahorrándole tiempo y preocupaciones.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-base font-semibold text-foreground">Nuestro objetivo</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Convertirnos en una referencia nacional en intermediación automotriz, consolidando la marca en el
                mercado mexicano con un servicio confiable y profesional.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Ventajas competitivas</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((adv) => (
              <div key={adv.title} className="rounded-lg border border-border bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary">
                  <adv.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{adv.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
