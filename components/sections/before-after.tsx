'use client';

import { TrendingUp, Users, DollarSign, CheckCircle } from 'lucide-react';

export default function BeforeAfter() {
  const comparisons = [
    {
      label: 'Customer Inquiries',
      before: '10-15 per month',
      after: '100+ per month',
      icon: Users,
    },
    {
      label: 'Online Bookings',
      before: 'Manual only',
      after: '24/7 Automated',
      icon: CheckCircle,
    },
    {
      label: 'Monthly Revenue',
      before: '$5K-$10K',
      after: '$30K-$50K+',
      icon: DollarSign,
    },
    {
      label: 'Business Growth',
      before: 'Stagnant',
      after: '250%+ Growth',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-[#0B0F19] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-50 dark:bg-green-950/10 rounded-full blur-3xl opacity-40 -z-10 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#22c55e] uppercase tracking-wider mb-3">
            Transformation
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            See the Difference a Great Website Makes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transform your business from struggling in the dark to thriving in the spotlight
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Before Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">
                ✗
              </span>
              Without a Professional Website
            </h3>

            <div className="space-y-4">
              {[
                'No online presence or outdated website',
                'Potential customers can&apos;t find you',
                'Lose business to competitors',
                'Manual booking and communication',
                'Limited to word-of-mouth growth',
                'Inconsistent customer inquiries',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-red-50/50 dark:bg-red-950/20 rounded-lg border border-red-200/50 dark:border-red-900/30"
                >
                  <span className="text-red-600 dark:text-red-400 font-bold flex-shrink-0 text-lg">
                    ×
                  </span>
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center text-[#22c55e] font-bold">
                ✓
              </span>
              With Abhay Web Studio Website
            </h3>

            <div className="space-y-4">
              {[
                'Premium online presence 24/7',
                'Get found by customers searching online',
                'Stay ahead of your competition',
                'Automated 24/7 booking system',
                'Exponential growth through organic traffic',
                'Consistent high-quality leads',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-green-50/50 dark:bg-green-950/20 rounded-lg border border-green-200/50 dark:border-green-900/30"
                >
                  <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {comparisons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 overflow-hidden group hover:shadow-lg transition-all"
              >
                {/* Background accent */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-green-100 dark:bg-green-950/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-[#22c55e] mb-4" />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
                    {item.label}
                  </p>

                  {/* Before */}
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">BEFORE</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-300">
                      {item.before}
                    </p>
                  </div>

                  {/* After */}
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">AFTER</p>
                    <p className="text-2xl font-bold text-[#22c55e]">{item.after}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
