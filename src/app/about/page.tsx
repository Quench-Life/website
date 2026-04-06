import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn our mission, core beliefs, and vision at Quench Life Christian Fellowship.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-600">About</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Bible-centered. Jesus-focused. Spirit-led.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          {siteConfig.shortName} exists to help people encounter Jesus, experience true freedom, and live transformed
          lives that impact families, workplaces, and communities.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-3 text-slate-700">
            To lead people into a life-giving relationship with Jesus Christ through worship, discipleship, prayer,
            and community.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Our Vision</h2>
          <p className="mt-3 text-slate-700">
            A Spirit-filled church in Dublin where people are refreshed, equipped, and sent to bring Christ into every
            sphere of life.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Core Beliefs</h2>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li>• The Bible is the inspired, authoritative Word of God.</li>
          <li>• Jesus Christ is Savior, Lord, and the only way to eternal life.</li>
          <li>• The Holy Spirit empowers believers for holy living and mission.</li>
          <li>• The local church is called to love God, love people, and make disciples.</li>
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Leadership</h2>
          <p className="mt-3 text-slate-700">
            Pastor bio and leadership details can be updated here as your ministry team grows.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Scripture Foundation</h2>
          <p className="mt-3 text-slate-700 italic">
            “Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is
            at work within us.” — Ephesians 3:20
          </p>
        </article>
      </section>
    </div>
  );
}
