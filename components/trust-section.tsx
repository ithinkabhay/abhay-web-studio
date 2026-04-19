"use client"

import { Star, Users, Globe, Award } from "lucide-react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { SectionCard } from "@/components/section-card"

const stats = [
  { icon: Users, value: 100, suffix: "+", label: "Happy Clients" },
  { icon: Star, value: 4.9, decimals: 1, suffix: "★", label: "Average Rating" },
  { icon: Globe, value: 15, suffix: "+", label: "Countries Served" },
  { icon: Award, value: 200, suffix: "+", label: "Projects Shipped" },
]

const countries = [
  { name: "USA", flag: "🇺🇸" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "India", flag: "🇮🇳" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "France", flag: "🇫🇷" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "UAE", flag: "🇦🇪" },
]

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => v.toFixed(decimals))

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, to, { duration: 1.6, ease: [0.21, 0.47, 0.32, 0.98] })
    return controls.stop
  }, [inView, to, mv])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function TrustSection() {
  return (
    <SectionCard>
      <div className="text-center mb-10">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em]">
          Trusted by 100+ businesses worldwide
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="gradient-border relative bg-card/60 backdrop-blur border border-border rounded-2xl p-5 lg:p-6 text-center group hover:bg-card transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 ring-1 ring-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">
              <Counter to={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix} />
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="relative">
        <p className="text-center text-xs text-muted-foreground mb-4 uppercase tracking-[0.2em]">
          Global Clients
        </p>
        <div className="marquee py-2">
          <div className="marquee-track">
            {[...countries, ...countries].map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-full whitespace-nowrap"
              >
                <span className="text-xl">{country.flag}</span>
                <span className="text-sm text-foreground/90 font-medium">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  )
}
