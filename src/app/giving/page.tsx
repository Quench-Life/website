import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
  description: "Support Quench Life Christian Fellowship through online, Zelle, in-person, or mailed giving.",
};

export default function GivingPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">Give</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ways to give</h1>
        <p className="mt-4 text-slate-700">
          Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
          for God loves a cheerful giver. <span className="italic">2 Corinthians 9:7</span>
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Give Online</h2>
          <p className="mt-2 text-sm text-slate-700">Give once or set up recurring support.</p>
          <a
            href="https://www.quenchlife.org/giving"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Give Now
          </a>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Give with Zelle</h2>
          <p className="mt-2 text-sm text-slate-700">
            Send your gift via Zelle using <span className="font-medium">QuenchLife@gmail.com</span>.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Give In-Person</h2>
          <p className="mt-2 text-sm text-slate-700">
            Tithes and offerings are received during in-person service on 1st and 3rd Sundays.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Give by Mail</h2>
          <p className="mt-2 text-sm text-slate-700">
            Quench Life Christian Fellowship
            <br />
            P.O. Box 2934
            <br />
            Dublin, CA 94568
          </p>
        </article>
      </section>
    </div>
  );
}
