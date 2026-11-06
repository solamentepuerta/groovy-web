import { largestSize, photosOf } from "@/lib/groovy-gallery"

const retrato = photosOf("retrato")

function shotAt(i: number) {
  const photo = retrato[i]
  if (!photo) throw new Error(`Falta el retrato ${i + 1} en el manifest de la galería`)
  const size = largestSize(photo)
  return { src: size.file, w: size.w, h: size.h }
}

const people = [
  {
    ...shotAt(1),
    alt: "Retrato de estudio de una modelo en Maracay",
    name: "Groovy",
    role: "Detrás del lente",
    sentence: "Fotógrafo de Maracay. Prefiero la luz real a la pose: el momento decide, yo solo disparo.",
  },
  {
    ...shotAt(2),
    alt: "Sesión de estudio con fondo oscuro y luz lateral",
    name: "El ojo",
    role: "Dirección en estudio",
    sentence: "En estudio cada sesión se construye contigo: fondo, luz y dirección hasta que te reconoces en la foto.",
  },
  {
    ...shotAt(3),
    alt: "Retrato de estudio de una modelo sentada en un taburete",
    name: "El set",
    role: "Luz y fondo de estudio",
    sentence: "Armo la luz y el fondo antes de que llegues: cuando entras al set, solo queda la pose.",
  },
]

export function GroovyAbout() {
  return (
    <section className="g-about" aria-label="Sobre Groovy">
      <h2 className="g-about-title g-wide">Groovy</h2>
      <div className="g-about-people">
        {people.map((p) => (
          <figure className="g-person" key={p.name}>
            <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" />
            <figcaption>
              <p className="g-person-name">{p.name}</p>
              <p className="g-person-role">{p.role}</p>
              <p className="g-person-sentence">{p.sentence}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
