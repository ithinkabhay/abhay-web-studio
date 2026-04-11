"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#reviews", label: "Reviews" },
    // { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background shadow-md border-b border-border"
        : "bg-background-blur border-b border-blue"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-primary ">
              Abhay Web Studio
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* <Button variant="ghost" size="sm" className="text-muted-foreground">
              See Demo
            </Button> */}
            <Link href="#contact">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get My Website
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              {/* <Button variant="outline" size="sm" className="w-full">
                See Demo
              </Button> */}
              <Button size="sm" className="w-full bg-primary text-primary-foreground">
                Get My Website
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
