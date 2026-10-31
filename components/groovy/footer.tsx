import { waLink } from "@/lib/wa"

export function GroovyFooter() {
  return (
    <footer className="g-footer">
      <div className="g-footer-top">
        <div className="g-footer-invite">
          <h2>Hablemos de tu fecha</h2>
          <a
            className="g-btn"
            href={waLink("Hola Groovy, vengo desde groovy.pics y quiero hablar de una fecha.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </div>
        <nav className="g-footer-links" aria-label="Contacto">
          <a
            href={waLink("Hola Groovy, vengo desde groovy.pics.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            +58 412 891 1838
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="/">Kiosko 2001 — la tienda</a>
          <a href="https://puertale.com" target="_blank" rel="noopener noreferrer">
            Hecho por puertale.com
          </a>
        </nav>
      </div>
      <div className="g-footer-credits">
        <span>© 2026 Groovy.pics · Maracay, Venezuela</span>
        <span>
          Proyecto demo de{" "}
          <a href="https://puertale.com" target="_blank" rel="noopener noreferrer">
            puertale.com
          </a>
        </span>
      </div>
      <div className="g-footer-mark" aria-hidden="true">
        <div className="g-marquee">
          <span className="g-marquee__run">
            <span className="g-marquee__word">Groovy</span>
            <span className="g-marquee__word">Groovy</span>
            <span className="g-marquee__word">Groovy</span>
            <span className="g-marquee__word">Groovy</span>
          </span>
          <span className="g-marquee__run">
            <span className="g-marquee__word">Groovy</span>
            <span className="g-marquee__word">Groovy</span>
            <span className="g-marquee__word">Groovy</span>
            <span className="g-marquee__word">Groovy</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
