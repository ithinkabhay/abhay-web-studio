"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#ai", label: "AI" },
  { href: "#portfolio", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-14 lg:h-16 px-3 lg:px-4 rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "glass-strong shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)]"
              : "bg-transparent"
          }`}
        >
          {/* Logo + brand — visible on all sizes */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="/logo.png"
                alt="Abhay Web Studio"
                className="relative h-9 w-auto object-contain"
              />
            </div>
            <span className="text-base sm:text-lg font-display font-semibold tracking-tight">
              Abhay <span className="text-gradient">Web Studio</span>
            </span>
          </Link>

          {/* Desktop nav links (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-1 glass rounded-full p-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "")
              const isActive = activeId === id
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  )}
                  <span className={`relative ${isActive ? "text-foreground" : ""}`}>
                    {link.label}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="#contact">
              <Button
                size="sm"
                className="relative bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 font-semibold group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Get My Website
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile: subtle CTA pill on the right (no hamburger — bottom nav handles menu) */}
          <Link
            href="#contact"
            className="lg:hidden inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            Hire
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
