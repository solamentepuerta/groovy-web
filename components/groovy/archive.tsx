"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  GALLERY_CATEGORY_LABELS,
  GALLERY_CATEGORY_ORDER,
  GALLERY_TOTAL,
  galleryPhotos,
  largestSize,
  srcSetOf,
  type GalleryCategorySlug,
  type GalleryPhoto,
} from "@/lib/groovy-gallery"

type Filter = "todo" | GalleryCategorySlug

const FILTERS: { value: Filter; label: string }[] = [
  { value: "todo", label: "Todo" },
  ...GALLERY_CATEGORY_ORDER.map((cat) => ({
    value: cat,
    label: GALLERY_CATEGORY_LABELS[cat],
  })),
]

/** Las horizontales ocupan dos columnas; el resto va en caja 4:5. */
function isWide(photo: GalleryPhoto): boolean {
  const size = largestSize(photo)
  return size.w > size.h
}

function GalleryTile({
  photo,
  index,
  onOpen,
}: {
  photo: GalleryPhoto
  index: number
  onOpen: (index: number) => void
}) {
  const wide = isWide(photo)
  const largest = largestSize(photo)
  const number = String(index + 1).padStart(2, "0")

  return (
    <li className={`g-arch-cell${wide ? " is-wide" : ""}`}>
      <button
        type="button"
        className="g-arch-tile"
        onClick={() => onOpen(index)}
        aria-label={`Abrir foto ${number} de ${GALLERY_CATEGORY_LABELS[photo.cat]}`}
      >
        <img
          src={photo.sizes["960"]?.file ?? largest.file}
          srcSet={srcSetOf(photo)}
          sizes={wide ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 50vw, 33vw"}
          alt={photo.alt}
          width={largest.w}
          height={largest.h}
          loading="lazy"
          decoding="async"
        />
        <span className="g-arch-cap" aria-hidden="true">
          <em>{GALLERY_CATEGORY_LABELS[photo.cat]}</em>
          <span className="g-arch-n">{number}</span>
        </span>
      </button>
    </li>
  )
}

export function GroovyArchive() {
  const [filter, setFilter] = useState<Filter>("todo")
  const [index, setIndex] = useState<number | null>(null)
  const touchX = useRef<number | null>(null)

  const photos = useMemo(
    () => (filter === "todo" ? galleryPhotos : galleryPhotos.filter((p) => p.cat === filter)),
    [filter],
  )

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["todo", GALLERY_TOTAL]])
    for (const cat of GALLERY_CATEGORY_ORDER) {
      map.set(cat, galleryPhotos.filter((p) => p.cat === cat).length)
    }
    return map
  }, [])

  const open = index !== null
  const current = index !== null ? photos[index] : undefined

  const step = useCallback(
    (delta: number) => {
      setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length))
    },
    [photos.length],
  )

  // Precarga la anterior y la siguiente para que el visor no parpadee.
  useEffect(() => {
    if (index === null || photos.length < 2) return
    for (const delta of [-1, 1]) {
      const neighbour = photos[(index + delta + photos.length) % photos.length]
      if (!neighbour) continue
      const img = new Image()
      img.src = largestSize(neighbour).file
    }
  }, [index, photos])

  const close = () => setIndex(null)

  return (
    <section className="g-arch" aria-labelledby="g-arch-title">
      <header className="g-arch-head">
        <div>
          <h2 id="g-arch-title" className="g-arch-title">
            Archivo
          </h2>
          <p className="g-arch-sub">
            Las cuatro sesiones completas. Toca cualquier foto para verla entera.
          </p>
        </div>
        <p className="g-arch-count">{GALLERY_TOTAL} fotos</p>
      </header>

      <div className="g-arch-chips" role="group" aria-label="Filtrar por sesión">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            className="g-arch-chip"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
            <b>{counts.get(f.value) ?? 0}</b>
          </button>
        ))}
      </div>

      <ul className="g-arch-grid">
        {photos.map((photo, i) => (
          <GalleryTile key={photo.slug} photo={photo} index={i} onOpen={setIndex} />
        ))}
      </ul>

      <DialogPrimitive.Root
        open={open}
        onOpenChange={(value) => {
          if (!value) close()
        }}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="g-arch-scrim" />
          <DialogPrimitive.Content
            className="g-arch-lb"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault()
                step(1)
              } else if (event.key === "ArrowLeft") {
                event.preventDefault()
                step(-1)
              }
            }}
          >
            <DialogPrimitive.Title className="g-arch-sr">
              Visor de fotos de Groovy.pics
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="g-arch-sr">
              Usa las flechas izquierda y derecha para cambiar de foto, y Escape para cerrar.
            </DialogPrimitive.Description>

            <div className="g-arch-lb-top">
              <span>
                Groovy.pics · {current ? GALLERY_CATEGORY_LABELS[current.cat] : ""}
              </span>
              <DialogPrimitive.Close className="g-arch-lb-btn">Cerrar · Esc</DialogPrimitive.Close>
            </div>

            <div
              className="g-arch-lb-stage"
              onTouchStart={(event) => {
                touchX.current = event.touches[0]?.clientX ?? null
              }}
              onTouchEnd={(event) => {
                const start = touchX.current
                touchX.current = null
                if (start === null) return
                const end = event.changedTouches[0]?.clientX ?? start
                const delta = end - start
                if (Math.abs(delta) > 45) step(delta < 0 ? 1 : -1)
              }}
              onClick={(event) => {
                if (event.target === event.currentTarget) close()
              }}
            >
              <button
                type="button"
                className="g-arch-lb-btn g-arch-lb-nav g-arch-lb-prev"
                onClick={() => step(-1)}
                aria-label="Foto anterior"
              >
                ‹
              </button>
              {current && (
                <img
                  className="g-arch-lb-img"
                  src={largestSize(current).file}
                  srcSet={srcSetOf(current)}
                  sizes="100vw"
                  alt={current.alt}
                  width={largestSize(current).w}
                  height={largestSize(current).h}
                />
              )}
              <button
                type="button"
                className="g-arch-lb-btn g-arch-lb-nav g-arch-lb-next"
                onClick={() => step(1)}
                aria-label="Foto siguiente"
              >
                ›
              </button>
            </div>

            <div className="g-arch-lb-meta">
              <strong>{current?.title ?? "—"}</strong>
              <span>
                {index !== null ? index + 1 : 0} / {photos.length}
              </span>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  )
}
