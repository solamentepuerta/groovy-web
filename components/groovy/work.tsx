"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { waLink } from "@/lib/wa"
import { groovyCategories, type GroovyCategory } from "@/lib/groovy-categories"

function ProjectStage({ p }: { p: GroovyCategory }) {
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
    <article className="g-project" ref={ref} data-placeholder={p.placeholder || undefined}>
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
        {groovyCategories.map((p) => (
          <ProjectStage key={p.title} p={p} />
        ))}
      </div>
    </section>
  )
}
