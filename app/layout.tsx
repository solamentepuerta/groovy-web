import type { Metadata, Viewport } from "next"
import "./globals.css"

/** Dominio real del sitio; se puede sobreescribir en el deploy con NEXT_PUBLIC_SITE_URL. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://socialgroovystudio.com"

export const metadata: Metadata = {
  title: {
    default: "Groovy.pics — Fotógrafo en Maracay",
    template: "%s",
  },
  description:
    "Fotógrafo en Maracay, Venezuela. Retrato en estudio, cobertura de eventos, fotografía de productos y fashion.",
  metadataBase: new URL(siteUrl),
}

export const viewport: Viewport = {
  themeColor: "#dfdedb",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=zodiak@100,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=TikTok+Sans:wdth,wght@75..150,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
