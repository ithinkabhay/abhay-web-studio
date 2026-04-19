"use client"

import { Globe, Calendar, Briefcase, ShoppingCart, ArrowUpRight, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { SectionCard } from "@/components/section-card"

const services = [
  {
    icon: Globe,
    title: "Business Website Design",
    description:
      "Pixel-perfect websites that build trust, dominate Google, and turn first-time visitors into long-term customers.",
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized"],
    accent: "from-emerald-400/20 to-cyan-400/10",
  },
  {
    icon: Calendar,
    title: "Booking & Appointment Systems",
    description:
      "Stop chasing calls. Our automated booking systems fill your calendar 24/7 — even while you sleep.",
    features: ["Online Scheduling", "Payment Integration", "Email Reminders"],
    accent: "from-cyan-400/20 to-blue-400/10",
  },
  {
    icon: Briefcase,
    title: "Portfolio & Personal Brand",
    description:
      "Stop looking like everyone else. We craft jaw-dropping portfolios that command attention — and premium fees.",
    features: ["Gallery Layouts", "Project Showcases", "Lead Capture"],
    accent: "from-purple-400/20 to-pink-400/10",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description:
      "High-converting online stores that turn browsers into buyers — with checkout flows that just work.",
    features: ["Product Catalog", "Secure Checkout", "Inventory Sync"],
    accent: "from-orange-400/20 to-amber-400/10",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        className="gradient-border relative bg-card border border-border rounded-2xl p-6 lg:p-8 cursor-pointer group overflow-hidden h-full transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.22)]"
      >
        <div className="absolute inset-0 spotlight opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${service.accent} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-14 h-14 bg-primary/10 ring-1 ring-primary/30 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-border group-hover:border-primary/40 group-hover:bg-primary/10 flex items-center justify-center transition-all">
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-3 tracking-tight">
            {service.title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-secondary/70 text-foreground/80 text-xs font-medium rounded-full border border-border"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <SectionCard id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <Layers className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs sm:text-sm text-foreground/90 font-medium">What we build</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 text-balance tracking-tight">
          Websites that <span className="text-gradient">make you money.</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          From simple landing pages to full e-commerce platforms — we build digital assets that work harder than your best salesperson.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </SectionCard>
  )
}
