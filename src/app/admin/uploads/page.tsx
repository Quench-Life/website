import type { Metadata } from "next";
import { AdminUploadForm } from "@/components/admin-upload-form";

export const metadata: Metadata = {
  title: "Admin Uploads",
  description: "Upload PDF resources to the church website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminUploadsPage() {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Resource Upload</h1>
      <p className="mt-3 text-slate-700">
        Upload PDFs so they appear automatically on the Resources page. Set <code>CHURCH_ADMIN_UPLOAD_KEY</code> and{" "}
        <code>BLOB_READ_WRITE_TOKEN</code> in Vercel environment variables.
      </p>
      <AdminUploadForm />
    </section>
  );
}
