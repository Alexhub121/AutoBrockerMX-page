import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/utils"

export function CtaSection() {
  return (
    <section className="bg-carbon border-y border-border">
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-20">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
          aria-hidden="true"
        />
        <h2 className="relative text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          ¿Listo para vender tu <span className="text-chrome-red">auto</span>?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Cobramos una comisión solo si vendemos. Escríbenos por WhatsApp y recibe asesoría sin compromiso.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button
            size="lg"
            className="glow-red"
            render={
              <a
                href={whatsappLink("Hola AutoBroker MX, quiero vender mi auto. ¿Me pueden asesorar?")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle className="h-4 w-4" />
            Escríbenos por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
