import Link from "next/link"
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/social-icons"
import { Logo } from "@/components/logo"
import { COMPANY, NAV_LINKS, SOCIAL_LINKS, WHATSAPP_DISPLAY } from "@/lib/constants"
import { whatsappLink } from "@/lib/utils"

const socials = [
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SOCIAL_LINKS.tiktok, label: "TikTok", Icon: TikTokIcon },
]

export function SiteFooter() {
  return (
    <footer className="bg-floor border-t border-border/70">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">{COMPANY.description}</p>
          </div>

          <div>
            <h2 className="text-xs font-medium text-muted-foreground">Sitio</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/90 transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-medium text-muted-foreground">Contacto</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={whatsappLink("Hola AutoBroker MX, quiero más información.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tabular text-foreground/90 transition-colors hover:text-foreground"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                {/* break-words: el correo es una sola palabra larga y no debe desbordar en móvil */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-words text-foreground/90 transition-colors hover:text-foreground"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="text-muted-foreground">{COMPANY.coverage}</li>
            </ul>
            <div className="mt-6 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="pressable flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[oklch(0.42_0.006_264)] hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.
          </p>
          <p>{COMPANY.city}</p>
        </div>
      </div>
    </footer>
  )
}
