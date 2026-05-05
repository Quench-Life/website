import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Discover weekly ministries and connection points at Quench Life Christian Fellowship.",
};

const ministries = siteConfig.weeklyConnections.map((item) => {
  const [name, details] = item.split("—").map((part) => part.trim());
  const cta =
    name === "Bible Life Group"
      ? { label: "Learn More", href: "/ministries/bible-life-group" }
      : name === "Prayer Ministry"
        ? { label: "I'm Interested", href: "/ministries/prayer-ministry" }
        : name === "Women's Discipleship"
          ? { label: "Learn More", href: "/ministries/womens-discipleship" }
          : name === "Men's Discipleship"
            ? { label: "Learn More", href: "/ministries/mens-discipleship" }
            : name === "Podcast Ministry"
              ? { label: "Listen In", href: "/ministries/podcast-ministry" }
        : null;

  return {
    name,
    description: details ?? "",
    cta,
  };
});

export default function MinistriesPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-200">Ministries</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Find your place to connect and grow</h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          These ministries come directly from our Connect page so you can quickly see where to plug in this week.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ministries.map((ministry) => (
          <article key={ministry.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{ministry.name}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">{ministry.description}</p>
            {ministry.cta ? (
              <div className="mt-4">
                <Link
                  href={ministry.cta.href}
                  className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  {ministry.cta.label}
                </Link>
              </div>
            ) : null}
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
