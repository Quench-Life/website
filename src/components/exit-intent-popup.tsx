"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const POPUP_LAST_SEEN_KEY = "qlcf-exit-popup-last-seen-at";
const POPUP_COOLDOWN_MS = 1000 * 60 * 60 * 24 * 10;
const MIN_TIME_ON_PAGE_MS = 1000 * 30;
const MIN_SCROLL_PERCENT = 35;

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const now = Date.now();
    const lastSeenAt = Number.parseInt(window.localStorage.getItem(POPUP_LAST_SEEN_KEY) ?? "0", 10);
    if (Number.isFinite(lastSeenAt) && now - lastSeenAt < POPUP_COOLDOWN_MS) return;

    let hasEnoughTime = false;
    let hasEnoughScroll = false;

    const timeTimer = window.setTimeout(() => {
      hasEnoughTime = true;
    }, MIN_TIME_ON_PAGE_MS);

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      hasEnoughScroll = scrollPercent >= MIN_SCROLL_PERCENT;
    };

    const markSeen = () => {
      window.localStorage.setItem(POPUP_LAST_SEEN_KEY, String(Date.now()));
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (event.relatedTarget === null && event.clientY <= 8 && hasEnoughTime && hasEnoughScroll) {
        setIsOpen(true);
        markSeen();
      }
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    document.addEventListener("mouseout", handleMouseOut);
    updateScrollProgress();

    return () => {
      window.clearTimeout(timeTimer);
      window.removeEventListener("scroll", updateScrollProgress);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm px-4 sm:px-0" role="dialog" aria-label="Plan your visit">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">Before you go</p>
        <h2 className="mt-2 text-xl font-bold text-slate-900">We’d Love to Meet You</h2>
        <p className="mt-3 text-slate-700">
          Join us this Sunday at 11:00 AM and discover a welcoming church family in Dublin.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/visit"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            onClick={() => setIsOpen(false)}
          >
            Plan Your Visit
          </Link>
          <button
            type="button"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            onClick={() => setIsOpen(false)}
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
