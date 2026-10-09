import Link from "next/link"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/utils"

/**
 * Página 404 personalizada: en vez de un error frío, orienta al usuario
 * hacia el catálogo o a WhatsApp para que no se quede en un callejón.
 */
export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6 md:py-36">
      <p className="font-display tabular text-8xl text-[oklch(0.3_0.006_264)]" aria-hidden="true">404</p>
      <h1 className="font-display mt-4 text-5xl text-foreground">
        Página no encontrada
      </h1>
      {/* mantiene la jerarquía de encabezados: h1 → h2 → h3 (footer) */}
      <h2 className="sr-only">Error 404</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        El enlace puede estar roto o el vehículo ya no está disponible. Echa un
        vistazo al catálogo o escríbenos por WhatsApp y con gusto te ayudamos.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" render={<Link href="/catalogo" />}>
          Ver catálogo
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={
            <a
              href={whatsappLink("Hola AutoBroker MX, busco un auto y quiero asesoría.")}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          Escríbenos
        </Button>
      </div>
    </section>
  )
}
