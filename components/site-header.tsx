"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { NAV_LINKS } from "@/lib/constants"
import { whatsappLink } from "@/lib/utils"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                isActive(link.href) ? "font-medium text-foreground" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={
              <a
                href={whatsappLink("Hola AutoBroker MX, quiero más información.")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Contáctanos
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={<Button variant="ghost" size="icon" aria-label="Abrir menú" />}
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <div className="mt-2 px-1">
              <Logo />
            </div>
            <nav className="mt-8 flex flex-col gap-1 px-1" aria-label="Navegación móvil">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base transition-colors hover:bg-accent",
                    isActive(link.href) ? "bg-accent font-medium text-foreground" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 px-1">
              <Button
                className="w-full"
                render={
                  <a
                    href={whatsappLink("Hola AutoBroker MX, quiero más información.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Contáctanos por WhatsApp
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
