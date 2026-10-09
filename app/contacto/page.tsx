import type { Metadata } from "next"
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/social-icons"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact/contact-form"
import { COMPANY, SOCIAL_LINKS, WHATSAPP_DISPLAY } from "@/lib/constants"
import { whatsappLink } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contacto",
  alternates: {
    canonical: "/contacto",
  },
  description: "Contáctanos por WhatsApp, correo o redes sociales. AutoBroker MX, intermediación automotriz en México.",
}

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contáctanos"
        description="Estamos para asesorarte. Escríbenos por WhatsApp y te responderemos lo antes posible."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="sr-only">Información de contacto</h2>
            <p className="text-sm text-muted-foreground">
              Ya sea que quieras comprar o vender un auto, estamos listos para ayudarte.
            </p>

            <dl className="mt-8 border-t border-border/70">
              <div className="border-b border-border/70 py-6">
                <dt className="text-xs text-muted-foreground">WhatsApp</dt>
                <dd className="mt-2">
                  <a
                    href={whatsappLink("Hola AutoBroker MX, quiero más información.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display tabular text-4xl text-foreground transition-colors hover:text-brake md:text-5xl"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </dd>
              </div>
              <div className="border-b border-border/70 py-6">
                <dt className="text-xs text-muted-foreground">Correo</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="break-words text-lg text-foreground underline decoration-border underline-offset-[0.3em] transition-[text-decoration-color] hover:decoration-primary"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-6 border-b border-border/70 py-6">
                <div>
                  <dt className="text-xs text-muted-foreground">Horario</dt>
                  <dd className="tabular mt-2 text-foreground">Lunes a sábado, 9:00 a 19:00 h</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Cobertura</dt>
                  <dd className="mt-2 text-foreground">{COMPANY.coverage}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex gap-2">
              {[
                { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: SOCIAL_LINKS.tiktok, label: "TikTok", Icon: TikTokIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="pressable flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[oklch(0.42_0.006_264)] hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
