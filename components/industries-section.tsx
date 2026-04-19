"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  UtensilsCrossed,
  Flower2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Building2,
  GraduationCap,
  Dumbbell,
  Car,
  Plane,
  Camera,
  Factory,
  Building,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { SectionCard } from "@/components/section-card"
import Link from "next/link"

const industries = [
  {
    icon: UtensilsCrossed,
    name: "Food & Beverage",
    accent: "from-orange-400/20 to-amber-400/10",
    items: [
      "Restaurant",
      "Cafe",
      "Bakery",
      "Cloud Kitchen",
      "Tiffin Service",
      "Catering Service",
      "Food Truck",
      "Juice Bar",
    ],
  },
  {
    icon: Flower2,
    name: "Events & Decor",
    accent: "from-pink-400/20 to-rose-400/10",
    items: [
      "Florist",
      "Bouquet Shop",
      "Wedding Decorator",
      "Event Planner",
      "Birthday Decoration",
    ],
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    accent: "from-emerald-400/20 to-cyan-400/10",
    items: [
      "Doctor Clinic",
      "Dentist",
      "Physiotherapist",
      "Diagnostic Lab",
      "Hospital",
      "Ayurvedic Clinic",
    ],
  },
  {
    icon: ShoppingBag,
    name: "Retail & Shops",
    accent: "from-blue-400/20 to-indigo-400/10",
    items: [
      "Clothing Store",
      "Mobile Shop",
      "Electronics Shop",
      "Grocery Store",
      "Furniture Shop",
      "Gift Shop",
    ],
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    accent: "from-purple-400/20 to-fuchsia-400/10",
    items: [
      "Lawyer",
      "Chartered Accountant",
      "Consultant",
      "Freelancer",
      "Digital Marketing Agency",
    ],
  },
  {
    icon: Building2,
    name: "Real Estate",
    accent: "from-amber-400/20 to-yellow-400/10",
    items: ["Property Dealer", "Builder", "Real Estate Agent", "Rental Service"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    accent: "from-cyan-400/20 to-sky-400/10",
    items: [
      "Coaching Institute",
      "Tuition Class",
      "School",
      "Online Educator",
      "Training Center",
    ],
  },
  {
    icon: Dumbbell,
    name: "Beauty & Wellness",
    accent: "from-fuchsia-400/20 to-pink-400/10",
    items: ["Salon", "Gym", "Makeup Artist", "Personal Trainer", "Spa"],
  },
  {
    icon: Car,
    name: "Automotive & Logistics",
    accent: "from-slate-400/20 to-zinc-400/10",
    items: [
      "Car Repair",
      "Bike Repair",
      "Car Rental",
      "Logistics Company",
      "Transport Service",
    ],
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    accent: "from-teal-400/20 to-emerald-400/10",
    items: ["Hotel", "Travel Agency", "Tour Operator", "Resort"],
  },
  {
    icon: Camera,
    name: "Creative & Media",
    accent: "from-violet-400/20 to-purple-400/10",
    items: ["Photographer", "Videographer", "Graphic Designer", "Creative Agency"],
  },
  {
    icon: Factory,
    name: "Trade & Manufacturing",
    accent: "from-stone-400/20 to-neutral-400/10",
    items: ["Manufacturer", "Supplier", "Wholesaler", "Exporter"],
  },
]

const totalBusinesses = industries.reduce((acc, i) => acc + i.items.length, 0)

export function IndustriesSection() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [activePage, setActivePage] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const isDownRef = useRef(false)
  const startXRef = useRef(0)
  const startScrollRef = useRef(0)
  const draggedRef = useRef(false)

  // Track scroll position → update arrows + active dot
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const update = () => {
      const max = el.scrollWidth - el.clientWidth
      setCanScrollLeft(el.scrollLeft > 4)
      setCanScrollRight(el.scrollLeft < max - 4)

      const cardWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 20
        : el.clientWidth
      const pages = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth))
      setPageCount(pages)
      const idx = Math.round(el.scrollLeft / el.clientWidth)
      setActivePage(Math.min(pages - 1, Math.max(0, idx)))
      void cardWidth
    }

    update()
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 20
      : 320
    el.scrollBy({ left: dir * cardWidth * 1.2, behavior: "smooth" })
  }

  const scrollToPage = (page: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" })
  }

  // Mouse drag-to-scroll for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollerRef.current
    if (!el) return
    isDownRef.current = true
    draggedRef.current = false
    startXRef.current = e.pageX - el.offsetLeft
    startScrollRef.current = el.scrollLeft
    el.classList.add("cursor-grabbing")
  }
  const onMouseUp = () => {
    isDownRef.current = false
    scrollerRef.current?.classList.remove("cursor-grabbing")
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current) return
    const el = scrollerRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = x - startXRef.current
    if (Math.abs(walk) > 5) draggedRef.current = true
    el.scrollLeft = startScrollRef.current - walk
  }

  return (
    <SectionCard id="industries">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <Building className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs sm:text-sm text-foreground/90 font-medium">
            Industries we serve
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 text-balance tracking-tight">
          Built for <span className="text-gradient">{totalBusinesses}+ business types.</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          From restaurants and clinics to factories and freelancers — if it&apos;s a business, we build the website that grows it.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative -mx-4 sm:-mx-8 lg:-mx-14">
        {/* Desktop arrows */}
        <button
          onClick={() => scrollByCards(-1)}
          aria-label="Scroll left"
          className={`hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass-strong border border-border items-center justify-center hover:border-primary/40 hover:text-primary transition-all ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollByCards(1)}
          aria-label="Scroll right"
          className={`hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass-strong border border-border items-center justify-center hover:border-primary/40 hover:text-primary transition-all ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-card to-transparent z-10" />

        <div
          ref={scrollerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseUp}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="no-scrollbar flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-8 lg:px-14 py-2 cursor-grab select-none"
          style={{ scrollbarWidth: "none" }}
        >
          {industries.map((industry, index) => {
            const isOpen = expanded === index
            const visibleItems = isOpen ? industry.items : industry.items.slice(0, 4)
            const hidden = industry.items.length - 4

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index % 6) * 0.05, duration: 0.5 }}
                className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[32%] xl:w-[28%] gradient-border relative bg-card border border-border rounded-2xl p-5 lg:p-6 overflow-hidden group hover:border-primary/40 transition-all"
              >
                <div
                  className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${industry.accent} blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-primary/10 ring-1 ring-primary/30 rounded-xl flex items-center justify-center">
                        <industry.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-display font-bold text-foreground tracking-tight">
                          {industry.name}
                        </h3>
                        <p className="text-[11px] text-muted-foreground font-medium">
                          {industry.items.length} business types
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    <AnimatePresence initial={false}>
                      {visibleItems.map((item) => (
                        <motion.span
                          key={item}
                          layout
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.18 }}
                          className="px-2.5 py-1 bg-secondary/70 text-foreground/80 text-[11px] font-medium rounded-full border border-border"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </AnimatePresence>

                    {hidden > 0 && (
                      <button
                        onClick={(e) => {
                          if (draggedRef.current) {
                            e.preventDefault()
                            return
                          }
                          setExpanded(isOpen ? null : index)
                        }}
                        className="px-2.5 py-1 bg-primary/10 text-primary text-[11px] font-semibold rounded-full border border-primary/30 hover:bg-primary/20 transition-colors"
                      >
                        {isOpen ? "− show less" : `+${hidden} more`}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-6 flex items-center justify-center gap-1.5">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPage(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === activePage
                ? "w-6 bg-primary"
                : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
            }`}
          />
        ))}
      </div>

      {/* Swipe hint (mobile) */}
      <div className="mt-3 lg:hidden flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
        <ChevronLeft className="w-3 h-3" />
        <span>swipe to explore</span>
        <ChevronRight className="w-3 h-3" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-muted-foreground mb-2">
          Don&apos;t see your business? We&apos;ve probably built something similar.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
        >
          Tell us about your business
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>
    </SectionCard>
  )
}
