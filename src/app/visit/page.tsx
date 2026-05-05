import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Baby, Car, Clock3, MapPin, MonitorPlay, Shirt, Users } from "lucide-react";
import { GoogleMapEmbed } from "@/components/google-map-embed";
import { PlanVisitForm } from "@/components/plan-visit-form";
import { siteConfig } from "@/lib/site";
import hebrewsSeriesImage from "../../../media/message_series/hebrews.png";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description: "Plan your first visit to Quench Life Christian Fellowship in Dublin, CA.",
};

function getPacificNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
}

function getNextSunday(now: Date) {
  const nextSunday = new Date(now);
  const daysUntilSunday = (7 - now.getDay()) % 7;
  nextSunday.setDate(now.getDate() + daysUntilSunday);
  return nextSunday;
}

function isHybridSunday(date: Date) {
  const weekOfMonth = Math.ceil(date.getDate() / 7);
  return weekOfMonth === 1 || weekOfMonth === 3;
}

function formatServiceDate(date: Date) {
  return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

export default function VisitPage() {
  const nextServiceDate = getNextSunday(getPacificNow());
  const nextIsHybrid = isHybridSunday(nextServiceDate);
  const nextServiceLabel = nextIsHybrid ? "Hybrid In-Person Sunday" : "Online Sunday";
  const mapAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
  const onlineZoomUrl = "https://us02web.zoom.us/j/617224920?pwd=UGVac2R4R1ZjU0lKSzViSktPSm15Zz09";
  const messageOutlineUrl = "/documents/sundayservice/message-outline.txt";
  const inPersonAddress = `${siteConfig.address.street}, Suite 217, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;

  return (
    <div className="space-y-10 pb-24 md:pb-0">
      <section className="relative overflow-hidden rounded-3xl shadow-xl">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-cyan-800/65" />
        </div>
        <div className="relative p-8 text-white sm:p-10 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Quench Life in Dublin, CA</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            You&apos;re Invited. Experience Life to the Full.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            We help first-time guests feel at home from day one with clear next steps, friendly hosts, and a warm
            community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#online-service"
              className="rounded-2xl bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Online
            </Link>
            <Link
              href="#in-person-service"
              className="rounded-2xl border border-blue-200/70 bg-blue-900/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800/40"
            >
              In Person
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="rounded-2xl bg-cyan-50 p-4 text-slate-900 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Next Service</p>
          <p className="mt-2 text-xl font-bold">
            {formatServiceDate(nextServiceDate)} · {nextServiceLabel}
          </p>
          <p className="mt-1 text-sm text-slate-700">Service starts at 11:00 AM Pacific.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article
            className={`rounded-2xl border p-5 shadow-sm transition ${
              !nextIsHybrid ? "border-cyan-400 bg-cyan-50/70" : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-start gap-3">
              <MonitorPlay className="mt-0.5 h-5 w-5 text-cyan-700" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Online Sundays</h2>
                <p className="mt-2 text-sm text-slate-700">
                  Join from home for worship, prayer, and the message each Sunday.
                </p>
              </div>
            </div>
          </article>

          <article
            className={`rounded-2xl border p-5 shadow-sm transition ${
              nextIsHybrid ? "border-orange-300 bg-orange-50/70" : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-start gap-3">
              <Users className="mt-0.5 h-5 w-5 text-orange-600" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Hybrid In-Person Sundays (1st & 3rd)</h2>
                <p className="mt-2 text-sm text-slate-700">
                  Worship together at {siteConfig.address.street}, Suite 217, while streaming online.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="rounded-3xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Current Message Series</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">The Book of Hebrews</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-blue-200 bg-white">
          <Image src={hebrewsSeriesImage} alt="Current Message Series: The Book of Hebrews" className="h-64 w-full object-cover" />
        </div>
        <p className="mt-3 max-w-4xl text-slate-700">
          The Book of Hebrews reveals the supremacy of Jesus Christ and the power of God&apos;s Word in the life of every
          believer.
        </p>
        <p className="mt-3 max-w-4xl text-slate-700">
          This message series challenges us to move forward in maturity and remain anchored in the truth of who Jesus is
          and all that He has accomplished. Be sure to download the message outline to follow along during the service.
        </p>
        <div className="mt-6">
          <Link
            href={messageOutlineUrl}
            target="_blank"
            className="inline-flex rounded-xl bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Message Outline
          </Link>
        </div>
      </section>

      <section id="online-service" className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Online Option</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Worship Online This Sunday</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Join us live at 11:00 AM Pacific from anywhere. You can hop on Zoom and follow along with the weekly message
          outline.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={onlineZoomUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Join via Zoom
          </Link>
        </div>
      </section>

      <section id="in-person-service" className="space-y-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">No surprises</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">What your first Sunday feels like</h2>
          <p className="mt-3 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-slate-800">
            <MapPin className="h-4 w-4 text-blue-700" aria-hidden="true" />
            {inPersonAddress}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Car className="h-6 w-6 text-cyan-700" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Parking & Entry</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Free parking is available around the building. Our hosts can help you find Suite 217 quickly.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Shirt className="h-6 w-6 text-cyan-700" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">What to Wear</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Come as you are. You&apos;ll see everything from casual to dressy, and everyone is welcome.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Baby className="h-6 w-6 text-cyan-700" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">For the Kids</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Families are valued here. We provide a supportive, family-friendly environment each Sunday.
            </p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <article id="location" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3 text-slate-900">
            <MapPin className="h-5 w-5 text-orange-500" aria-hidden="true" />
            <h2 className="text-2xl font-semibold">Find Us in Dublin</h2>
          </div>
          <p className="mt-3 text-sm text-slate-700">
            {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}{" "}
            {siteConfig.address.postalCode}
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <GoogleMapEmbed
              title="Directions to Quench Life Christian Fellowship"
              address={mapAddress}
              className="h-80 w-full"
            />
          </div>
          <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <p className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
              <Clock3 className="h-4 w-4 text-cyan-700" aria-hidden="true" />
              Sundays at 11:00 AM
            </p>
            <p className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
              <MapPin className="h-4 w-4 text-cyan-700" aria-hidden="true" />
              {siteConfig.address.locationDetail}
            </p>
          </div>
        </article>

        <article id="plan-your-visit" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Plan Your Visit</h2>
          <p className="mt-3 text-slate-700">
            Share a few details and our team will be ready to welcome you personally.
          </p>
          <div className="mt-6">
            <PlanVisitForm />
          </div>
        </article>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <Link
          href="#plan-your-visit"
          className="block rounded-2xl bg-blue-800 px-6 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-blue-700"
        >
          Join Us — Plan Your Visit
        </Link>
      </div>
    </div>
  );
}
