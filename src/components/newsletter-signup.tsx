"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function NewsletterSignup() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: formData.get("email"),
    };

    try {
      const response = await fetch("/api/forms/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to subscribe right now.");
      }

      setStatus("success");
      setMessage(result.message ?? "Thanks for subscribing.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <label htmlFor="newsletter-email" className="text-sm font-medium text-slate-700">
        Email Address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
          placeholder="you@example.com"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Submitting..." : "Subscribe"}
        </button>
      </div>
      {message ? (
        <p className={`text-sm ${status === "success" ? "text-emerald-700" : "text-rose-700"}`} aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
