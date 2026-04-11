"use client"

import { Globe, Calendar, Briefcase, ShoppingCart, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Business Website Design",
    description: "Professional websites that establish credibility and convert visitors into loyal customers.",
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized"],
  },
  {
    icon: Calendar,
    title: "Booking & Appointment Systems",
    description: "Automated booking solutions that work 24/7, so you never miss a potential client.",
    features: ["Online Scheduling", "Payment Integration", "Email Reminders"],
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description: "Stunning portfolios that showcase your work and attract high-paying clients.",
    features: ["Gallery Layouts", "Project Showcases", "Contact Forms"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Online stores that make selling easy and keep customers coming back.",
    features: ["Product Catalog", "Secure Checkout", "Inventory Management"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything You Need to Grow Online
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From simple landing pages to complex e-commerce platforms, we build websites that deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
