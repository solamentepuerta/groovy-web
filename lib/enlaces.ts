import fs from "node:fs"
import path from "node:path"
import { waLink } from "./wa"

export type Enlace = {
  label: string
  href: string
  detail?: string
  featured?: boolean
}

export type Perfil = {
  name: string
  handle: string
  bio: string
  photo: string
}

type Contenido = {
  perfil: Perfil
  enlaces: Enlace[]
}

/**
 * El contenido del link tree vive en `content/enlaces.md`, para que Luis o el
 * cliente lo editen sin tocar código: cuatro claves arriba y una lista de
 * enlaces debajo. Sin dependencias nuevas, el parseo son veinte líneas.
 *
 * Reglas de la lista:
 *   `- [texto](url) · detalle`  → botón con detalle a la derecha
 *   `- [texto](wa:mensaje)`     → enlace de WhatsApp armado con lib/wa.ts
 *   `- [texto]()`               → sin url: NO se pinta (hueco preparado)
 */
export function parseEnlaces(md: string): Contenido {
  const lineas = md.split(/\r?\n/)
  const perfil: Record<string, string> = {}
  const enlaces: Enlace[] = []
  let enCabecera = false
  let cerrada = false

  for (const linea of lineas) {
    const limpia = linea.trim()

    if (limpia === "---") {
      if (!cerrada) {
        enCabecera = !enCabecera
        if (!enCabecera) cerrada = true
      }
      continue
    }

    if (enCabecera) {
      const m = limpia.match(/^([a-zA-Z]+):\s*(.+)$/)
      if (m) perfil[m[1].toLowerCase()] = m[2].trim().replace(/^["']|["']$/g, "")
      continue
    }

    const enlace = limpia.match(/^-\s+\[([^\]]+)\]\(([^)]*)\)\s*(?:[·—-]\s*)?(.*)$/)
    if (!enlace) continue

    const [, label, destino, detalle] = enlace
    const href = destino.startsWith("wa:") ? waLink(destino.slice(3)) : destino.trim()
    if (!href) continue // sin url todavía: se omite, no se pinta un botón muerto

    enlaces.push({
      label: label.trim(),
      href,
      detail: detalle.trim() || undefined,
      featured: enlaces.length === 0,
    })
  }

  return {
    perfil: {
      name: perfil.nombre ?? "Groovy.pics",
      handle: perfil.handle ?? "",
      bio: perfil.bio ?? "",
      photo: perfil.foto ?? "/portfolio/sesiones/retrato/retrato-estudio-maracay-01-960.webp",
    },
    enlaces,
  }
}

const ruta = path.join(process.cwd(), "content", "enlaces.md")
const contenido = parseEnlaces(fs.readFileSync(ruta, "utf8"))

export const perfil = contenido.perfil
export const enlaces = contenido.enlaces
