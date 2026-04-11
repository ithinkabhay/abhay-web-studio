import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ProcessSection } from "@/components/process-section"
// import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <WhyChooseSection />
      <ProcessSection />
      {/* <PricingSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
export const metadata = {
  title: "Abhay Web Studio | Grow Your Business Online",
}
