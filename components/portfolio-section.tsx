"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { SectionCard } from "@/components/section-card"

const projects = [
  {
    title: "Lumière Photography",
    category: "Photography Studio",
    description: "Booking inquiries up 250% with this elegant portfolio website.",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=900&h=620&fit=crop",
    metric: "+250%",
    metricLabel: "Bookings",
  },
  {
    title: "Bella Cucina Restaurant",
    category: "Restaurant Website",
    description: "Online reservations grew by 400% with integrated booking.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=620&fit=crop",
    metric: "+400%",
    metricLabel: "Reservations",
  },
  {
    title: "Glow Beauty Salon",
    category: "Salon Booking",
    description: "Automated appointments saved 20+ hours per week.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&h=620&fit=crop",
    metric: "20h/wk",
    metricLabel: "Saved",
  },
  {
    title: "Marcus Cole",
    category: "Personal Brand",
    description: "Landed $50K+ in consulting contracts in 90 days.",
    image: "/prsonal.jpg",
    metric: "$50K+",
    metricLabel: "Contracts",
  },
  {
    title: "Artisan Jewelry Co",
    category: "E-commerce Store",
    description: "Monthly sales increased 5× within 3 months of launch.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=620&fit=crop",
    metric: "5×",
    metricLabel: "Sales",
  },
  {
    title: "FitLife Gym",
    category: "Fitness Website",
    description: "Member sign-ups doubled with new online registration.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=620&fit=crop",
    metric: "2×",
    metricLabel: "Members",
  },
  {
    title: "Crust & Crumb",
    category: "Bakery",
    description: "Custom cake orders booked entirely online — 90% time saved.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&h=620&fit=crop",
    metric: "90%",
    metricLabel: "Time Saved",
  },
  {
    title: "Smile Dental Clinic",
    category: "Dentist Website",
    description: "New patient registrations up 320% with online booking.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&h=620&fit=crop",
    metric: "+320%",
    metricLabel: "New Patients",
  },
  {
    title: "Vista Realty",
    category: "Real Estate",
    description: "Lead generation tripled with property search & filters.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=620&fit=crop",
    metric: "3×",
    metricLabel: "Leads",
  },
  {
    title: "Brewly Cafe",
    category: "Cafe Website",
    description: "Loyalty program drove 60% repeat visits in 2 months.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&h=620&fit=crop",
    metric: "60%",
    metricLabel: "Repeat Visits",
  },
  {
    title: "Bloom Florist",
    category: "Florist & Bouquet Shop",
    description: "Same-day delivery orders crossed 100/day in week 3.",
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=900&h=620&fit=crop",
    metric: "100/day",
    metricLabel: "Orders",
  },
  {
    title: "Vroom Auto Repair",
    category: "Car Service",
    description: "Garage bookings filled 2 weeks in advance — every week.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&h=620&fit=crop",
    metric: "2 wks",
    metricLabel: "Booked Out",
  },
  {
    title: "NovaCare Clinic",
    category: "Doctor Clinic",
    description: "Appointments via WhatsApp + website — 70% less calls.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=620&fit=crop",
    metric: "−70%",
    metricLabel: "Phone Calls",
  },
  {
    title: "Apex Coaching",
    category: "Coaching Institute",
    description: "Student enrolment doubled in a single batch cycle.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&h=620&fit=crop",
    metric: "2×",
    metricLabel: "Enrolments",
  },
  {
    title: "Spice Cloud Kitchen",
    category: "Cloud Kitchen",
    description: "Direct orders bypass aggregator fees — saved ₹1.2L/month.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=620&fit=crop",
    metric: "₹1.2L",
    metricLabel: "Saved/mo",
  },
  {
    title: "Wanderly Travel",
    category: "Travel Agency",
    description: "Custom tour quote requests up 450% in season 1.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&h=620&fit=crop",
    metric: "+450%",
    metricLabel: "Inquiries",
  },
  {
    title: "Royal Decorators",
    category: "Wedding Decorator",
    description: "Booked 12 weddings in 30 days from a single landing page.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&h=620&fit=crop",
    metric: "12 in 30d",
    metricLabel: "Weddings",
  },
  {
    title: "Threadly Boutique",
    category: "Clothing Store",
    description: "Instagram → website conversions jumped 6× post-launch.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&h=620&fit=crop",
    metric: "6×",
    metricLabel: "IG Conversions",
  },
  {
    title: "Mindful Spa",
    category: "Spa & Wellness",
    description: "Premium packages sold out in 48 hours of launch.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&h=620&fit=crop",
    metric: "48h",
    metricLabel: "Sold Out",
  },
  {
    title: "Rapid Logistics",
    category: "Logistics Company",
    description: "B2B inquiry forms generated 80+ qualified leads/month.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&h=620&fit=crop",
    metric: "80+/mo",
    metricLabel: "B2B Leads",
  },
  {
    title: "Aura Makeup Studio",
    category: "Makeup Artist",
    description: "Bridal package bookings doubled during peak season.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&h=620&fit=crop",
    metric: "2×",
    metricLabel: "Bridal",
  },
  {
    title: "Apex Manufacturing",
    category: "Manufacturer",
    description: "Wholesale catalogue + RFQ form attracted exporters globally.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=620&fit=crop",
    metric: "12+",
    metricLabel: "Countries",
  },
  {
    title: "EduSpark Tutor",
    category: "Online Educator",
    description: "Course launch hit ₹4.5L in revenue in week one.",
    image:
      "https://images.unsplash.com/photo-1610484826917-0f101a7c1d3a?w=900&h=620&fit=crop",
    metric: "₹4.5L",
    metricLabel: "Week 1",
  },
  {
    title: "Lensman Films",
    category: "Videographer",
    description: "Wedding film bookings up 280% within first quarter.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&h=620&fit=crop",
    metric: "+280%",
    metricLabel: "Bookings",
  },
]

export function PortfolioSection() {
  const [activePage, setActivePage] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const isDownRef = useRef(false)
  const startXRef = useRef(0)
  const startScrollRef = useRef(0)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const update = () => {
      const max = el.scrollWidth - el.clientWidth
      setCanScrollLeft(el.scrollLeft > 4)
      setCanScrollRight(el.scrollLeft < max - 4)
      const pages = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth))
      setPageCount(pages)
      const idx = Math.round(el.scrollLeft / el.clientWidth)
      setActivePage(Math.min(pages - 1, Math.max(0, idx)))
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
      : 360
    el.scrollBy({ left: dir * cardWidth * 1.5, behavior: "smooth" })
  }

  const scrollToPage = (page: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" })
  }

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollerRef.current
    if (!el) return
    isDownRef.current = true
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
    el.scrollLeft = startScrollRef.current - (x - startXRef.current)
  }

  return (
    <SectionCard id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <Layers className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs sm:text-sm text-foreground/90 font-medium">
            Featured work · {projects.length}+ projects
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 text-balance tracking-tight">
          Real businesses. <span className="text-gradient">Real results.</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          We don&apos;t just ship websites — we ship growth. Swipe through {projects.length}+ wins below.
        </p>
      </motion.div>

      <div className="relative -mx-4 sm:-mx-8 lg:-mx-14">
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 6) * 0.05, duration: 0.55 }}
              className="snap-start shrink-0 w-[80%] sm:w-[48%] lg:w-[32%] xl:w-[28%] aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/40 transition-all hover:shadow-[0_25px_60px_-20px_rgba(16,185,129,0.32)]"
            >
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-cyan-500/0 group-hover:from-primary/10 group-hover:to-cyan-500/10 transition-colors duration-500" />
              </div>

              <div className="absolute top-4 right-4 glass rounded-xl px-3 py-2 text-right">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  {project.metricLabel}
                </div>
                <div className="text-base font-bold text-gradient">{project.metric}</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <span className="inline-block text-[10px] font-semibold text-primary uppercase tracking-[0.15em] mb-2 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  {project.category}
                </span>
                <h3 className="text-lg lg:text-xl font-display font-bold text-foreground mb-1.5 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 max-h-10 sm:max-h-0 sm:opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500">
                  {project.description}
                </p>
              </div>

              <div className="absolute top-4 left-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
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

      <div className="mt-3 lg:hidden flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
        <ChevronLeft className="w-3 h-3" />
        <span>swipe to see more wins</span>
        <ChevronRight className="w-3 h-3" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 text-center"
      >
        <Link href="#contact">
          <Button
            size="lg"
            className="rounded-full px-7 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold glow-primary group"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Be Our Next Success Story
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </SectionCard>
  )
}
