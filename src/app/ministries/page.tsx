import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Discover ministries at Quench Life Christian Fellowship: small groups, prayer, outreach, youth, and serving.",
};

const ministries = [
  {
    name: "Small Groups",
    description: "Build meaningful relationships and grow in God’s Word throughout the week.",
  },
  {
    name: "Prayer Ministry",
    description: "Stand in faith for families, the church, and the city through intentional prayer.",
  },
  {
    name: "Outreach",
    description: "Serve the local community with practical love and Gospel-centered compassion.",
  },
  {
    name: "Youth / Young Adults",
    description: "A place for the next generation to find identity, purpose, and spiritual community.",
  },
  {
    name: "Volunteer Teams",
    description: "Use your gifts in hospitality, media, worship support, and care ministries.",
  },
];

export default function MinistriesPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-200">Ministries</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Find your place to grow and serve</h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          Church is more than a service. It is a community where people pray together, learn together, and serve
          together.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ministries.map((ministry) => (
          <article key={ministry.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{ministry.name}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">{ministry.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Take Your Next Step</h2>
        <p className="mt-3 text-slate-700">
          Want help finding the right ministry? Let us know and our team will guide you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Join a Ministry
          </Link>
          <Link
            href="/visit"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
