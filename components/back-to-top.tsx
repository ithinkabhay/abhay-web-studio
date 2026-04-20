"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed z-30 bottom-[calc(6.5rem+env(safe-area-inset-bottom,0px))] left-4 right-auto lg:bottom-6 lg:left-auto lg:right-6 lg:z-40 group"
        >
          <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-70 group-hover:opacity-100 transition" />
          <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-5px_rgba(34,197,94,0.6)] transition-transform group-hover:-translate-y-0.5">
            <ArrowUp className="w-5 h-5" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
