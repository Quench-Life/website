export const siteConfig = {
  name: "Quench Life Christian Fellowship",
  shortName: "Quench Life",
  description:
    "A Spirit-filled Christian church in Dublin, CA helping people encounter Jesus and live transformed lives.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://quenchlife.org",
  phone: "(925) 549-4054",
  email: "hello@quenchlife.org",
  address: {
    street: "7080 Donlon Way Suite 217",
    city: "Dublin",
    region: "CA",
    postalCode: "94568",
    locationDetail: "Floor 2",
  },
  serviceTimes: ["Sunday Service — 11:00 AM"],
  weeklyConnections: [
    "Bible Life Group — Wednesdays, 7:30 PM (Zoom)",
    "Prayer Ministry — Mondays, 6:30-7:00 AM (Zoom)",
    "Women's Discipleship — 2nd & 4th Mondays, 7:30 PM (Zoom)",
    "Men's Discipleship — 1st, 3rd & 5th Saturdays, 9:00 AM (Zoom)",
    "Podcast Ministry — Listen to messages and encouragement on demand",
  ],
  seoKeywords: [
    "Christian Church in Dublin CA",
    "Church near me Dublin",
    "Sunday church Dublin 11 AM",
  ],
  socialLinks: {
    youtube: "https://www.youtube.com/@quenchlifechristianfellowship",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
};

export function getAbsoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
