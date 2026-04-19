"use client"

import Link from "next/link"
import { Twitter, Instagram, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Business Websites", href: "#services" },
    { label: "Booking Systems", href: "#services" },
    { label: "AI Automation", href: "#ai" },
    { label: "AI Agents", href: "#ai" },
    { label: "E-commerce Stores", href: "#services" },
  ],
  company: [
    { label: "Industries", href: "#industries" },
    { label: "Our Work", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "/info#faq" },
    { label: "Blog", href: "/info#blog" },
    { label: "Support", href: "/info#support" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "https://x.com/ithinkabhay", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/ithinkabhay", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abhaysinghp01", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@abhaywebstudio.in", label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.08] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* CTA Banner */}
        <div className="relative gradient-border rounded-3xl bg-gradient-to-br from-card via-secondary/40 to-card border border-border p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/15 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-center lg:text-left">
            <div>
              <h3 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 tracking-tight">
                Stop losing customers to a <span className="text-gradient">slow website.</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Premium websites that print money — delivered in 7 days. Not 7 months.
              </p>
            </div>
            <Link
              href="#contact"
              className="self-center lg:self-auto inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors glow-primary group whitespace-nowrap"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Brand block */}
        <div className="text-center sm:text-left mb-10 sm:mb-12">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
            <img
              src="/logo.png"
              alt="Abhay Web Studio"
              className="h-10 w-auto object-contain"
            />
            <span className="text-lg font-display font-semibold text-foreground tracking-tight">
              Abhay <span className="text-gradient">Web Studio</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground mx-auto sm:mx-0 max-w-md leading-relaxed mb-5">
            We build stunning, high-converting websites that help businesses grow and succeed online. Trusted by 100+ clients in 15+ countries.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all hover:-translate-y-0.5"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns — 3 across on mobile so it doesn't leave dead space */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-[11px] sm:text-sm uppercase tracking-[0.15em]">
              Services
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-[11px] sm:text-sm uppercase tracking-[0.15em]">
              Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-[11px] sm:text-sm uppercase tracking-[0.15em]">
              Resources
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Abhay Web Studio. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground inline-flex items-center gap-1.5 order-1 sm:order-2">
            Crafted with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> by Abhay Singh
          </p>
          <div className="flex items-center gap-5 order-3">
            <Link href="/info" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/info" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
