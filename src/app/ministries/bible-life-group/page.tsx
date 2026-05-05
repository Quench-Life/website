import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bible Life Group",
  description: "Bible Life Group details, expectations, and how to join the weekly Wednesday Zoom.",
};

const joinZoomUrl = "https://us02web.zoom.us/j/968974635?pwd=UllxSjN4dzNYVEFkQ05UVjZFY0s5dz09";
const discussionGuideUrl = "https://www.quenchlife.org/_files/ugd/a862b7_0203f3533fad4937921e8a9cbd0901f9.pdf";

export default function BibleLifeGroupPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">Bible Life Group</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How to Join the Conversation</h1>
        <p className="mt-4 text-slate-700">
          Hebrews 10:24-25 reminds us to keep meeting, encouraging, and growing together in Christ.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={joinZoomUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Join Zoom
          </a>
          <a
            href={discussionGuideUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Download Discussion
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">What to Expect (No pressure, just community)</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">A Warm Welcome</h3>
            <p className="mt-2 text-sm text-slate-700">
              We start with catch-up time in a low-pressure space where you can share as much or as little as you like.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Open Dialogue</h3>
            <p className="mt-2 text-sm text-slate-700">
              Our facilitator guides a passage or topic, but the heart of the group is conversation and shared questions.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Come As You Are</h3>
            <p className="mt-2 text-sm text-slate-700">
              Sunday best or comfortable casual, you are welcome here.
            </p>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Why We Gather (Life is Better Together)</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Growing in Faith</h3>
            <p className="mt-2 text-sm text-slate-700">
              We study Scripture to see how God&apos;s truth transforms our everyday life.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Authentic Support</h3>
            <p className="mt-2 text-sm text-slate-700">
              We celebrate wins and pray through struggles together. You are not meant to carry burdens alone.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Practical Application</h3>
            <p className="mt-2 text-sm text-slate-700">
              Weekly questions help bridge the gap between Scripture and modern living.
            </p>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">How to Join the Conversation</h2>
        <ol className="mt-4 space-y-3 text-slate-700">
          <li>
            <span className="font-semibold text-slate-900">Step 1:</span> Grab the guide. Download this week&apos;s
            discussion questions below to follow along or reflect ahead of time.
          </li>
          <li>
            <span className="font-semibold text-slate-900">Step 2:</span> Log on. Join us every Wednesday at 7:30 PM
            on Zoom.
          </li>
          <li>
            <span className="font-semibold text-slate-900">Step 3:</span> Just show up. Bring an open heart and a
            desire to connect.
          </li>
        </ol>
      </section>
    </div>
  );
}
