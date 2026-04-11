"use client"

import { Users, TrendingUp, Award, Zap, CheckCircle2 } from "lucide-react"

const reasons = [
  {
    icon: TrendingUp,
    title: "Get More Customers",
    description: "Our websites are designed with one goal: converting visitors into paying customers.",
  },
  {
    icon: Users,
    title: "Increase Bookings",
    description: "Integrated booking systems that work 24/7, automatically filling your calendar.",
  },
  {
    icon: Award,
    title: "Premium Design That Builds Trust",
    description: "Professional designs that make your business look established and trustworthy.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your website live in weeks, not months. We respect your time and urgency.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Built for Results, Not Just Looks
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don&apos;t just make pretty websites. We build strategic digital assets that work hard for your business every single day.
            </p>

            <div className="space-y-4">
              {["Conversion-focused design", "Mobile-first approach", "SEO best practices", "Ongoing support included"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
