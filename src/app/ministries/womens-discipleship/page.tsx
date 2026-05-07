import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women's Discipleship",
  description:
    "Sisters-in-Christ, walking together in community to serve in our God-given purposes with humility, grace, and integrity. Through our discussion group and Bible studies, we strive to grow closer to God and closer to one another as we work individually and collectively to fulfill the Great Commandment (Matthew 22:37) and the Great Commission (Matthew 28:18-20).",
};

export default function WomensDiscipleshipPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Purpose Driven Women</h1>
        <p className="mt-4 text-slate-700">
          Sisters-in-Christ, walking together in community to serve in our God-given purposes with humility, grace,
          and integrity. Through our discussion group and Bible studies, we strive to grow closer to God and closer
          to one another as we work individually and collectively to fulfill the Great Commandment (Matthew 22:37) and
          the Great Commission (Matthew 28:18-20).
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Discussion Groups & Bible Studies</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">Discussion Groups</h3>
            <p className="text-slate-700">
              Our discussion group consist of reading a particular book on our own time and meeting regularly to
              discuss truths from God&apos;s word, and insights and wisdom gained from the reading. We also use this as
              an opportunity to share our hearts and learn from each other. Discussion Groups are open to all women
              age 18 years and older.
            </p>
          </article>
          <article className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">Bible Studies</h3>
            <p className="text-slate-700">
              Our Bible studies consist of regular meetings to view guided video sessions with an accompanying
              workbook or worksheets for use during the session. These sessions are rich with discussion on the
              practical application of scripture and may include homework on our own time. Bible Studies are open to
              all women age 18 years and older.
            </p>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Current Study: Created to Dream</h2>
        <p className="mt-2 text-sm font-medium text-cyan-700">2nd & 4th Mondays at 7:30 PM</p>
        <p className="mt-3 text-slate-700">
          Dreaming can stir both excitement and uncertainty. While God plants purpose and vision within us, the
          journey of seeing those dreams unfold often stretches our faith along the way. Scripture reveals that God
          uses a series of intentional seasons to shape, refine, and prepare those He calls to dream boldly.
        </p>
        <p className="mt-4 text-slate-700">
          Join us for this 6-session study where we explore the biblical phases God often uses to develop our faith,
          deepen our trust in Him, and guide us through the process of bringing God-given dreams to life.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Timeline & Meeting Format</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Timeline</h3>
            <p className="mt-1 text-slate-900">February - May 2026</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Location</h3>
            <p className="mt-1 text-slate-900">Online via Zoom Video Conferencing</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Frequency/Length</h3>
            <p className="mt-1 text-slate-900">2nd & 4th Mondays; 90 minutes per meeting</p>
          </article>
        </div>
        <article className="mt-4 rounded-xl border border-cyan-100 bg-cyan-50 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-800">Format</h3>
          <p className="mt-2 text-slate-700">
            Meetings will start with prayer then a recap/summary of last session, followed by a viewing of the
            current video session. We&apos;ll close with discussion on the video, homework for the following week, and
            prayer.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Ground Rules</h2>
        <p className="mt-2 text-slate-700">Please review these expectations so everyone can thrive together.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Participation</h3>
          <p className="mt-2 text-sm text-slate-700">
            Your input matters. The more you put into the group, the more you&apos;ll get out of it. Even if you
            didn&apos;t complete the homework or reading, (or you are experiencing a tough week) keep showing up and
            stay engaged. We&apos;re walking with you on this journey.
          </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Confidentiality</h3>
          <p className="mt-2 text-sm text-slate-700">
            This will be a safe space for everyone. Some of the discussions may bring up personal matters that should
            not be discussed outside of the group, as well as outside of those present at a particular meeting. Your
            participation in the group/study is your agreement to honor your sister&apos;s privacy. Finally to protect
            the integrity of the group and our confidentiality, please turn on your video during online Zoom
            dicsussions.
          </p>
          <p className="mt-3 text-sm text-slate-700">
            Note: While it will be handled with care and sensitivity, it is the church&apos;s responsibility to report
            any disclosure of present harm or physical danger to yourself or someone else.
          </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Faithful Attendance</h3>
          <p className="mt-2 text-sm text-slate-700">
            Please be on time and be prepared to discuss the current topic. We know things happen that cause us to be
            late; if you&apos;ll be more than ten minutes late to (or need to miss) a meeting, please call or text
            someone to let them know. We care about you! And please continue to stay connected even if you are absent.
          </p>
          </article>
        </div>
      </section>
    </div>
  );
}
