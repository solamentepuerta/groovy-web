import { enlaces, perfil } from "@/lib/enlaces"

/**
 * Link tree de la bio. Todo el contenido sale de `content/enlaces.md`.
 * Un enlace sin url no llega aquí: el parser lo descarta.
 */
export function GroovyEnlaces() {
  return (
    <main className="g-links">
      <div className="g-links-inner">
        <header className="g-links-head">
          <img
            className="g-links-avatar"
            src={perfil.photo}
            alt={perfil.name}
            width={192}
            height={192}
          />
          <h1 className="g-links-name">{perfil.name}</h1>
          {perfil.handle ? <p className="g-links-handle">{perfil.handle}</p> : null}
          {perfil.bio ? <p className="g-links-bio">{perfil.bio}</p> : null}
        </header>

        <nav className="g-links-list" aria-label="Enlaces">
          {enlaces.map((enlace) => {
            const externo = /^https?:/i.test(enlace.href)
            return (
              <a
                key={enlace.label}
                className={`g-link${enlace.featured ? " g-link--featured" : ""}`}
                href={enlace.href}
                {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="g-link__label">{enlace.label}</span>
                {enlace.detail ? <span className="g-link__detail">{enlace.detail}</span> : null}
              </a>
            )
          })}
        </nav>

        <p className="g-links-foot">© 2026 {perfil.name} · Maracay, Venezuela</p>
      </div>
    </main>
  )
}
