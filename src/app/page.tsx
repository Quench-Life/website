import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Come thirsty. Never thirst again.",
  description: "Quench Life Christian Fellowship is a small non-denominational church in Dublin, California.",
};

const cards = [
  ["Wednesdays · 7:30 PM", "Bible Life Group", "A dozen or so people around a table, working through a book of the Bible together. Bring your questions and something to snack on.", "/connect"],
  ["Twice monthly", "Men's Discipleship", "Honest conversation about work, family, faith and failure, with men who will not let you coast through it.", "/men"],
  ["Twice monthly", "Women's Discipleship", "Study, prayer and real friendship across every season of life.", "/women"],
  ["Anytime", "Ask for prayer", "Tell us what is heavy and a real person will pray for it this week.", "/prayer"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">A church in Dublin, California</p>
              <h1 style={{ marginTop: "1.1rem" }}>Come thirsty.<br /><em>Never thirst <span className="hl">again.</span></em></h1>
              <p className="lede">Everybody&apos;s thirsty for something. We&apos;re a small non-denominational church learning to drink from the one well that doesn&apos;t run dry, and there&apos;s more than enough room at it for you.</p>
              <div className="cta-row"><Link className="btn btn-solid" href="/visit">What a Sunday looks like</Link><Link className="btn btn-ghost" href="/listen">Watch this week first</Link></div>
              <dl className="when"><div><dt>Sundays</dt><dd>11:00 AM — in person &amp; online</dd></div><div><dt>Where</dt><dd>7080 Donlon Way, Suite 217<br />Dublin, CA 94568</dd></div><div><dt>Wednesdays</dt><dd>Bible Life Group, 7:30 PM</dd></div></dl>
            </div>
            <figure className="photo arch"><Image src="/quenchlife/img/hero-after-service.jpg" alt="Two members of Quench Life talking over coffee after a Sunday service" width={1200} height={1500} priority /></figure>
          </div>
        </section>
        <div className="curve"><svg viewBox="0 0 1440 88" preserveAspectRatio="none" width="100%" height="100%"><path d="M0 88V30c240-42 480 32 720 32s480-74 720-32v58Z" /></svg></div>
        <section className="band"><div className="wrap">
          <div className="sec-head"><p className="eyebrow">Your first Sunday</p><h2>Here&apos;s exactly what happens, so <span className="hl">nothing</span> catches you off guard.</h2><p className="lede">No spotlight, no name tag, no standing up to introduce yourself. Just an hour and a quarter you can walk into cold.</p></div>
          <div className="steps">{[["10:45 – 11:00 AM", "You walk in", "Free parking right out front. Someone meets you at the door and shows you a seat. Come in jeans, come in your best, come in scrubs off a night shift all of it is normal here."], ["11:00 AM – 12:15 PM", "We sing, then open the Word", "About 10 minutes of worship, then a teaching straight out of Scripture with multiple translations so you really get to know God's word."], ["12:15 PM onward", "Nobody hurries off", "More coffee, real questions, prayer if you want it, and usually somebody inviting somebody else to lunch. Linger as long as you like or slip out. No pressure."]].map(([time, title, text]) => <article className="step" key={title}><span className="clock">{time}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>
        <section><div className="narrow"><div className="sec-head"><p className="eyebrow">The questions people actually ask</p><h2>Honest answers, no church-speak.</h2></div><div className="qa">{[["What should I wear?", "Whatever you'd wear to meet friends or parents for brunch. You see button-downs next to folks in hoodies just like folks will wear dresses or pants. Nobody notices either way. We just ask for everyone to respect each other."], ["I'm bringing kids. What do I do with them?", "Kids are genuinely welcome in the service. While we don't have a class for kids, we invite them to learn about God's word as well."], ["Will you ask me for money?", "There's an offering during the service; however, we want you to give without reluctance when you're ready. It's never the price of admission to Quench Life."], ["I’m not sure what I believe. Is that a problem?", "Not remotely. Half the good conversations here start with an honest doubt. Sit in and listen. When you feel the need, ask hard questions whenever you're ready. Just know sometimes the answer isn't what you think."], ["What does \"non-denominational\" mean?", "NON_DENOMINATIONAL"], ["Can I just watch online first?", "Yes. Services stream live every Sunday at 11:00 AM and stay up afterward."]].map(([q, a]) => <details key={q}><summary>{q}</summary><div className="answer">{a === "NON_DENOMINATIONAL" ? <>We aren&apos;t part of a larger denomination. We teach the Bible, center everything on Jesus, and keep the main things the main things. Our full statement of beliefs is <Link href="/about">right here</Link>, in plain English.</> : a}</div></details>)}</div></div></section>
        <section className="verse"><div className="narrow"><blockquote>Whoever <span className="drink">drinks</span> the water I give them will never thirst.</blockquote><cite>John 4:14 · the verse we&apos;re named for</cite></div></section>
        <section id="connect"><div className="wrap"><div className="sec-head"><p className="eyebrow">Room at the well</p><h2>Sunday is the front door. This is where it gets personal.</h2><p className="lede">Church happens in living rooms as much as in rows of chairs. Pick whichever door feels least intimidating.</p></div><div className="cards">{cards.map(([tag, title, text, href]) => <article className="card" key={title}><span className="when-chip">{tag}</span><h3>{title}</h3><p>{text}</p><Link className="more" href={href}>Find out more →</Link></article>)}</div></div></section>
        <section className="band"><div className="wrap watch"><div className="player"><Image src="/quenchlife/img/sermon-poster.jpg" alt="Sermon poster for the latest Quench Life message" width={1280} height={800} /><button className="play" aria-label="Play the latest message">▶</button></div><div><p className="eyebrow">Watch &amp; listen</p><h2 style={{ marginTop: ".8rem", fontSize: "clamp(2rem,4.2vw,3rem)", fontWeight: 300 }}>Catch up from your kitchen table.</h2><p className="lede" style={{ marginTop: "1.1rem" }}>Every service streams live Sunday at 11:00 AM and is archived right after.</p><div className="cta-row"><Link className="btn btn-solid" href="/listen">Watch the latest</Link><Link className="btn btn-ghost" href="/listen">Listen to the podcast</Link></div></div></div></section>
        <section><div className="wrap split"><figure className="photo arch"><Image src="/quenchlife/img/congregation-singing.jpg" alt="The Quench Life congregation singing together" width={1200} height={1344} /></figure><div><p className="eyebrow">What we&apos;re here for</p><h2 style={{ marginTop: ".8rem", fontSize: "clamp(2rem,4.2vw,3rem)", fontWeight: 300 }}>Lead people to Jesus. Grow them up. Send them out.</h2><p className="lede" style={{ marginTop: "1.3rem" }}>Our mission is to lead people to Jesus and membership in His family, develop them to Christ-like maturity, and equip them for their ministry.</p><div className="cta-row"><Link className="btn btn-ghost" href="/about">Read what we believe</Link><Link className="btn btn-ghost" href="/about">Meet our leaders</Link></div></div></div></section>
      </main>
    </>
  );
}
