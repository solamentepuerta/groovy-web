"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import { waLink } from "@/lib/wa"

export function GroovyHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.22])
  // El desenfoque progresivo es el remate: sustituye el corte seco de la tarjeta al salir.
  const blurPx = useTransform(scrollYProgress, [0, 0.55, 0.95], [0, 1.5, 12])
  const blur = useMotionTemplate`blur(${blurPx}px)`

  return (
    <header className="g-hero" ref={ref}>
      <div className="g-hero-bg" aria-hidden="true">
        {/* retrato 01 de la sesión real; ruta fija para no cargar el manifest en el bundle del cliente */}
        <img
          src="/portfolio/sesiones/retrato/retrato-estudio-maracay-01-1600.webp"
          alt=""
          width={1600}
          height={2400}
          fetchPriority="high"
        />
      </div>
      <motion.div
        className="g-hero-card"
        style={{ scale, filter: blur, willChange: "transform, filter" }}
      >
        <h1 className="g-hero-card-title g-wide">
          <span>Groovy</span>
          <span>·</span>
          <span>Pics</span>
        </h1>
        <div>
          <div className="g-hero-facts">
            <p>Fotógrafo en Maracay</p>
            <p>Retrato, eventos y producto</p>
            <p>Fashion y editorial</p>
          </div>
          <p className="g-hero-sentence">
            Tu historia, contada con luz. Retrato, eventos, producto y moda.
          </p>
        </div>
        <div className="g-hero-card-bottom">
          <span className="g-hero-credit">© Groovy.pics</span>
          <a
            className="g-btn"
            href={waLink("Hola Groovy, quiero reservar una sesión de fotos.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar sesión
          </a>
          <a className="g-hero-link" href="#trabajo">
            Ver trabajo
          </a>
        </div>
      </motion.div>
    </header>
  )
}
