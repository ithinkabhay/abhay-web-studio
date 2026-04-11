import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

// export const metadata: Metadata = {
//   title: 'Abhay Studio | Websites That Turn Visitors Into Customers',
//   description: 'We build high-converting websites that help businesses get more bookings, leads, and sales. Premium web design agency serving clients globally.',
//   keywords: ['web design', 'web development', 'business website', 'booking system', 'e-commerce', 'portfolio website'],
//   authors: [{ name: 'Abhay Studio' }],
//   openGraph: {
//     title: 'Abhay Studio | Websites That Turn Visitors Into Customers',
//     description: 'We build high-converting websites that help businesses get more bookings, leads, and sales.',
//     type: 'website',
//   },
// }
export const metadata = {
  title: "Abhay Web Studio - Website Development for Businesses",
  description:
    "We build modern, high-converting websites for businesses. Get your website in 3-7 days with Abhay Web Studio.",

  keywords: [
    "Abhay Web Studio",
    "Abhay Studio",
    "website developer Abhay",
    "web design services India",
  ],

  authors: [{ name: "Abhay Raj Singh" }],

  openGraph: {
    title: "Abhay Web Studio",
    description: "Professional website development services",
    url: "https://www.abhaywebstudio.in",
    siteName: "Abhay Web Studio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
