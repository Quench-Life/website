import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men's Discipleship",
  description: "Learn about the MEANTorship Project men's discipleship ministry.",
};

export default function MenPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">MEANTorship Project</h1>
        <p className="mt-2 text-sm font-medium text-cyan-700">1st, 3rd & 5th Saturdays at 9:00 AM</p>
        <p className="mt-4 text-slate-700">
          Becoming the men we are meant to be through discipleship, accountability, and practical growth.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Mission</h2>
          <p className="mt-2 text-sm text-slate-700">
            To generate positive behavioral change by helping men learn to lead, teach, and team.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Vision</h2>
          <p className="mt-2 text-sm text-slate-700">Better relationships, better communities, and a better world.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Ground Rules</h2>
          <p className="mt-2 text-sm text-slate-700">Respect, honesty, transparency, confidentiality, and participation.</p>
        </article>
      </section>
    </div>
  );
}
