"use client"

import Link from "next/link"
import { Twitter, Instagram, Linkedin, Github } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Business Websites", href: "#services" },
    { label: "Booking Systems", href: "#services" },
    { label: "Portfolio Sites", href: "#services" },
    { label: "E-commerce", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Work", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    // { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "/info#faq" },
    { label: "Blog", href: "/info#blog" },
    { label: "Support", href: "/info#support " },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "https://x.com/ithinkabhay", label: "x" },
  { icon: Instagram, href: "https://www.instagram.com/ithinkabhay", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abhaysinghp01", label: "LinkedIn" },
  // { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className=" rounded-lg flex items-center justify-center">
                <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
              </div>
              <span className="text-xl font-bold text-foreground">Abhay Studio</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              We build stunning, high-converting websites that help businesses grow and succeed online.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Abhay Web Studio. All rights reserved.
          </p>
                    <p className="text-sm text-muted-foreground">
            Design by Abhay Singh. Developed by Abhay Web Studio.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/info" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/info" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
