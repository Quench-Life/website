import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Beliefs",
  description: "Read the core beliefs of Quench Life Christian Fellowship.",
};

const beliefs = [
  "God is one and eternally exists as Father, Son, and Holy Spirit.",
  "Jesus Christ is fully God and fully man, our Savior and coming King.",
  "Salvation is by grace through faith in Jesus Christ, not by human effort.",
  "The Holy Spirit empowers believers for holy living and ministry.",
  "The Bible is God’s Word and the final authority for faith and life.",
];

export default function OurBeliefsPage() {
  return (
    <section className="space-y-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Beliefs</h1>
      <p className="text-slate-700">
        We pursue peace and unity by focusing on the essential truths of biblical Christian faith.
      </p>

      <ul className="space-y-3 text-slate-700">
        {beliefs.map((belief) => (
          <li key={belief}>{belief}</li>
        ))}
      </ul>
    </section>
  );
}
