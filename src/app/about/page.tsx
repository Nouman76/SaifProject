// /app/about/page.tsx — About Us page (updated headings, mobile stats, leadership overlay)
import Link from "next/link";
import Image from "next/image";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import type * as React from "react";
import {
  Wrench,
  BrainCircuit,
  Target,
  Globe2,
  ShieldCheck,
  Rocket,
  BarChart3,
  LineChart,
} from "lucide-react";

/* ---------------------------------- BRAND --------------------------------- */
const brand = {
  green: "#34eb40",
  dark: "#0c0f14",
} as const;

/* --------------------------------- METADATA -------------------------------- */
export const metadata = {
  title: "About Us | Intellance — ERP & AI Consulting",
  description:
    "Next-gen digital transformation partner for ERP & AI: SAP, Oracle, Salesforce, automation, analytics.",
};

/* ------------------------------- SMALL UTILS ------------------------------- */
/** Section title with underline that is 50% of the heading width */
function SectionTitle({
  title,
  id,
}: {
  title: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-16 pb-6 scroll-mt-28"
    >
      <div className="inline-block">
        <h3 className="text-2xl md:text-3xl font-extrabold">{title}</h3>
        <div
          className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
          style={{ "--brand": brand.green } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

/* ---------------------------------- DATA ---------------------------------- */
const usp = [
  { icon: Wrench,       title: "End-to-End ERP",           desc: "Implementation, licensing, and managed services for SAP, Oracle, and Salesforce." },
  { icon: BrainCircuit, title: "AI Automation & Analytics", desc: "Predictive insights and intelligent workflows embedded across your stack." },
  { icon: Target,       title: "Industry Accelerators",     desc: "Pre-built templates and KPIs for faster time-to-value in key industries." },
  { icon: Globe2,       title: "24/7 Global Support",       desc: "Follow-the-sun coverage with SLAs tuned to mission-critical operations." },
] as const;

const impactStats = [
  { icon: ShieldCheck, label: "Enterprise implementations", value: "50+" },
  { icon: LineChart,   label: "Client cost savings",        value: "$1B+" },
  { icon: Rocket,      label: "Avg. process efficiency",    value: "30%" },
  { icon: BarChart3,   label: "Faster decisions w/ AI",     value: "25%" },
] as const;

const leadership = [
  {
    name: "Zara Malik",
    role: "CEO & Founder",
    bio: "Visionary strategist with 20+ years in enterprise transformation. Former Deloitte partner.",
    imageUrl:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Rohan Mehta",
    role: "CTO",
    bio: "AI engineer and ERP integration expert. Led automation for 30+ global clients.",
    imageUrl:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Fatima Khan",
    role: "Head of Strategy",
    bio: "Change management guru focused on cross-functional transformation and stakeholder alignment.",
    imageUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1000&auto=format&fit=crop",
  },
];

/* --------------------------------- PAGE ----------------------------------- */
export default function AboutPage() {
  return (
    <main className="scroll-smooth">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/aboutmain.png"
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-3xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            We Don’t Just Consult.
            <br />
            We Transform.
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl leading-relaxed">
            ERP + AI experts helping enterprises move faster with confidence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?type=rfp"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2 text-sm font-semibold transition-all hover:border-[var(--brand)] hover:shadow-[0_8px_24px_rgba(52,235,64,0.18)]"
              style={{ "--brand": brand.green } as React.CSSProperties}
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white text-[#2E2E37]">
        <SectionTitle title="Who We Are" id="who-we-are" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Copy */}
          <div>
            <div className="inline-block mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Next-Gen ERP & AI Consulting
              </h2>
              <div
                className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
                style={{ "--brand": brand.green } as React.CSSProperties}
              />
            </div>

            <p className="text-base sm:text-[1.05rem] md:text-[1.2rem] leading-7 md:leading-8 text-[#2E2E37]/90 mb-5">
              We are a digital transformation partner specializing in ERP and AI
              solutions. With certified expertise in <strong>SAP</strong>,{" "}
              <strong>Oracle</strong>, <strong>Salesforce</strong>, and AI
              technologies, we help enterprises streamline operations, enhance
              decision-making, and scale with confidence.
            </p>
            <p className="text-[0.95rem] sm:text-[1.05rem] md:text-[1.125rem] leading-7 md:leading-8 text-[#2E2E37]/80 mb-6">
              Our approach goes beyond implementation—we align technology with
              strategy, culture, and goals. With industry accelerators,
              AI-driven automation, and 24/7 managed services, we ensure your
              enterprise is not just transformed, but future-ready.
            </p>
            <ul className="space-y-2 text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] font-medium text-[#2E2E37]/90">
              <li>• End-to-end ERP implementation & licensing</li>
              <li>• Industry-specific accelerators</li>
              <li>• AI-powered automation & analytics</li>
              <li>• 24/7 support and managed services</li>
              <li>• Strategic partnerships with leading tech providers</li>
            </ul>
          </div>

          {/* RIGHT: Image + Stats */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <Image
                src="/aboutimg1.jpg"
                alt="About Intellance"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {impactStats.map((st) => (
                <div
                  key={st.label}
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-4 md:p-5 shadow-sm"
                >
                  <div
                    className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl shrink-0"
                    style={{ background: `${brand.green}26`, color: brand.green }}
                  >
                    <st.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    {/* Smaller numbers on mobile */}
                    <div className="text-lg md:text-2xl font-extrabold leading-tight">
                      {st.value}
                    </div>
                    <div className="text-[10px] md:text-xs uppercase tracking-wide text-[#2E2E37]/70">
                      {st.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="bg-white text-[#2E2E37]">
        <SectionTitle title="What Sets Us Apart" id="differentiators" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Big card */}
            <article className="md:row-span-2 relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
              <div
                className="absolute -inset-6 -z-10 rounded-[2rem] blur-2xl"
                style={{ background: `${brand.green}14` }}
              />
              <div className="p-6 md:p-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                  style={{ background: `${brand.green}26`, color: brand.green }}
                >
                  <Wrench className="h-6 w-6" />
                </div>
                <div className="inline-block">
                  <h4 className="text-2xl font-extrabold tracking-tight">
                    Deep ERP Expertise
                  </h4>
                  <div
                    className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
                    style={{ "--brand": brand.green } as React.CSSProperties}
                  />
                </div>
                <p className="mt-3 text-[15px] leading-7 text-[#2E2E37]/90">
                  SAP, Oracle, Salesforce—we’ve mastered the platforms that power
                  global enterprises. From discovery to hypercare, we keep your
                  core clean and future-ready.
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <li className="rounded-lg border border-black/10 bg-black/5 px-3 py-2">S/4HANA, Fusion, Sales Cloud</li>
                  <li className="rounded-lg border border-black/10 bg-black/5 px-3 py-2">Licensing & Managed Services</li>
                  <li className="rounded-lg border border-black/10 bg-black/5 px-3 py-2">Clean-core architectures</li>
                  <li className="rounded-lg border border-black/10 bg-black/5 px-3 py-2">Security & compliance</li>
                </ul>
              </div>
            </article>

            {/* Tiles */}
            {usp.slice(1).map((u) => (
              <article
                key={u.title}
                className="relative overflow-hidden rounded-2xl border border-black/15 bg-black/5 p-6"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-3"
                  style={{ background: `${brand.green}26`, color: brand.green }}
                >
                  <u.icon className="h-6 w-6" />
                </div>
                <div className="inline-block">
                  <h5 className="text-lg font-extrabold tracking-tight">{u.title}</h5>
                  <div
                    className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-2"
                    style={{ "--brand": brand.green } as React.CSSProperties}
                  />
                </div>
                <p className="mt-2 text-[15px] leading-7 text-[#2E2E37]/90">
                  {u.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white text-[#2E2E37]">
        <SectionTitle title="Our Core Values" id="values" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <p className="text-[1.05rem] md:text-[1.2rem] leading-7 md:leading-8 text-[#2E2E37]/85 max-w-prose">
              At <strong>Intellance</strong>, our values shape how we partner, design,
              and deliver. Integrity keeps us honest, innovation keeps us bold,
              collaboration keeps us aligned, and excellence keeps us raising the
              bar—so technology programs turn into lasting business outcomes.
            </p>
          </div>

          {/* RIGHT stacked cards over image */}
          <div className="relative">
            <div className="relative rounded-[1.5rem] overflow-hidden border border-black/10 h-[16rem] md:h-[22rem]">
              <Image
                src="/value-bg.png"
                alt="Core values background"
                fill
                className="object-center"
                priority
              />
            </div>

            <ul className="pointer-events-none select-none">
              <li className="absolute -left-6 -top-6 md:-left-10 md:-top-8 w-[min(92%,34rem)]">
                <div className="rounded-[1.25rem] bg-white border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-extrabold text-[#B0B4BA] leading-none">01</span>
                    <div>
                      <h5 className="text-[1.05rem] md:text-[1.15rem] font-extrabold">Integrity</h5>
                      <div
                        className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-2"
                        style={{ "--brand": brand.green } as React.CSSProperties}
                      />
                      <p className="mt-1 text-sm md:text-[0.95rem] text-[#2E2E37]/75">We do what’s right, not what’s easy.</p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="absolute -left-3 top-[34%] md:-left-6 md:top-[36%] w-[min(94%,34rem)]">
                <div className="rounded-[1.25rem] bg-white border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-extrabold text-[#B0B4BA] leading-none">02</span>
                    <div>
                      <h5 className="text-[1.05rem] md:text-[1.15rem] font-extrabold">Innovation</h5>
                      <div
                        className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-2"
                        style={{ "--brand": brand.green } as React.CSSProperties}
                      />
                      <p className="mt-1 text-sm md:text-[0.95rem] text-[#2E2E37]/75">We challenge the status quo with bold ideas.</p>
                    </div>
                  </div>
                </div>
              </li>

              <li className="absolute -left-8 bottom-[-1.25rem] md:-left-10 md:bottom-[-1.5rem] w-[min(96%,34rem)]">
                <div className="rounded-[1.25rem] bg-white border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-extrabold text-[#B0B4BA] leading-none">03</span>
                    <div>
                      <h5 className="text-[1.05rem] md:text-[1.15rem] font-extrabold">Collaboration</h5>
                      <div
                        className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-2"
                        style={{ "--brand": brand.green } as React.CSSProperties}
                      />
                      <p className="mt-1 text-sm md:text-[0.95rem] text-[#2E2E37]/75">We work with you, not just for you.</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="h-10" />
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-black/90 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-16 pb-14 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white/10 p-8 shadow-sm">
            <p className="text-sm font-semibold mb-2" style={{ color: brand.green }}>
              Our Vision
            </p>
            <div className="inline-block">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
                To Be the World’s Most Trusted Partner in Enterprise Transformation
              </h3>
              <div
                className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
                style={{ "--brand": brand.green } as React.CSSProperties}
              />
            </div>
            <p className="mt-3 text-[15px] leading-7 text-white/90">
              Where ERP meets AI, and innovation meets impact. We envision enterprises scaling intelligently
              with resilience, agility, and measurable growth.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white/10 p-8 shadow-sm">
            <p className="text-sm font-semibold mb-2" style={{ color: brand.green }}>
              Our Mission
            </p>
            <div className="inline-block">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
                Empowering Organizations to Scale Intelligently
              </h3>
              <div
                className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
                style={{ "--brand": brand.green } as React.CSSProperties}
              />
            </div>
            <p className="mt-3 text-[15px] leading-7 text-white/90">
              By delivering tailored ERP solutions, AI-driven automation, and strategic consulting that
              drive measurable growth, operational excellence, and digital resilience.
            </p>
          </div>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="bg-white text-[#2E2E37] mt-[54px]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
              <Image
                src="/ceo.png"
                alt="CEO Portrait"
                width={600}
                height={500}
                className="object-cover w-full h-full grayscale"
              />
            </div>

            <div>
              <div className="inline-block mb-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ color: brand.green }}>
                  Message from Our CEO
                </h2>
                <div
                  className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
                  style={{ "--brand": brand.green } as React.CSSProperties}
                />
              </div>

              <div className="space-y-4 text-[15px] leading-7 text-[#2E2E37]/90">
                <p>
                  At our core, we believe that transformation is not just about technology—it’s about people,
                  purpose, and progress. When I founded this company, the goal was simple: to help enterprises
                  navigate complexity with clarity.
                </p>
                <p>
                  Today, we stand as a global leader in ERP and AI consulting, trusted by industry giants and
                  ambitious disruptors alike. Our mission remains unchanged—to deliver solutions that are
                  intelligent, scalable, and deeply aligned with our clients’ vision.
                </p>
                <p>
                  We’ve built more than systems. We’ve built trust. Every engagement is a partnership, every
                  solution bespoke, and every success shared.
                </p>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-lg">Saif Ur Rehman</p>
                <p className="text-sm text-[#2E2E37]/70">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-[radial-gradient(120%_120%_at_5%_-10%,#ffffff_0%,#f7f9fc_60%,#eef2f7_100%)] text-[#2E2E37]">
        <SectionTitle title="Meet Our Leadership" id="leadership" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {leadership.map((member) => (
              <div key={member.name} className="relative">
                {/* Desktop: show details on hover via DirectionAwareHover; Mobile: always-visible caption */}
                <DirectionAwareHover
                  imageUrl={member.imageUrl}
                  className="rounded-xl overflow-hidden border border-black/10 grayscale-75 shadow-lg"
                >
                  {/* Hide this inside overlay on mobile (we add our own mobile caption below) */}
                  <div className="hidden md:block p-4">
                    <p className="font-bold text-lg">{member.name}</p>
                    <p className="text-sm text-white/80">{member.role}</p>
                    <p className="mt-2 text-xs text-white/70">{member.bio}</p>
                  </div>
                </DirectionAwareHover>

                {/* Mobile caption (always visible), hidden on md+ */}
                <div className="md:hidden absolute inset-x-0 bottom-0 bg-black/55 text-white p-3">
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-[11px] text-white/80">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200">
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_5%_-10%,#151821_0%,#0c0f14_60%,#0a0d12_100%)]" />
            <div className="relative px-6 md:px-10 py-8 md:py-10 text-white grid grid-cols-1 md:grid-cols-3 items-center gap-6">
              <div className="md:col-span-2">
                <div className="inline-block">
                  <h3 className="text-2xl md:text-3xl font-extrabold">
                    Ready to build what matters?
                  </h3>
                  <div
                    className="h-[2px] w-1/2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
                    style={{ "--brand": brand.green } as React.CSSProperties}
                  />
                </div>
                <p className="mt-2 text-white/80 text-sm">
                  We’ll tailor a plan to your pipeline, SLAs, and KPIs.
                </p>
              </div>
              <div className="md:justify-self-end flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-[#34eb40] px-5 py-2 text-sm font-semibold transition hover:border-[var(--brand)] hover:bg-[var(--brand)] text-[var(--dark)]"
                  style={
                    {
                      "--brand": brand.green,
                      "--dark": brand.dark,
                    } as React.CSSProperties
                  }
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
