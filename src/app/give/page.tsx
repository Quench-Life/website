import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
  description: "Give online, with Zelle, in person, or by mail at Quench Life Christian Fellowship.",
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
          <h2 className="text-xl font-semibold text-slate-900">Give Online</h2>
          <p className="mt-3 text-sm text-slate-700">
            Make your gift securely through our online giving platform.
          </p>
          <a
            href="https://giving.myamplify.io/app/giving/Quen6937408"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Give Online
          </a>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Donate with Zelle</h2>
          <p className="mt-3 text-sm text-slate-700">
            Use Zelle to give quickly from your bank app.
          </p>
          <a
            href="https://www.zelle.com/get-started"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Donate with Zelle
          </a>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Secure Giving Options</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>• Give online using the secure link above.</li>
          <li>• Donate with Zelle using the link above.</li>
          <li>• Give in person during Sunday service at 11:00 AM.</li>
          <li>• Give by mail: Send checks or money orders to:</li>
          <li className="pl-4">Quench Life Christian Fellowship</li>
          <li className="pl-4">P.O. Box 2934, Dublin, CA 94568</li>
        </ul>
      </section>
    </div>
  );
}
