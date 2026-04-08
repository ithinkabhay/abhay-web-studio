'use client';

import { Zap, ShoppingCart, PenTool, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: PenTool,
      title: 'Business Website Design',
      description: 'Custom-built, high-converting websites that showcase your business and turn visitors into customers.',
    },
    {
      icon: Calendar,
      title: 'Booking & Appointment Systems',
      description: 'Integrated booking systems that automate appointments and reduce manual work.',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Stores',
      description: 'Fully functional online stores with payment integration and inventory management.',
    },
    {
      icon: Zap,
      title: 'Portfolio Websites',
      description: 'Stunning portfolio sites that showcase your work and attract premium clients.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#22c55e] uppercase tracking-wider mb-3">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Complete Web Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to establish a powerful online presence and grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="relative p-8 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#22c55e] dark:hover:border-[#22c55e] transition-all duration-300 hover:shadow-xl group overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent dark:from-green-950/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className="w-14 h-14 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon size={28} className="text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-[#22c55e] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
