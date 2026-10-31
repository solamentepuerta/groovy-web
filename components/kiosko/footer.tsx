import { waLink } from "@/lib/wa"

export function KioskoFooter() {
  return (
    <footer className="k-footer">
      <div className="k-postcard">
        <div className="k-postcard-grid">
          <div>
            <h2 className="k-postcard-sign">Nos leemos</h2>
            <p className="k-postcard-msg">
              Gracias por pasar por el kiosko. Cada pieza sale una vez; si la viste y te gustó,
              no la dejes pensando mucho.
            </p>
          </div>
          <div className="k-postcard-addr">
            <div className="k-stamp" aria-hidden="true">
              <img src="/store/hoodie-4.png" alt="" width={76} height={101} loading="lazy" />
            </div>
            <a
              href={waLink("Hola Kiosko 2001, vengo desde la web.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              +58 412 891 1838
            </a>
            <a href="/groovy">groovy.pics — el hermano fotógrafo</a>
            <p>Maracay, Aragua, Venezuela</p>
            <a
              href="https://puertale.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hecho por puertale.com
            </a>
          </div>
        </div>
        <p className="k-imprint">
          © 2026 Kiosko 2001 · Proyecto demo de{" "}
          <a href="https://puertale.com" target="_blank" rel="noopener noreferrer">
            puertale.com
          </a>{" "}
          · Precios y piezas de muestra
        </p>
      </div>
    </footer>
  )
}
