import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Meet the leadership of Quench Life Christian Fellowship.",
};

export default function WhoWeArePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Who We Are</h1>
        <p className="mt-4 text-slate-700">
          Quench Life Christian Fellowship is led by Pastor Robert L. Scott Jr. and Executive Director Carolyn Scott
          with a heart for discipleship, spiritual growth, and practical ministry.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Pastor Robert L. Scott Jr.</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            A passionate teacher and mentor, Pastor Robert has served in multiple ministry contexts and launched Quench
            Life Christian Fellowship in obedience to God&apos;s call. He and Carolyn have served together in ministry
            for many years while continuing to work full-time outside the church.
          </p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Carolyn Scott</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Carolyn serves as Pastor&apos;s Wife and Executive Director, bringing strong gifts in administration,
            leadership, and discipleship. She is committed to serving with humility and helping the church body grow in
            maturity and purpose.
          </p>
        </article>
      </section>
    </div>
  );
}
