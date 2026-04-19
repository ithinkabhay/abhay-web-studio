"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion"
import {
  Home,
  Layers,
  MessageCircle,
  Phone,
  Mail,
  Send,
  Calendar,
  ChevronUp,
  ChevronDown,
  X,
  Tag,
  Bot,
} from "lucide-react"

const primary = [
  { id: "home", label: "Home", icon: Home, href: "#" },
  { id: "services", label: "Services", icon: Layers, href: "#services" },
  { id: "ai", label: "AI", icon: Bot, href: "#ai" },
  { id: "pricing", label: "Pricing", icon: Tag, href: "#pricing" },
  { id: "contact", label: "Contact", icon: MessageCircle, href: "#contact" },
]

const secondary = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/+919770670564",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 ring-emerald-500/30",
  },
  {
    id: "call",
    label: "Call",
    icon: Phone,
    href: "tel:+919770670564",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 ring-cyan-500/30",
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    href: "mailto:hello@abhaywebstudio.in",
    color: "text-purple-400",
    bg: "bg-purple-500/10 ring-purple-500/30",
  },
  {
    id: "quote",
    label: "Get Quote",
    icon: Send,
    href: "#contact",
    color: "text-amber-400",
    bg: "bg-amber-500/10 ring-amber-500/30",
  },
]

type View = "primary" | "secondary"

export function MobileBottomNav() {
  const [view, setView] = useState<View>("primary")
  const [expanded, setExpanded] = useState(false)
  const [activeId, setActiveId] = useState<string>("home")
  const y = useMotionValue(0)
  // Show a subtle hint of the alternate view as user swipes (peek effect)
  const peekOpacity = useTransform(y, [-80, -20, 0, 20, 80], [1, 0.4, 0, 0.4, 1])

  // Active section tracking
  useEffect(() => {
    const ids = primary.filter((i) => i.id !== "home").map((i) => i.id)
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
        else if (window.scrollY < 200) setActiveId("home")
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeUp = info.offset.y < -50 || info.velocity.y < -300
    const swipeDown = info.offset.y > 50 || info.velocity.y > 300

    if (swipeUp) {
      // First swipe up: switch to secondary if on primary, else expand sheet
      if (view === "primary") setView("secondary")
      else setExpanded(true)
    } else if (swipeDown) {
      if (expanded) setExpanded(false)
      else if (view === "secondary") setView("primary")
    }
  }

  return (
    <>
      {/* Backdrop for expanded sheet */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
            className="lg:hidden fixed inset-0 bg-background/70 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Expanded sheet */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.4 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 80 || info.velocity.y > 400) setExpanded(false)
            }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-strong rounded-t-3xl border-t border-x border-border shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col items-center pt-2 pb-1">
              <span className="w-10 h-1 rounded-full bg-muted-foreground/40" />
            </div>

            <div className="px-5 pt-2 pb-7">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    Quick Actions
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Reach out — we usually reply within 2 hours
                  </p>
                </div>
                <button
                  onClick={() => setExpanded(false)}
                  className="w-9 h-9 rounded-full bg-secondary/60 flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {secondary.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={() => setExpanded(false)}
                    className="flex flex-col items-start gap-2 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl ring-1 ${item.bg} flex items-center justify-center`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </a>
                ))}
              </div>

              <Link
                href="#contact"
                onClick={() => setExpanded(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm glow-primary"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating bottom dock */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 26 }}
        className="lg:hidden fixed bottom-3 left-3 right-3 z-50"
      >
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={{ top: 0.5, bottom: 0.2 }}
          onDragEnd={handleDragEnd}
          style={{ y }}
          className="relative glass-strong rounded-[26px] px-2 pt-2 pb-2 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04)_inset] touch-none select-none"
        >
          {/* Drag handle / view toggle */}
          <button
            onClick={() => {
              if (view === "primary") setView("secondary")
              else setExpanded(true)
            }}
            className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-card border border-border flex items-center gap-1 z-10"
            aria-label="Swipe up for more"
          >
            <ChevronUp className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              swipe
            </span>
          </button>

          {/* View indicator dots */}
          <div className="absolute -top-2.5 right-3 flex gap-1">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                view === "primary" ? "bg-primary w-3" : "bg-muted-foreground/40"
              }`}
            />
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                view === "secondary" ? "bg-primary w-3" : "bg-muted-foreground/40"
              }`}
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" initial={false}>
              {view === "primary" ? (
                <motion.div
                  key="primary"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="grid grid-cols-5 gap-1"
                >
                  {primary.map((item) => {
                    const isActive = activeId === item.id
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="relative flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="bn-active"
                            transition={{ type: "spring", stiffness: 320, damping: 28 }}
                            className="absolute inset-0 rounded-xl bg-primary/15 border border-primary/30"
                          />
                        )}
                        <item.icon
                          className={`relative w-5 h-5 transition-colors ${
                            isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={`relative text-[10px] font-medium leading-none transition-colors ${
                            isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    )
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="secondary"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="grid grid-cols-5 gap-1"
                >
                  {secondary.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl hover:bg-secondary/60"
                    >
                      <span className={`w-7 h-7 rounded-lg ring-1 ${item.bg} flex items-center justify-center`}>
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                      </span>
                      <span className="text-[10px] font-medium text-foreground/80 leading-none">
                        {item.label}
                      </span>
                    </a>
                  ))}
                  <button
                    onClick={() => setView("primary")}
                    className="flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl hover:bg-secondary/60"
                  >
                    <span className="w-7 h-7 rounded-lg bg-secondary/80 flex items-center justify-center">
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground leading-none">
                      Back
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
