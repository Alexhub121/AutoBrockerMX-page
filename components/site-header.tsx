"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
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
          {/* Botón de menú con palabra visible: tres rayas solas no todos las
              reconocen. Píldora con borde = se lee como botón. */}
          <SheetTrigger
            className="md:hidden"
            render={
              <button
                type="button"
                aria-label="Abrir menú de navegación"
                className="pressable inline-flex h-11 items-center gap-2.5 rounded-full border border-[oklch(0.38_0.006_264)] bg-secondary/70 pr-3.5 pl-4 text-sm font-medium text-foreground backdrop-blur-sm transition-[background-color,border-color] duration-200 hover:border-[oklch(0.5_0.006_264)] hover:bg-secondary aria-expanded:border-primary"
              />
            }
          >
            Menú
            <span className="flex w-[18px] flex-col gap-[4px]" aria-hidden="true">
              <span className="h-[1.5px] w-full rounded-full bg-foreground" />
              <span className="h-[1.5px] w-full rounded-full bg-foreground" />
              <span className="h-[1.5px] w-full rounded-full bg-foreground" />
            </span>
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-[88vw] max-w-sm border-border bg-background p-0 duration-300 ease-[var(--ease-drawer)]"
          >
            {/* Misma altura y posición que el botón "Menú": cerrar está donde el
                usuario acaba de tocar. */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-border/70 px-4">
              <Logo size="sm" showEmblem={false} />
              <SheetClose
                render={
                  <button
                    type="button"
                    aria-label="Cerrar menú de navegación"
                    className="pressable inline-flex h-11 items-center gap-2 rounded-full border border-[oklch(0.38_0.006_264)] bg-secondary/70 pr-3 pl-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  />
                }
              >
                Cerrar
                <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </SheetClose>
            </div>
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <nav className="flex flex-col px-6 pt-4" aria-label="Navegación móvil">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    style={{ "--delay": `${60 + i * 40}ms` } as React.CSSProperties}
                    className={cn(
                      "animate-rise group/item flex items-center justify-between gap-4 border-b border-border/60 py-4 transition-colors",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className={cn("h-2 w-2 rounded-full", active ? "bg-primary" : "bg-transparent")}
                      />
                      <span className="font-display text-[2rem] whitespace-nowrap">{link.label}</span>
                    </span>
                    {active ? (
                      <span className="text-xs font-medium text-brake">Estás aquí</span>
                    ) : (
                      <svg viewBox="0 0 16 16" className="size-4 shrink-0 transition-transform duration-200 group-active/item:translate-x-0.5" fill="none" aria-hidden="true">
                        <path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-auto space-y-3 px-6 pt-8 pb-6">
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
