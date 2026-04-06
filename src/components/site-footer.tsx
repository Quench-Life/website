import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-3 text-sm">
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p>{siteConfig.address.street}</p>
          <p>{siteConfig.address.locationDetail}</p>
          <p>
            {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
          </p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-white">Quick Links</p>
          <Link href="/visit" className="block hover:text-white">
            Plan Your Visit
          </Link>
          <Link href="/watch" className="block hover:text-white">
            Watch Messages
          </Link>
          <Link href="/ministries" className="block hover:text-white">
            Join a Ministry
          </Link>
          <Link href="/give" className="block hover:text-white">
            Give Online
          </Link>
          <p className="pt-3 font-semibold text-white">Follow</p>
          <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noreferrer" className="block hover:text-white">
            YouTube
          </a>
          <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="block hover:text-white">
            Instagram
          </a>
          <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" className="block hover:text-white">
            Facebook
          </a>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-white">Find Us</p>
          <div className="overflow-hidden rounded-xl border border-slate-700">
            <iframe
              title="Quench Life Christian Fellowship map"
              src="https://www.google.com/maps?q=7080%20Donlon%20Way%20Suite%20217%20Dublin%20CA%2094568&output=embed"
              loading="lazy"
              className="h-56 w-full"
            />
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} {siteConfig.shortName}</p>
        </div>
      </div>
    </footer>
  );
}
