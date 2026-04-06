import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
  description: "Give securely at Quench Life Christian Fellowship with recurring or one-time options.",
};

export default function GivePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-200">Give</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Generosity with purpose</h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          Your giving helps people encounter Jesus, grow in faith, and experience practical care through the ministry
          of Quench Life Christian Fellowship.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-700">
          “Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
          for God loves a cheerful giver.” — <span className="italic">2 Corinthians 9:7</span>
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Recurring Giving</h2>
          <p className="mt-3 text-sm text-slate-700">
            Set up an automated recurring gift to support consistent ministry impact.
          </p>
          <a
            href="https://www.quenchlife.org/giving"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Start Recurring Giving
          </a>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">One-Time Gift</h2>
          <p className="mt-3 text-sm text-slate-700">
            Make a one-time gift quickly and securely through our online giving page.
          </p>
          <a
            href="https://www.quenchlife.org/giving"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Give One-Time
          </a>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Secure Giving Options</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>• Online giving (encrypted provider)</li>
          <li>• Zelle: QuenchLife@gmail.com</li>
          <li>• In-person offering during Wednesday service</li>
          <li>• Mail: P.O. Box 2934, Dublin, CA 94568</li>
        </ul>
      </section>
    </div>
  );
}
