"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function PlanVisitForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      heardAbout: formData.get("heardAbout"),
    };

    try {
      const response = await fetch("/api/forms/visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to submit your request.");
      }

      setStatus("success");
      setMessage(result.message ?? "Thanks! We will reach out shortly.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="visit-name" className="text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="visit-name"
          name="name"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
        />
      </div>
      <div>
        <label htmlFor="visit-email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="visit-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
        />
      </div>
      <div>
        <label htmlFor="visit-phone" className="text-sm font-medium text-slate-700">
          Phone
        </label>
        <input
          id="visit-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
        />
      </div>
      <div>
        <label htmlFor="visit-hear" className="text-sm font-medium text-slate-700">
          How did you hear about us?
        </label>
        <input
          id="visit-hear"
          name="heardAbout"
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Let Us Know You’re Coming"}
      </button>
      {message ? (
        <p className={`text-sm ${status === "success" ? "text-emerald-700" : "text-rose-700"}`} aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
