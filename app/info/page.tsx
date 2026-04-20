import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ, Privacy & Support",
  description:
    "Frequently asked questions, privacy policy, terms of service, and support for Abhay Web Studio.",
  alternates: { canonical: "/info" },
  openGraph: { url: "/info", title: "FAQ, Privacy & Support · Abhay Web Studio" },
  // Indexable so legal/privacy pages can be found, but tell Google not to
  // use meta/description snippets aggressively (thin utility content).
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": 120,
      "max-image-preview": "standard",
    },
  },
}

export default function InfoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-16">

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold mb-4">FAQ</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How long does it take to build a website?</h3>
            <p className="text-gray-600">
              Most websites are completed within 3–7 days depending on requirements.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Do you provide support after delivery?</h3>
            <p className="text-gray-600">
              Yes, we provide ongoing support and maintenance after delivery.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Will my website be mobile-friendly?</h3>
            <p className="text-gray-600">
              Absolutely, all websites are fully responsive and optimized for mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Blog</h2>
        <p className="text-gray-600">
          Coming soon! We will share tips on website design, business growth, and digital marketing.
        </p>
      </section>

      {/* SUPPORT */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Support</h2>
        <p className="text-gray-600">
          Need help? Contact us anytime at:
        </p>
        <p className="mt-2 font-medium">📧 support@abhaywebstudio.in</p>
      </section>

      {/* PRIVACY POLICY */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-gray-600">
          We respect your privacy. Any information you provide (name, email, etc.) is used only to
          communicate with you and improve our services. We do not sell or share your data with third parties.
        </p>
      </section>

      {/* TERMS */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
        <p className="text-gray-600">
          By using our services, you agree to our terms. We provide website development services
          based on agreed requirements. Payments are non-refundable once the project has started.
        </p>
      </section>

    </div>
  )
}