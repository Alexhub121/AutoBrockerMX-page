import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/social-icons"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact/contact-form"
import { COMPANY, SOCIAL_LINKS, WHATSAPP_DISPLAY } from "@/lib/constants"
import { whatsappLink } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos por WhatsApp, correo o redes sociales. AutoBroker MX, intermediación automotriz en México.",
}

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contáctanos"
        description="Estamos para asesorarte. Escríbenos por WhatsApp y te responderemos lo antes posible."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Información de contacto</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Ya sea que quieras comprar o vender un auto, estamos listos para ayudarte.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                  <a
                    href={whatsappLink("Hola AutoBroker MX, quiero más información.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Correo</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Cobertura</p>
                  <p className="text-sm text-muted-foreground">{COMPANY.coverage}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Horario</p>
                  <p className="text-sm text-muted-foreground">Lunes a sábado, 9:00 a 19:00 h</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground">Síguenos</p>
              <div className="mt-3 flex gap-3">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <ContactForm />
        </div>
      </section>
    </>
  )
}
