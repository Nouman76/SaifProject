import Link from "next/link";
import ToolCarousel from "@/components/ToolCarousel";

import type { CSSProperties } from "react";
import {
  Briefcase,
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Rocket,
  Layers,
  Cog,
  Workflow,
  Gauge,
} from "lucide-react";

/* ---------------------------------- BRAND --------------------------------- */
const brand = {
  green: "#34eb40",
  dark: "#0c0f14",
} as const;

/* ------------------------------ HELPER: LOGO ------------------------------- */
function LogoPlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="h-12 w-40 grid place-items-center rounded-md bg-white/80 text-black/70 text-[10px] font-semibold uppercase tracking-wide shadow-sm"
    >
      {label}
    </div>
  );
}

/* ------------------------------- HERO NAV TAGS ------------------------------ */
const shortNav = [
  { id: "sales-cloud", short: "Sales" },
  { id: "service-cloud", short: "Service" },
  { id: "marketing-cloud", short: "Marketing" },
  { id: "commerce-cloud", short: "Commerce" },
  { id: "experience-cloud", short: "Experience" },
  { id: "analytics-cloud", short: "Analytics" },
  { id: "platform-cloud", short: "Platform" },
] as const;

/* ------------------------------- SERVICES GRID ------------------------------ */
const salesforceServices = [
  {
    title: "Salesforce Consulting",
    icon: Briefcase,
    desc: "Strategy, roadmapping, and governance to align Salesforce with your revenue and CS goals.",
    border: "md:border-r md:border-b",
  },
  {
    title: "CRM Implementation & Customization",
    icon: Cog,
    desc: "Configure Sales, Service, and Marketing Clouds to your processes with clean-core patterns.",
    border: "md:border-b",
  },
  {
    title: "App Development (Platform)",
    icon: Layers,
    desc: "Low-code/no-code + custom apps on Salesforce Platform with secure data and flows.",
    border: "md:border-r",
  },
  {
    title: "Integration with ERP & Analytics",
    icon: Workflow,
    desc: "Connect Salesforce to Oracle/SAP, data lakes, and BI for a unified customer view.",
    border: "",
  },
] as const;

/* ---------------------------------- MODULES -------------------------------- */
type Module = {
  id: string;
  title: string;
  purpose: string;
  features: string[];
  benefits: string[];
};

const modules: Module[] = [
  {
    id: "sales-cloud",
    title: "Sales Cloud",
    purpose: "Streamline your sales process and boost revenue.",
    features: [
      "Lead & opportunity management",
      "Forecasting & pipeline tracking",
      "Contact & account management",
      "AI-powered insights with Einstein",
    ],
    benefits: [
      "Shorter sales cycles",
      "Smarter decision-making",
      "Increased win rates",
    ],
  },
  {
    id: "service-cloud",
    title: "Service Cloud",
    purpose: "Deliver exceptional customer support across channels.",
    features: [
      "Case management & ticketing",
      "Knowledge base & self-service portals",
      "Omnichannel support (chat, email, phone)",
      "AI chatbots & automation",
    ],
    benefits: [
      "Faster resolution times",
      "Higher customer satisfaction",
      "Reduced support costs",
    ],
  },
  {
    id: "marketing-cloud",
    title: "Marketing Cloud",
    purpose: "Automate and personalize marketing campaigns.",
    features: [
      "Journey builder & audience segmentation",
      "Email, SMS, and social campaigns",
      "Real-time analytics & A/B testing",
    ],
    benefits: [
      "Improved campaign ROI",
      "Personalized customer journeys",
      "Better lead nurturing",
    ],
  },
  {
    id: "commerce-cloud",
    title: "Commerce Cloud",
    purpose: "Power seamless e-commerce experiences.",
    features: [
      "Product catalog & inventory management",
      "Personalized shopping journeys",
      "Order tracking & fulfillment",
    ],
    benefits: [
      "Increased conversion rates",
      "Unified online & offline experiences",
      "Scalable retail operations",
    ],
  },
  {
    id: "experience-cloud",
    title: "Experience Cloud",
    purpose: "Build branded portals for customers, partners, and employees.",
    features: [
      "Customizable templates",
      "Role-based access",
      "Collaboration tools",
    ],
    benefits: [
      "Enhanced engagement",
      "Streamlined communication",
      "Self-service capabilities",
    ],
  },
  {
    id: "analytics-cloud",
    title: "Analytics Cloud (Tableau CRM)",
    purpose: "Turn data into actionable insights.",
    features: [
      "Interactive dashboards",
      "Predictive analytics",
      "Embedded reports",
    ],
    benefits: [
      "Data-driven decisions",
      "Real-time performance tracking",
      "Unified business intelligence",
    ],
  },
  {
    id: "platform-cloud",
    title: "Salesforce Platform & App Cloud",
    purpose: "Build custom apps and automate workflows.",
    features: [
      "Low-code/no-code dev",
      "API integrations",
      "Process automation",
    ],
    benefits: [
      "Tailored solutions",
      "Faster innovation",
      "Seamless scalability",
    ],
  },
];

/* ---------------------------------- TOOLS ---------------------------------- */
const tools = [
  { src: "/logos/sf-sales-cloud.svg", alt: "Sales Cloud" },
  { src: "/logos/sf-service-cloud.svg", alt: "Service Cloud" },
  { src: "/logos/sf-marketing-cloud.svg", alt: "Marketing Cloud" },
  { src: "/logos/sf-commerce-cloud.svg", alt: "Commerce Cloud" },
  { src: "/logos/sf-experience-cloud.svg", alt: "Experience Cloud" },
  { src: "/logos/sf-tableau-crm.svg", alt: "Tableau CRM" },
  { src: "/logos/sf-platform.svg", alt: "Salesforce Platform" },
] as const;

/* ------------------------------- CAPABILITIES ------------------------------- */
const capabilities = [
  {
    title: "Lead & opportunity management",
    icon: Gauge,
    desc: "End-to-end pipeline control and visibility.",
  },
  {
    title: "Omnichannel customer support",
    icon: MessageSquare,
    desc: "Serve customers where they are — chat, email, phone.",
  },
  {
    title: "Marketing automation & journeys",
    icon: Rocket,
    desc: "Automate personalized campaigns and journeys.",
  },
  {
    title: "E-commerce personalization",
    icon: ShoppingCart,
    desc: "Tailor shopping experiences across devices.",
  },
  {
    title: "Custom app development",
    icon: Layers,
    desc: "Rapid apps with low-code/no-code and Apex when needed.",
  },
  {
    title: "Analytics & dashboards",
    icon: BarChart3,
    desc: "Real-time KPIs and predictive insights with Tableau CRM.",
  },
] as const;

/* --------------------------------- DELIVERY -------------------------------- */
const delivery = [
  {
    step: "1",
    title: "CRM Needs Assessment",
    desc: "Discover objectives, users, data sources, and KPIs.",
  },
  {
    step: "2",
    title: "Module Selection & Config",
    desc: "Map processes to Sales/Service/Marketing modules.",
  },
  {
    step: "3",
    title: "Data Migration & Integration",
    desc: "Clean, migrate, and connect with ERP/BI securely.",
  },
  {
    step: "4",
    title: "User Training & Enablement",
    desc: "Role-based enablement and adoption plan.",
  },
  {
    step: "5",
    title: "Continuous Optimization",
    desc: "Iterate on KPIs, automations, and AI insights.",
  },
] as const;
const toolsSalesforce = [
  { src: "/logos/salesforce-sales-cloud.svg", alt: "Sales Cloud" },
  { src: "/logos/salesforce-service-cloud.svg", alt: "Service Cloud" },
  { src: "/logos/salesforce-marketing-cloud.svg", alt: "Marketing Cloud" },
  { src: "/logos/salesforce-commerce-cloud.svg", alt: "Commerce Cloud" },
  { src: "/logos/salesforce-experience-cloud.svg", alt: "Experience Cloud" },
  { src: "/logos/tableau-crm.svg", alt: "Analytics Cloud (Tableau CRM)" },
  { src: "/logos/salesforce-platform.svg", alt: "Salesforce Platform" },
];

/* --------------------------------- METADATA -------------------------------- */
export const metadata = {
  title: "Salesforce Solutions | Intellance",
  description:
    "Sales, Service, Marketing, Commerce, Experience, Analytics (Tableau CRM), and Platform — Salesforce implementation & consulting.",
};

/* ============================================================================
   PAGE
============================================================================ */
export default function SalesforceOverview() {
  return (
    <main className="scroll-smooth">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] grid items-center bg-[radial-gradient(120%_120%_at_5%_-10%,#1e1f23_0%,#141517_60%,#0d0e10_100%)] text-white">
        <div
          className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full blur-3xl"
          style={{ background: `${brand.green}1A` }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: `${brand.green}1A` }}
        />
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Salesforce Solutions
              </h1>
              <p className="mt-4 text-white/80 text-[1.05rem] leading-7">
                Customer-first CRM with modular power — implement Sales,
                Service, Marketing, Commerce, Experience, Analytics, and
                Platform with our certified team.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2 text-sm font-semibold transition-all hover:border-[var(--brand)] hover:shadow-[0_8px_24px_rgba(52,235,64,0.18)]"
                  style={{ "--brand": brand.green } as React.CSSProperties}
                >
                  Let’s Connect
                </Link>
              </div>
            </div>

            {/* Right visual placeholder (CSS only) */}
            <div className="relative">
              <div
                className="absolute -inset-6 -z-10 rounded-[2rem] blur-2xl"
                style={{ background: `${brand.green}1A` }}
              />
              <div className="relative h-[320px] md:h-[420px] rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 opacity-20">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-white/10" />
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-white/70">
                  Visual placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY NAV — short module names */}
      <section className="sticky top-16 z-[10]">
        <nav className="backdrop-blur supports-[backdrop-filter]:bg-[#0a0c10]/70 bg-[#0a0c10]/80 text-white border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-2">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
              {shortNav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/0 px-3 py-1.5 text-xs md:text-[13px] font-bold tracking-wide text-white transition-all duration-300 hover:text-white hover:border-[var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                    style={{ "--brand": brand.green } as React.CSSProperties}
                  >
                    {n.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>

      {/* INTEGRATED HEADING */}
      <section id="integrated-intelligence" className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-8">
            <div>
              <h2 className="text-[40px] leading-[1.1] sm:text-[48px] md:text-[56px] font-extrabold tracking-tight">
                <span
                  className="box-decoration-clone px-1"
                  style={{ background: `${brand.green}4D` }}
                >
                  INTEGRATED
                </span>
                <br />
                <span
                  className="box-decoration-clone px-1"
                  style={{ background: `${brand.green}4D` }}
                >
                  INTELLIGENCE FOR
                </span>
                <br />
                <span
                  className="box-decoration-clone px-1"
                  style={{ background: `${brand.green}4D` }}
                >
                  EVERY FUNCTION
                </span>
              </h2>
            </div>
            <p className="text-[16px] leading-7 font-semibold mt-5 md:leading-8 text-[#2E2E37] max-w-xl">
              Salesforce’s modular clouds unify sales, service, marketing,
              commerce, and analytics — giving teams real-time insight,
              automated workflows, and connected experiences.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES HEADING */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            WHAT WE DO IN SALESFORCE
          </h3>
          <div
            className="h-[2px] w-58 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3 mb-4"
            style={{ "--brand": brand.green } as React.CSSProperties}
          />
        </div>
      </section>

      {/* SERVICES GRID (Lucide + custom borders) */}
      <section id="services-grid" className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3">
            {salesforceServices.map((s, i) => {
              // i: 0=Salesforce Consulting, 1=CRM Implementation, 2=App Dev, 3=Integration
              const isTopRow = i < 3;

              const cls = [
                "p-6 md:p-7",
                "border-[#0b0c10]/20", // line color
                "border-b last:border-b-0", // mobile dividers
                isTopRow && "md:border-b", // top row: bottom border
                (i === 0 || i === 1) && "md:border-r", // vertical lines between top cards
                i === 3 &&
                  "md:col-start-2 md:border-l md:border-r md:border-b-0", // center Integration w/ L+R borders only
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div key={s.title} className={cls}>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0"
                      style={{
                        background: `${brand.green}26`,
                        color: brand.green,
                      }}
                    >
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold tracking-tight">
                        {s.title}
                      </h4>
                      <p className="mt-2 text-[15px] leading-7 text-[#2E2E37]/90">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE MODULES (alternating deep dives) */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Core Salesforce Offerings
          </h3>
          <div
            className="h-[2px] w-48 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
            style={{ "--brand": brand.green } as React.CSSProperties}
          />
        </div>
      </section>
      <section className="bg-[radial-gradient(120%_120%_at_5%_-10%,#ffffff_0%,#f7f9fc_60%,#eef2f7_100%)] text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="space-y-16 md:space-y-24">
            {modules.map((m, idx) => {
              const rightImage = idx % 2 === 0;
              return (
                <section key={m.id} id={m.id} className="scroll-mt-28">
                  <div className="grid gap-8 md:gap-12 items-center grid-cols-1 md:grid-cols-2">
                    {/* TEXT */}
                    <div className={rightImage ? "" : "md:order-2"}>
                      <h3 className="text-[28px] md:text-[34px] font-extrabold">
                        {m.title}
                      </h3>
                      <div
                        className="h-[2px] w-40 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3 mb-5"
                        style={{ "--brand": brand.green } as React.CSSProperties}
                      />
                      <p className="text-[1.05rem] md:text-[1.125rem] leading-7 md:leading-8">
                        {m.purpose}
                      </p>

                      <h4 className="mt-5 text-xl md:text-2xl font-semibold">
                        Key Features
                      </h4>
                      <ul className="mt-2 space-y-1.5 list-disc pl-5">
                        {m.features.map((f) => (
                          <li
                            key={f}
                            className="text-[1.05rem] md:text-[1.125rem]"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>

                      <h4 className="mt-5 text-xl md:text-2xl font-semibold">
                        Client Benefits
                      </h4>
                      <ul className="mt-2 space-y-1.5 list-disc pl-5">
                        {m.benefits.map((b) => (
                          <li
                            key={b}
                            className="text-[1.05rem] md:text-[1.125rem]"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* IMAGE (CSS placeholder only) */}
                    <div className={rightImage ? "" : "md:order-1"}>
                      <div className="relative">
                        <div
                          className="absolute -inset-5 -z-10 rounded-[2rem] blur-2xl"
                          style={{ background: `${brand.green}1A` }}
                        />
                        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                          <div className="aspect-[16/10] md:aspect-[5/3] grid place-items-center">
                            <div className="w-full h-full bg-[linear-gradient(135deg,rgba(46,46,55,0.08),rgba(52,235,64,0.08))] grid grid-cols-12">
                              {Array.from({ length: 60 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="border border-gray-200/60"
                                />
                              ))}
                            </div>
                            <span className="absolute bottom-3 right-4 text-xs text-gray-500">
                              Image placeholder
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES (black band, logo placeholders) */}
     <section id="tools-tech" className="relative bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <h3 className="text-xl md:text-2xl font-bold">Tools & Technologies</h3>
          <ToolCarousel
            logos={toolsSalesforce}
            speedSec={26}  // optional
            heightPx={56}  // match other pages
            gapPx={32}     // ~ Tailwind gap-8
            className="mt-8"
          />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold mt-6">
            Capabilities
          </h3>
          <div
            className="h-[2px] w-48 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
            style={{ "--brand": brand.green } as React.CSSProperties}
          />
        </div>
      </section>
      <section className="bg-white text-[#2e2e37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="relative overflow-hidden rounded-2xl border border-black/15 bg-black/10 p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background: `${brand.green}26`,
                      color: brand.green,
                    }}
                  >
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{cap.title}</h4>
                    <p className="text-sm text-[#2e2e37]/80">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY + CTA */}
      <section id="delivery" className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Delivery Approach
          </h3>
          <div
            className="h-[2px] w-56 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
            style={{ "--brand": brand.green } as React.CSSProperties}
          />
        </div>
      </section>
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Side visual (CSS only) */}
            <div className="relative">
              <div
                className="absolute -inset-5 -z-10 rounded-[2rem] blur-2xl"
                style={{ background: `${brand.green}1A` }}
              />
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <div className="aspect-[5/3] grid place-items-center bg-[linear-gradient(135deg,rgba(46,46,55,0.06),rgba(52,235,64,0.08))]">
                  <span className="text-sm text-gray-600">
                    Delivery image placeholder
                  </span>
                </div>
              </div>
            </div>

            {/* Steps */}
            <ol className="space-y-6">
              {delivery.map((d) => (
                <li key={d.step} className="flex gap-4">
                  <span
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-[var(--brand)] font-extrabold border border-[var(--brand)]"
                    style={{ "--brand": brand.green } as React.CSSProperties}
                  >
                    {d.step}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">{d.title}</h3>
                    <p className="text-[0.975rem] md:text-[1.05rem] text-[#2E2E37]/90">
                      {d.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA — green button, black text */}
          <div className="mt-14 relative overflow-hidden rounded-2xl border border-gray-200">
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_5%_-10%,#151821_0%,#0c0f14_60%,#0a0d12_100%)]" />
            <div className="relative px-6 md:px-10 py-8 md:py-10 text-white grid grid-cols-1 md:grid-cols-3 items-center gap-6">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Ready to build a customer-first CRM?
                </h3>
                <p className="mt-2 text-white/80 text-sm">
                  Request a demo — we’ll tailor it to your pipeline, SLAs, and
                  KPIs.
                </p>
              </div>
              <div className="md:justify-self-end">
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
                  Request a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
