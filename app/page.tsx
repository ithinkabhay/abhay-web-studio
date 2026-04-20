import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { AiSection } from "@/components/ai-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-clip lg:overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <IndustriesSection />
      <AiSection />
      <PortfolioSection />
      <WhyChooseSection />
      <ProcessSection />
      <PricingSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
