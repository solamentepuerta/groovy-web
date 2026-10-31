import { waLink } from "@/lib/wa"

const faqs = [
  {
    q: "¿Cómo pido una pieza?",
    a: "Toca la pieza en el catálogo y se abre WhatsApp con su SKU ya escrito. Confirmamos talla, pago y entrega en el mismo chat.",
  },
  {
    q: "¿Qué tallas manejan?",
    a: "De la S a la XL según la pieza. Las medidas exactas de cada una se confirman por WhatsApp antes de pagar.",
  },
  {
    q: "¿Hacen entregas?",
    a: "Sí: entregas en Maracay y envíos a todo el país. El costo del envío se calcula en el chat según tu zona.",
  },
  {
    q: "¿Cómo puedo pagar?",
    a: "Transferencia, pago móvil o efectivo contra entrega en Maracay. El pedido queda apartado al confirmar el pago.",
  },
  {
    q: "¿Puedo devolver una pieza?",
    a: "Si la pieza llega con algún defecto de fábrica, se cambia dentro de los 7 días siguientes a la entrega.",
  },
]

export function KioskoFaq() {
  return (
    <section className="k-faq" aria-label="Preguntas frecuentes">
      <div className="k-faq-left">
        <h2 className="k-faq-heading">Dudas comunes</h2>
        <div className="k-faq-facts">
          <p>Maracay, Venezuela</p>
          <p>Respuesta en horario 9am – 7pm</p>
          <p>Entrega en Maracay · envíos nacionales</p>
        </div>
        {faqs.map((f) => (
          <details className="k-faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
        <div className="k-faq-actions">
          <a
            className="k-btn"
            href={waLink("Hola Kiosko 2001, tengo una duda antes de pedir.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preguntar ahora
          </a>
          <a className="k-link" href="#catalogo">
            Volver al catálogo
          </a>
        </div>
      </div>
      <div className="k-faq-right" aria-hidden="true">
        <img
          className="k-faq-tall"
          src="/store/pants-1.png"
          alt=""
          width={700}
          height={700}
          loading="lazy"
        />
        <img
          className="k-faq-square"
          src="/store/crop-2.png"
          alt=""
          width={320}
          height={320}
          loading="lazy"
        />
      </div>
    </section>
  )
}
