import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-20">
      <div className="text-center max-w-lg">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
          Error 404
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground tracking-tight mb-4">
          Page not found.
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors glow-primary"
          >
            Back to home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full glass border border-border text-foreground font-semibold hover:bg-secondary/60 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  )
}
