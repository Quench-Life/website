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
    title: "Friendly People",
    description: "You will be welcomed warmly from the moment you arrive.",
  },
  {
    title: "Powerful Worship",
    description: "Spirit-led worship that points people to Jesus and freedom in Christ.",
  },
  {
    title: "Bible Teaching",
    description: "Practical, scripture-centered teaching you can apply this week.",
  },
  {
    title: "Real Community",
    description: "A church family where relationships are authentic and life-giving.",
  },
];

const testimonials = [
  {
    quote:
      "Quench Life has been a place of healing and growth for our family. We felt at home right away.",
    name: "Young Family, Dublin",
  },
  {
    quote: "The Wednesday service has refreshed my faith and helped me reconnect with God.",
    name: "Professional, Tri-Valley",
  },
  {
    quote: "The teaching is clear, biblical, and full of hope. It changed how I live daily.",
    name: "First-Time Visitor",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.toFixed(1),
      bestRating: "5",
      ratingCount: "1",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-14">
        <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:pr-10">
              <p className="inline-flex rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-amber-200">
                ★ 5.0 Rated Local Church in Dublin
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Find Living Water. Experience True Freedom.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-200">{siteConfig.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/visit"
                  className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/watch"
                  className="rounded-lg border border-slate-500 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Watch a Message
                </Link>
              </div>
              <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                  <p className="font-semibold text-white">Service Time</p>
                  <p className="mt-1 text-slate-300">Wednesdays at 7:30 PM</p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                  <p className="font-semibold text-white">Location</p>
                  <p className="mt-1 text-slate-300">{siteConfig.address.street}</p>
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

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center shadow-sm">
          <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Come Be Refreshed. Come Be Filled. Come Be Transformed.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-600">Welcome from the Pastor</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">We are glad you are here.</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Whether you are new to church, returning to faith, or looking for deeper community, there is a place for
              you at Quench Life Christian Fellowship. We are committed to helping you encounter Jesus and walk in
              freedom.
            </p>
            <p className="mt-4 font-semibold text-slate-900">— Pastor Robert L. Scott Jr.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Service Time + Location</h2>
            <p className="mt-3 text-slate-700">
              Join us every Wednesday at 7:30 PM at {siteConfig.address.street}, {siteConfig.address.city}, CA.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Floor 1 · Luso-American Financial</li>
              <li>• Easy parking nearby</li>
              <li>• Friendly hosts ready to help</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/visit"
                className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Get Directions
              </Link>
            </div>
          </article>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What to Expect</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whatToExpect.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Stories of Transformation</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="leading-7 text-slate-700">“{testimonial.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-slate-900">{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Invitation to Visit</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Your next step is simple. Plan your visit and we will make sure your first Wednesday feels easy,
              welcoming, and meaningful.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/visit"
                className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/ministries"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Join a Small Group
              </Link>
            </div>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Start Your Next Step</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>1. Plan your visit</li>
              <li>2. Attend Wednesday service</li>
              <li>3. Join a ministry or small group</li>
              <li>4. Submit a prayer request</li>
              <li>5. Support the mission through giving</li>
            </ul>
          </article>
        </section>

        <section className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight">Give with Confidence</h2>
          <p className="mt-3 max-w-3xl text-slate-200">
            Your generosity helps us reach people with the Gospel, disciple believers, and serve our local community.
            Giving is secure, simple, and impactful.
          </p>
          <Link
            href="/give"
            className="mt-6 inline-block rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Give Online
          </Link>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Find Us in Dublin, California</h2>
            <p className="mt-3 text-slate-700">
              {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
            </p>
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Map to Quench Life Christian Fellowship"
                src="https://www.google.com/maps?q=7080%20Donlon%20Way%20Suite%20217%20Dublin%20CA%2094568&output=embed"
                loading="lazy"
                className="h-72 w-full"
              />
            </div>
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

        <section className="grid gap-6 md:grid-cols-3">
          <Link href="/visit" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:bg-slate-100">
            <h2 className="text-lg font-semibold text-slate-900">Plan Your Visit</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">Let us know you’re coming and we’ll help you feel at home.</p>
          </Link>
          <Link
            href="/watch"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:bg-slate-100"
          >
            <h2 className="text-lg font-semibold text-slate-900">Watch a Message</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">Explore faith, freedom, healing, and purpose in Christ.</p>
          </Link>
          <Link
            href="/ministries"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:bg-slate-100"
          >
            <h2 className="text-lg font-semibold text-slate-900">Join a Ministry</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Small groups, prayer ministry, outreach, youth, and serving opportunities.
            </p>
          </Link>
        </section>
      </div>
    </>
  );
}
