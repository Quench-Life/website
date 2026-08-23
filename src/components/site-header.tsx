import Link from "next/link";

const navItems = [
  { href: "/visit", label: "I'm New" },
  { href: "/connect", label: "Connect" },
  { href: "/listen", label: "Watch" },
  { href: "/about", label: "Beliefs" },
  { href: "/give", label: "Give" },
];

export function SiteHeader() {
  return (
    <header>
      <div className="wrap bar">
        <Link href="/" className="logo" aria-label="Quench Life home">
          <svg className="mark" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M20 3.5c6.9 8.6 10.8 14.2 10.8 19.5A10.8 10.8 0 0 1 20 33.8 10.8 10.8 0 0 1 9.2 23c0-5.3 3.9-10.9 10.8-19.5Z" fill="none" stroke="var(--navy)" strokeWidth="2.2" />
            <path d="M13.2 22.4c1.8 1.7 3.5 1.7 5.2 0s3.5-1.7 5.2 0 3.5 1.7 3.5 1.7M13.6 27.2c1.7 1.6 3.4 1.6 5 0s3.4-1.6 5 0" fill="none" stroke="var(--cyan)" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span className="wordmark">Quench Life<small>Christian Fellowship</small></span>
        </Link>
        <nav aria-label="Main navigation">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        <Link className="btn btn-solid" href="/visit">Plan your visit</Link>
      </div>
    </header>
  );
}
