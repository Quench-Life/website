import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Watch & Listen", description: "Watch Sunday messages and listen to the One by One podcast from Quench Life." };

const messages = [
  ["the-well-at-noon", "The Well at Noon", "John 4", "August 23, 2026", "41 min"],
  ["a-prayerful-life", "A Prayerful Life", "Prayer", "August 16, 2026", "38 min"],
  ["living-water", "Living Water", "John 4:1–26", "August 9, 2026", "44 min"],
];

export default function ListenPage() {
  return <main>
    <section className="page-hero"><div className="wrap"><p className="eyebrow">Watch &amp; listen</p><h1>Catch up from your <span className="hl">kitchen table.</span></h1><p className="lede" style={{ marginTop: "1.4rem" }}>Sunday services stream at 11:00 AM and are archived here afterward. Each message has its own link for sharing.</p></div></section>
    <section className="band"><div className="wrap watch"><div className="player"><Image src="/quenchlife/img/sermon-poster.jpg" alt="Latest Quench Life message" fill sizes="(max-width: 920px) 90vw, 540px" /><span className="play" aria-hidden="true">▶</span></div><div><p className="eyebrow">Latest message</p><h2 style={{ marginTop: ".8rem", fontSize: "clamp(2rem,4.2vw,3rem)", fontWeight: 300 }}>The Well at Noon</h2><p className="lede" style={{ marginTop: "1.1rem" }}>A message from John 4 about the conversation between Jesus and the woman at the well.</p><div className="cta-row"><Link className="btn btn-solid" href="/listen/the-well-at-noon">View message</Link><a className="btn btn-ghost" href="https://www.youtube.com/@quenchlifechristianfellowship" target="_blank" rel="noreferrer">YouTube channel</a></div></div></div></section>
    <section><div className="wrap"><div className="sec-head"><p className="eyebrow">Sermon archive</p><h2>Messages by week.</h2></div><div className="cards">{messages.map(([slug, title, scripture, date, length]) => <article className="card" key={slug}><span className="when-chip">{date}</span><h3>{title}</h3><p>{scripture} · {length}</p><Link className="more" href={`/listen/${slug}`}>Open message →</Link></article>)}</div></div></section>
    <section className="band"><div className="wrap split"><div><p className="eyebrow">One by One podcast</p><h2 style={{ fontSize: "clamp(2rem,4.2vw,3rem)", fontWeight: 300 }}>Listen on the way to work.</h2><p className="lede" style={{ marginTop: "1.1rem" }}>Find Quench Life on Apple Podcasts, Spotify, Podbean, and YouTube.</p></div><a className="btn btn-solid" href="https://quenchlife.podbean.com/" target="_blank" rel="noreferrer">Open podcast</a></div></section>
  </main>;
}
