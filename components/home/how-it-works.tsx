const steps = [
  {
    number: "01",
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp con las fotos y los datos de tu vehículo. La asesoría inicial es gratuita.",
  },
  {
    number: "02",
    title: "Publicamos y promocionamos",
    description: "Creamos contenido atractivo y publicamos tu auto en múltiples plataformas para llegar a más compradores.",
  },
  {
    number: "03",
    title: "Filtramos compradores",
    description: "Seleccionamos al mejor postor, coordinamos citas y pruebas de manejo de forma segura.",
  },
  {
    number: "04",
    title: "Cerramos la venta",
    description: "Te acompañamos en trámites y documentación hasta concretar una venta segura para ambas partes.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">Cómo funciona</h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Un proceso simple y transparente en cuatro pasos.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="bg-card p-6">
              <span className="text-2xl font-semibold tracking-tight text-primary">{step.number}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
