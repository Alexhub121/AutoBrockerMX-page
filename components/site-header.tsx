"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { NAV_LINKS, WHATSAPP_DISPLAY } from "@/lib/constants"
import { whatsappLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  // La barra es transparente arriba del todo y toma superficie al hacer scroll.
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-[background-color,border-color] duration-300 ease-[var(--ease-out)]",
        scrolled
          ? "border-border/70 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/65"
          : "border-transparent bg-transparent",
      )}
    >
      {/* Progreso de lectura: una línea roja que crece con el scroll */}
      <div
        className="scroll-progress pointer-events-none absolute inset-x-0 bottom-[-1px] h-[2px] bg-primary"
        aria-hidden="true"
      />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                {/* Indicador de página actual: una luz de freno */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-primary transition-opacity duration-200",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="light"
            size="sm"
            render={
              <a
                href={whatsappLink("Hola AutoBroker MX, quiero vender mi auto. ¿Me pueden asesorar?")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Vender mi auto
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={<Button variant="ghost" size="icon" aria-label="Abrir menú" />}
          >
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
              <span className="h-px w-full bg-foreground" />
              <span className="h-px w-3/4 self-end bg-foreground" />
            </span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86vw] max-w-sm border-border bg-background p-6">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <Logo size="sm" />
            <nav className="mt-10 flex flex-col" aria-label="Navegación móvil">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  style={{ "--delay": `${60 + i * 40}ms` } as React.CSSProperties}
                  className={cn(
                    "animate-rise font-display border-b border-border/60 py-4 text-4xl transition-colors",
                    isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-3 pt-8">
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full"
                render={
                  <a
                    href={whatsappLink("Hola AutoBroker MX, quiero más información.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Escríbenos por WhatsApp
              </Button>
              <p className="tabular text-center text-xs text-muted-foreground">{WHATSAPP_DISPLAY}</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
