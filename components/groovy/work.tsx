"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { waLink } from "@/lib/wa"

type Project = {
  title: string
  meta: string
  left: string
  right: string
  leftAlt: string
  rightAlt: string
}

const projects: Project[] = [
  {
    title: "Studio",
    meta: "Retrato y editorial",
    left: "/portfolio/studio-photos-11.jpg",
    right: "/portfolio/studio-photos-1.jpg",
    leftAlt: "Retrato en estudio con luz controlada",
    rightAlt: "Sesión de estudio, fondo neutro",
  },
  {
    title: "De día",
    meta: "Bodas y eventos diurnos",
    left: "/portfolio/boda-event-1.jpg",
    right: "/portfolio/boda-event-3.jpg",
    leftAlt: "Boda de día, ceremonia al aire libre",
    rightAlt: "Celebración diurna, invitados",
  },
  {
    title: "De noche",
    meta: "Fiestas y conciertos",
    left: "/portfolio/night-event-2.jpg",
    right: "/portfolio/night-event-6.jpg",
    leftAlt: "Fiesta nocturna con luces de escenario",
    rightAlt: "Concierto de noche, ambiente y luz",
  },
]

function ProjectStage({ p }: { p: Project }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const yUp = useTransform(scrollYProgress, [0, 1], ["12svh", "-12svh"])
  const yDown = useTransform(scrollYProgress, [0, 1], ["-12svh", "12svh"])
  const yTitleL = useTransform(scrollYProgress, [0, 1], ["16svh", "-16svh"])
  const yTitleR = useTransform(scrollYProgress, [0, 1], ["-16svh", "16svh"])

  return (
    <article className="g-project" ref={ref}>
      <div className="g-project-panes">
        <motion.div className="g-pane" style={{ y: yUp }}>
          <img src={p.left} alt={p.leftAlt} width={720} height={900} loading="lazy" />
        </motion.div>
        <motion.div className="g-pane" style={{ y: yDown }}>
          <img src={p.right} alt={p.rightAlt} width={720} height={900} loading="lazy" />
        </motion.div>
      </div>
      <h3 className="g-project-title g-wide" aria-label={p.title}>
        <motion.span className="half left" aria-hidden="true" style={{ y: yTitleL }}>
          <span>{p.title}</span>
        </motion.span>
        <motion.span className="half right" aria-hidden="true" style={{ y: yTitleR }}>
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

export function GroovyWork() {
  return (
    <section className="g-work" aria-label="Especialidades">
      <h2 className="g-work-heading">Lo que hago</h2>
      <div className="g-work-stage">
        {projects.map((p) => (
          <ProjectStage key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
