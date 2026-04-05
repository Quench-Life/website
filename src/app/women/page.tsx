import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women's Discipleship",
  description: "Learn about Purpose Driven Women and current discipleship opportunities.",
};

export default function WomenPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Purpose Driven Women</h1>
        <p className="mt-4 text-slate-700">
          A welcoming community of women growing together in faith, humility, grace, and integrity.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Current Study: Created to Dream</h2>
        <p className="mt-2 text-sm font-medium text-cyan-700">2nd & 4th Mondays at 7:30 PM</p>
        <p className="mt-3 text-slate-700">
          Join this multi-session study as we explore how God shapes, refines, and strengthens us through every season
          of faith and calling.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Participation</h3>
          <p className="mt-2 text-sm text-slate-700">Show up consistently and engage with the group.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Confidentiality</h3>
          <p className="mt-2 text-sm text-slate-700">Maintain a safe and trustworthy space for every sister.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Faithful Attendance</h3>
          <p className="mt-2 text-sm text-slate-700">Stay connected and continue to grow together.</p>
        </article>
      </section>
    </div>
  );
}
