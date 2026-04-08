'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Link, Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-white via-white to-gray-50 dark:from-[#0B0F19] dark:via-[#0B0F19] dark:to-[#1a1f3a] relative overflow-hidden pt-24">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 dark:bg-green-950/20 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 dark:bg-green-950/20 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-full mb-8 w-fit animate-fade-in">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full" />
              <span className="text-xs font-semibold text-green-700 dark:text-green-400">Trusted by 100+ Global Clients</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight animate-fade-in" style={{animationDelay: '0.1s'}}>
              We Build Websites That Turn Visitors Into Customers
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Helping businesses get more bookings, more leads, and more sales with high-converting websites designed for real results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in w-fit" style={{animationDelay: '0.3s'}}>
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all">
                Get My Website <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button asChild variant="outline" className="border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 px-8 py-6 text-base rounded-lg">
                <a href="/contact" className="flex items-center">
                  <Play className="w-4 h-4 mr-2 fill-current" /> See Demo
                </a>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-black dark:text-white">100+</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-black dark:text-white">4.9★</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Avg Rating</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-black dark:text-white">50+</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Countries</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src="/images/hero-mockup.jpg"
                alt="Premium website mockup on laptop"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <p className="text-sm font-semibold text-black dark:text-white">Premium Design</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Built to convert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
