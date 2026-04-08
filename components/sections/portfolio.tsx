'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Loader } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      title: 'Photography Studio',
      description: 'Increased bookings by 250%',
      result: '150+ monthly inquiries',
      tag: 'Portfolio',
      image: '/images/portfolio-1.jpg',
    },
    {
      title: 'Restaurant Booking',
      description: 'Online reservations 3x growth',
      result: '300% more bookings',
      tag: 'Booking System',
      image: '/images/portfolio-2.jpg',
    },
    {
      title: 'E-Commerce Store',
      description: 'Custom online store launched',
      result: '$50K revenue in 3 months',
      tag: 'E-Commerce',
      image: '/images/portfolio-3.jpg',
    },
    {
      title: 'Salon Appointments',
      description: 'Automated booking system',
      result: '80% less manual work',
      tag: 'Scheduling',
      image: '/images/portfolio-4.jpg',
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-[#0B0F19] dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#22c55e] uppercase tracking-wider mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Our Best Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real results from real projects. See how we help businesses get more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-[#22c55e] dark:hover:border-[#22c55e] transition-all duration-300 bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-sm hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-80 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#22c55e] bg-green-50 dark:bg-green-950/40 px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                  <TrendingUp className="w-4 h-4 text-[#22c55e]" />
                </div>
                
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Result Badge */}
                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-lg p-4">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Result</p>
                  <p className="text-lg font-bold text-[#22c55e]">{project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
            Ready to see what we can do for your business?
          </p>
          <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all">
            Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
