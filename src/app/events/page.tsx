import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events & Ministries",
  description: "Find weekly discipleship groups and fellowship events at Quench Life Christian Fellowship.",
};

const ministryHighlights = [
  {
    name: "Bible Life Group",
    details: "Wednesdays at 7:30 PM (Zoom)",
    description:
      "A midweek discipleship space to study Scripture, discuss practical application, and encourage one another.",
  },
  {
    name: "Purpose Driven Women",
    details: "2nd & 4th Mondays at 7:30 PM (Zoom)",
    description:
      "A welcoming community for women to grow in Christ through discussion, Bible study, and prayer.",
  },
  {
    name: "MEANTorship Project",
    details: "1st, 3rd & 5th Saturdays at 9:00 AM (Zoom)",
    description:
      "A men’s discipleship community focused on spiritual growth, leadership, and accountability.",
  },
];

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Events & Ministries</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Explore the ways to stay connected throughout the week through prayer, Bible study, discipleship groups, and
          fellowship gatherings.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Weekly Rhythm</h2>
        <ul className="mt-4 space-y-3 text-slate-700">
          {siteConfig.weeklyConnections.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {ministryHighlights.map((ministry) => (
          <article key={ministry.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{ministry.name}</h3>
            <p className="mt-2 text-sm font-medium text-cyan-700">{ministry.details}</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">{ministry.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Quarterly Gathering</h2>
        <p className="mt-3 text-slate-700">
          <span className="font-semibold">Let&apos;s Stay Connected</span> brings together our men&apos;s and women&apos;s
          discipleship groups for fellowship, encouragement, and shared growth.
        </p>
      </section>
    </div>
  );
}
