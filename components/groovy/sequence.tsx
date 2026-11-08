import type { CSSProperties } from "react"
import { largestSize, photosOf, type GalleryCategorySlug } from "@/lib/groovy-gallery"

/** Foto concreta del manifest por sesión y número, sin depender del orden del array. */
function photoByNumber(cat: GalleryCategorySlug, n: number) {
  const suffix = `-${String(n).padStart(2, "0")}`
  const photo = photosOf(cat).find((p) => p.slug.endsWith(suffix))
  if (!photo) throw new Error(`No existe la foto ${suffix} de la sesión "${cat}"`)
  return photo
}

type SeqShot = {
  src: string
  w: number
  h: number
  alt: string
  caption: string
}

function shot(cat: GalleryCategorySlug, n: number, alt: string, caption: string): SeqShot {
  const size = largestSize(photoByNumber(cat, n))
  return { src: size.file, w: size.w, h: size.h, alt, caption }
}

/* Las tres horizontales de concierto: las únicas nocturnas de la sesión de eventos. */
const shots: SeqShot[] = [
  shot("eventos", 2, "Banda tocando en vivo bajo luces de escenario", "Concierto en vivo · Maracay"),
  shot("eventos", 5, "Cantante con micrófono entre humo y haces de luz", "Voz en vivo · Maracay"),
  shot("eventos", 12, "Cantante bajo luces azules de escenario", "Escenario · Maracay"),
]

export function GroovySequence() {
  return (
    <section aria-label="Trabajo nocturno reciente">
      <div className="g-seq-lead">
        <p>
          La noche no espera a nadie. Trabajo con la luz que hay: la del escenario, la del flash,
          la que queda cuando la fiesta decide que sigue.
        </p>
      </div>
      <div
        className="g-seq"
        id="trabajo"
        style={{ "--g-seq-count": shots.length } as CSSProperties}
      >
        {shots.map((s, i) => (
          <figure className="g-seq-item" key={s.src}>
            <img
              src={s.src}
              alt={s.alt}
              width={s.w}
              height={s.h}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
