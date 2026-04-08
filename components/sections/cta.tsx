'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-[#0B0F19] dark:via-black dark:to-[#0B0F19]" />

      {/* Animated background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[#22c55e]">Limited Time Offer</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Get More Customers?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop leaving money on the table. Get a high-converting website that turns visitors into customers, bookings, and revenue. Join 100+ businesses already experiencing 3x growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                className="w-full sm:w-[280px] justify-center items-center flex bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold px-10 py-7 text-base md:text-lg rounded-lg shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center">
                  Get My Website Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-[280px] justify-center items-center flex border-2 border-white text-white hover:bg-white hover:text-black px-10 py-7 text-base md:text-lg rounded-lg font-bold transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact" className="flex items-center justify-center w-full">
                  <MessageCircle size={20} className="mr-2" />
                  Book Free Consultation
                </Link>
              </Button>

            </div>
          </div>

          {/* Trust Text */}
          <p className="text-gray-400 text-sm md:text-base mb-8">
            ✓ 100% Free consultation • ✓ No credit card required • ✓ 24-hour response time
          </p>

          {/* Results Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold text-[#22c55e] mb-2">3x</p>
              <p className="text-gray-400">Average customer increase</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold text-[#22c55e] mb-2">3-5</p>
              <p className="text-gray-400">Days to launch</p>
            </div>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-bold text-[#22c55e] mb-2">100%</p>
              <p className="text-gray-400">Satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
