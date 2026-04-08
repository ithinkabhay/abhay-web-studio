'use client';

import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Get More Customers',
      description: 'Websites optimized for conversions that turn visitors into paying customers.',
    },
    {
      title: 'Increase Bookings',
      description: 'Integrated booking systems that automate your appointment scheduling.',
    },
    {
      title: 'Premium Design That Builds Trust',
      description: 'Modern, professional designs that make your business look premium and trustworthy.',
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality. Most projects delivered in 2-4 weeks.',
    },
    {
      title: 'Full Support & Maintenance',
      description: 'Ongoing technical support and updates to keep your website running smoothly.',
    },
    {
      title: 'Global Results',
      description: 'We work with clients worldwide and understand different markets and audiences.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#22c55e] uppercase tracking-wide">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mt-2">
            Built for Business Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
