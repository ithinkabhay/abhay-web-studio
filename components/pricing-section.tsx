"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Check,
  Sparkles,
  Tag,
  ArrowRight,
  Globe,
  Bot,
  Crown,
  MessageSquare,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { SectionCard } from "@/components/section-card"

type Currency = "INR" | "USD"
type PlanType = "websites" | "ai"

type Plan = {
  name: string
  tagline: string
  description: string
  price: { INR: string; USD: string }
  period: string
  features: string[]
  cta: string
  popular: boolean
}

const websitePlans: Plan[] = [
  {
    name: "Starter",
    tagline: "Get online — fast.",
    description: "Perfect for small businesses just getting started online.",
    price: { INR: "₹15,999", USD: "$199" },
    period: "one-time",
    features: [
      "5-page custom website",
      "Mobile-first responsive design",
      "Contact form & WhatsApp integration",
      "Basic on-page SEO setup",
      "Social media links",
      "1 month free support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    tagline: "The studio favorite.",
    description: "Ideal for businesses ready to scale, book and convert at full speed.",
    price: { INR: "₹39,999", USD: "$499" },
    period: "one-time",
    features: [
      "10-page custom website",
      "Premium animated design",
      "Booking / appointment system",
      "Advanced SEO + Google Analytics",
      "Speed & Core Web Vitals optimization",
      "Lead-capture funnels",
      "3 months free support",
      "Free content updates",
    ],
    cta: "Get Growth Plan",
    popular: true,
  },
  {
    name: "Premium",
    tagline: "All-in, no limits.",
    description: "For brands that want a flagship online presence — and the results to match.",
    price: { INR: "₹89,999", USD: "$1,099" },
    period: "one-time",
    features: [
      "Unlimited pages",
      "E-commerce / payment gateway",
      "Custom illustrations & animations",
      "Conversion-rate optimization",
      "Priority WhatsApp support",
      "Monthly performance report",
      "6 months free support",
      "Dedicated project manager",
    ],
    cta: "Go Premium",
    popular: false,
  },
]

const aiPlans: Plan[] = [
  {
    name: "AI Starter",
    tagline: "Your first AI assistant.",
    description: "Stop missing leads after hours. Let AI handle the basics on autopilot.",
    price: { INR: "₹9,999", USD: "$129" },
    period: "setup",
    features: [
      "WhatsApp AI Chatbot",
      "Trained on your FAQs, hours & services",
      "Up to 500 conversations / month",
      "Basic Google Sheets / CRM logging",
      "1 quick-action button (call / book)",
      "1 month of support & tweaks",
    ],
    cta: "Start with AI",
    popular: false,
  },
  {
    name: "AI Growth",
    tagline: "Sell while you sleep.",
    description: "Multi-channel AI that qualifies leads, books appointments and follows up — 24/7.",
    price: { INR: "₹29,999", USD: "$379" },
    period: "setup",
    features: [
      "Everything in AI Starter",
      "WhatsApp + Website chatbot",
      "Lead qualification & routing",
      "Calendar / booking automation",
      "Up to 3,000 conversations / month",
      "AI email & quote auto-responder",
      "3 months of support",
    ],
    cta: "Get AI Growth",
    popular: true,
  },
  {
    name: "AI Pro",
    tagline: "Full business autopilot.",
    description: "Voice + chat + email + workflows, all stitched into one AI command center for your business.",
    price: { INR: "₹69,999", USD: "$899" },
    period: "setup",
    features: [
      "Everything in AI Growth",
      "AI Voice Agent (inbound + outbound calls)",
      "Custom AI agents trained on your data",
      "5 n8n / Zapier workflow automations",
      "CRM + WhatsApp + Voice + Email unified",
      "Unlimited conversations",
      "6 months support + dedicated manager",
    ],
    cta: "Go AI Pro",
    popular: false,
  },
]

export function PricingSection() {
  const [currency, setCurrency] = useState<Currency>("INR")
  const [planType, setPlanType] = useState<PlanType>("websites")

  const plans = planType === "websites" ? websitePlans : aiPlans

  return (
    <SectionCard id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <Tag className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs sm:text-sm text-foreground/90 font-medium">Pricing</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 text-balance tracking-tight">
          Simple pricing. <span className="text-gradient">Massive ROI.</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Transparent, all-inclusive packages. No hidden fees. No surprises. Pay once, own it forever.
        </p>

        {/* Plan-type tabs */}
        <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-full glass-strong border border-border">
          {(
            [
              { id: "websites" as PlanType, label: "Websites", icon: Globe },
              { id: "ai" as PlanType, label: "AI Automation", icon: Bot },
            ]
          ).map((t) => {
            const active = planType === t.id
            return (
              <button
                key={t.id}
                onClick={() => setPlanType(t.id)}
                className="relative px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="plan-type-pill"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                )}
                <span
                  className={`relative inline-flex items-center gap-1.5 ${
                    active ? "text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  <t.icon className="w-3.5 h-3.5" />
                  {t.label}
                  {t.id === "ai" && (
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ml-0.5 ${
                        active
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-primary/15 text-primary border border-primary/30"
                      }`}
                    >
                      New
                    </span>
                  )}
                </span>
              </button>
            )
          })}
        </div>

        {/* Currency toggle */}
        <div className="mt-4 inline-flex items-center gap-1 p-1 rounded-full glass-strong border border-border ml-0 sm:ml-3">
          {(["INR", "USD"] as Currency[]).map((c) => {
            const active = currency === c
            return (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className="relative px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="currency-pill"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                )}
                <span
                  className={`relative inline-flex items-center gap-1.5 ${
                    active ? "text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  <span className="text-base leading-none">{c === "INR" ? "₹" : "$"}</span>
                  {c === "INR" ? "Rupees (INR)" : "Dollars (USD)"}
                </span>
              </button>
            )
          })}
        </div>
      </motion.div>

      {/* Helper note */}
      <AnimatePresence mode="wait">
        <motion.p
          key={planType}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="text-center text-xs sm:text-sm text-muted-foreground mb-8 -mt-2"
        >
          {planType === "websites" ? (
            <>One-time build cost. Hosting & domain are separate (~₹2k–₹6k / year).</>
          ) : (
            <>One-time setup cost. AI usage / API costs billed at-cost separately.</>
          )}
        </motion.p>
      </AnimatePresence>

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 lg:items-stretch">
        <AnimatePresence mode="wait">
          {plans.map((plan, index) => (
            <motion.div
              key={planType + plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className={`relative ${plan.popular ? "lg:-mt-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider shadow-[0_8px_24px_-6px_rgba(16,185,129,0.6)]">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`gradient-border relative h-full overflow-hidden rounded-2xl border p-6 lg:p-7 transition-all hover:-translate-y-1 ${
                  plan.popular
                    ? "bg-card border-primary/40 shadow-[0_25px_70px_-20px_rgba(16,185,129,0.35)]"
                    : "bg-card border-border hover:border-primary/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
                )}

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground tracking-tight">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-primary mt-1 font-medium">{plan.tagline}</p>
                    </div>
                    {planType === "ai" && (
                      <div className="w-9 h-9 rounded-xl bg-primary/10 ring-1 ring-primary/30 flex items-center justify-center shrink-0">
                        <Bot className="w-4.5 h-4.5 text-primary" />
                      </div>
                    )}
                  </div>

                  <div className="mb-2 flex items-baseline gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currency + planType + plan.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="text-4xl lg:text-5xl font-display font-bold text-foreground tabular-nums"
                      >
                        {plan.price[currency]}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-sm text-muted-foreground">/ {plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <Link href="#contact" className="block mb-7">
                    <Button
                      className={`w-full h-11 rounded-xl font-semibold group ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                          : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>

                  <div className="border-t border-border pt-5">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-4 font-semibold">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              plan.popular
                                ? "bg-primary/20 ring-1 ring-primary/40"
                                : "bg-primary/10 ring-1 ring-primary/20"
                            }`}
                          >
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground/90 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Custom / Enterprise card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 gradient-border relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-secondary/30 to-card p-6 sm:p-8 lg:p-10"
      >
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30 pointer-events-none" />

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Headline + price + CTAs */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-0.5 rounded-full bg-foreground/10 border border-border">
              <Crown className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/80">
                Custom · Enterprise
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
              Need something <span className="text-gradient">bigger?</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">
              Multi-location chains, SaaS products, marketplaces, deep integrations, or a 360°
              website + AI rollout — built around your exact business.
            </p>

            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient">
                Let&apos;s talk
              </span>
              <span className="text-sm text-muted-foreground">/ scoped to you</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#contact" className="flex-1">
                <Button className="w-full h-11 px-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group glow-primary">
                  Book Free Strategy Call
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
              <Link
                href="https://wa.me/+919770670564"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="w-full h-11 px-6 rounded-xl glass border-border/60 hover:bg-secondary/60 font-semibold"
                >
                  <MessageSquare className="w-4 h-4 mr-1.5 text-emerald-400" />
                  WhatsApp Us
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Reply within ~2 hours · NDA on request · No obligation
            </p>
          </div>

          {/* Right: Inclusion grid */}
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-4 font-semibold">
              Built for businesses that need more
            </p>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-3">
              {[
                "Multi-location / multi-branch sites",
                "Multi-language (EN / HI / regional)",
                "SaaS products & web apps",
                "Marketplaces & vendor portals",
                "Custom CRM / ERP integrations",
                "Payment gateways (Razorpay / Stripe)",
                "Custom AI agents on your data",
                "Voice + WhatsApp + Email orchestration",
                "Advanced analytics & dashboards",
                "Migration from legacy platforms",
                "Dedicated team & weekly sprints",
                "SLA + priority support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary/10 ring-1 ring-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="mt-6 pt-5 border-t border-border grid grid-cols-3 gap-3 text-center">
              {[
                { v: "100+", l: "Projects" },
                { v: "15+", l: "Countries" },
                { v: "4.9★", l: "Avg rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-base sm:text-lg font-display font-bold text-gradient">
                    {s.v}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-wider">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Combo bundle CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
      >
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="relative text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 mb-2 px-2.5 py-0.5 rounded-full bg-primary/15 border border-primary/30">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
              Bundle & Save 15%
            </span>
          </div>
          <h3 className="font-display text-lg sm:text-2xl font-bold text-foreground tracking-tight">
            Website + AI together?{" "}
            <span className="text-gradient">Save 15%.</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Pair any website plan with any AI plan and we knock 15% off the total.
          </p>
        </div>
        <Link href="#contact" className="relative w-full sm:w-auto">
          <Button className="w-full sm:w-auto h-11 px-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group glow-primary">
            Claim Bundle Discount
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </motion.div>

    </SectionCard>
  )
}
