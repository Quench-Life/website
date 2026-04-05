import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8 md:grid-cols-2">
        <div>
          <p className="font-semibold text-slate-900">{siteConfig.name}</p>
          <p>{siteConfig.address.street}</p>
          <p>
            {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
          </p>
        </div>
        <div className="md:text-right">
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p className="mt-2 text-xs text-slate-500">© {new Date().getFullYear()} {siteConfig.shortName}</p>
        </div>
      </div>
    </footer>
  );
}
