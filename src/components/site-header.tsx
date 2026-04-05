import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/connect", label: "Connect" },
  { href: "/events", label: "Events" },
  { href: "/watch", label: "Watch" },
  { href: "/listen", label: "Listen" },
  { href: "/giving", label: "Give" },
  { href: "/prayer", label: "Prayer" },
  { href: "/resources", label: "Resources" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          {siteConfig.shortName}
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
