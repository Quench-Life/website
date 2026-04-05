import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Values",
  description: "Discover the Q.U.E.N.C.H. L.I.F.E. values at Quench Life Christian Fellowship.",
};

const values = [
  "Q — Quenching our thirst for God by becoming more like Christ",
  "U — Unity in the body of Christ",
  "E — Engaging people with the love and compassion of Jesus",
  "N — Nurturing strong relationships through small groups",
  "C — Communicating effectively to strengthen oneness",
  "H — Humility because God honors it",
  "L — Listening because it shows we value one another",
  "I — Instruction as lifelong learners",
  "F — Forgiveness as an expression of God’s love",
  "E — Edifying one another to strengthen the body of Christ",
];

export default function OurValuesPage() {
  return (
    <section className="space-y-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Values</h1>
      <p className="text-slate-700">Our values are anchored in Scripture and expressed through Q.U.E.N.C.H. L.I.F.E.</p>
      <ul className="space-y-3 text-slate-700">
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </section>
  );
}
