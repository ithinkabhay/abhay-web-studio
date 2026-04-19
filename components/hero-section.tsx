"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star, PlayCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const headline = ["We", "Build", "Websites", "That"]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="aurora" />
      <div className="absolute inset-0 bg-grid bg-grid-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      <div className="noise" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-foreground/90">
            Now booking <span className="text-gradient font-semibold">3 spots</span> for 2026
          </span>
          <Sparkles className="w-3.5 h-3.5 text-primary" />
        </motion.div>

        <h1 className="font-display text-[2.5rem] sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-balance mb-6">
          <span className="block">
            {headline.map((w, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="inline-block mr-2 sm:mr-3 lg:mr-5 text-gradient-soft"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="block text-gradient relative"
          >
            Print Money 24/7.
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-primary to-cyan-400 origin-left"
            />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed"
        >
          Premium websites + <span className="text-primary font-semibold">AI agents</span> engineered to bring you{" "}
          <span className="text-foreground font-medium">more bookings</span>,{" "}
          <span className="text-foreground font-medium">more leads</span>, and{" "}
          <span className="text-foreground font-medium">more sales</span> —
          delivered in just <span className="text-primary font-semibold">7 days</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link href="#contact">
            <Button
              size="lg"
              className="relative bg-primary text-primary-foreground hover:bg-primary/90 px-7 py-6 text-base font-semibold rounded-full group glow-primary overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                Get My Website in 7 Days
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
          <Link href="#portfolio">
            <Button
              variant="outline"
              size="lg"
              className="px-7 py-6 text-base rounded-full glass border-border/60 hover:bg-secondary/60 group"
            >
              <PlayCircle className="w-5 h-5 mr-2 text-primary" />
              See Our Work
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center -space-x-3">
            {[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/15.jpg",
              "https://randomuser.me/api/portraits/women/68.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Client"
                className="w-9 h-9 rounded-full border-2 border-background object-cover"
              />
            ))}
            <div className="w-9 h-9 rounded-full border-2 border-background bg-primary text-primary-foreground text-[11px] font-bold flex items-center justify-center">
              100+
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>
              <span className="text-foreground font-semibold">4.9/5</span> from 100+ happy clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
