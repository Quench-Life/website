import type { Metadata } from "next";
import Link from "next/link";
import AboutBeliefs from "@/content/about-beliefs.mdx";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our mission, values, and beliefs.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          About Quench Life Christian Fellowship
        </h1>
        <AboutBeliefs />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Link
          href="/who-we-are"
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          Who We Are
        </Link>
        <Link
          href="/our-beliefs"
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          Our Beliefs
        </Link>
        <Link
          href="/our-values"
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          Our Values
        </Link>
      </section>
    </div>
  );
}
