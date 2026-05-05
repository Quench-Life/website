"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type LeadershipBioCardProps = {
  role: string;
  name: string;
  paragraphs: string[];
  previewCount?: number;
  image?: {
    src: StaticImageData;
    alt: string;
  };
};

export function LeadershipBioCard({ role, name, paragraphs, previewCount = 2, image }: LeadershipBioCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, previewCount);
  const canExpand = paragraphs.length > previewCount;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      {image ? (
        <div className="mb-5 overflow-hidden rounded-xl border border-slate-200">
          <Image src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
        </div>
      ) : null}
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">{role}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{name}</h3>
      <div className="mt-4 space-y-4 text-slate-700">
        {visibleParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {canExpand ? (
        <button
          type="button"
          onClick={() => setIsExpanded((value) => !value)}
          className="mt-5 text-sm font-semibold text-blue-800 underline-offset-4 hover:underline"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </article>
  );
}
