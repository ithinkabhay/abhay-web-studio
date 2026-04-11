"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MessageCircle, Calendar, ArrowRight, Check } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

      // auto hide after 1 sec
      setTimeout(() => {
        setSubmitted(false)
      }, 2000)

      setFormData({
        name: "",
        email: "",
        message: "",
      })

    } catch (error) {
      alert("Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to Get More Customers?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss how we can help your business grow with a stunning, high-converting website. Get in touch today!
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/+919770670564"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Chat with us instantly</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="tel:+919770670564"
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">Book Free Consultation</div>
                  <div className="text-sm text-muted-foreground">Schedule a 30-min call</div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted && (
                <div className="bg-green-100 text-green-700 p-3 rounded text-center font-medium">
                  ✅ we’ll contact you within 24 hours 🚀
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Abhay Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="abhay@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
