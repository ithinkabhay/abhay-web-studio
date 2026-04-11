// "use client"

// import { Star, Quote } from "lucide-react"

// const reviews = [
//   {
//     name: "Michael Anderson",
//     country: "USA",
//     flag: "🇺🇸",
//     role: "Restaurant Owner",
//     review: "Our bookings increased by 300% within the first month! The website they built is absolutely stunning and works perfectly on mobile. Best investment I&apos;ve made for my business.",
//     rating: 5,
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//   },
//   {
//     name: "Anna Schmidt",
//     country: "Germany",
//     flag: "🇩🇪",
//     role: "Photography Studio",
//     review: "Professional, fast, and incredibly talented. They understood exactly what I needed and delivered a portfolio website that has brought me dozens of new clients. Highly recommended!",
//     rating: 5,
//     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
//   },
//   {
//     name: "Carlos Reyes",
//     country: "Philippines",
//     flag: "🇵🇭",
//     role: "Salon Owner",
//     review: "The online booking system they created has transformed my business. My customers love how easy it is to book appointments, and I&apos;ve saved hours every week on phone calls.",
//     rating: 5,
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//   },
//   {
//     name: "Priya Sharma",
//     country: "India",
//     flag: "🇮🇳",
//     role: "E-commerce Business",
//     review: "They built an amazing online store for my jewelry business. Sales have tripled since launch! The design is beautiful and my customers constantly compliment how easy it is to shop.",
//     rating: 5,
//     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
//   },
// ]

// export function ReviewsSection() {
//   return (
//     <section id="reviews" className="py-24 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
//             <Star className="w-4 h-4 text-primary fill-primary" />
//             <span className="text-sm text-primary font-medium">Client Reviews</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Real results from real businesses around the world
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group"
//             >
//               <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
//               <p className="text-foreground text-lg mb-6 leading-relaxed">
//                 &quot;{review.review}&quot;
//               </p>

//               <div className="flex items-center gap-1 mb-6">
//                 {[...Array(review.rating)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
//                 ))}
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={review.avatar}
//                     alt={review.name}
//                     className="w-12 h-12 rounded-full object-cover border-2 border-border group-hover:border-primary/50 transition-colors"
//                   />
//                   <div>
//                     <div className="font-semibold text-foreground">{review.name}</div>
//                     <div className="text-sm text-muted-foreground">{review.role}</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
//                   <span>{review.flag}</span>
//                   <span className="text-sm text-muted-foreground">{review.country}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Michael Anderson",
    country: "USA",
    flag: "🇺🇸",
    role: "Restaurant Owner",
    review: "Bookings increased by 300%! Best decision ever.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Anna Schmidt",
    country: "Germany",
    flag: "🇩🇪",
    role: "Photographer",
    review: "Amazing design and fast delivery.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Carlos Reyes",
    country: "Philippines",
    flag: "🇵🇭",
    role: "Salon Owner",
    review: "Saved hours and increased customers!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Priya Sharma",
    country: "India",
    flag: "🇮🇳",
    role: "E-commerce",
    review: "Sales tripled after launch!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "James Wilson",
    country: "UK",
    flag: "🇬🇧",
    role: "Consultant",
    review: "Clean and professional work.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
]

export function ReviewsSection() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  })

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Trusted by businesses worldwide 🌍
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-card border border-border rounded-2xl p-6 shadow-md"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="mb-4 text-sm">
                "{review.review}"
              </p>

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-sm">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {review.role}
                  </div>
                </div>
              </div>

              <div className="mt-3 text-xs">
                {review.flag} {review.country}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}