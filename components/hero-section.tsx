"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Premium Website's By Abhay Web Studio</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-6">
          We Build Websites That
          <span className="block text-primary">Turn Visitors Into Customers</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Helping businesses get more bookings, more leads, and more sales with high-converting websites that look stunning and perform even better.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
          >
            Get Your Website Now
            {/* <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
          </Button>
          {/* <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg border-border hover:bg-secondary"
          >
            See Demo
          </Button> */}
        </div>

        {/* Floating Elements */}
        {/* <div className="mt-16 relative">
          <div className="absolute -top-8 left-1/4 w-20 h-20 bg-card border border-border rounded-2xl shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
            <span className="text-3xl">🚀</span>
          </div>
          <div className="absolute -top-4 right-1/4 w-16 h-16 bg-card border border-border rounded-2xl shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
            <span className="text-2xl">💼</span>
          </div>
        </div> */}

        {/* Browser Mockup */}
        {/* <div className="mt-8 mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-lg px-4 py-1.5 text-sm text-muted-foreground text-center">
                  yourbusiness.com
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-primary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">Your stunning website preview</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
