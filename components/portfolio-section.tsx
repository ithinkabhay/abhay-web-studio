"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Layers } from "lucide-react"

const projects = [
  {
    title: "Lumière Photography",
    category: "Photography Studio",
    description: "Booking inquiries increased by 250% with this elegant portfolio website.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
  },
  {
    title: "Bella Cucina Restaurant",
    category: "Restaurant Website",
    description: "Online reservations grew by 400% with integrated booking system.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    title: "Glow Beauty Salon",
    category: "Salon Booking Website",
    description: "Automated appointments saved 20+ hours per week for the owner.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
  },
  {
    title: "Marcus Cole Personal Brand",
    category: "Personal Brand Website",
    description: "Established authority and landed $50K+ in consulting contracts.",
    image: "prsonal.jpg",
  },
  {
    title: "Artisan Jewelry Co",
    category: "E-commerce Store",
    description: "Monthly sales increased 5x within 3 months of launch.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
  },
  {
    title: "FitLife Gym",
    category: "Fitness Website",
    description: "Member sign-ups doubled with new online registration system.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Projects That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we&apos;ve helped businesses like yours grow with stunning, high-converting websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" className="w-full bg-primary text-primary-foreground">
                    View Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
