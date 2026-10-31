"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { waLink } from "@/lib/wa"

export function GroovyHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.22])

  return (
    <header className="g-hero" ref={ref}>
      <div className="g-hero-bg" aria-hidden="true">
        <img src="/portfolio/Ai.jpg" alt="" width={736} height={1096} fetchPriority="high" />
      </div>
      <motion.div className="g-hero-card" style={{ scale }}>
        <h1 className="g-hero-card-title g-wide">
          <span>Groovy</span>
          <span>·</span>
          <span>Pics</span>
        </h1>
        <div>
          <div className="g-hero-facts">
            <p>Fotógrafo en Maracay</p>
            <p>Estudio y eventos</p>
            <p>De día y de noche</p>
          </div>
          <p className="g-hero-sentence">
            Tu historia, contada con luz. Sesiones en estudio, bodas y fiestas.
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
