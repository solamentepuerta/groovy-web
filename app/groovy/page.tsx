import type { Metadata, Viewport } from "next"
import { GroovyHero } from "@/components/groovy/hero"
import { GroovySequence } from "@/components/groovy/sequence"
import { GroovyWork } from "@/components/groovy/work"
import { GroovyRealWork } from "@/components/groovy/real-work"
import { GroovyAbout } from "@/components/groovy/about"
import { GroovyFaq } from "@/components/groovy/faq"
import { GroovyCta } from "@/components/groovy/cta"
import { GroovyArchive } from "@/components/groovy/archive"
import { GroovyFooter } from "@/components/groovy/footer"
import { IdentityGate } from "@/components/identity-gate"
import { Reveal } from "@/components/reveal"

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  title: "Groovy.pics — Fotógrafo en Maracay | Retrato, eventos y producto",
  description:
    "Fotógrafo en Maracay, Venezuela. Retrato en estudio, cobertura de eventos, fotografía de productos y fashion. Reserva tu fecha por WhatsApp con Groovy.pics.",
  keywords: [
    "fotógrafo en Maracay",
    "fotógrafo de retrato Maracay",
    "fotógrafo de eventos Maracay",
    "fotografía de productos Maracay",
    "fotografía fashion Maracay",
    "Groovy.pics",
  ],
  openGraph: {
    title: "Groovy.pics — Fotógrafo en Maracay",
    description:
      "Retrato, eventos, producto y moda. Tu historia, contada con luz.",
    images: ["/portfolio/sesiones/fashion/fotografia-fashion-maracay-04-1600.webp"],
    locale: "es_VE",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Photographer",
  name: "Groovy.pics",
  description:
    "Fotógrafo en Maracay: retrato en estudio, cobertura de eventos, fotografía de productos y fashion.",
  areaServed: { "@type": "City", name: "Maracay" },
  address: { "@type": "PostalAddress", addressLocality: "Maracay", addressRegion: "Aragua", addressCountry: "VE" },
  telephone: "+584128911838",
  url: "https://groovy.pics",
  sameAs: ["https://puertale.com"],
}

export default function GroovyPage() {
  return (
    <div className="g-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GroovyHero />
      <Reveal>
        <GroovySequence />
      </Reveal>
      <GroovyWork />
      <Reveal>
        <GroovyRealWork />
      </Reveal>
      <Reveal>
        <GroovyAbout />
      </Reveal>
      <Reveal>
        <GroovyFaq />
      </Reveal>
      <Reveal>
        <GroovyCta />
      </Reveal>
      <Reveal>
        <GroovyArchive />
      </Reveal>
      <GroovyFooter />
      <IdentityGate from="groovy" />
    </div>
  )
}
