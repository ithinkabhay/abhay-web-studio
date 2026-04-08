// 'use client';

// import { Button } from '@/components/ui/button';
// import { Check, Zap, Shield, Clock } from 'lucide-react';

// export default function Pricing() {
//   const plans = [
//     {
//       name: 'Starter',
//       price: '$999',
//       deliveryTime: '5–10 days',
//       description: 'Perfect for small businesses getting started online',
//       popular: false,
//       features: [
//         '5-8 Page Website',
//         'Modern Design',
//         'Mobile Responsive',
//         'Basic SEO Optimization',
//         'Contact Form',
//         '3 Months Support',
//       ],
//     },
//     {
//       name: 'Growth',
//       price: '$1,999',
//       deliveryTime: '10–15 days',
//       description: 'Ideal for businesses wanting to increase sales',
//       popular: true,
//       features: [
//         'Everything in Starter',
//         'Booking/Appointment System',
//         'Payment Integration',
//         'Advanced SEO Setup',
//         'Analytics & Tracking',
//         'Email Integration',
//         '6 Months Support',
//       ],
//     },
//     {
//       name: 'Premium',
//       price: '$3,999',
//       deliveryTime: '15–20 days',
//       description: 'For ambitious businesses ready to scale',
//       popular: false,
//       features: [
//         'Everything in Growth',
//         'E-commerce Integration',
//         'Custom Integrations',
//         'Marketing Strategy',
//         'Advanced Analytics',
//         'Monthly Optimization',
//         '12 Months Support',
//       ],
//     },
//   ];

//   return (
//     <section id="pricing" className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-[#0B0F19] dark:via-gray-900 dark:to-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <p className="text-sm font-semibold text-[#22c55e] uppercase tracking-wider mb-3">Pricing</p>
//           <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
//             Transparent, Affordable Pricing
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400">
//             All plans include free support and can be customized to your needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           {plans.map((plan, idx) => (
//             <div
//               key={idx}
//               className={`relative rounded-2xl border transition-all duration-300 overflow-visible ${
//                 plan.popular
//                   ? 'border-[#22c55e] bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-800 shadow-2xl md:scale-105 ring-2 ring-[#22c55e]/30'
//                   : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg'
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
//                   <span className="bg-[#22c55e] text-black px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2">
//                     <Zap className="w-3 h-3" /> Most Popular
//                   </span>
//                 </div>
//               )}

//               <div className="p-8 md:p-10">
//                 <div className="flex items-start justify-between mb-4">
//                   <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
//                     {plan.name}
//                   </h3>
//                 </div>

//                 <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
//                   {plan.description}
//                 </p>

//                 {/* Price */}
//                 <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
//                   <div className="flex items-baseline gap-2 mb-2">
//                     <span className="text-5xl font-bold text-black dark:text-white">
//                       {plan.price}
//                     </span>
//                   </div>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">One-time payment</p>
//                 </div>

//                 {/* Delivery Time */}
//                 <div className="flex items-center gap-2 mb-6 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
//                   <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
//                   <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
//                     Delivered in {plan.deliveryTime}
//                   </span>
//                 </div>

//                 {/* CTA Button */}
//                 <Button
//                   className={`w-full mb-8 font-semibold py-6 text-base rounded-lg transition-all ${
//                     plan.popular
//                       ? 'bg-[#22c55e] hover:bg-[#16a34a] text-black shadow-lg hover:shadow-xl'
//                       : 'border-2 border-[#22c55e] text-[#22c55e] bg-transparent hover:bg-[#22c55e] hover:text-black'
//                   }`}
//                 >
//                   Get Started Now
//                 </Button>

//                 {/* Features */}
//                 <div className="space-y-4">
//                   {plan.features.map((feature, i) => (
//                     <div key={i} className="flex items-center gap-3">
//                       <Check size={20} className="text-[#22c55e] flex-shrink-0" />
//                       <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Custom Plan Card */}
//         <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-10 text-center mb-12">
//           <Shield className="w-12 h-12 text-[#22c55e] mx-auto mb-4" />
//           <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
//             Custom Plan
//           </h3>
//           <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
//             Need something specific? We&apos;ll work with you to create a custom solution tailored to your exact requirements.
//           </p>
//           <Button className="bg-gray-900 hover:bg-black text-white font-semibold px-8 py-6 text-base rounded-lg">
//             Get Custom Quote
//           </Button>
//         </div>

//         {/* FAQ-style info */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//           <div className="p-6">
//             <p className="text-sm font-semibold text-[#22c55e] uppercase mb-2">Free Support</p>
//             <p className="text-gray-600 dark:text-gray-400">All plans include post-launch support</p>
//           </div>
//           <div className="p-6">
//             <p className="text-sm font-semibold text-[#22c55e] uppercase mb-2">Money-back Guarantee</p>
//             <p className="text-gray-600 dark:text-gray-400">30-day satisfaction guarantee</p>
//           </div>
//           <div className="p-6">
//             <p className="text-sm font-semibold text-[#22c55e] uppercase mb-2">Free Consultation</p>
//             <p className="text-gray-600 dark:text-gray-400">Let&apos;s discuss which plan fits best</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
