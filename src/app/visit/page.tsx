import type { Metadata } from "next";
import { PlanVisitForm } from "@/components/plan-visit-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description: "Everything you need for your first visit to Quench Life Christian Fellowship in Dublin, CA.",
};

export default function VisitPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-200">Plan Your Visit</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Your first visit made simple</h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          We know visiting a church for the first time can feel like a big step. We are here to make it easy,
          welcoming, and meaningful from the moment you arrive.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">What happens when I arrive?</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Friendly hosts will greet you and help you get settled.</li>
            <li>• Sunday service begins at 11:00 AM with worship and biblical teaching.</li>
            <li>• After service, connect with leaders and learn your next steps.</li>
          </ul>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Practical details</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Parking: Free parking available near Suite 217.</li>
            <li>• What to wear: Come as you are.</li>
            <li>• Kids ministry: Family-friendly environment and support available.</li>
            <li>• Address: {siteConfig.address.street}, Dublin, CA 94568</li>
          </ul>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Let Us Know You’re Coming</h2>
          <p className="mt-3 text-slate-700">
            Fill this out and we will be ready to welcome you when you arrive.
          </p>
          <div className="mt-6">
            <PlanVisitForm />
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Directions</h2>
          <p className="mt-3 text-slate-700">
            {siteConfig.address.street}, {siteConfig.address.locationDetail}
          </p>
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Directions to Quench Life Christian Fellowship"
              src="https://www.google.com/maps?q=7080%20Donlon%20Way%20Suite%20217%20Dublin%20CA%2094568&output=embed"
              loading="lazy"
              className="h-72 w-full"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
