import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Kiosko 2001 — Streetwear en Maracay",
    template: "%s",
  },
  description:
    "Kiosko 2001: hoodies, tees, pants y crops. Pide por WhatsApp, sin vueltas. Proyecto demo de puertale.com.",
  metadataBase: new URL("https://kiosko2001.demo"),
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
