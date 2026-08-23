import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Connect", description: "Find a small group, discipleship gathering, or prayer support at Quench Life." };

const groups = [
  ["Wednesdays · 7:30 PM", "Bible Life Group", "A weekly Zoom discussion about a book of the Bible. Bring your questions and a Bible.", "/ministries/bible-life-group"],
  ["Twice monthly", "Men's Discipleship", "Conversation about work, family, faith, and failure with men from Quench Life.", "/ministries/mens-discipleship"],
  ["Twice monthly", "Women's Discipleship", "Bible study, prayer, and friendship across different seasons of life.", "/ministries/womens-discipleship"],
];

export default function ConnectPage() {
  return <main>
    <section className="page-hero"><div className="wrap"><p className="eyebrow">Room at the well</p><h1>Find a place to <span className="hl">belong.</span></h1><p className="lede" style={{ marginTop: "1.4rem" }}>Sunday service is one place to start. These gatherings make room for questions, prayer, and regular conversation.</p></div></section>
    <section className="band"><div className="wrap"><div className="sec-head"><p className="eyebrow">Weekly connections</p><h2>Choose a starting point.</h2></div><div className="cards">{groups.map(([tag, title, text, href]) => <article className="card" key={title}><span className="when-chip">{tag}</span><h3>{title}</h3><p>{text}</p><Link className="more" href={href}>Learn more →</Link></article>)}</div></div></section>
    <section><div className="wrap prayer"><div><p className="eyebrow">Prayer requests</p><h2 style={{ marginTop: ".8rem", fontSize: "clamp(2rem,4.4vw,3rem)", fontWeight: 300 }}>Send a request to the prayer team.</h2><p className="lede" style={{ marginTop: "1.1rem" }}>Use the prayer form to share as much or as little as you want. Requests go to the church team.</p></div><div><Link className="btn btn-solid" href="/prayer">Request prayer</Link></div></div></section>
  </main>;
}
