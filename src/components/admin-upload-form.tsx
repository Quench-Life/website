"use client";

import { FormEvent, useState } from "react";

export function AdminUploadForm() {
  const [adminKey, setAdminKey] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file || !adminKey) {
      setStatus("Enter the admin key and choose a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setIsSubmitting(true);
    setStatus("Uploading...");

    try {
      const response = await fetch("/api/resources/upload", {
        method: "POST",
        headers: { "x-admin-key": adminKey },
        body: formData,
      });

      const data = (await response.json()) as { message?: string; url?: string };
      if (!response.ok) {
        setStatus(data.message ?? "Upload failed.");
        return;
      }

      setStatus(`Upload complete: ${data.url}`);
      setFile(null);
    } catch {
      setStatus("Upload failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="admin-key" className="block text-sm font-medium text-slate-800">
          Admin Upload Key
        </label>
        <input
          id="admin-key"
          type="password"
          value={adminKey}
          onChange={(event) => setAdminKey(event.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          placeholder="Enter key"
        />
      </div>
      <div>
        <label htmlFor="pdf" className="block text-sm font-medium text-slate-800">
          PDF File
        </label>
        <input
          id="pdf"
          name="pdf"
          type="file"
          accept="application/pdf"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          className="mt-1 w-full text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-700 disabled:opacity-60"
      >
        {isSubmitting ? "Uploading..." : "Upload PDF"}
      </button>
      {status ? <p className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">{status}</p> : null}
    </form>
  );
}
