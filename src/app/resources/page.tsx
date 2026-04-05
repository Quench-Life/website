import type { Metadata } from "next";
import Link from "next/link";
import { getResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "Download church resources, PDFs, and study guides.",
};

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Downloadable Resources</h1>
          <p className="mt-3 text-slate-700">Sermon notes, study guides, and forms are available as PDFs.</p>
        </div>
        <Link href="/admin/uploads" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100">
          Admin Upload
        </Link>
      </div>

      {resources.length === 0 ? (
        <p className="mt-8 rounded-lg bg-slate-100 p-4 text-sm text-slate-700">
          No resources uploaded yet. Add PDFs in <code>/public/resources</code> or upload through the admin page.
        </p>
      ) : (
        <ul className="mt-8 space-y-3">
          {resources.map((item) => (
            <li key={item.url} className="rounded-lg border border-slate-200 p-4">
              <a href={item.url} className="font-medium text-cyan-700 hover:text-cyan-900" target="_blank" rel="noreferrer">
                {item.name}
              </a>
              <p className="mt-1 text-xs text-slate-500">
                Source: {item.source === "blob" ? "Vercel Blob" : "Project file"}
                {item.uploadedAt ? ` • Uploaded ${new Date(item.uploadedAt).toLocaleDateString()}` : ""}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
