import type { Metadata } from "next";
import AboutBeliefs from "@/content/about-beliefs.mdx";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about our mission, values, and beliefs.",
};

export default function AboutPage() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        About Quench Life Christian Fellowship
      </h1>
      <AboutBeliefs />
    </section>
  );
}
