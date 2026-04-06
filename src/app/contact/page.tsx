import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Quench Life Christian Fellowship in Dublin, California.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-200">Contact</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">We would love to hear from you</h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          Reach out with questions, prayer requests, or anything you need. Our team is here to help.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Contact Details</h2>
          <div className="mt-4 space-y-2 text-slate-700">
            <p>{siteConfig.address.street}</p>
            <p>{siteConfig.address.locationDetail}</p>
            <p>
              {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
            </p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
          <p className="mt-5 text-sm text-slate-600">Service Time: Wednesdays at 7:30 PM</p>
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Quench Life Christian Fellowship location"
              src="https://www.google.com/maps?q=7080%20Donlon%20Way%20Suite%20217%20Dublin%20CA%2094568&output=embed"
              loading="lazy"
              className="h-64 w-full"
            />
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Send Us a Message</h2>
          <p className="mt-3 text-slate-700">We will follow up with you as soon as possible.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </article>
      </section>
    </div>
  );
}
