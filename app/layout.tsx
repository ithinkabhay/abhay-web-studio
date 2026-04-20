import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { MobileBottomNav } from '@/components/mobile-bottom-nav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const SITE_URL = 'https://www.abhaywebstudio.in'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Abhay Web Studio — Premium Websites That Convert in 7 Days',
    template: '%s | Abhay Web Studio',
  },
  description:
    'Premium web design, development & AI automation studio. We build high-converting websites, booking systems, e-commerce stores, AI chatbots & AI agents for restaurants, clinics, salons, real estate, education and 60+ business types — delivered in 7 days.',
  applicationName: 'Abhay Web Studio',
  keywords: [
    'Abhay Web Studio',
    'web design agency India',
    'website development services',
    'high-converting website',
    'business website design',
    'small business website',
    'booking website developer',
    'restaurant website design',
    'cafe website design',
    'bakery website design',
    'cloud kitchen website',
    'salon booking website',
    'gym website',
    'spa website',
    'doctor clinic website',
    'dentist website',
    'hospital website',
    'real estate website',
    'property dealer website',
    'school website',
    'coaching institute website',
    'photographer portfolio website',
    'wedding decorator website',
    'event planner website',
    'manufacturer website',
    'wholesaler website',
    'logistics company website',
    'travel agency website',
    'hotel website',
    'e-commerce store developer',
    'AI automation services',
    'AI agent development',
    'AI chatbot for business',
    'WhatsApp AI chatbot',
    'AI voice agent',
    'workflow automation n8n',
    'lead qualification AI',
    'Next.js web developer',
    'website in 7 days',
    'affordable web design India',
    'premium website design',
    'website that converts',
    'modern website design 2026',
  ],
  authors: [{ name: 'Abhay Raj Singh', url: SITE_URL }],
  creator: 'Abhay Raj Singh',
  publisher: 'Abhay Web Studio',
  category: 'Web Design & Development',
  // NOTE: No global canonical here on purpose — each page declares its own.
  // A global canonical would incorrectly point every page to the homepage.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Abhay Web Studio — Premium Websites That Convert in 7 Days',
    description:
      'High-converting websites for businesses. Delivered in 7 days. Trusted by 100+ clients across 15+ countries.',
    // url is provided per-page; defaulting to site root here
    url: '/',
    siteName: 'Abhay Web Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhay Web Studio — Premium Websites That Convert',
    description:
      'High-converting websites for businesses. Delivered in 7 days.',
    creator: '@ithinkabhay',
  },
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  themeColor: '#07090F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Abhay Web Studio',
              image: `${SITE_URL}/logo.png`,
              url: SITE_URL,
              telephone: '+91-9770670564',
              priceRange: '$$',
              description:
                'Premium web design, development & AI automation studio building high-converting websites and AI agents for 60+ business types worldwide.',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services',
                itemListElement: [
                  {
                    '@type': 'OfferCatalog',
                    name: 'Web Design & Development',
                    itemListElement: [
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Website Design' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Booking & Appointment Website' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Store Development' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Portfolio Website Design' } },
                    ],
                  },
                  {
                    '@type': 'OfferCatalog',
                    name: 'AI Automation & Agents',
                    itemListElement: [
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp AI Chatbot' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Voice Agent' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom AI Agents' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Automation (n8n / Zapier)' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Email & Outreach Automation' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Lead Qualification' } },
                    ],
                  },
                ],
              },
              areaServed: ['IN', 'US', 'GB', 'AE', 'AU', 'CA', 'SG'],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://x.com/ithinkabhay',
                'https://www.instagram.com/ithinkabhay',
                'https://www.linkedin.com/in/abhaysinghp01',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '100',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${display.variable} font-sans antialiased relative overflow-x-hidden`}
      >
        <ScrollProgress />
        {children}
        <BackToTop />
        <MobileBottomNav />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
