import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/utils"

export function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-20">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          ¿Listo para vender tu auto?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
          Cobramos una comisión solo si vendemos. Escríbenos por WhatsApp y recibe asesoría sin compromiso.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="secondary">
            <a
              href={whatsappLink("Hola AutoBroker MX, quiero vender mi auto. ¿Me pueden asesorar?")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
