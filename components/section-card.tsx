"use client"

import { ReactNode } from "react"

interface SectionCardProps {
  id?: string
  className?: string
  innerClassName?: string
  children: ReactNode
}

/**
 * Wraps each landing-page section in a unified rounded "card" container
 * for a cohesive, premium card-stack layout across the page.
 */
export function SectionCard({
  id,
  className = "",
  innerClassName = "",
  children,
}: SectionCardProps) {
  return (
    <section id={id} className={`relative py-6 sm:py-8 ${className}`}>
      <div className="section-shell">
        <div className="section-card">
          <div className={`section-inner ${innerClassName}`}>{children}</div>
        </div>
      </div>
    </section>
  )
}
