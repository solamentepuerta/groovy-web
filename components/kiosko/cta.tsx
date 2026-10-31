import { waLink } from "@/lib/wa"

export function KioskoCta() {
  return (
    <section className="k-cta" aria-label="Pedido directo">
      <img
        className="k-cta-object"
        src="/store/pants-2.png"
        alt="Pantalón blanco ancho con corbata estampada"
        width={900}
        height={900}
        loading="lazy"
      />
      <div className="k-cta-text">
        <h2 className="k-cta-line">Tu próximo fit está a un mensaje</h2>
        <p className="k-cta-sentence">
          Escríbenos, di qué pieza te gustó y la apartamos hoy mismo. Sin cuentas, sin carritos eternos.
        </p>
        <p className="k-cta-fact">Desde $30 · entrega en Maracay</p>
        <a
          className="k-btn"
          href={waLink("Hola Kiosko 2001, quiero hacer un pedido.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribir ahora
        </a>
      </div>
    </section>
  )
}
