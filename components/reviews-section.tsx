"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { SectionCard } from "@/components/section-card"

const reviews = [
  {
    name: "Michael Anderson",
    country: "USA",
    flag: "🇺🇸",
    role: "Restaurant Owner",
    review:
      "Bookings up 300% in the first month. The site is gorgeous and works perfectly on mobile. Best money I've ever spent on my business.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anna Schmidt",
    country: "Germany",
    flag: "🇩🇪",
    role: "Photographer",
    review:
      "Professional, fast, ridiculously talented. They got my vision instantly and built a portfolio that has brought me dozens of premium clients.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Reyes",
    country: "Philippines",
    flag: "🇵🇭",
    role: "Salon Owner",
    review:
      "The booking system completely transformed my business. Customers love it and I've saved 20+ hours a week on phone calls.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Priya Sharma",
    country: "India",
    flag: "🇮🇳",
    role: "E-commerce",
    review:
      "Built a stunning store for my jewelry brand. Sales have tripled and customers constantly compliment how beautiful and easy it is to shop.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Wilson",
    country: "UK",
    flag: "🇬🇧",
    role: "Consultant",
    review:
      "Clean, professional, conversion-focused. My personal brand site landed me $50K+ in consulting in 3 months. Couldn't recommend higher.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Sophia Martinez",
    country: "Canada",
    flag: "🇨🇦",
    role: "Fitness Coach",
    review:
      "From kickoff to launch, the experience was incredible. Member sign-ups doubled and my brand finally feels premium. Couldn't be happier.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
]

export function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <SectionCard id="reviews">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <Star className="w-3.5 h-3.5 text-primary fill-primary" />
          <span className="text-xs sm:text-sm text-foreground/90 font-medium">Client love</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 text-balance tracking-tight">
          Don&apos;t take our word — <span className="text-gradient">hear theirs.</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Real reviews from business owners who&apos;ve seen real growth.
        </p>
      </motion.div>

      <div className="relative">
        <div ref={sliderRef} className="keen-slider !overflow-visible">
          {reviews.map((review, index) => (
            <div key={index} className="keen-slider__slide !overflow-visible">
              <div className="gradient-border h-full bg-card border border-border rounded-2xl p-6 lg:p-7 hover:bg-card/80 transition-colors group">
                <div className="flex items-start justify-between mb-5">
                  <Quote className="w-10 h-10 text-primary/30 fill-primary/10" />
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-foreground/90 mb-6 leading-relaxed text-[15px]">
                  &ldquo;{review.review}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="relative w-11 h-11 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/40 transition-all"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/60 rounded-full text-xs">
                    <span>{review.flag}</span>
                    <span className="text-muted-foreground">{review.country}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => instanceRef.current?.prev()}
              aria-label="Previous"
              className="w-11 h-11 rounded-full glass border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {[...Array(reviews.length)].map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => instanceRef.current?.next()}
              aria-label="Next"
              className="w-11 h-11 rounded-full glass border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </SectionCard>
  )
}
