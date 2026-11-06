import {
  firstPhotosOf,
  largestSize,
  type GalleryCategorySlug,
  type GalleryPhoto,
} from "./groovy-gallery"

/**
 * Categorías del portafolio de Groovy.pics.
 *
 * Las fotos ya son las reales del cliente (manifest `lib/groovy-gallery.json`).
 * Cada categoría muestra las dos primeras de su sesión, en la resolución más
 * grande disponible. No hay rutas que mantener a mano: si el manifest cambia,
 * esta previsualización lo sigue.
 */

export type GroovyCategory = {
  /** Nombre literal del cliente. Único: se usa como `key` de React. */
  title: string
  /** Línea corta bajo el título. */
  meta: string
  /** `false` = las dos fotos son definitivas del cliente. */
  placeholder: boolean
  left: string
  right: string
  leftAlt: string
  rightAlt: string
}

function preview(cat: GalleryCategorySlug): { left: GalleryPhoto; right: GalleryPhoto } {
  const [left, right] = firstPhotosOf(cat, 2)
  if (!left || !right) {
    throw new Error(`La sesión "${cat}" necesita al menos dos fotos en el manifest`)
  }
  return { left, right }
}

function build(cat: GalleryCategorySlug, title: string, meta: string): GroovyCategory {
  const { left, right } = preview(cat)
  return {
    title,
    meta,
    placeholder: false,
    left: largestSize(left).file,
    right: largestSize(right).file,
    leftAlt: left.alt,
    rightAlt: right.alt,
  }
}

export const groovyCategories: GroovyCategory[] = [
  build("retrato", "Fotografía de retrato", "Retrato en estudio y dirección de pose"),
  build("eventos", "Cobertura de eventos", "Bodas, fiestas y conciertos"),
  build("productos", "Fotografía de productos", "Bodegón, catálogo y e-commerce"),
  build("fashion", "Fotografía fashion", "Editorial y posing de moda"),
]
