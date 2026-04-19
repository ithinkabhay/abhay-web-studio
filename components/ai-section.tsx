"use client"

import { motion } from "framer-motion"
import {
  Bot,
  MessageCircle,
  Workflow,
  Phone,
  Brain,
  Mail,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { SectionCard } from "@/components/section-card"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp AI Chatbot",
    description:
      "A 24/7 sales rep on WhatsApp that answers FAQs, takes bookings, qualifies leads, and never sleeps.",
    accent: "from-emerald-400/20 to-green-400/10",
    span: "lg:col-span-2",
  },
  {
    icon: Phone,
    title: "AI Voice Agent",
    description:
      "Picks up missed calls, books appointments, and forwards qualified leads — in your customer's language.",
    accent: "from-cyan-400/20 to-blue-400/10",
    span: "",
  },
  {
    icon: Brain,
    title: "Custom AI Agents",
    description:
      "Tailor-made AI assistants trained on YOUR business data — menu, services, pricing, hours, FAQs.",
    accent: "from-purple-400/20 to-fuchsia-400/10",
    span: "",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect your tools (WhatsApp, Sheets, Gmail, Calendar, CRM) into one seamless flow with n8n & Zapier.",
    accent: "from-orange-400/20 to-amber-400/10",
    span: "lg:col-span-2",
  },
  {
    icon: Mail,
    title: "AI Email & Outreach",
    description:
      "Auto-write follow-ups, quotations, and onboarding emails personalized for each lead.",
    accent: "from-pink-400/20 to-rose-400/10",
    span: "",
  },
  {
    icon: Bot,
    title: "Lead Qualification AI",
    description:
      "Score, sort, and route leads to the right person automatically — so you only call hot prospects.",
    accent: "from-violet-400/20 to-indigo-400/10",
    span: "",
  },
]

const stats = [
  { v: "24/7", l: "Always on" },
  { v: "10×", l: "Faster response" },
  { v: "70%", l: "Tasks automated" },
  { v: "₹0", l: "Per extra lead" },
]

export function AiSection() {
  return (
    <SectionCard id="ai">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs sm:text-sm text-foreground/90 font-medium">
            AI Automation & Agents
          </span>
          <span className="ml-1 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/15 text-primary border border-primary/30">
            New
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 text-balance tracking-tight">
          Your business, <span className="text-gradient">on autopilot.</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          We don&apos;t just build websites — we plug in AI agents and automation that work 24/7 so you can sleep, scale, and stop drowning in repetitive tasks.
        </p>
      </motion.div>

      {/* Bento grid of AI features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-10">
        {features.map((f, index) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.07, duration: 0.55 }}
            className={`gradient-border relative bg-card border border-border rounded-2xl p-5 lg:p-6 overflow-hidden group hover:border-primary/40 transition-all hover:-translate-y-1 ${f.span}`}
          >
            <div
              className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${f.accent} blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-500`}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative w-11 h-11 bg-primary/10 ring-1 ring-primary/30 rounded-xl flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-semibold text-emerald-400">LIVE</span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats strip + CTA */}
      <div className="grid lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-card/60 border border-border rounded-2xl p-4 text-center backdrop-blur"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1">
                {s.v}
              </div>
              <div className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-5 lg:p-6 flex flex-col justify-between"
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Add-on
              </span>
            </div>
            <h3 className="text-lg lg:text-xl font-display font-bold text-foreground mb-1 tracking-tight">
              Add AI to your website
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              Pair any plan with our AI add-on and let your business sell while you sleep.
            </p>
          </div>
          <Link href="#contact" className="relative">
            <Button className="w-full h-11 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group glow-primary">
              Talk to us about AI
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </SectionCard>
  )
}
