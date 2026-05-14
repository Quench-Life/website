import type { Metadata } from "next";
import { FileDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Men's Discipleship",
  description: "Learn about the MEANTorship Project men's discipleship ministry.",
};

const joinZoomUrl = "https://us02web.zoom.us/j/610364243?pwd=MkdtTjB2QzRPSmlFbkhtOEJOQVlpUT09";
const meetingAgendaUrl = "/documents/meantorship-project/may2.pdf";

function getPacificNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
}

function isMeetingSunday(date: Date) {
  if (date.getDay() !== 0) return false;
  const weekOfMonth = Math.ceil(date.getDate() / 7);
  return weekOfMonth === 1 || weekOfMonth === 3 || weekOfMonth === 5;
}

function getNextMeetingDate(now: Date) {
  const nextDate = new Date(now);
  for (let i = 0; i < 370; i += 1) {
    if (isMeetingSunday(nextDate)) return nextDate;
    nextDate.setDate(nextDate.getDate() + 1);
  }
  return now;
}

function formatMeetingDate(date: Date) {
  return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

export default function MensDiscipleshipPage() {
  const nextMeetingDate = getNextMeetingDate(getPacificNow());

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">MEANTorship Project</h1>
        <p className="mt-3 text-lg text-slate-700">
          Becoming the men we are <em>meant</em> to be.
        </p>
        <p className="mt-3 text-sm font-medium text-cyan-700">1st, 3rd & 5th Sundays @ 9:00 AM</p>
        <p className="mt-2 text-sm font-semibold text-slate-800">Next Meeting is {formatMeetingDate(nextMeetingDate)}.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={joinZoomUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Join Zoom Meeting
          </a>
          <a
            href={meetingAgendaUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Download Meeting Agenda
          </a>
        </div>
        <p className="mt-4 text-slate-700">
          Meetings are approximately 90 minutes, 2-3 times per month, and open to all men age 18 and over. Come as
          you are and bring a friend. To protect the integrity and confidentiality of our meetings, we ask that you
          leave your video display on.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Last Meeting&apos;s Highlights</h2>
            <p className="mt-2 text-sm text-slate-700">
              We discussed Session 5 – Dealing with Difficulties, watched the video, filled in the blanks, answered
              some of the Living on Purpose questions, and talk about Between the Sessions section (God&apos;s
              Longe-ranged Plans for You) pages 57-70.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Primary goal of today&apos;s meeting</h2>
            <p className="mt-2 text-sm text-slate-700">
              We will go through Session 6 – From Dead Ends to Deliverance, watch the video, fill in the blanks,
              answer the Living on Purpose questions, and talk about After the Sessions section (The Key to
              Deliverance) pages 71-84.
            </p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-2 text-sm text-slate-700">
            To generate positive, behavioral change in our communities by providing an environment where men are
            learning how to lead, teach, and team. (Genesis 2:15-25)
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Our Vision</h2>
          <p className="mt-2 text-sm text-slate-700">
            Better relationships, better communities and a better world. (Philippians 2:1-5)
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Ground Rules</h2>
          <p className="mt-2 text-sm text-slate-700">
            Respect, Honesty, Transparency, Confidentiality, Participation, Humility, Teachability.
          </p>
        </article>
      </section>
    </div>
  );
}
