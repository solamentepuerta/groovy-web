"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { waLink } from "@/lib/wa"
import { groovyCategories, type GroovyCategory } from "@/lib/groovy-categories"

/** Por debajo de 720 px el recorrido se reduce a la mitad. */
function useNarrow(): boolean {
  const [narrow, setNarrow] = useState(false)
  useEffect(() => {
    const sync = () => setNarrow(window.innerWidth <= 720)
    sync()
    window.addEventListener("resize", sync)
    const mq = window.matchMedia("(max-width: 720px)")
    mq.addEventListener("change", sync)
    return () => {
      window.removeEventListener("resize", sync)
      mq.removeEventListener("change", sync)
    }
  }, [])
  return narrow
}

function to3d(value: number) {
  return `translate3d(0, ${value}svh, 0)`
}

function ProjectStage({
  p,
  active,
  nodeRef,
}: {
  p: GroovyCategory
  active: boolean
  nodeRef: (el: HTMLElement | null) => void
}) {
  const ref = useRef<HTMLElement | null>(null)
  const narrow = useNarrow()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Suaviza el progreso del scroll: es lo que quita el salto en móvil.
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.6 })

  const paneTravel = narrow ? 6 : 12
  const titleTravel = narrow ? 8 : 16

  const yUp = useTransform(progress, [0, 1], [paneTravel, -paneTravel])
  const yDown = useTransform(progress, [0, 1], [-paneTravel, paneTravel])
  const yTitleL = useTransform(progress, [0, 1], [titleTravel, -titleTravel])
  const yTitleR = useTransform(progress, [0, 1], [-titleTravel, titleTravel])

  const tUp = useTransform(yUp, to3d)
  const tDown = useTransform(yDown, to3d)
  const tTitleL = useTransform(yTitleL, to3d)
  const tTitleR = useTransform(yTitleR, to3d)

  return (
    <article
      className={`g-project${active ? " is-active" : ""}`}
      ref={(el) => {
        ref.current = el
        nodeRef(el)
      }}
      data-placeholder={p.placeholder || undefined}
    >
      <div className="g-project-panes">
        <motion.div className="g-pane" style={{ transform: tUp }}>
          <img src={p.left.src} alt={p.left.alt} width={p.left.w} height={p.left.h} loading="lazy" />
        </motion.div>
        <motion.div className="g-pane" style={{ transform: tDown }}>
          <img
            src={p.right.src}
            alt={p.right.alt}
            width={p.right.w}
            height={p.right.h}
            loading="lazy"
          />
        </motion.div>
      </div>
      <h3 className="g-project-title g-wide" aria-label={p.title}>
        <motion.span className="half left" aria-hidden="true" style={{ transform: tTitleL }}>
          <span>{p.title}</span>
        </motion.span>
        <motion.span className="half right" aria-hidden="true" style={{ transform: tTitleR }}>
          <span>{p.title}</span>
        </motion.span>
      </h3>
      <div className="g-project-meta">
        <span>{p.meta}</span>
        <a
          href={waLink(`Hola Groovy, me interesa una sesión de: ${p.meta.toLowerCase()}.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir este estilo
        </a>
      </div>
    </article>
  )
}

/**
 * Marca UNA sola etapa como activa: la que tiene su centro más cerca del centro
 * del viewport. Así `will-change` no deja capas GPU vivas en toda la página.
 */
function useActiveStage(count: number) {
  const refs = useRef<(HTMLElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const middle = window.innerHeight / 2
      let best = -1
      let bestDistance = Number.POSITIVE_INFINITY
      refs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > window.innerHeight) return
        const distance = Math.abs(rect.top + rect.height / 2 - middle)
        if (distance < bestDistance) {
          bestDistance = distance
          best = i
        }
      })
      if (best >= 0) setActive(best)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [count])

  const register = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el
  }

  return { active, register }
}

export function GroovyWork() {
  const { active, register } = useActiveStage(groovyCategories.length)

  return (
    <section className="g-work" aria-label="Especialidades">
      <h2 className="g-work-heading">Lo que hago</h2>
      <div className="g-work-stage">
        {groovyCategories.map((p, i) => (
          <ProjectStage key={p.title} p={p} active={i === active} nodeRef={register(i)} />
        ))}
      </div>
    </section>
  )
}
