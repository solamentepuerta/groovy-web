import { largestSize, photosOf, type GalleryPhoto } from "@/lib/groovy-gallery"

type Shot = {
  src: string
  w: number
  h: number
  alt: string
  caption: string
}

/** Toma la resolución mayor del manifest y le pone un alt que describe la foto real. */
function fromPhoto(photo: GalleryPhoto, alt: string, caption: string): Shot {
  const size = largestSize(photo)
  return { src: size.file, w: size.w, h: size.h, alt, caption }
}

const retrato = photosOf("retrato")
const productos = photosOf("productos")

const SHOTS: Shot[] = [
  fromPhoto(retrato[3], "Modelo sentada en un taburete con conjunto rosa", "Retrato · taburete"),
  fromPhoto(retrato[4], "Retrato de medio cuerpo con top azul y fondo oscuro", "Retrato · medio cuerpo"),
  fromPhoto(retrato[7], "Dos modelos con body negro posando juntas", "Retrato · dúo"),
  fromPhoto(retrato[6], "Modelo de cuerpo entero con body negro, brazos en alto", "Retrato · cuerpo entero"),
  fromPhoto(retrato[5], "Dos modelos posando junto a un taburete", "Retrato · estudio"),
  fromPhoto(productos[0], "Bodegón de frascos de pintura, pincel y tela", "Producto · bodegón"),
]

export function GroovyRealWork() {
  return (
    <section className="rw" aria-labelledby="rw-title">
      <header className="rw-head">
        <h2 id="rw-title" className="rw-title">
          Trabajo real
        </h2>
        <p className="rw-lead">
          Seis fotos de las sesiones en Maracay: retrato en estudio y bodegón de producto, con
          la luz armada en el set.
        </p>
        <p className="rw-stamp" aria-hidden="true">
          Archivo
          <span>Groovy.pics</span>
        </p>
      </header>

      <div className="rw-grid">
        {SHOTS.map((s) => (
          <figure key={s.src} className="rw-shot">
            <img
              className="rw-shot__img"
              src={s.src}
              alt={s.alt}
              width={s.w}
              height={s.h}
              loading="lazy"
            />
            <figcaption>
              <strong>{s.caption}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
