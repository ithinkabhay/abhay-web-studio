"use client"

import { MessageSquare, Palette, Code, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { SectionCard } from "@/components/section-card"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Tell us your idea",
    description: "Share your goals on a free 30-min call. We listen, ask the right questions, and map your strategy.",
  },
  {
    icon: Palette,
    step: "02",
    title: "We design your site",
    description: "Magazine-quality mockups crafted to your brand — delivered fast, refined together.",
  },
  {
    icon: Code,
    step: "03",
    title: "We build & optimize",
    description: "Clean code, lightning speed, SEO baked in — built to scale and rank from day one.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "You start winning",
    description: "Launch and watch leads, bookings and sales roll in — on autopilot.",
  },
]

export function ProcessSection() {
  return (
    <SectionCard id="process">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <Rocket className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs sm:text-sm text-foreground/90 font-medium">Our process</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 text-balance tracking-tight">
          From idea to launch — <span className="text-gradient">in 7 days.</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Stress-free, transparent, and surprisingly fast. Here&apos;s exactly how we do it.
        </p>
      </motion.div>

      <div className="relative">
        {/* Animated dashed connector line */}
        <svg
          className="hidden lg:block absolute top-[60px] left-0 w-full h-2 pointer-events-none"
          viewBox="0 0 1200 8"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="80"
            y1="4"
            x2="1120"
            y2="4"
            stroke="url(#processLine)"
            strokeWidth="2"
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="processLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="20%" stopColor="#10b981" />
              <stop offset="80%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.15, duration: 0.55 }}
              className="relative"
            >
              <div className="gradient-border h-full bg-card border border-border rounded-2xl p-6 lg:p-7 text-center hover:border-primary/40 transition-all group hover:-translate-y-1">
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <div className="absolute inset-0 bg-primary/40 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-700 flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(16,185,129,0.45)]">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border border-primary/40 text-[11px] font-bold text-primary flex items-center justify-center font-display">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-foreground mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionCard>
  )
}
