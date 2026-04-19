"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Send,
  MessageCircle,
  Calendar,
  ArrowRight,
  Check,
  Mail,
  Sparkles,
  Loader2,
} from "lucide-react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { SectionCard } from "@/components/section-card"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        "service_l47mp42",
        "template_smzawoa",
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "xTUr3yxfKHBqWNCN3"
      )
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3500)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      alert("Failed to send message. Please try WhatsApp instead.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <SectionCard id="contact">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <MessageCircle className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs sm:text-sm text-foreground/90 font-medium">Let&apos;s talk</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Ready to grow? <span className="text-gradient">Let&apos;s build it.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            Free 30-min strategy call. Zero obligation. We respond within 24 hours — usually within 2.
          </p>

          <div className="space-y-3 mb-8">
            <a
              href="https://wa.me/+919770670564"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border flex items-center gap-4 bg-card border border-border rounded-2xl p-4 hover:border-primary/40 transition-all hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 bg-emerald-500/15 ring-1 ring-emerald-500/30 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Chat with us instantly</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="tel:+919770670564"
              className="gradient-border flex items-center gap-4 bg-card border border-border rounded-2xl p-4 hover:border-primary/40 transition-all hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 bg-primary/15 ring-1 ring-primary/30 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground">Free Consultation</div>
                <div className="text-sm text-muted-foreground">Schedule a 30-min strategy call</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="mailto:hello@abhaywebstudio.in"
              className="gradient-border flex items-center gap-4 bg-card border border-border rounded-2xl p-4 hover:border-primary/40 transition-all hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 bg-cyan-500/15 ring-1 ring-cyan-500/30 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground">Email</div>
                <div className="text-sm text-muted-foreground">hello@abhaywebstudio.in</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available now — typically reply in under 2 hours
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 via-cyan-500/10 to-purple-500/15 rounded-3xl blur-2xl opacity-60" />
          <div className="relative glass-strong rounded-2xl p-6 lg:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-display font-bold text-foreground">Send us a message</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Tell us about your project — we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-primary/15 border border-primary/30 text-primary rounded-xl p-3.5"
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Message sent!</div>
                    <div className="text-xs opacity-80">We&apos;ll get back to you within 24 hours.</div>
                  </div>
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Abhay Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/60 border-border/80 h-11 rounded-xl focus-visible:border-primary/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/60 border-border/80 h-11 rounded-xl focus-visible:border-primary/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/60 border-border/80 min-h-[140px] rounded-xl focus-visible:border-primary/50"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold text-base group glow-primary disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </Button>
              <p className="text-[11px] text-center text-muted-foreground">
                By submitting, you agree to our terms. We&apos;ll never share your info.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionCard>
  )
}
