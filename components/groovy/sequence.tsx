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

/* Primera foto: editorial de estudio. Las dos siguientes: los únicos conciertos de la sesión de eventos. */
const shots: SeqShot[] = [
  shot(
    "fashion",
    4,
    "Modelo con bañador de rayas amarillas y blancas mordiendo una sandía, en estudio de fondo amarillo",
    "Editorial · Maracay",
  ),
  shot("eventos", 5, "Cantante con micrófono entre humo y haces de luz", "Voz en vivo · Maracay"),
  shot("eventos", 12, "Cantante bajo luces azules de escenario", "Escenario · Maracay"),
]

export function GroovySequence() {
  return (
    <section aria-label="Trabajo reciente: estudio y escenario">
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
            {i === 0 && (
              <p className="g-seq-overlay">
                La luz la construyo en el estudio y la persigo en un concierto. Cambia el lugar,
                no la idea: el momento justo, con la luz que hay.
              </p>
            )}
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
