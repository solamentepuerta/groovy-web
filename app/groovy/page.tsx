import type { Metadata, Viewport } from "next"
import { GroovyHero } from "@/components/groovy/hero"
import { GroovySequence } from "@/components/groovy/sequence"
import { GroovyWork } from "@/components/groovy/work"
import { GroovyRealWork } from "@/components/groovy/real-work"
import { GroovyAbout } from "@/components/groovy/about"
import { GroovyFaq } from "@/components/groovy/faq"
import { GroovyCta } from "@/components/groovy/cta"
import { GroovyFooter } from "@/components/groovy/footer"
import { IdentityGate } from "@/components/identity-gate"
import { Reveal } from "@/components/reveal"

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  title: "Groovy.pics — Fotógrafo en Maracay | Estudio y eventos",
  description:
    "Fotógrafo en Maracay, Venezuela. Sesiones de estudio, bodas y eventos diurnos y nocturnos. Reserva tu fecha por WhatsApp con Groovy.pics.",
  keywords: [
    "fotógrafo en Maracay",
    "fotógrafo de eventos Maracay",
    "fotógrafo de bodas Maracay",
    "sesión de fotos estudio Maracay",
    "Groovy.pics",
  ],
  openGraph: {
    title: "Groovy.pics — Fotógrafo en Maracay",
    description:
      "Estudio y eventos, de día y de noche. Tu historia, contada con luz.",
    images: ["/portfolio/Ai.jpg"],
    locale: "es_VE",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Photographer",
  name: "Groovy.pics",
  description:
    "Fotógrafo en Maracay: estudio, bodas y eventos diurnos y nocturnos.",
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
      <GroovyFooter />
      <IdentityGate from="groovy" />
    </div>
  )
}
