"use client"

type Shot = {
  src: string
  alt: string
  caption: string
  note: string
}

const SHOTS: Shot[] = [
  {
    src: "/portfolio/reales/estudio-oscuro-2.webp",
    alt: "Retrato de estudio sobre fondo oscuro, luz lateral suave",
    caption: "Estudio · fondo oscuro",
    note: "Luz lateral con softbox",
  },
  {
    src: "/portfolio/reales/estudio-blanco-1.webp",
    alt: "Retrato de estudio sobre fondo blanco con iluminación lateral",
    caption: "Estudio · fondo blanco",
    note: "Plano medio, fondo infinito",
  },
  {
    src: "/portfolio/reales/estudio-oscuro-3.webp",
    alt: "Bailarina en movimiento con efecto de polvo, fondo oscuro",
    caption: "Estudio · movimiento",
    note: "Congelada con flash",
  },
  {
    src: "/portfolio/reales/estudio-blanco-3.webp",
    alt: "Retrato de estudio, fondo blanco, pose de brazo elevado",
    caption: "Estudio · pose",
    note: "Contraluz de contorno",
  },
  {
    src: "/portfolio/reales/estudio-oscuro-4.webp",
    alt: "Retrato editorial con fondo oscuro y partículas en suspensión",
    caption: "Estudio · editorial",
    note: "Partículas en suspensión",
  },
  {
    src: "/portfolio/reales/estudio-blanco-2.webp",
    alt: "Retrato de estudio sobre fondo blanco, iluminación lateral suave",
    caption: "Estudio · blanco",
    note: "Luz suave, sin sombra dura",
  },
  {
    src: "/portfolio/reales/estudio-oscuro-1.webp",
    alt: "Retrato de estudio con fondo gris oscuro y luz lateral",
    caption: "Estudio · gris",
    note: "Fondo neutro, foco en la figura",
  },
]

export function GroovyRealWork() {
  return (
    <section className="rw" aria-labelledby="rw-title">
      <header className="rw-head">
        <h2 id="rw-title" className="rw-title">
          Trabajo real
        </h2>
        <p className="rw-lead">
          Una muestra de sesiones de estudio en Maracay: la misma modelo, el mismo día, con la
          luz armada en el set. Así se ve el trabajo de Groovy.pics.
        </p>
        <p className="rw-stamp" aria-hidden="true">
          Ejemplos
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
              width={1080}
              height={1440}
              loading="lazy"
            />
            <figcaption>
              <strong>{s.caption}</strong>
              <span>{s.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
