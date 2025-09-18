// src/app/services/sap/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Cog,
  Rocket,
  Link2,
  BarChart3,
  LayoutDashboard,
  Banknote,
  Boxes,
  Users2,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "SAP Solutions | Intellance",
  description:
    "SAP S/4HANA, Ariba, SuccessFactors, BTP, SAC, Fiori/UI5, and Integration Suite — implementation & licensing on one page.",
};

// ======= CONSTS OUTSIDE COMPONENT (perf) =======
const brand = {
  green: "#34eb40",
  dark: "#0c0f14",
};

const primaryServices = [
  {
    title: "SAP Consulting",
    icon: Compass,
    desc: "Co-create a pragmatic roadmap: process mapping, value cases, and a governance model to de‑risk transformation and accelerate time‑to‑value.",
    border: "md:border-r md:border-b",
  },
  {
    title: "Implementation & Customization",
    icon: Cog,
    desc: "Fit‑to‑standard where it matters, tailored where it counts. Configure Finance, SCM, Manufacturing, HR and more with clean‑core patterns.",
    border: "md:border-r md:border-b",
  },
  {
    title: "S/4HANA Migration",
    icon: Rocket,
    desc: "Brownfield or greenfield — execute with SAP Activate, robust data conversion, and cutover plans that minimize downtime and risk.",
    border: "md:border-b",
  },
  {
    title: "Integration & Support",
    icon: Link2,
    desc: "Connect SAP with CRM, data platforms, and custom apps via BTP & Integration Suite. 24/7 support, SLAs, and incremental optimization.",
    border: "md:border-r",
  },
  {
    title: "Analytics & Planning",
    icon: BarChart3,
    desc: "SAC dashboards, planning models, and trusted metrics that drive faster decisions and measurable outcomes.",
    border: "",
  },
  {
    title: "UX & Extensions",
    icon: LayoutDashboard,
    desc: "Fiori/UI5 experiences and BTP extensions that simplify tasks and boost productivity — responsive, accessible, and future‑ready.",
    border: "md:border-l",
  },
] as const;

const altServices = [
  { id: "s4hana", short: "S/4HANA" },
  { id: "ariba", short: "Ariba" },
  { id: "successfactors", short: "SF" },
  { id: "btp", short: "BTP" },
  { id: "sac", short: "SAC" },
  { id: "fiori", short: "Fiori" },
  { id: "integration-suite", short: "Int. Suite" },
] as const;

const tools = [
  { src: "/logos/sap-s4hana.svg", alt: "SAP S/4HANA" },
  { src: "/logos/sap-fiori.svg", alt: "SAP Fiori" },
  { src: "/logos/sap-btp.svg", alt: "SAP BTP" },
  { src: "/logos/sap-sac.svg", alt: "SAP Analytics Cloud" },
] as const;

const benefits = [
  "Unified, real‑time data fabric",
  "Faster financial close cycles",
  "Optimized supply & production",
  "Increased employee productivity",
  "Scalable digital core",
] as const;

// Enhanced capabilities model (with icons + desc for better UX)
const capabilities = [
  {
    title: "Finance (FI/CO)",
    icon: Banknote,
    desc: "Close faster, recognize revenue accurately, and get live P&L.",
  },
  {
    title: "Supply Chain (MM/SD)",
    icon: Boxes,
    desc: "Plan, procure, and fulfill with connected inventory visibility.",
  },
  {
    title: "People (HR/Payroll)",
    icon: Users2,
    desc: "Global payroll, time, and talent with secure RBAC.",
  },
  {
    title: "Production & Quality (PP/QM)",
    icon: Wrench,
    desc: "Stable throughput, quality checks, and traceability.",
  },
  {
    title: "Projects & Assets (PS/PM)",
    icon: LayoutDashboard,
    desc: "Capex control, maintenance scheduling, asset uptime.",
  },
] as const;

const delivery = [
  {
    step: "1",
    title: "Business Process Assessment",
    desc: "Discover KPIs, pain points, and integration touchpoints; define success criteria and value drivers.",
    img: "/images/steps/assessment.jpg",
  },
  {
    step: "2",
    title: "Blueprint & Solution Design",
    desc: "Fit‑to‑standard workshops; blueprint architecture, data models, security and compliance baselines.",
    img: "/images/steps/blueprint.jpg",
  },
  {
    step: "3",
    title: "Configuration & Extensions",
    desc: "Configure core modules; build Fiori/UI5 apps and BTP extensions with clean‑core principles.",
    img: "/images/steps/config.jpg",
  },
  {
    step: "4",
    title: "Testing & Training",
    desc: "Unit, SIT, UAT with test automation; role‑based training and hypercare plan.",
    img: "/images/steps/testing.jpg",
  },
  {
    step: "5",
    title: "Go‑Live & Support",
    desc: "Cutover execution, monitoring dashboards, SLAs and continuous optimization.",
    img: "/images/steps/golive.jpg",
  },
] as const;

const sections: Array<{
  id: string;
  title: string;
  overview: string;
  services: string[];
  note?: string;
  img?: { src?: string; alt?: string; w?: number; h?: number };
}> = [
  {
    id: "s4hana",
    title: "SAP S/4HANA Implementation & Licensing",
    overview:
      "SAP S/4HANA is the digital core of intelligent enterprises. We help you migrate, implement, and license SAP S/4HANA to streamline operations, enable real-time analytics, and future-proof your business.",
    services: [
      "Greenfield & Brownfield implementation strategies",
      "SAP Activate methodology with Fit-to-Standard workshops",
      "Data migration and system conversion",
      "Custom module configuration (Finance, SCM, Manufacturing, etc.)",
      "Licensing advisory: Named user, engine-based, and FUE models",
      "Post-go-live support and optimization",
    ],
    note: "Licensing: Guidance across RISE with SAP, on-prem, and hybrid models to avoid shelfware and optimize license usage.",
  },
  {
    id: "ariba",
    title: "SAP Ariba Implementation & Licensing",
    overview:
      "SAP Ariba transforms procurement into a strategic advantage. We implement and license Ariba modules to digitize sourcing, supplier management, and spend analysis.",
    services: [
      "SAP Ariba Buying & Invoicing setup",
      "Guided Buying and Supplier Risk Management",
      "Supplier Lifecycle & Performance (SLP) configuration",
      "Integration with SAP S/4HANA and third-party systems",
      "License provisioning for Ariba modules and provider services",
    ],
    note: "Licensing: We register provider licenses, manage subscriptions, and configure the Content & Service Providers dashboard for supplier risk evaluation.",
  },
  {
    id: "successfactors",
    title: "SAP SuccessFactors Implementation & Licensing",
    overview:
      "SAP SuccessFactors is your gateway to intelligent HR. We implement and license modules that cover the full employee lifecycle — from hire to retire.",
    services: [
      "Employee Central, Performance & Goals, Recruiting, Onboarding",
      "Payroll integration and global benefits setup",
      "Role-based permission and metadata framework configuration",
      "Mobile enablement and self-service portals",
      "Licensing advisory across 45+ SuccessFactors packages",
    ],
    note: "Licensing: Choose the right bundle (Enterprise, Talent Management, Advanced Learning). We manage user-based and functional licenses.",
  },
  {
    id: "btp",
    title: "SAP Business Technology Platform (BTP)",
    overview:
      "SAP BTP is the foundation for building, integrating, and extending applications. We implement BTP services to enable intelligent workflows, analytics, and AI.",
    services: [
      "Extension development using SAP Build and CAP",
      "Integration via SAP Integration Suite",
      "Data orchestration and Event Mesh setup",
      "Licensing via CPEA or Pay-as-you-go",
    ],
    note: "Licensing: We help you select service plans, manage entitlements, and optimize usage across environments like Cloud Foundry and Kyma.",
  },
  {
    id: "sac",
    title: "SAP Analytics Cloud (SAC)",
    overview:
      "SAC delivers real-time insights and planning capabilities. We implement SAC for BI, predictive analytics, and enterprise planning.",
    services: [
      "Story creation, dashboards, and value driver trees",
      "Predictive modeling and Smart Insights",
      "Integration with SAP S/4HANA and SuccessFactors",
      "License provisioning for BI, Planning Standard, and Planning Professional tiers",
    ],
    note: "Licensing: Guidance on named vs concurrent licensing, Digital Boardroom, and role-based access control.",
  },
  {
    id: "fiori",
    title: "SAP Fiori & SAPUI5 Development",
    overview:
      "SAP Fiori delivers a modern UX across devices. We design and deploy custom Fiori apps using SAPUI5 and OData services.",
    services: [
      "Custom app development using SAPUI5",
      "Activation of standard Fiori apps",
      "Integration with S/4HANA and SAP Gateway",
      "Responsive design and accessibility optimization",
      "No additional license needed if you have SAP NetWeaver 7.4+ or SAP BTP",
    ],
  },
  {
    id: "integration-suite",
    title: "SAP Integration Suite",
    overview:
      "SAP Integration Suite is your iPaaS for connecting SAP and non-SAP systems. We implement and license it to unify your digital landscape.",
    services: [
      "Cloud Integration (A2A, B2B, B2G)",
      "API Management and Open Connectors",
      "Integration Advisor and Event Mesh setup",
      "Edge Integration Cell deployment",
      "Guided integration strategy using SAP’s advisory methodology",
    ],
    note: "Licensing: We help you choose between Starter, Standard, and Premium editions, manage message volumes, and configure tenants.",
  },
];

export default function SAPOverview() {
  return (
    <main className="scroll-smooth">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[70vh] grid items-center bg-[radial-gradient(120%_120%_at_5%_-10%,#1e1f23_0%,#141517_60%,#0d0e10_100%)] text-white">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                SAP Solutions
              </h1>
              <p className="mt-4 text-white/80 text-[1.05rem] leading-7">
                Transform finance, supply chain, HR, procurement, analytics, and
                extensions with modern SAP platforms and our certified delivery
                teams.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2 text-sm font-semibold hover:border-[var(--brand)] hover:shadow-[0_8px_24px_rgba(52,235,64,0.18)]"
                  style={{ "--brand": "#34eb40" } as React.CSSProperties}
                >
                  Let’s Connect
                </Link>
              </div>
            </div>

            {/* Right visual placeholder */}
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
                  Image/illustration placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY NAV — custom glass pills with short names */}
      <section className="sticky top-16 z-[10]">
        <nav className="backdrop-blur supports-[backdrop-filter]:bg-[#0a0c10]/70 bg-[#0a0c10]/80 text-white border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-2">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
              {altServices.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/0 px-3 py-1.5 text-xs md:text-[13px] font-bold tracking-wide text-white transition-all duration-300 hover:text-white hover:border-[var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                    style={{ "--brand": "#34eb40" } as React.CSSProperties}
                  >
                    {item.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>

      {/* INTEGRATED HEADING on dark */}
      <section
        id="integrated-intelligence"
        className="bg-white text-[#2E2E37]"
      >
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
              SAP’s modular ERP suite streamlines operations across finance,
              supply chain, HR, and more. Whether on-prem or cloud (S/4HANA),
              SAP delivers real-time data and automation for enterprise agility.
            </p>
          </div>
        </div>
      </section>
      {/* SERVICES HEADING (catchy) on black */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            WHAT WE DO IN SAP
          </h3>
          <div
            className="h-[2px] w-48 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3 mb-4"
            style={{ "--brand": "#34eb40" } as React.CSSProperties}
          />
        </div>
      </section>

      {/* SERVICES GRID (icons from Lucide + custom borders) */}
      <section id="services-grid" className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-0">
            {primaryServices.map((s) => (
              <div
                key={s.title}
                className={`p-6 md:p-7 ${s.border} border-black/90`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
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
                    <p className="mt-2 text-[15px] leading-7 text-gray-900">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP DIVES — switched to dark heading band then light content for readability */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Core SAP Offerings
          </h3>
          <div
            className="h-[2px] w-48 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
            style={{ "--brand": "#34eb40" } as React.CSSProperties}
          />
        </div>
      </section>
      <section className="bg-[radial-gradient(120%_120%_at_5%_-10%,#ffffff_0%,#f7f9fc_60%,#eef2f7_100%)] text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="space-y-16 md:space-y-24">
            {sections.map((s, idx) => {
              const rightImage = idx % 2 === 0;
              return (
                <section key={s.id} id={s.id} className="scroll-mt-32">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
                    {/* TEXT */}
                    <div className={rightImage ? "" : "md:order-2"}>
                      <h3 className="text-[28px] md:text-[34px] font-extrabold">
                        {s.title}
                      </h3>
                      <div
                        className="h-[2px] w-60 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3 mb-5"
                        style={{ "--brand": "#34eb40" } as React.CSSProperties}
                      />
                      <p className="text-[1.05rem] md:text-[1.125rem] leading-7 md:leading-8">
                        {s.overview}
                      </p>

                      <h4 className="mt-5 text-xl md:text-2xl font-semibold">
                        Our Services
                      </h4>
                      <ul className="mt-2 space-y-1.5 list-disc pl-5">
                        {s.services.map((item) => (
                          <li
                            key={item}
                            className="text-[1.05rem] md:text-[1.125rem]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      {s.note && (
                        <p className="mt-4 rounded-md border border-gray-200 bg-white p-4 text-[0.975rem] md:text-[1.05rem]">
                          {s.note}
                        </p>
                      )}
                    </div>

                    {/* IMAGE / CARD */}
                    <div className={rightImage ? "" : "md:order-1"}>
                      <div className="relative">
                        <div
                          className="absolute -inset-5 -z-10"
                          style={{
                            background: `${brand.green}1A`,
                            borderRadius: "2rem",
                            filter: "blur(28px)",
                          }}
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

      {/* TOOLS & TECHNOLOGIES — black background with fixed logos */}
      <section id="tools-tech" className="relative bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <h3 className="text-xl md:text-2xl font-bold">
            Tools & Technologies
          </h3>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {tools.map((t) => (
              <div
                key={t.alt}
                className="flex items-center justify-center rounded-xl bg-white/5 p-6"
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={140}
                  height={56}
                  className="opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — redesigned cards with icons + hover desc */}
      <section id="capabilities" className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold mt-6">
            Capabilities
          </h3>
          <div
            className="h-[2px] w-48 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
            // style={{ ["--brand" as any]: brand.green }}
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

      {/* DELIVERY — side image + step descriptions */}
      <section id="delivery" className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Delivery Approach
          </h3>
          <div
            className="h-[2px] w-56 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
            style={{ "--brand": "#34eb40" } as React.CSSProperties}
          />
        </div>
      </section>
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Side Image */}
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
                    style={{ "--brand": "#34eb40" } as React.CSSProperties}
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

          {/* CTA STRIPE — Request a demo only */}
          <div className="mt-14 relative overflow-hidden rounded-2xl border border-gray-200">
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_5%_-10%,#151821_0%,#0c0f14_60%,#0a0d12_100%)]" />
            <div className="relative px-6 md:px-10 py-8 md:py-10 text-white grid grid-cols-1 md:grid-cols-3 items-center gap-6">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Ready to streamline your enterprise with SAP?
                </h3>
                <p className="mt-2 text-white/80 text-sm">
                  Request a demo — we’ll tailor it to your KPIs and timeline.
                </p>
              </div>
              <div className="md:justify-self-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-[#34eb40] px-5 py-2 text-sm font-semibold hover:border-[var(--brand)] hover:bg-[var(--brand)] text-[var(--dark)] transition"
                  style={{ "--brand": "#34eb40" } as React.CSSProperties}
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
