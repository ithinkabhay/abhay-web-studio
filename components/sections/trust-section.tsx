'use client';

export default function TrustSection() {
  const countries = [
    { flag: '🇺🇸', name: 'USA', count: '40+ Clients' },
    { flag: '🇩🇪', name: 'Germany', count: '25+ Clients' },
    { flag: '🇵🇭', name: 'Philippines', count: '20+ Clients' },
    { flag: '🇮🇳', name: 'India', count: '15+ Clients' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0B0F19] dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#22c55e] uppercase tracking-wider mb-3">Global Trust</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Serving clients across 50+ countries with premium web solutions
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {countries.map((country) => (
            <div
              key={country.name}
              className="p-8 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:border-[#22c55e] dark:hover:border-[#22c55e] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{country.flag}</div>
              <p className="font-bold text-black dark:text-white text-lg">{country.name}</p>
              <p className="text-sm text-[#22c55e] font-semibold mt-2">{country.count}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center p-6">
            <p className="text-5xl md:text-6xl font-bold text-[#22c55e] mb-3">$2M+</p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Revenue Generated</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">For our clients</p>
          </div>
          <div className="text-center p-6">
            <p className="text-5xl md:text-6xl font-bold text-[#22c55e] mb-3">10,000+</p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Bookings Generated</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Real customer results</p>
          </div>
          <div className="text-center p-6">
            <p className="text-5xl md:text-6xl font-bold text-[#22c55e] mb-3">98%</p>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Satisfaction Rate</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Client retention</p>
          </div>
        </div>
      </div>
    </section>
  );
}
