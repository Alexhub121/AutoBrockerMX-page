/**
 * "El trato": explica el modelo de intermediación de un vistazo. La asimetría
 * entre las dos listas ES el mensaje: tu parte es corta, la nuestra es larga.
 */
const yourPart = [
  { title: "Nos mandas fotos y datos", description: "Marca, modelo, año, kilometraje y precio, por WhatsApp." },
  { title: "Decides el precio", description: "Te asesoramos para fijar un precio justo y competitivo." },
]

const ourPart = [
  {
    title: "Publicamos y promocionamos",
    description: "Tu auto en varias plataformas y redes sociales, con fotos editadas para que luzca al máximo.",
  },
  {
    title: "Filtramos a los interesados",
    description: "Atendemos los mensajes y descartamos a quienes no van en serio, para evitar fraudes.",
  },
  {
    title: "Coordinamos citas y pruebas de manejo",
    description: "Agendamos con compradores calificados, en condiciones seguras para ambas partes.",
  },
  {
    title: "Te acompañamos hasta el cierre",
    description: "Negociación, trámites y documentación hasta que la venta queda concretada.",
  },
]

export function ValueProps() {
  return (
    <section className="border-b border-border/70">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-5">
          <h2 className="reveal-title font-display text-5xl text-foreground md:text-6xl">
            Tú pones el auto.
            <span className="block text-[oklch(0.62_0.006_264)]">Nosotros, todo lo demás.</span>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            Somos intermediarios: no compramos tu auto, lo vendemos por ti al mejor comprador. Vender entre
            particulares en México quita tiempo y tiene riesgos; de eso nos encargamos nosotros.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-[1fr_1.6fr] lg:col-span-7 lg:gap-10">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Tu parte</h3>
            <ul className="mt-5 border-t border-border/70">
              {yourPart.map((item) => (
                <li key={item.title} className="reveal-row border-b border-border/70 py-5">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-brake">Nuestra parte</h3>
            <ul className="mt-5 border-t border-primary/50">
              {ourPart.map((item) => (
                <li key={item.title} className="reveal-row border-b border-border/70 py-5">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
