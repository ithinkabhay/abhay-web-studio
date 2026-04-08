import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Abhay Studio - Web Design Agency | High-Converting Websites',
  description: 'Premium web design agency building high-converting websites that turn visitors into customers. Trusted by 100+ global clients.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/studio.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/studio.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png',
        type: 'image/svg+xml',
        sizes: '180x180',
      },
    ],
    apple: '/studio.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
