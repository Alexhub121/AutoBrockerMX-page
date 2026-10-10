import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Saira_Condensed } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { COMPANY } from "@/lib/constants";
import { SITE_URL, OG_IMAGE, businessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Intro, introScript } from "@/components/intro";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const sairaCondensed = Saira_Condensed({
  variable: "--font-brand",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // URL base para que Next convierta las rutas relativas en absolutas
  // (sitemap, canonical y etiquetas OpenGraph). Cambia SITE_URL en lib/seo.ts
  // si el dominio final es otro.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AutoBroker MX | Intermediación automotriz profesional",
    template: "%s | AutoBroker MX",
  },
  description:
    "Vende tu auto de forma rápida, segura y sin complicaciones. Conectamos propietarios con compradores en toda la República Mexicana.",
  keywords: [
    "venta de autos",
    "broker de autos",
    "vender mi auto",
    "autos usados México",
    "AutoBroker MX",
  ],
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: COMPANY.name,
    title: "AutoBroker MX | Intermediación automotriz profesional",
    description: COMPANY.description,
    url: "/",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "AutoBroker MX — Intermediación automotriz profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoBroker MX | Intermediación automotriz profesional",
    description: COMPANY.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0d0e10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      // El script del intro agrega data-intro antes de hidratar
      suppressHydrationWarning
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable} ${sairaCondensed.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="font-sans antialiased">
        <Intro />
        {/* Accesibilidad: permite saltar la navegación con el teclado (Tab). */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main id="contenido" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        {/* role/region: el botón flotante queda fuera de <main> y <footer>, sin
            un landmark el axe lo reporta como contenido fuera de landmarks. */}
        <div role="region" aria-label="Contacto rápido por WhatsApp">
          <WhatsAppFloat />
        </div>
        {/* Analytics solo en Vercel: en local el script devolvería 404 */}
        {process.env.VERCEL && <Analytics />}
        {/* Datos estructurados del negocio (SEO: aparecen en Google) */}
        <JsonLd data={businessJsonLd()} />
      </body>
    </html>
  );
}
