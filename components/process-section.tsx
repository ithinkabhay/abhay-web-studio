"use client"

import { MessageSquare, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Tell Us Your Idea",
    description: "Share your vision, goals, and requirements. We&apos;ll listen carefully and ask the right questions.",
  },
  {
    icon: Palette,
    step: "02",
    title: "We Design Your Website",
    description: "Our designers create stunning mockups tailored to your brand and business objectives.",
  },
  {
    icon: Code,
    step: "03",
    title: "We Build & Optimize",
    description: "We develop your website with clean code, fast loading times, and SEO best practices.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "You Start Getting Clients",
    description: "Launch your website and watch as it starts converting visitors into loyal customers.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple Steps to Your New Website
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve streamlined our process to make getting your dream website as easy as possible.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
