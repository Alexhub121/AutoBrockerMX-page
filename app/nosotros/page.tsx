import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Nosotros",
  alternates: {
    canonical: "/nosotros",
  },
  description:
    "Conoce AutoBroker MX: intermediación automotriz profesional que conecta propietarios con compradores en todo México.",
}

const advantages = [
  { title: "Atención personalizada", description: "Acompañamos a cada cliente de principio a fin." },
  { title: "Bajo costo operativo", description: "Solo cobramos una comisión cuando logramos la venta." },
  { title: "Amplio alcance", description: "Promoción en múltiples plataformas y redes sociales." },
  { title: "Operaciones seguras", description: "Filtramos compradores y prevenimos fraudes." },
  { title: "Cobertura nacional", description: "Servicio con cobertura en toda la República Mexicana." },
  { title: "Experiencia en ventas", description: "Conocemos el mercado automotriz mexicano." },
]

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        title="Sobre AutoBroker MX"
        description="Una plataforma de intermediación automotriz que simplifica la compra-venta de vehículos en México."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="reveal-title font-display text-5xl text-foreground md:text-6xl">Quiénes somos</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90">
              AutoBroker MX conecta de manera profesional a propietarios de vehículos con compradores potenciales en
              todo México.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Nuestro objetivo es simplificar el proceso de venta mediante asesoría personalizada, promoción digital,
              filtrado de compradores y acompañamiento durante toda la negociación. Sabemos que vender un auto entre
              particulares puede ser complicado: pérdida de tiempo, riesgo de fraudes y desconocimiento del valor real
              del vehículo. Nosotros resolvemos eso para que tú no te preocupes por nada.
            </p>
          </div>

          {/* La tarjeta de presentación de la marca, montada como pieza de exhibición */}
          <figure className="lg:col-span-6">
            <div className="shadow-ambient overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
              <Image
                src="/brand/autobroker-logo.jpeg"
                alt="Identidad de AutoBroker MX: Conectando compradores y vendedores en todo México"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
          </figure>
        </div>

        <div className="mt-24 grid gap-px overflow-hidden rounded-2xl bg-border/70 md:grid-cols-2">
          <div className="bg-background p-8 md:p-10">
            <h3 className="text-sm font-medium text-brake">Nuestra misión</h3>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Que cada persona que quiera vender su auto se acerque con nosotros para asesorarlo y concretar ventas
              seguras, tanto para el comprador como para el vendedor, ahorrándole tiempo y preocupaciones.
            </p>
          </div>
          <div className="bg-background p-8 md:p-10">
            <h3 className="text-sm font-medium text-brake">Nuestro objetivo</h3>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              Convertirnos en una referencia nacional en intermediación automotriz, consolidando la marca en el mercado
              mexicano con un servicio confiable y profesional.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-12">
          <h2 className="reveal-title font-display text-5xl text-foreground md:text-6xl lg:col-span-4">Por qué nosotros</h2>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="reveal-row border-t border-border/70 py-6">
                <dt className="text-lg font-semibold tracking-tight text-foreground">{adv.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{adv.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
