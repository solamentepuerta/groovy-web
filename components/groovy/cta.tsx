import { waLink } from "@/lib/wa"
import { firstPhotosOf, largestSize } from "@/lib/groovy-gallery"

const [fashionShot] = firstPhotosOf("fashion", 1)
const fashionSize = largestSize(fashionShot)

export function GroovyCta() {
  return (
    <section className="g-cta" aria-label="Reserva tu fecha">
      <img
        src={fashionSize.file}
        alt="Sesión de fotografía de moda de Groovy.pics"
        width={fashionSize.w}
        height={fashionSize.h}
        loading="lazy"
      />
      <div className="g-cta-text">
        <h2 className="g-cta-line">Tu próxima historia, contada bien</h2>
        <p className="g-cta-para">
          Una boda, una fiesta, un retrato que te represente. Escríbeme la fecha y la idea;
          yo pongo la cámara.
        </p>
        <a
          className="g-btn"
          href={waLink("Hola Groovy, quiero reservar una fecha. Mi idea es: ")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar fecha
        </a>
      </div>
    </section>
  )
}
