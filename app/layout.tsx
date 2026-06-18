import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Saira_Condensed } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const sairaCondensed = Saira_Condensed({
  variable: '--font-brand',
  weight: ['600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'AutoBroker MX | Intermediación automotriz profesional',
    template: '%s | AutoBroker MX',
  },
  description:
    'Vende tu auto de forma rápida, segura y sin complicaciones. Conectamos propietarios con compradores en toda la República Mexicana.',
  keywords: ['venta de autos', 'broker de autos', 'vender mi auto', 'autos usados México', 'AutoBroker MX'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#121212',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable} ${sairaCondensed.variable}`}
    >
      <body className="font-sans antialiased">
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
