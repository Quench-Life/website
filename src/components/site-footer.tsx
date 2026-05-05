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
          <Link href="/prayer" className="block hover:text-white">
            Prayer
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

        <div className="space-y-3 text-sm">
          <p className="font-semibold text-white">Worship With Us</p>
          <p>Sundays at 11:00 AM</p>
          <p>1st & 3rd Sundays are in-person at Ste 217.</p>
          <p>Other Sundays are online worship.</p>
          <Link href="/visit" className="inline-block pt-1 font-semibold text-white underline-offset-4 hover:underline">
            Plan your visit →
          </Link>
          <p className="pt-2 text-xs text-slate-400">© {new Date().getFullYear()} {siteConfig.shortName}</p>
        </div>
      </div>
    </footer>
  );
}
