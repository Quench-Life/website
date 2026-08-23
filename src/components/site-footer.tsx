import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="wordmark">Quench Life<small style={{ color: "rgba(243,239,232,.55)" }}>Christian Fellowship</small></span>
            <p>7080 Donlon Way, Suite 217<br />Dublin, CA 94568</p>
            <p><a href="tel:9255494054">925-549-4054</a><br /><a href="mailto:info@quenchlife.org">info@quenchlife.org</a></p>
          </div>
          <div><h4>Gather</h4><div className="foot-list"><Link href="/visit">Sundays, 11:00 AM</Link><Link href="/connect">Bible Life Group</Link><Link href="/prayer">Prayer requests</Link></div></div>
          <div><h4>More</h4><div className="foot-list"><Link href="/listen">Watch a service</Link><Link href="/about">What we believe</Link><Link href="/give">Give</Link></div></div>
        </div>
        <div className="colophon"><span>© {new Date().getFullYear()} Quench Life Christian Fellowship · Dublin, California</span><span>Come thirsty. Never thirst again.</span></div>
      </div>
    </footer>
  );
}
