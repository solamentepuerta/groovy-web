const shots = [
  {
    src: "/portfolio/night-event-1.jpg",
    alt: "Evento nocturno en Maracay, luces de escenario",
    caption: "Evento nocturno · Maracay, 2025",
  },
  {
    src: "/portfolio/night-event-3.jpg",
    alt: "Pista de baile bajo luces de colores",
    caption: "La pista, desde dentro",
  },
  {
    src: "/portfolio/night-event-5.jpg",
    alt: "Concierto en vivo, público y luces",
    caption: "Concierto en vivo · última función",
  },
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
      <div className="g-seq" id="trabajo">
        {shots.map((s, i) => (
          <figure className="g-seq-item" key={s.src}>
            <img
              src={s.src}
              alt={s.alt}
              width={1440}
              height={960}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
