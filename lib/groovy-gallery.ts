import raw from "./groovy-gallery.json"

export type GalleryCategorySlug = "retrato" | "eventos" | "productos" | "fashion"

export type GallerySize = {
  file: string
  w: number
  h: number
}

export type GalleryPhoto = {
  slug: string
  cat: GalleryCategorySlug
  alt: string
  title: string
  date: string
  sizes: Record<string, GallerySize>
}

/**
 * Manifest de las 44 fotos reales del cliente (128 webp en tres anchos).
 * Generado fuera del repo; no se edita a mano. Los `alt` son genéricos a
 * propósito y Luis los completará en los CSV.
 */
const photos = raw.photos as GalleryPhoto[]

/** Orden de presentación: el de las sesiones del portafolio. */
export const GALLERY_CATEGORY_ORDER: GalleryCategorySlug[] = [
  "retrato",
  "eventos",
  "productos",
  "fashion",
]

export const GALLERY_CATEGORY_LABELS: Record<GalleryCategorySlug, string> = {
  retrato: "Retrato",
  eventos: "Eventos",
  productos: "Productos",
  fashion: "Fashion",
}

/** Las 44 fotos, agrupadas por sesión en el orden de GALLERY_CATEGORY_ORDER. */
export const galleryPhotos: GalleryPhoto[] = GALLERY_CATEGORY_ORDER.flatMap((cat) =>
  photos
    .filter((photo) => photo.cat === cat)
    .sort((a, b) => a.slug.localeCompare(b.slug)),
)

export const GALLERY_TOTAL = galleryPhotos.length

/** Anchos disponibles, de menor a mayor. */
export function sizeKeys(photo: GalleryPhoto): string[] {
  return Object.keys(photo.sizes).sort((a, b) => Number(a) - Number(b))
}

/** La resolución más grande que exista (algunas fotos no tienen 1600). */
export function largestSize(photo: GalleryPhoto): GallerySize {
  const keys = sizeKeys(photo)
  return photo.sizes[keys[keys.length - 1]]
}

/** `srcset` con todos los anchos del manifest. */
export function srcSetOf(photo: GalleryPhoto): string {
  return sizeKeys(photo)
    .map((key) => `${photo.sizes[key].file} ${key}w`)
    .join(", ")
}

export function photosOf(cat: GalleryCategorySlug): GalleryPhoto[] {
  return galleryPhotos.filter((photo) => photo.cat === cat)
}

/** Las n primeras fotos de una sesión, para la previsualización del portafolio. */
export function firstPhotosOf(cat: GalleryCategorySlug, n: number): GalleryPhoto[] {
  return photosOf(cat).slice(0, n)
}
