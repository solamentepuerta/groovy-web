"use client"

import { useEffect, useRef } from "react"

/** Elements that already use `transform` for layout: animate opacity only. */
const FADE_ONLY = new Set([
  "k-chapter-img",
  "k-strip-row",
  "k-cta-object",
  "k-faq-tall",
  "k-faq-square",
  "g-hero-card",
])

const TARGETS = [
  ".k-chapter-title", ".k-chapter-img", ".k-chapter-sentence", ".k-chapter-link",
  ".k-strip-heading", ".k-strip-row", ".k-tile", ".k-how-heading",
  ".k-faq-heading", ".k-faq-facts", ".k-faq-item", ".k-faq-actions", ".k-faq-right",
  ".k-cta-text", ".k-postcard",
  ".g-seq-lead", ".g-seq-item", ".g-person",
  ".g-work-heading", ".g-cta-text", ".g-footer-invite", ".g-footer-links", ".g-footer-mark",
]

export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const els = TARGETS.flatMap((sel) => Array.from(root.querySelectorAll(sel)))
    els.forEach((el, i) => {
      const cls = el.className.split(" ")[0]
      el.classList.add(FADE_ONLY.has(cls) ? "fade" : "rise")
      if (i % 3 === 1) el.classList.add("d1")
      if (i % 3 === 2) el.classList.add("d2")
    })

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on")
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.08 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return <div ref={ref}>{children}</div>
}
