import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer",
  description: "Join Quench Life Christian Fellowship in weekly prayer and submit your prayer request.",
};

export default function PrayerPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">Prayer</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let us pray</h1>
        <p className="mt-4 text-slate-700">
          Our Sunrise Prayer Call is a weekly gathering where we seek God together, intercede for one another, and
          lift up our church and community in faith.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Sunrise Prayer Call</h2>
        <p className="mt-2 text-sm font-medium text-cyan-700">Mondays at 6:30 AM</p>
        <p className="mt-3 text-slate-700">
          Whether you join live to pray with us or submit a prayer request, we invite you to stand in faith with our
          church family.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Join the Prayer Call</h3>
          <p className="mt-2 text-sm text-slate-700">
            Visit our events page for current connection details for the weekly prayer gathering.
          </p>
          <a
            href="/events"
            className="mt-4 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            View Events
          </a>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Submit a Prayer Request</h3>
          <p className="mt-2 text-sm text-slate-700">
            Share your request and our team will pray with you.
          </p>
          <a
            href="mailto:hello@quenchlife.org?subject=Prayer%20Request"
            className="mt-4 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Email Prayer Team
          </a>
        </article>
      </section>
    </div>
  );
}
