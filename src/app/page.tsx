import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find Living Water. Experience True Freedom.",
  description: siteConfig.description,
  keywords: siteConfig.seoKeywords,
};

const whatToExpect = [
  {
    title: "Warm Welcome",
    description: "Friendly hosts are ready to help from the moment you arrive.",
  },
  {
    title: "Powerful Worship",
    description: "Spirit-led worship centered on Jesus and His presence.",
  },
  {
    title: "Bible Teaching",
    description: "Practical, scripture-based teaching you can apply right away.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: siteConfig.name,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
    },
    url: siteConfig.url,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-12">
        <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:pr-10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-200">You’re Invited</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Find Living Water. Experience True Freedom.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-200">{siteConfig.description}</p>
              <div className="mt-8">
                <Link
                  href="/visit"
                  className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
                >
                  Plan Your Visit
                </Link>
              </div>
              <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                  <p className="font-semibold text-white">Service Time</p>
                  <p className="mt-1 text-slate-300">Sundays at 11:00 AM</p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                  <p className="font-semibold text-white">Location</p>
                  <p className="mt-1 text-slate-300">{siteConfig.address.locationDetail}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-slate-900/40 p-8 sm:p-12">
              <Image
                src="/hero-cross.jpg"
                alt="A cross with uplifting sun rays"
                width={1200}
                height={800}
                className="h-auto w-full max-w-md rounded-2xl shadow-2xl ring-1 ring-slate-700"
                priority
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Service Time + Location</h2>
            <p className="mt-3 text-slate-700">
              Join us Sundays at 11:00 AM at {siteConfig.address.street}, {siteConfig.address.city}, CA.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Floor 2</li>
              <li>• Free nearby parking</li>
              <li>• Family-friendly environment</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-block text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              Need directions? Contact us →
            </Link>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Map to Quench Life Christian Fellowship"
                src="https://www.google.com/maps?q=7080%20Donlon%20Way%20Suite%20217%20Dublin%20CA%2094568&output=embed"
                loading="lazy"
                className="h-80 w-full"
              />
            </div>
          </article>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What to Expect</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {whatToExpect.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">New Here?</h2>
            <p className="mt-3 text-slate-700">
              Your next step is simple. Plan your visit and we’ll make sure your first Sunday is easy and meaningful.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>1. Plan your visit</li>
              <li>2. Attend Sunday service at 11:00 AM</li>
              <li>3. Meet people and take your next step</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Stay Connected</h2>
            <p className="mt-3 text-slate-700">
              Get updates on messages, ministries, and events. No spam, just encouragement and next steps.
            </p>
            <div className="mt-5">
              <NewsletterSignup />
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              Need prayer? Submit a prayer request →
            </Link>
          </article>
        </section>
      </div>
    </>
  );
}
