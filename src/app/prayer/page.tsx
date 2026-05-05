import type { Metadata } from "next";
import Image from "next/image";
import sunrisePrayerImage from "../../../media/prayer/sunriseprayer_edited.jpg";

export const metadata: Metadata = {
  title: "Prayer",
  description: "Join Quench Life Christian Fellowship in weekly prayer and submit your prayer request.",
};

export default function PrayerPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">Prayer</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let us pray</h1>
        <p className="mt-4 text-slate-700">
          Our Sunrise Prayer Call is a weekly gathering where we seek God together, intercede for one another, and
          lift up our church and community in faith.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Sunrise Prayer Call</h2>
        <p className="mt-2 text-sm font-medium text-cyan-700">Mondays at 6:30 AM</p>
        <p className="mt-3 text-slate-700">
          Whether you join live to pray with us or submit a prayer request, we invite you to stand in faith with our
          church family.
        </p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2">
          <Image
            src={sunrisePrayerImage}
            alt="Sunrise Prayer Call"
            className="h-72 w-full rounded-xl object-contain object-top"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Join the Prayer Call</h3>
          <p className="mt-2 text-sm text-slate-700">
            Get connection details for the weekly Sunrise Prayer call.
          </p>
          <a
            href="https://app.textinchurch.com/connect-cards/w0Oj25QVccOM8IaDngMR"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Join Prayer Call
          </a>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Submit a Prayer Request</h3>
          <p className="mt-2 text-sm text-slate-700">
            Share your request and our team will pray with you.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSejvc1-Sp5kN5ULb6WT6_jDc-3NQnLDi9qXUvFSsgmp4RvAFA/viewform"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Submit Prayer Request
          </a>
        </article>
      </section>
    </div>
  );
}
