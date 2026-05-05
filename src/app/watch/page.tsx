import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer",
  description: "Get connected to Sunrise Prayer and receive the weekly Zoom details.",
};

const interestLink = "https://app.textinchurch.com/connect-cards/w0Oj25QVccOM8IaDngMR";

export default function PrayerPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-200">Prayer Ministry</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">I&apos;m Interested</h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          Sunrise Prayer | Prayer changes things—and even more, it changes us. Our Prayer Ministry Team is hosting a
          weekly Sunrise Prayer call via Zoom to help strengthen and support our community through prayer. Meetings
          are every Monday from 6:30-7:00am. Click the button for more details and to receive the link.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Join Sunrise Prayer</h2>
        <p className="mt-3 text-slate-700">
          We gather every Monday from 6:30-7:00am for focused prayer and encouragement.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={interestLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            I&apos;m Interested
          </Link>
          <Link
            href={interestLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            View Sign-up Link
          </Link>
        </div>
      </section>
    </div>
  );
}
