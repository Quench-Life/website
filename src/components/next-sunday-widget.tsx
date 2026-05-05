"use client";

import { useState } from "react";

type NextService = {
  dateLabel: string;
  isHybrid: boolean;
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

export function NextSundayWidget() {
  const [nextService] = useState<NextService>(() => {
    const nextSunday = getNextSunday(getPacificNow());
    return {
      dateLabel: formatServiceDate(nextSunday),
      isHybrid: isHybridSunday(nextSunday),
    };
  });

  const isHybrid = nextService?.isHybrid ?? false;

  return (
    <section className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Next Sunday</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Service Format</h2>
      <p className="mt-2 text-slate-700">{nextService.dateLabel} · 11:00 AM Pacific</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <article className={`rounded-2xl border p-4 ${isHybrid ? "border-slate-200 bg-white" : "border-blue-300 bg-blue-50"}`}>
          <p className="text-sm font-semibold text-slate-900">Online Sunday</p>
          <p className="mt-1 text-sm text-slate-700">Join from home for worship, prayer, and biblical teaching.</p>
        </article>
        <article className={`rounded-2xl border p-4 ${isHybrid ? "border-blue-300 bg-blue-50" : "border-slate-200 bg-white"}`}>
          <p className="text-sm font-semibold text-slate-900">In-Person Sunday (1st & 3rd)</p>
          <p className="mt-1 text-sm text-slate-700">7080 Donlon Way, Ste 217, Dublin, CA.</p>
        </article>
      </div>
    </section>
  );
}
