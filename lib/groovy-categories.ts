import {
  largestSize,
  photosOf,
  type GalleryCategorySlug,
  type GalleryPhoto,
} from "./groovy-gallery"

/**
 * Categorías del portafolio de Groovy.pics.
 *
 * Las fotos son las reales del cliente (manifest `lib/groovy-gallery.json`). Cada
 * categoría muestra dos tomas de su sesión, en la resolución más grande que exista
 * — algunas fotos no tienen 1600, así que las medidas se leen del manifest y nunca
 * se estiran a un tamaño que el archivo no tiene.
 */

export type GroovyCategorySide = {
  src: string
  w: number
  h: number
  alt: string
}

export type GroovyCategory = {
  /** Nombre literal del cliente. Único: se usa como `key` de React. */
  title: string
  /** Línea corta bajo el título. */
  meta: string
  /** `false` = las dos fotos son definitivas del cliente. */
  placeholder: boolean
  left: GroovyCategorySide
  right: GroovyCategorySide
}

function sideOf(photo: GalleryPhoto): GroovyCategorySide {
  const size = largestSize(photo)
  return { src: size.file, w: size.w, h: size.h, alt: photo.alt }
}

/** Foto de una sesión por su número (`-21` → cobertura-evento-maracay-21). */
function numbered(cat: GalleryCategorySlug, n: number): GalleryPhoto {
  const suffix = `-${String(n).padStart(2, "0")}`
  const photo = photosOf(cat).find((p) => p.slug.endsWith(suffix))
  if (!photo) throw new Error(`No existe la foto ${suffix} en la sesión "${cat}"`)
  return photo
}

function build(
  cat: GalleryCategorySlug,
  title: string,
  meta: string,
  picks: { left: number; right: number },
): GroovyCategory {
  return {
    title,
    meta,
    placeholder: false,
    left: sideOf(numbered(cat, picks.left)),
    right: sideOf(numbered(cat, picks.right)),
  }
}

export const groovyCategories: GroovyCategory[] = [
  build("retrato", "Fotografía de retrato", "Retrato en estudio y dirección de pose", {
    left: 1,
    right: 2,
  }),
  // La derecha es la boda (21): solo existe en 480 y 960, se usa la de 960.
  build("eventos", "Cobertura de eventos", "Bodas, fiestas y conciertos", {
    left: 1,
    right: 21,
  }),
  build("productos", "Fotografía de productos", "Bodegón, catálogo y e-commerce", {
    left: 1,
    right: 2,
  }),
  build("fashion", "Fotografía fashion", "Editorial y posing de moda", {
    left: 1,
    right: 2,
  }),
]
