export const siteConfig = {
  name: "Quench Life Christian Fellowship",
  shortName: "Quench Life",
  description:
    "A Christian fellowship helping people grow in Christ through worship, discipleship, prayer, and authentic community.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.quenchlife.org",
  phone: "(925) 549-4054",
  email: "hello@quenchlife.org",
  address: {
    street: "7080 Donlon Way, Ste. 217",
    city: "Dublin",
    region: "CA",
    postalCode: "94568",
  },
  serviceTimes: [
    "Sunday Online Service — 11:00 AM",
    "1st & 3rd Sundays Hybrid Service (in-person + online) — 11:00 AM",
  ],
  weeklyConnections: [
    "Sunrise Prayer — Mondays, 6:30–7:00 AM (Zoom)",
    "Bible Life Group — Wednesdays, 7:30 PM (Zoom)",
    "Women's Discipleship — 2nd & 4th Mondays, 7:30 PM (Zoom)",
    "Men's Discipleship — 1st, 3rd & 5th Saturdays, 9:00 AM (Zoom)",
  ],
};

export function getAbsoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
