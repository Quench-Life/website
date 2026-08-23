import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() { return ["the-well-at-noon", "a-prayerful-life", "living-water"].map((slug) => ({ slug })); }
export const metadata: Metadata = { title: "Message", description: "Watch and share a Quench Life Sunday message." };

export default async function MessagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug === "a-prayerful-life" ? "A Prayerful Life" : slug === "living-water" ? "Living Water" : "The Well at Noon";
  return <main><section className="page-hero"><div className="narrow"><p className="eyebrow">Sunday message</p><h1>{title}</h1><p className="lede" style={{ marginTop: "1.4rem" }}>Quench Life Christian Fellowship · Dublin, California</p><div className="player" style={{ marginTop: "2.4rem" }}><div className="message-placeholder">Video player</div></div><div className="cta-row"><Link className="btn btn-ghost" href="/listen">Back to archive</Link><a className="btn btn-solid" href="https://www.youtube.com/@quenchlifechristianfellowship" target="_blank" rel="noreferrer">Watch on YouTube</a></div></div></section></main>;
}
