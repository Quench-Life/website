import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Watch Messages",
  description: "Watch recent sermons from Quench Life Christian Fellowship in an embed-ready message library.",
};

const recentMessages = [
  { title: "Faith That Overcomes", topic: "Faith", date: "This Week" },
  { title: "Freedom Through Christ", topic: "Freedom", date: "Last Week" },
  { title: "Healing for the Whole Person", topic: "Healing", date: "2 Weeks Ago" },
  { title: "Purpose in Every Season", topic: "Purpose", date: "3 Weeks Ago" },
];

const topics = ["Faith", "Freedom", "Healing", "Purpose"];

export default function WatchMessagesPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-200">Watch Messages</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Message Library</h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          Explore recent sermons and watch encouragement rooted in Scripture. This layout is ready for YouTube embed
          links as you publish new messages.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/visit"
            className="rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Submit a Prayer Request
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Recent Sermons</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {recentMessages.map((message) => (
            <article key={message.title} className="rounded-xl border border-slate-200 p-4">
              <div className="aspect-video rounded-lg border border-dashed border-slate-300 bg-slate-100 p-4 text-sm text-slate-600">
                YouTube embed placeholder for “{message.title}”
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{message.title}</h3>
              <p className="text-sm text-slate-600">
                Topic: {message.topic} • {message.date}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Topic Categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span key={topic} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Livestream Ready</h2>
        <p className="mt-3 text-slate-700">
          This page is structured for future livestream integration so weekly broadcasts can be highlighted here.
        </p>
      </section>
    </div>
  );
}
