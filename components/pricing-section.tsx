// "use client"

// import { Button } from "@/components/ui/button"
// import { Check, Sparkles } from "lucide-react"

// const plans = [
//   {
//     name: "Starter",
//     price: "$499",
//     description: "Perfect for small businesses just getting started online",
//     features: [
//       "5-Page Website",
//       "Mobile Responsive Design",
//       "Contact Form",
//       "Basic SEO Setup",
//       "Social Media Links",
//       "1 Month Support",
//     ],
//     popular: false,
//   },
//   {
//     name: "Growth",
//     price: "$999",
//     description: "Ideal for businesses ready to scale and grow",
//     features: [
//       "10-Page Website",
//       "Custom Design",
//       "Booking/Appointment System",
//       "Advanced SEO",
//       "Google Analytics Setup",
//       "Speed Optimization",
//       "3 Months Support",
//       "Content Updates",
//     ],
//     popular: true,
//   },
//   {
//     name: "Premium",
//     price: "$1,999",
//     description: "For businesses that want the ultimate online presence",
//     features: [
//       "Unlimited Pages",
//       "E-commerce Integration",
//       "Payment Gateway Setup",
//       "Custom Animations",
//       "Priority Support",
//       "Monthly Performance Reports",
//       "6 Months Support",
//       "Dedicated Account Manager",
//     ],
//     popular: false,
//   },
// ]

// export function PricingSection() {
//   return (
//     <section id="pricing" className="py-24 bg-secondary/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
//             <Sparkles className="w-4 h-4 text-primary" />
//             <span className="text-sm text-primary font-medium">Pricing</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
//             Choose Your Pricing Plan
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Transparent pricing with no hidden fees. Pick the plan that fits your needs.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative bg-card border rounded-2xl p-8 ${
//                 plan.popular
//                   ? "border-primary shadow-lg shadow-primary/10 scale-105"
//                   : "border-border"
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                   <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               <div className="text-center mb-8">
//                 <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
//                 <div className="mb-2">
//                   <span className="text-4xl font-bold text-foreground">{plan.price}</span>
//                 </div>
//                 <p className="text-sm text-muted-foreground">{plan.description}</p>
//               </div>

//               <ul className="space-y-4 mb-8">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-3">
//                     <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
//                       <Check className="w-3 h-3 text-primary" />
//                     </div>
//                     <span className="text-sm text-foreground">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <Button
//                 className={`w-full ${
//                   plan.popular
//                     ? "bg-primary text-primary-foreground hover:bg-primary/90"
//                     : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
//                 }`}
//               >
//                 Get Started
//               </Button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
