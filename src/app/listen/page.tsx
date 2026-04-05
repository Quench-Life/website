import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listen",
  description: "Listen to messages and podcast episodes from Quench Life Christian Fellowship.",
};

const platforms = ["Apple Podcasts", "YouTube", "Spotify", "Podbean"];

export default function ListenPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">Listen</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Sermons and teaching</h1>
        <p className="mt-4 text-slate-700">
          Stay encouraged with biblical teaching from Quench Life Christian Fellowship throughout the week.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Current Episode: Its Function - Part 3</h2>
        <p className="mt-3 text-slate-700">
          From the series <span className="font-medium">The Body of Christ</span>: God has intentionally equipped
          every believer for meaningful participation through spiritual gifts, abilities, and life experiences.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Listen on your preferred platform</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform) => (
            <div key={platform} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
              {platform}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Radio Broadcast</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li>Gospel 1190 AM - The Light: Sundays at 11:30 AM</li>
          <li>KFAX AM 1100: Sundays at 6:30 PM</li>
        </ul>
      </section>
    </div>
  );
}
