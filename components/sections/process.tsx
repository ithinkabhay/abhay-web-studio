'use client';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us Your Idea',
      description: 'Schedule a consultation and share your vision, goals, and business details.',
    },
    {
      number: '02',
      title: 'We Design Your Website',
      description: 'Our design team creates stunning mockups and gets your feedback.',
    },
    {
      number: '03',
      title: 'We Build & Optimize',
      description: 'We build your website with conversion optimization in mind.',
    },
    {
      number: '04',
      title: 'You Start Getting Clients',
      description: 'Launch your website and watch the leads and bookings come in.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#22c55e] uppercase tracking-wide">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mt-2">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%+12px)] w-[calc(100%-24px)] h-0.5 bg-gradient-to-r from-[#22c55e] to-[#22c55e]/20" />
              )}

              {/* Step Card */}
              <div className="bg-white dark:bg-[#0B0F19] p-6 rounded-lg border border-gray-200 dark:border-gray-800 relative z-10">
                <div className="text-5xl font-bold text-[#22c55e] mb-4 opacity-100">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
