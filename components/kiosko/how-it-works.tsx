const stages = [
  {
    name: "Eliges",
    text: "Toca cualquier pieza del rack y se abre WhatsApp con tu SKU ya escrito.",
    image: "/store/crop-3.png",
    alt: "Polo corto con cremallera",
  },
  {
    name: "Escribes",
    text: "Confirmas talla y pago en el mismo chat. Sin registros, sin apps.",
    image: "/store/t-shirt-4.png",
    alt: "Camiseta blanca con ilustración de ramen",
  },
  {
    name: "La tienes",
    text: "Entrega en Maracay o envío nacional. Así de simple.",
    image: "/store/hoodie-3.png",
    alt: "Hoodie rosa con dibujo lineal",
  },
]

export function KioskoHowItWorks() {
  return (
    <section className="k-how" aria-label="Cómo comprar">
      <div className="k-how-grid">
        <h2 className="k-how-heading">Así de simple</h2>
        {stages.map((s) => (
          <div className="k-tile" key={s.name}>
            <div className="k-tile-box">
              <img src={s.image} alt={s.alt} width={360} height={360} loading="lazy" />
            </div>
            <h3 className="k-tile-name">{s.name}</h3>
            <p className="k-tile-text">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
