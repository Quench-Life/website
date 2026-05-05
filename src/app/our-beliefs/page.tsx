import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Beliefs",
  description: "Read the core beliefs of Quench Life Christian Fellowship.",
};

const beliefs = [
  {
    title: "ABOUT GOD",
    description:
      "God is the Creator and Ruler of the universe. He has eternally existed in three persons: the Father, the Son, and the Holy Spirit. These three are co-equal and are one God.",
    references:
      "Genesis 1:1, 26–27; 3:22; Deuteronomy 6:4; Psalm 90:2; Matthew 28:19; 1 Peter 1:2; 2 Corinthians 13:14",
  },
  {
    title: "ABOUT MANKIND",
    description:
      "We were originally created in the image and after the likeness of God. As a result of the disobedience of Adam, all of us fell into sin and are separated from God. Though we are the supreme object of God’s creation, we are marred by an attitude of disobedience; therefore, we need to be reconciled to God through His Son Jesus Christ.",
    references: "Genesis 1:27; Psalm 8:3–6; Isaiah 53:6a; Romans 3:23; Isaiah 59:1–2",
  },
  {
    title: "ABOUT ETERNITY",
    description:
      "We are created to exist forever. We will either exist eternally separated from God by sin or in union with God by grace through faith in Jesus Christ. To be eternally separated from God is Hell. To be eternally in union with Him is eternal life. Heaven and Hell are places of eternal existence.",
    references: "John 3:16; 1 John 2:25; 1 John 5:11–13; Romans 6:23; Revelation 20:15; Matthew 25:31–46",
  },
  {
    title: "ABOUT JESUS CHRIST",
    description:
      "Jesus Christ is equal with the Father as God. He is the Son of God and the second person in the Godhead. He lived a sinless human life and offered Himself as the perfect sacrifice for the sins of all people by dying on a cross. He arose from the dead after three days to demonstrate His power over sin and death. He ascended to Heaven’s glory and will return again to earth to reign as the King of kings and Lord of lords. He is the mediator between God and man.",
    references:
      "Matthew 1:22–23; Isaiah 9:6; John 1:1–5,14; 10:30; Colossians 2:9; 1 Timothy 2:5; 6:14–15; Hebrews 4:14–15; 1 Corinthians 15:3–4; Romans 1:3–4; Acts 1:9–11; Titus 2:13",
  },
  {
    title: "ABOUT SALVATION",
    description:
      "Salvation is a gift from God obtained by grace through faith in Jesus Christ. Because Jesus Christ died, was buried, and raised for the sin of the world, we can be saved from the penalty of sin. We can never make up for our sin by self-improvement or good works. Eternal life begins the moment we receive Jesus Christ into our life.",
    references: "Romans 6:23; Ephesians 2:8–9; John 14:6; 1:12; Titus 3:5–6; Galatians 3:26; Romans 5:1; 1 Corinthians 15:1–4",
  },
  {
    title: "ABOUT ETERNAL SECURITY",
    description:
      "Because God gives us eternal life through Jesus Christ, we are secure in salvation for eternity. Salvation is maintained by the grace and power of God, not by our self-effort. It is the grace and keeping power of God that gives us this security.",
    references: "John 10:27–30; Hebrews 10:10, 14; 1 Peter 1:3–5; Ephesians 1:13–14",
  },
  {
    title: "ABOUT THE HOLY SPIRIT",
    description:
      "The Holy Spirit is equal with the and the Son as God, and He is the third person in the Godhead. He is present in the world to make people aware of their need for Jesus Christ. He also lives in every Christian from the moment of salvation. He provides us with power for living, understanding of spiritual truth, and guidance in doing what is right. We seek to live under His control daily.",
    references: "John 16:7–13; 14:16–17; Acts 1:8; 1 Corinthians 2:12; 3:16; Ephesians 1:13; Galatians 5:25",
  },
  {
    title: "ABOUT THE BIBLE",
    description:
      "The Holy Bible was written by men who were moved by the Holy Spirit. It is the record of God’s revelation of Himself to man. It has God for its author, salvation for its end, and truth, without any mixture of error, for its matter. It reveals the principles by which God judges man. It is the supreme source of truth for Christian beliefs and living. The criterion by which the Bible is to be interpreted is Jesus Christ.",
    references: "2 Timothy 3:16; 1:13; 2 Peter 1:20–21; Psalm 119:105, 160; 12:6; Proverbs 30:5",
  },
];

export default function OurBeliefsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What We Believe</h1>
        <p className="mt-4 text-slate-700 italic">
          Therefore let us pursue the things which produce peace and the things that build up one another.(Romans 14:19
          MEV)
        </p>
        <p className="mt-4 text-slate-700">
          A key principle we live by is to focus on the things that unite us, not the things that may divide us. There
          are some essentials that we agree on.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {beliefs.map((belief) => (
          <article key={belief.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{belief.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{belief.description}</p>
            <p className="mt-4 text-sm font-medium text-cyan-800">{belief.references}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
