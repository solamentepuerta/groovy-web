const chapters = [
  {
    title: "Hoodies",
    sentence: "Cuatro siluetas con capucha, del rosa suave al skull en llamas.",
    image: "/store/hoodie-1.png",
    alt: "Hoodie marrón con calavera en llamas",
    field: "#33251f",
    link: "#catalogo",
  },
  {
    title: "T-shirts",
    sentence: "Cinco gráficos con carácter, lavados algodón pesado.",
    image: "/store/t-shirt-2.png",
    alt: "Camiseta roja con telaraña",
    field: "#1f2f2a",
    link: "#catalogo",
  },
  {
    title: "Pants",
    sentence: "Denim ancho y joggers, la base de cualquier fit.",
    image: "/store/pants-1.png",
    alt: "Jeans baggy oscuros con print",
    field: "#20242e",
    link: "#catalogo",
  },
  {
    title: "Crops",
    sentence: "Cortes a la cintura: raglán, jersey y polo con zip.",
    image: "/store/crop-2.png",
    alt: "Crop jersey negro y rojo Chicago 88",
    field: "#2c1b1b",
    link: "#catalogo",
  },
]

export function KioskoChapters() {
  return (
    <section className="k-chapters" aria-label="Colecciones">
      {chapters.map((c, i) => (
        <article className="k-chapter" key={c.title} style={{ background: c.field }}>
          <h2 className="k-chapter-title">{c.title}</h2>
          <img
            className="k-chapter-img"
            src={c.image}
            alt={c.alt}
            width={506}
            height={675}
            loading={i === 0 ? "eager" : "lazy"}
          />
          <p className="k-chapter-sentence">{c.sentence}</p>
          <a className="k-chapter-link" href={c.link}>
            Ver piezas
          </a>
        </article>
      ))}
    </section>
  )
}
