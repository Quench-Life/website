import Link from "next/link";
import Image from "next/image";
import WelcomeMessage from "@/content/welcome-message.mdx";
import { siteConfig } from "@/lib/site";

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
      <div className="space-y-14">
        <section className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:pr-8 flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">Welcome Home</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                A simple place to find hope, faith, and community in Jesus.
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">{siteConfig.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/visit"
                  className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/events"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  Events & Ministries
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 sm:p-12 lg:pl-0">
              <div className="relative w-full max-w-md aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
                <Image
                  src="/hero-cross.jpg"
                  alt="A cross with uplifting sun rays"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.serviceTimes.map((time) => (
            <div key={time} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{time}</p>
            </div>
          ))}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Kids & Youth Ministry Available</p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <WelcomeMessage />
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <Link href="/about" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-100">
            <h2 className="text-lg font-semibold text-slate-900">About Us</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">Our mission, values, and what we believe.</p>
          </Link>
          <Link href="/visit" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-100">
            <h2 className="text-lg font-semibold text-slate-900">New Here?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">Everything you need to know before your first visit.</p>
          </Link>
          <Link href="/events" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-100">
            <h2 className="text-lg font-semibold text-slate-900">Events & Ministries</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Weekly discipleship groups, prayer gatherings, and fellowship opportunities.
            </p>
          </Link>
          <Link href="/resources" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-100">
            <h2 className="text-lg font-semibold text-slate-900">Faith Resources</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">Download sermon notes, study guides, and church forms.</p>
          </Link>
        </section>
      </div>
    </>
  );
}
