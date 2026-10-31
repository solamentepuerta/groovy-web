import { products, productWaLink } from "@/lib/products"

export function KioskoRack() {
  return (
    <section className="k-strip" id="catalogo" aria-label="Catálogo completo">
      <h2 className="k-strip-heading">
        El rack
        <small>16 piezas, una sola por talla — toca la que quieras</small>
      </h2>
      <div className="k-strip-row" role="list">
        {products.map((p) => (
          <a
            key={p.sku}
            role="listitem"
            className="k-frame"
            href={productWaLink(p)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.name}, $${p.price}, pedir por WhatsApp`}
            title={`${p.name} — ${p.sku} — $${p.price}`}
          >
            <img src={p.image} alt={p.alt} width={400} height={400} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  )
}
