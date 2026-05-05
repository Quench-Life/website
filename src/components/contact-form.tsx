"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const connectionOptions = [
  "I'm new here and would like more information about Quench.",
  "I made the decision to follow Jesus today.",
  "I'm considering opening my life to Jesus.",
  "I want to know how I can become a member of Quench Life (Class 101).",
  "I'd like to learn more about growing spiritually (Class 201).",
  "I want to serve others in the body of Christ by volunteering with Quench Life.",
];

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interests: formData.getAll("interests"),
      details: formData.get("details"),
    };

    try {
      const response = await fetch("/api/forms/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send your message.");
      }

      setStatus("success");
      setMessage(result.message ?? "Thanks for contacting us.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-first-name" className="text-sm font-medium text-slate-700">
            First Name
          </label>
          <input
            id="contact-first-name"
            name="firstName"
            required
            autoComplete="given-name"
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
          />
        </div>
        <div>
          <label htmlFor="contact-last-name" className="text-sm font-medium text-slate-700">
            Last Name
          </label>
          <input
            id="contact-last-name"
            name="lastName"
            required
            autoComplete="family-name"
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="text-sm font-medium text-slate-700">
          Phone Number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
        />
      </div>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-slate-700">Please select all that apply:</legend>
        <div className="space-y-2">
          {connectionOptions.map((option) => (
            <label key={option} className="flex items-start gap-2 text-sm text-slate-700">
              <input type="checkbox" name="interests" value={option} className="mt-1 h-4 w-4 rounded border-slate-300" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="contact-details" className="text-sm font-medium text-slate-700">
          Anything else you&apos;d like to share?
        </label>
        <textarea
          id="contact-details"
          name="details"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-slate-900"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {message ? (
        <p className={`text-sm ${status === "success" ? "text-emerald-700" : "text-rose-700"}`} aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
