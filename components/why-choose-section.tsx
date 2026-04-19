"use client"

import { Users, TrendingUp, Award, Zap, CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { SectionCard } from "@/components/section-card"

const reasons = [
  {
    icon: TrendingUp,
    title: "Get More Customers",
    description: "Conversion-first design that turns curious visitors into paying customers — every single day.",
  },
  {
    icon: Users,
    title: "Increase Bookings 24/7",
    description: "Smart booking systems that fill your calendar even while you sleep. No more chasing.",
  },
  {
    icon: Award,
    title: "Premium Brand Look",
    description: "Polished, magazine-quality design that makes your business look 10× more established.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Live in 7 days, not 7 months. We respect your time, your money, and your momentum.",
  },
]

const checks = [
  "Conversion-focused design",
  "Mobile-first approach",
  "SEO best practices baked in",
  "Lightning-fast performance",
  "30 days of free support",
  "Unlimited revisions",
]

export function WhyChooseSection() {
  return (
    <SectionCard>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs sm:text-sm text-foreground/90 font-medium">Why choose us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Built for <span className="text-gradient">results</span>, not just looks.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            Pretty websites are easy. Profitable websites are an art. We build the second kind — every time.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {checks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/40 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-sm text-foreground/90">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            And so much more — let&apos;s build something amazing together.
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`gradient-border bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1 group ${
                index % 2 === 1 ? "sm:translate-y-8" : ""
              }`}
            >
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative w-12 h-12 bg-primary/10 ring-1 ring-primary/30 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2 tracking-tight">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionCard>
  )
}
