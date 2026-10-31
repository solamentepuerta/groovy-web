"use client"

import { useEffect, useState } from "react"

type Props = {
  /** Identidad desde la que se abre: cambia el tono del papel y el remate. */
  from: "kiosko" | "groovy"
}

const STORE = {
  href: "/",
  name: "Kiosko 2001",
  kind: "Tienda",
  line: "Ropa streetwear. Hoodies, tees, pants y crops.",
  meta: "Pedidos por WhatsApp",
}

const PORTFOLIO = {
  href: "/groovy",
  name: "Groovy.pics",
  kind: "Portafolio",
  line: "Fotografía en Maracay: estudio, bodas y eventos.",
  meta: "Reserva por WhatsApp",
}

function Key({
  data,
  variant,
  onPick,
}: {
  data: typeof STORE
  variant: "store" | "portfolio"
  onPick: (href: string) => void
}) {
  return (
    <button
      type="button"
      className={`id-key id-key--${variant}`}
      onClick={() => onPick(data.href)}
      aria-label={`Ir a ${data.name}, ${data.kind}`}
    >
      <span className="id-key__top">
        <span className="id-key__face">
          <span className="id-key__legend">{data.kind}</span>
          <span className="id-key__name">{data.name}</span>
        </span>
      </span>
      <span className="id-key__desc">
        <span>{data.line}</span>
        <span className="id-key__meta">{data.meta}</span>
      </span>
    </button>
  )
}

export function IdentityGate({ from }: Props) {
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Solo la primera visita de la sesión; no interrumpe el regreso.
    try {
      if (!sessionStorage.getItem("id-gate-seen")) setOpen(true)
    } catch {
      setOpen(true)
    }
    setReady(true)
  }, [])

  const dismiss = () => {
    setOpen(false)
    try {
      sessionStorage.setItem("id-gate-seen", "1")
    } catch {
      /* almacenamiento bloqueado: no pasa nada */
    }
  }

  const pick = (href: string) => {
    dismiss()
    window.location.assign(href)
  }

  const reopen = () => setOpen(true)

  if (!ready) return null

  return (
    <>
      <button type="button" className="id-reopen" onClick={reopen}>
        <span className="id-reopen__keys" aria-hidden="true">
          <span className="id-reopen__key" />
          <span className="id-reopen__key" />
        </span>
        <span>Cambiar de sitio</span>
      </button>

      {open && (
        <div
          className={`id-scrim id-scrim--${from}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="id-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) dismiss()
          }}
        >
          <div className="id-sheet">
            <button
              type="button"
              className="id-close"
              onClick={dismiss}
              aria-label="Cerrar aviso"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d="M5 5l14 14M19 5L5 19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <h2 id="id-title" className="id-title">
              Son dos sitios,
              <br />
              no uno solo.
            </h2>

            <p className="id-lead">
              <strong>Esto es una demo.</strong> Misma propuesta, dos marcas con cara propia.
              Cada tecla te lleva a una; el botón de la esquina te deja volver.
            </p>

            <div className="id-keys">
              <Key data={STORE} variant="store" onPick={pick} />
              <Key data={PORTFOLIO} variant="portfolio" onPick={pick} />
            </div>

            <p className="id-foot">
              Proyecto demo de{" "}
              <a href="https://puertale.com" target="_blank" rel="noopener noreferrer">
                puertale.com
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
