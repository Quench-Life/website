import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Connect",
  description: "Explore weekly opportunities to connect with Quench Life Christian Fellowship.",
};

export default function ConnectPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Connect with us</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Explore the many ways to connect throughout the week through worship, prayer, and discipleship.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Weekly Connection Points</h2>
        <ul className="mt-4 space-y-3 text-slate-700">
          {siteConfig.weeklyConnections.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Link href="/watch" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Watch Sunday Service</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">Online every Sunday at 11:00 AM.</p>
        </Link>
        <Link href="/events" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Events & Ministries</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">Bible Life Group, men&apos;s and women&apos;s discipleship, and more.</p>
        </Link>
        <Link href="/prayer" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Prayer</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">Join Sunrise Prayer on Mondays at 6:30 AM.</p>
        </Link>
      </section>
    </div>
  );
}
