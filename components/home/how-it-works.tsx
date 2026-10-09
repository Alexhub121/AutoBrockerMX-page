import { InView } from "@/components/in-view"

const steps = [
  {
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp con las fotos y los datos de tu vehículo. La asesoría inicial es gratuita.",
  },
  {
    title: "Publicamos y promocionamos",
    description: "Creamos contenido atractivo y publicamos tu auto en múltiples plataformas para llegar a más compradores.",
  },
  {
    title: "Filtramos compradores",
    description: "Seleccionamos al mejor postor, coordinamos citas y pruebas de manejo de forma segura.",
  },
  {
    title: "Cerramos la venta",
    description: "Te acompañamos en trámites y documentación hasta concretar una venta segura para ambas partes.",
  },
]

/**
 * Proceso en 4 pasos sobre un riel. La línea roja se dibuja al entrar en vista
 * y cada parada se enciende en orden: es el único movimiento de autor fuera del
 * hero. Aquí la numeración sí aporta: el orden importa.
 */
export function HowItWorks() {
  return (
    <section className="bg-floor border-b border-border/70">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal-title font-display text-5xl text-foreground md:text-6xl">Cómo funciona</h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            De tu primer mensaje a la venta cerrada: un proceso simple y transparente.
          </p>
        </div>

        <InView className="relative mt-16 md:mt-20">
          {/* Riel: horizontal en escritorio, vertical en móvil */}
          <div className="absolute top-0 bottom-0 left-[5px] w-px bg-border md:top-[5px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto" aria-hidden="true">
            <div className="rail-line h-full w-full bg-primary" />
          </div>

          <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative pl-9 md:pt-10 md:pl-0"
                style={{ "--i": i } as React.CSSProperties}
              >
                <span className="rail-dot absolute top-1 left-0 h-[11px] w-[11px] rounded-full md:top-0" aria-hidden="true" />
                <div className="rail-step">
                  <p className="tabular text-sm text-muted-foreground">Paso {i + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </InView>
      </div>
    </section>
  )
}
