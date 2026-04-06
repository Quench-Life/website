export const siteConfig = {
  name: "Quench Life Christian Fellowship",
  shortName: "Quench Life",
  description:
    "A Spirit-filled Christian church in Dublin, CA helping people encounter Jesus and live transformed lives.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://quenchlife.org",
  phone: "(925) 549-4054",
  email: "hello@quenchlife.org",
  rating: 5.0,
  address: {
    street: "7080 Donlon Way Suite 217",
    city: "Dublin",
    region: "CA",
    postalCode: "94568",
    locationDetail: "Floor 1 · Luso-American Financial",
  },
  serviceTimes: ["Wednesday Service — 7:30 PM"],
  weeklyConnections: [
    "Bible Life Group — Wednesdays, 7:30 PM (Zoom)",
    "Prayer Ministry — Sundays, 8:00 AM (Online)",
    "Outreach Team — 2nd Saturday monthly",
    "Women's Discipleship — 2nd & 4th Mondays, 7:30 PM (Zoom)",
    "Men's Discipleship — 1st, 3rd & 5th Saturdays, 9:00 AM (Zoom)",
  ],
  seoKeywords: [
    "Christian Church in Dublin CA",
    "Church near me Dublin",
    "Wednesday night church Dublin",
  ],
  socialLinks: {
    youtube: "https://www.youtube.com/@quenchlife",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
};

export function getAbsoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
