import { ShieldCheck, Clock, Megaphone, Users } from "lucide-react"

const props = [
  {
    icon: ShieldCheck,
    title: "Ventas seguras",
    description: "Filtramos compradores y acompañamos toda la negociación para evitar fraudes e inseguridad.",
  },
  {
    icon: Clock,
    title: "Ahorra tiempo",
    description: "Olvídate de atender interesados no calificados. Nosotros coordinamos citas y pruebas de manejo.",
  },
  {
    icon: Megaphone,
    title: "Promoción efectiva",
    description: "Publicamos tu auto en múltiples plataformas y redes sociales con fotografía profesional.",
  },
  {
    icon: Users,
    title: "Asesoría experta",
    description: "Te asesoramos en el precio justo, trámites y documentación durante todo el proceso.",
  },
]

export function ValueProps() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
            ¿Por qué vender con AutoBroker MX?
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Resolvemos los principales problemas de vender un auto entre particulares en México.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((prop) => (
            <div key={prop.title} className="rounded-lg border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary">
                <prop.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{prop.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
