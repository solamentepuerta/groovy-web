import type { Metadata, Viewport } from "next"
import { GroovyEnlaces } from "@/components/groovy/enlaces"
import { perfil } from "@/lib/enlaces"

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  title: `${perfil.name} — Enlaces`,
  description: perfil.bio,
  alternates: { canonical: "/enlaces" },
  openGraph: {
    title: `${perfil.name} — Enlaces`,
    description: perfil.bio,
    images: [perfil.photo],
    locale: "es_VE",
    type: "profile",
  },
}

export default function EnlacesPage() {
  return <GroovyEnlaces />
}
