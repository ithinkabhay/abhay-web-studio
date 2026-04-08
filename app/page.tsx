'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import TrustSection from '@/components/sections/trust-section';
import Reviews from '@/components/sections/reviews';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import BeforeAfter from '@/components/sections/before-after';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Process from '@/components/sections/process';
// import Pricing from '@/components/sections/pricing';
import CTA from '@/components/sections/cta';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F19]">
      <Navbar />
      <Hero />
      <TrustSection />
      <Reviews />
      <Services />
      <Portfolio />
      <BeforeAfter />
      <WhyChooseUs />
      <Process />
      {/* <Pricing /> */}
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
