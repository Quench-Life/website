import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: "Plan your first visit to Quench Life Christian Fellowship.",
};

export default function VisitPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Plan Your Visit</h1>
        <p className="mt-4 text-slate-700">
          We want your first Sunday to feel easy and welcoming. Come as you are and expect friendly people,
          practical teaching, and Christ-centered worship.
        </p>
        <h2 className="mt-6 text-lg font-semibold text-slate-900">Service Times</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          {siteConfig.serviceTimes.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Location & Contact</h2>
        <p className="mt-3 text-slate-700">{siteConfig.address.street}</p>
        <p className="text-slate-700">
          {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
        </p>
        <p className="mt-4 text-slate-700">{siteConfig.phone}</p>
        <p className="text-slate-700">{siteConfig.email}</p>
        <div className="mt-6 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          Need prayer or have a question? Reach out anytime and our team will follow up with you.
        </div>
      </section>
    </div>
  );
}
