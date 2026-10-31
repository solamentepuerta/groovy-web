import { waLink } from "@/lib/wa"

export function KioskoHero() {
  return (
    <header className="k-hero">
      <a className="k-hero-wordmark" href="/" aria-label="Kiosko 2001">
        Kiosko 2001
      </a>
      <img
        className="k-hero-object shutter"
        src="/store/hoodie-2.png"
        alt="Hoodie rosa All We Need, la pieza más pedida de Kiosko 2001"
        width={1308}
        height={1308}
        fetchPriority="high"
      />
      <h1 className="k-hero-title">
        <span>kiosko</span>
        <span>2001</span>
      </h1>
      <p className="k-hero-sub">
        Streetwear en Maracay. Eliges la pieza, escribes por WhatsApp y la tienes.
      </p>
      <a
        className="k-btn k-hero-cta"
        href={waLink("Hola Kiosko 2001, quiero ver el catálogo completo.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        Pedir por WhatsApp
      </a>
    </header>
  )
}
