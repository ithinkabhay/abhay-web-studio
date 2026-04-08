'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import ContactForm from '@/components/sections/contact-form';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Calendar, Clock, Zap, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F19]">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#0B0F19] dark:via-gray-900 dark:to-[#1a1f3a] relative overflow-hidden pt-24">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 dark:bg-green-950/20 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 dark:bg-green-950/20 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#22c55e] rounded-full" />
            <span className="text-xs font-semibold text-green-700 dark:text-green-400">Trusted by 100+ Businesses</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
            Let&apos;s Build Your Website
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Tell us about your business and we&apos;ll help you get more customers with a high-converting website.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#22c55e]" />
              Response within 24 hours
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#22c55e]" />
              Free consultation
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#22c55e]" />
              No obligation
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white text-center mb-3">
              Send us your details
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Fill out the form below and we&apos;ll get back to you with a personalized plan for your business.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Or get in touch directly
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="relative p-8 md:p-10 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#22c55e] dark:hover:border-[#22c55e] transition-all duration-300 hover:shadow-xl group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="pt-6 text-center">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3 mt-4">
                  WhatsApp Chat
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Get an instant response from our team
                </p>
                <a href="https://wa.me/+919770670564?text=Hi%20Abhay%20Studio%2C%20I%20need%20help%20building%20my%20website" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="relative p-8 md:p-10 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#22c55e] dark:hover:border-[#22c55e] transition-all duration-300 hover:shadow-xl group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-black" />
                </div>
              </div>

              <div className="pt-6 text-center">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3 mt-4">
                  Send Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Send us your requirements and details
                </p>
                <a href="mailto:singh.abhayparaste@gmail.com">
                  <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    singh.abhayparaste@gmail.com
                  </Button>
                </a>
              </div>
            </div>

            {/* Book Call */}
            <div className="relative p-8 md:p-10 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#22c55e] dark:hover:border-[#22c55e] transition-all duration-300 hover:shadow-xl group">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="pt-6 text-center">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3 mt-4">
                  Book a Call
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Schedule a free 30-minute consultation
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#0B0F19] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-[#22c55e]" />
              </div>
              <h3 className="font-bold text-black dark:text-white mb-2">24-Hour Response</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We respond to all inquiries within 24 hours
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-[#22c55e]" />
              </div>
              <h3 className="font-bold text-black dark:text-white mb-2">No Obligation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Free consultation with no strings attached
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-[#22c55e]" />
              </div>
              <h3 className="font-bold text-black dark:text-white mb-2">Quick Turnaround</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Websites delivered in 3-5 days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-[#0B0F19] dark:via-black dark:to-[#0B0F19]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get More Customers?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 100+ businesses that are already seeing 3x growth with their new websites. Let&apos;s start building yours today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold px-10 py-6 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all">
              Get Started Now
            </Button>
            <a href="https://wa.me/1234567890?text=Hi%20Abhay%20Studio%2C%20I%20need%20help%20building%20my%20website" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-lg font-bold w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
