import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomePhotoCarousel } from "@/components/home-photo-carousel";
import { NextSundayWidget } from "@/components/next-sunday-widget";
import { siteConfig } from "@/lib/site";
import homepageBanner from "../../media/homepage/Quench_WebBanners_Rob&Carolyn.png";
import homePhotoOne from "../../media/homepage/carousel/podium.jpg";
import homePhotoTwo from "../../media/homepage/carousel/come_on_in.jpg";
import homePhotoThree from "../../media/homepage/carousel/family-at-podium.jpg";

export const metadata: Metadata = {
  title: "Jesus Christ: The Water of Life.",
  description: "Find rest for your soul and power for your life at Quench Life Dublin.",
  keywords: siteConfig.seoKeywords,
};

const teachingCards = [
  {
    title: "Jesus Christ: The Water of Life",
    verse: "John 4:13-14",
    description: "Come to the One who satisfies thirst forever and offers living water through the Gospel.",
  },
  {
    title: "Walk in the Spirit",
    verse: "Galatians 5:16-25",
    description: "Learn how life in Christ produces holiness, freedom, and the fruit of the Spirit.",
  },
  {
    title: "Built on the Word",
    verse: "2 Timothy 3:16-17",
    description: "Be rooted in Scripture as the final authority for faith, discipleship, and mission.",
  },
];

const beliefCards = [
  {
    title: "Jesus Is Lord",
    scripture: "Philippians 2:9-11",
    description: "We proclaim Jesus Christ as Lord over every life, every home, and every season.",
  },
  {
    title: "Scripture Is Authority",
    scripture: "2 Timothy 3:16-17",
    description: "The Bible is God-breathed, trustworthy, and our foundation for truth and discipleship.",
  },
];

const homeCarouselSlides = [
  { src: homePhotoOne, alt: "Worship podium prepared for service at Quench Life" },
  { src: homePhotoTwo, alt: "Church member greeting others before service" },
  { src: homePhotoThree, alt: "Church family sharing encouragement at the podium" },
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
        <section className="relative overflow-hidden rounded-3xl bg-blue-950 text-white shadow-2xl">
          <Image
            src={homepageBanner}
            alt="Pastor Robert and Carolyn Scott at Quench Life"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-blue-700/75" />
          <div className="absolute -bottom-24 left-0 right-0 h-56 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.28),transparent_70%)]" />

          <div className="relative p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Quench Life Dublin</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Jesus Christ: The Water of Life.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              Find rest for your soul and power for your life at Quench Life Dublin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/visit"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/our-beliefs"
                className="rounded-xl border border-blue-200/60 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Our Beliefs
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">Sunday Gathering</p>
                <p className="mt-1 text-sm text-blue-100">11:00 AM · Centered on the Gospel and prayer</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">Dublin, CA</p>
                <p className="mt-1 text-sm text-blue-100">7080 Donlon Way, Ste 217 · Serving the Bay Area</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <NextSundayWidget />
          <HomePhotoCarousel slides={homeCarouselSlides} />
        </section>

        <section className="space-y-6 rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">Word of God</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Current Teaching</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Bold, biblical teaching centered on the finished work and present Lordship of Jesus Christ.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {teachingCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{card.verse}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-900 to-blue-700 p-8 text-white shadow-xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">Scriptural Foundation</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Our Beliefs</h2>
          <p className="mt-4 max-w-3xl text-blue-100">
            We are unapologetically centered on Jesus Christ, submitted to His Word, and committed to making disciples.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {beliefCards.map((belief) => (
              <article key={belief.title} className="rounded-2xl border border-blue-200/50 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">{belief.scripture}</p>
                <h3 className="mt-2 text-xl font-bold">{belief.title}</h3>
                <p className="mt-2 text-sm text-blue-100">{belief.description}</p>
              </article>
            ))}
          </div>
          <Link
            href="/our-beliefs"
            className="mt-6 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
          >
            Read Our Beliefs
          </Link>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <article className="rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">Invitation to Christ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">New to Faith? Meet Jesus.</h2>
            <p className="mt-4 text-slate-700">
              If you are searching for truth, peace, or a new beginning, we would love to walk with you through the Gospel.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Learn what it means to follow Jesus Christ</li>
              <li>• Request prayer from our church family</li>
              <li>• Talk with a pastor about next steps in faith</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/our-beliefs"
                className="rounded-xl bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Learn the Gospel
              </Link>
              <Link
                href="/prayer"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Request Prayer
              </Link>
            </div>
          </article>
          <article className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm">
            <div className="overflow-hidden rounded-2xl border border-blue-100">
              <iframe
                title="Map to Quench Life Christian Fellowship"
                src="https://www.google.com/maps?q=7080%20Donlon%20Way%20Suite%20217%20Dublin%20CA%2094568&output=embed"
                loading="lazy"
                className="h-80 w-full"
              />
            </div>
            <Link
              href="/visit"
              className="mt-5 inline-block text-sm font-semibold text-blue-800 underline-offset-4 hover:underline"
            >
              Get directions and plan your first Sunday →
            </Link>
          </article>
        </section>
      </div>
    </>
  );
}
