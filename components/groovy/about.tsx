const people = [
  {
    img: "/portfolio/Ai.jpg",
    name: "Groovy",
    role: "Detrás del lente",
    sentence: "Fotógrafo de Maracay. Prefiero la luz real a la pose: el momento decide, yo solo disparo.",
  },
  {
    img: "/portfolio/search-results.jpg",
    name: "El ojo",
    role: "Dirección en estudio",
    sentence: "En estudio cada sesión se construye contigo: fondo, luz y dirección hasta que te reconoces en la foto.",
  },
  {
    img: "/portfolio/studio-photos-5.jpg",
    name: "La calle",
    role: "Eventos y fiestas",
    sentence: "En eventos trabajo invisible: sin interrumpir, sin pedir que repitan el brindis. Las fotos nacen solas.",
  },
]

export function GroovyAbout() {
  return (
    <section className="g-about" aria-label="Sobre Groovy">
      <h2 className="g-about-title g-wide">Groovy</h2>
      <div className="g-about-people">
        {people.map((p) => (
          <figure className="g-person" key={p.name}>
            <img src={p.img} alt={p.name} width={560} height={700} loading="lazy" />
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
