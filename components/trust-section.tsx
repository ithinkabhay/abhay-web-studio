"use client"

import { Star, Users, Globe, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Average Rating",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Served",
  },
  {
    icon: Award,
    value: "200+",
    label: "Projects Completed",
  },
]

const countries = [
  { name: "USA", flag: "🇺🇸" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "India", flag: "🇮🇳" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
]

export function TrustSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-4">
            Trusted by Businesses Worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-muted-foreground text-sm mr-2">Global Clients:</span>
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full"
            >
              <span className="text-lg">{country.flag}</span>
              <span className="text-sm text-foreground font-medium">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
