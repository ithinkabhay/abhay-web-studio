'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Reviews() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const reviews = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      role: 'Photography Studio Owner',
      content: 'Within 3 months of launching my new website, I got 200+ booking inquiries. The design is beautiful and the conversion optimization is real.',
      rating: 5,
      image: '/images/testimonial-1.jpg',
    },
    {
      name: 'Marcus Wagner',
      country: 'Germany',
      role: 'Restaurant Owner',
      content: 'My online reservations increased by 300%. Not only is the website stunning, but the team really understands how to drive real business results.',
      rating: 5,
      image: '/images/testimonial-2.jpg',
    },
    {
      name: 'Priya Sharma',
      country: 'India',
      role: 'Beauty Salon Owner',
      content: 'The website completely transformed my business. My appointment bookings tripled, and I received calls from new clients weekly. Highly recommend!',
      rating: 5,
      image: '/images/testimonial-3.jpg',
    },
    {
      name: 'Maria Santos',
      country: 'Philippines',
      role: 'Digital Creator',
      content: 'Professional, fast, and results-driven. My email signups increased by 500%. The team is responsive and truly cares about your success.',
      rating: 5,
      image: '/images/testimonial-4.jpg',
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, reviews.length]);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-[#0B0F19] dark:to-[#0B0F19] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-green-50 dark:bg-green-950/10 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#22c55e] uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real results from real clients across USA, Germany, India, and beyond
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-96">
            {[0, 1].map((offset) => {
              const idx = (currentIdx + offset) % reviews.length;
              const review = reviews[idx];
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg hover:shadow-xl hover:border-[#22c55e] dark:hover:border-[#22c55e] transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} size={18} className="fill-[#22c55e] text-[#22c55e]" />
                      ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                    "{review.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#22c55e] flex-shrink-0">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-black dark:text-white text-lg">{review.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
                      <p className="text-xs text-[#22c55e] font-semibold mt-1">{review.country}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 border-gray-300 dark:border-gray-700 hover:border-[#22c55e] dark:hover:border-[#22c55e]"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIdx(idx);
                    setAutoPlay(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIdx || idx === (currentIdx + 1) % reviews.length
                      ? 'bg-[#22c55e] w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 border-gray-300 dark:border-gray-700 hover:border-[#22c55e] dark:hover:border-[#22c55e]"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Info Text */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Auto-playing testimonials • Pause on interaction
          </p>
        </div>
      </div>
    </section>
  );
}
