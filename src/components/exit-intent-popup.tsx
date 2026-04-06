"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const wasSeen = window.sessionStorage.getItem("qlcf-exit-popup-seen");
    if (wasSeen === "true") return;

    const handleMouseOut = (event: MouseEvent) => {
      if (event.relatedTarget === null && event.clientY <= 8) {
        setIsOpen(true);
        window.sessionStorage.setItem("qlcf-exit-popup-seen", "true");
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-700">New Here?</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">We’d Love to Meet You</h2>
        <p className="mt-3 text-slate-700">
          Join us this Sunday at 11:00 AM and discover a welcoming church family in Dublin.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
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
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
