const rows = [
  {
    q: "¿Cómo reservo una fecha?",
    a: "Escríbeme por WhatsApp con la fecha y el tipo de sesión. Se aparta el día con un adelanto y el resto se cancela el día de la entrega.",
  },
  {
    q: "¿Cuánto tardan las fotos?",
    a: "Sesiones de estudio: 5 a 7 días. Eventos: 10 a 14 días. Siempre entrego una primera selección antes de las 48 horas.",
  },
  {
    q: "¿Trabajas fuera de Maracay?",
    a: "Sí. Cubro toda la zona central y viajo al resto del país con viáticos. Escríbeme la ciudad y la fecha y lo cuadramos.",
  },
  {
    q: "¿Qué recibo al final?",
    a: "Un enlace privado con todas las fotos editadas en alta resolución, listas para imprimir y para redes, sin marca de agua.",
  },
  {
    q: "¿Puedo pedir fotos para mi marca?",
    a: "Claro: producto, lookbook y contenido para redes. Si vendes ropa, además tienes a Kiosko 2001 como referencia de estilo.",
  },
]

export function GroovyFaq() {
  return (
    <section className="g-faq" aria-label="Preguntas frecuentes">
      <div className="g-faq-row g-faq-head">
        <h2 className="g-faq-q">Antes de escribir</h2>
      </div>
      {rows.map((r) => (
        <div className="g-faq-row" key={r.q}>
          <h3 className="g-faq-q">{r.q}</h3>
          <p className="g-faq-a">{r.a}</p>
        </div>
      ))}
    </section>
  )
}
