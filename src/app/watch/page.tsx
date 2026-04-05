import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Watch",
  description: "Join Quench Life Christian Fellowship online each Sunday and watch the latest message.",
};

export default function WatchPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">Watch</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Join us for worship online</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          We gather online every Sunday at 11:00 AM, with hybrid (in-person + online) services on the 1st and 3rd
          Sundays.
        </p>
        <ul className="mt-5 space-y-2 text-slate-700">
          {siteConfig.serviceTimes.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/visit"
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/resources"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Message Resources
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Current Message: Truth Matters</h2>
        <p className="mt-3 text-slate-700">
          Join us as we explore what truth really is and why it matters for everyday life. Through the resurrection of
          Jesus, we are invited into a life transformed by the truth of the Gospel.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Communion</h2>
        <p className="mt-3 text-slate-700">
          We partake in communion on the first Sunday of each month as an act of worship and remembrance of Christ.
          If you are joining online, prepare juice and bread or crackers before service.
        </p>
      </section>
    </div>
  );
}
