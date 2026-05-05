import type { Metadata } from "next";
import { LeadershipBioCard } from "@/components/leadership-bio-card";
import carolynPhoto from "../../../media/leadership/CS bio pic.jpg";
import pastorRobertPhoto from "../../../media/leadership/PR bio pic_edited.jpg";

export const metadata: Metadata = {
  title: "About",
  description: "Learn our mission, core beliefs, and vision at Quench Life Christian Fellowship.",
};

const pastorRobertBio = [
  "Pastor Robert L. Scott Jr. is originally from Oakland, California where he obtained his early education through high school. He accepted the call to the ministry in the year 2000, as a member of Bethel Missionary Baptist Church, pastored by the late Dr. Herbert Guice. Pastor Robert attended Bay Cities Bible Institute where he met the late Dr. Donel Reedus, Pastor of East Bay Bible Church. Pastor Robert later became the Youth Minister and Worship Pastor at East Bay. There he continued his maturation and received the honor of being ordained in the ministry. Later Pastor Robert and family joined Destiny Christian Fellowship in Fremont, California where he served in the Men’s Discipleship Ministry and as part of the ministerial support team to the late Pastor Paul E. Sheppard.",
  "Pastor Robert participated in other ministry work with organizations/churches such as the Men in the Cross, B.A.S.S., Praise Fellowship Bible Church, and Abundant Life Christian Fellowship. A passionate teacher, coach and mentor, Pastor Robert taught bible class at lunch time during his previous employment with New United Motors Manufacturing Inc. (NUMMI) for 16 years and coached basketball for about the same.",
  "Pastor Robert completed his undergraduate education with William Jessup University where he earned a Bachelor of Science degree in Counseling Psychology and a minor in Bible and Theology. He has been married since 1986 to his high school sweetheart Carolyn Scott. They are proud parents of son Kamile-Jamal (K.J.) Scott, and goddaughters Sarah Moncada and Mikiah Aubert, and now blessed grandparents of a beautiful baby girl! The newest addition to the family is courtesy of KJ and his wife Nicole, all of which are blessings from the Lord.",
  "Since 2015 Pastor Robert had been sensing the Lord saying He was going to do something great in Robert’s life and ministry; something greater than Robert had ever done before. Through a series of events in 2016 that are now a part of his testimony, Pastor Robert and his wife followed the Lord’s leading to launch Quench Life Christian Fellowship. Pastor and his wife press forward to fulfill God's call while continuing to maintain full-time employment outside of the church.",
];

const carolynScottBio = [
  "Carolyn Scott was raised in Oakland, California where she obtained her early education through high school. She accepted Christ at an early age and was baptized at Bethel Missionary Baptist Church by the late Dr. Herbert Guice. There she first served in ministry service as a Secretary for her Sunday School class. She later also served as a Sunday School teacher and member of the Echoes of Bethel and Voices of Bethel choirs for many years. When her husband followed the Lord’s leading and took on different ministry positions at other churches, Carolyn made the transitions with him and continued to support him in service. She also served in administration and the children’s ministry for the churches they joined.",
  "Carolyn completed her undergraduate degree at California State University East Bay (Hayward) where she majored in Adult Human Development and minored in Business Administration. She also earned a Master of Public Administration with emphasis in Human Resource Management from the same institution. Vocationally she has worked in the public sector for over 25 years with a good portion of those years being in the fields of Human Resources and Education.",
  "Carolyn is happily married to her former high school sweetheart and Student Body President, Pastor Robert Scott Jr. They are proud parents of son Kamile-Jamal (K.J.) Scott, and goddaughters Sarah Moncada and Mikiah Aubert, and now blessed grandparents of a beautiful baby girl! The newest addition to the family is courtesy of KJ and his wife Nicole, all of which are blessings from the Lord.",
  "Carolyn is very nurturing, has a heart to serve, and is gifted in administration and leadership. She presses forward to fulfill God's call while continuing to maintain full-time employment outside of the church. She is excited and constantly looks forward to what the Lord has in store for her life of service through Quench Life Christian Fellowship.",
];

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-600">About</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Bible-centered. Jesus-focused. Spirit-led.
        </h1>
        <p className="mt-4 max-w-4xl text-slate-700">
          Quench, or satisfy, that inner thirst with the Word of God. Live the &quot;quench life&quot; and never
          thirst again. &quot;But whoever drinks the water I give them will never thirst.&quot; (John 4:14).
        </p>
        <p className="mt-3 max-w-4xl text-slate-700">
          The purpose/mission of Quench Life Christian Fellowship is to lead people to Jesus and membership in His
          family, develop them to Christ-like maturity, and equip them for their ministry in the church and their life
          mission in the world, to magnify God&apos;s name.
        </p>
        <p className="mt-3 max-w-4xl text-slate-700">
          Quench Life&apos;s Vision Statement: To see every member in every generation living a filled life in Jesus
          Christ. &quot;...I have come that they may have life, and have it to the full.&quot; (John 10:10)
        </p>
        <p className="mt-3 max-w-4xl text-slate-700">
          Quench Life Christian Fellowship is a non-denominational church. Our purpose is based on The Great
          Commandment (Matthew 22:36-40) and The Great Commission (Matthew 28:19-20). Found in these are the five
          purposes of the church: Discipleship, Evangelism, Fellowship, Ministry and Worship. All of our activities
          reflect these five purposes.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Leadership</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <LeadershipBioCard
            role="Pastor"
            name="Robert L. Scott Jr."
            paragraphs={pastorRobertBio}
            image={{ src: pastorRobertPhoto, alt: "Pastor Robert L. Scott Jr." }}
          />
          <LeadershipBioCard
            role="Pastor's Wife & Executive Director"
            name="Carolyn Scott"
            paragraphs={carolynScottBio}
            image={{ src: carolynPhoto, alt: "Carolyn Scott" }}
          />
        </div>
      </section>
    </div>
  );
}
