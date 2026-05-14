import type { Metadata } from "next";
import Image from "next/image";
import { Apple, CirclePlay, Music2, Podcast } from "lucide-react";
import podcastLogo from "../../../../media/podcast/Logo_onebyone_PR.png";

export const metadata: Metadata = {
  title: "Podcast Ministry",
  description: "Listen to messages and podcast episodes from Quench Life Christian Fellowship.",
};

const platforms = [
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/one-by-one/id1455996620",
    Icon: Apple,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@quenchlifechristianfellowship",
    Icon: CirclePlay,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/2gpTxpGaoWmKDWUNzbMCbw?si=4e24d6576659463e",
    Icon: Music2,
  },
  {
    name: "Podbean",
    href: "https://quenchlife.podbean.com/",
    Icon: Podcast,
  },
];

export default function PodcastMinistryPage() {
  return (
    <div className="space-y-8">
      <section className="relative min-h-[28rem] overflow-hidden rounded-2xl bg-slate-900 text-white shadow-sm">
        <Image src={podcastLogo} alt="Podcast ministry artwork" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-cyan-900/70" />
        <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200">Listen</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Sermons and teaching</h1>
          <p className="mt-4 max-w-2xl text-slate-200">
            Stay encouraged with biblical teaching from Quench Life Christian Fellowship throughout the week.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-2">
          <article>
            <h2 className="text-xl font-semibold text-slate-900">Current Episode: A Prayerful Life</h2>
            <p className="mt-3 text-slate-700">
              <span className="font-medium">What does it look like to truly pray without ceasing?</span>
            </p>
            <p className="mt-3 text-slate-700">
              In this powerful series, Pastor Robert and his wife Carolyn unpack the fullness of prayer—showing how
              each type of prayer plays a vital role in a believer&apos;s life. Whether you&apos;re new to prayer or
              seeking to grow stronger in your faith, these messages will challenge and equip you to live a life
              marked by intentional, ongoing connection with God.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">Listen on this page</h3>
            <div className="mt-3">
              <iframe
                title="One by One"
                allowTransparency
                height={315}
                width="100%"
                style={{ border: "none", minWidth: "min(100%, 430px)", height: "315px" }}
                scrolling="no"
                data-name="pb-iframe-player"
                src="https://www.podbean.com/player-v2/?i=g4zh4-429d26-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&font-color=auto&logo_link=episode_page&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=8bbb4e&size=315"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Listen on your preferred platform</h2>
        <p className="mt-3 text-slate-700">
          Looking for more episodes? Find us on your favorite podcast platforms.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
            >
              <Icon className="h-4 w-4 text-slate-700" aria-hidden="true" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Radio Broadcast</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">Gospel 1190 AM</h3>
            <p className="mt-2 text-sm text-slate-700">The Light: Sundays at 11:30 AM</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">KFAX AM 1100</h3>
            <p className="mt-2 text-sm text-slate-700">Sundays at 6:30 PM</p>
          </article>
        </div>
      </section>
    </div>
  );
}
