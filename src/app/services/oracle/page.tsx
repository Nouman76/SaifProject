// src/app/services/oracle/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Wallet,
  BarChart3,
  ShoppingCart,
  Briefcase,
  Truck,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Oracle Solutions | Intellance",
  description:
    "Oracle Cloud ERP, Fusion Middleware, Analytics Cloud, Database, Integration Cloud, and HCM — implementation & licensing on one page.",
};

// ====== THEME / CONSTANTS (outside component for perf) ======
const brand = {
  green: "#34eb40",
  dark: "#0c0f14",
};

const oracleServices = [
  {
    title: "Financial Management",
    icon: Wallet, // choose a Lucide icon
    desc: "Manage all financial operations with precision and compliance — from general ledger to real-time reporting.",
    border: "md:border-r md:border-b",
  },
  {
    title: "Procurement",
    icon: ShoppingCart,
    desc: "Streamline sourcing, contract management, and supplier performance for optimal procurement efficiency.",
    border: "md:border-r md:border-b",
  },
  {
    title: "Project Management",
    icon: Briefcase,
    desc: "Plan, track, and deliver projects on time and within budget with complete cost and resource control.",
    border: "md:border-b",
  },
  {
    title: "Supply Chain Management",
    icon: Truck,
    desc: "Optimize inventory, logistics, and demand planning to reduce costs and improve agility.",
    border: "md:border-r",
  },
  {
    title: "Human Capital Management",
    icon: Users,
    desc: "Manage the full employee lifecycle — payroll, performance, and talent — with powerful workforce analytics.",
    border: "",
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart3,
    desc: "Leverage real-time dashboards, KPIs, and predictive analytics for informed decision-making.",
    border: "md:border-l",
  },
];

const modules: Array<{
  id: string;
  title: string;
  overview: string;
  impl: string[];
  licensing: string;
}> = [
  {
    id: "cloud-erp",
    title: "Oracle Cloud ERP",
    overview:
      "Financials, Procurement, and Projects in one suite—with real-time analytics and automation.",
    impl: [
      "Financials, Procurement, and Project Portfolio Management setup",
      "Workflow design and reporting configuration",
      "Role-based security and controls",
    ],
    licensing: "Named User Plus, Application User, Processor metrics.",
  },
  {
    id: "fusion-middleware",
    title: "Oracle Fusion Middleware",
    overview:
      "Unified integration, security, and scalability layer to connect and protect apps.",
    impl: [
      "SOA Suite and API Gateway configuration",
      "Identity management and access controls",
      "Performance tuning and scaling",
    ],
    licensing: "Full Use and Restricted Use licenses.",
  },
  {
    id: "analytics-cloud",
    title: "Oracle Analytics Cloud",
    overview:
      "BI, modeling, and machine learning for insights that drive action.",
    impl: [
      "Dashboard and KPI design",
      "Data visualization and storytelling",
      "Predictive analytics and machine learning models",
    ],
    licensing: "Universal Credits (UCM) and BYOL options.",
  },
  {
    id: "database",
    title: "Oracle Database",
    overview:
      "Reliable, high-performance database for mission-critical workloads.",
    impl: [
      "Database setup and configuration",
      "Backup/recovery strategy",
      "Performance tuning and partitioning",
    ],
    licensing: "On-prem and cloud licensing models.",
  },
  {
    id: "integration-cloud",
    title: "Oracle Integration Cloud",
    overview:
      "iPaaS to connect applications, automate processes, and publish secure APIs.",
    impl: [
      "Integration flow design and deployment",
      "API Management setup",
      "B2B and application adapters configuration",
    ],
    licensing: "Subscription-based licensing.",
  },
  {
    id: "hcm-cloud",
    title: "Oracle HCM Cloud",
    overview:
      "End-to-end HR — Core HR, Talent, and Payroll with workforce analytics.",
    impl: [
      "Core HR configuration",
      "Talent and performance management",
      "Payroll and benefits setup",
    ],
    licensing: "SaaS licensing with modular pricing.",
  },
];

const tools = [
  { src: "/logos/oracle-cloud-erp.svg", alt: "Oracle Cloud ERP" },
  {
    src: "/logos/oracle-fusion-middleware.svg",
    alt: "Oracle Fusion Middleware",
  },
  { src: "/logos/oracle-analytics-cloud.svg", alt: "Oracle Analytics Cloud" },
] as const;

const oracleCapabilities = [
  {
    title: "Financial Management",
    icon: Wallet,
    desc: "Control and visibility over financial operations with accurate reporting, compliance, and faster close cycles.",
  },
  {
    title: "Procurement",
    icon: ShoppingCart,
    desc: "Optimize sourcing and supplier relationships with integrated spend analysis and contract management.",
  },
  {
    title: "Project Management",
    icon: Briefcase,
    desc: "Plan, track, and bill projects with robust costing, resource allocation, and profitability analysis.",
  },
  {
    title: "Supply Chain Management",
    icon: Truck,
    desc: "Manage inventory, logistics, and demand planning to reduce costs and improve responsiveness.",
  },
  {
    title: "Human Capital Management",
    icon: Users,
    desc: "Streamline HR processes, payroll, and talent management with advanced workforce analytics.",
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart3,
    desc: "Deliver real-time insights and predictive analytics for strategic decision-making.",
  },
];

const delivery = [
  {
    step: "1",
    title: "Discovery & Assessment",
    desc: "Processes, KPIs, and readiness; define scope, risks, and success metrics.",
  },
  {
    step: "2",
    title: "Blueprint & Architecture",
    desc: "Target design for ERP, integrations, security, and data models.",
  },
  {
    step: "3",
    title: "Configuration & Integrations",
    desc: "Module setup, extensions, and OIC/Middleware flows with secure RBAC.",
  },
  {
    step: "4",
    title: "Testing & Enablement",
    desc: "Unit, SIT, UAT; reporting validation; knowledge transfer & training.",
  },
  {
    step: "5",
    title: "Go-Live & Support",
    desc: "Cutover, runbooks, SLAs, and continuous optimization.",
  },
] as const;

// Short nav for sticky pills (optional; shows only Oracle modules)
const shortNav = [
  { id: "cloud-erp", short: "Cloud ERP" },
  { id: "fusion-middleware", short: "Middleware" },
  { id: "analytics-cloud", short: "OAC" },
  { id: "database", short: "DB" },
  { id: "integration-cloud", short: "OIC" },
  { id: "hcm-cloud", short: "HCM" },
] as const;

export default function OracleOverview() {
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
                Oracle Solutions
              </h1>
              <p className="mt-4 text-white/80 text-[1.05rem] leading-7">
                From Oracle Cloud ERP to Fusion Middleware, Analytics Cloud, and
                HCM — we implement what matters and guide licensing so you scale
                with confidence.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2 text-sm font-semibold hover:border-[var(--brand)] hover:shadow-[0_8px_24px_rgba(52,235,64,0.18)] transition-all"
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

      {/* Sticky module pills (optional; mirrors SAP style) */}
      <section className="sticky top-16 z-[10]">
        <nav className="backdrop-blur supports-[backdrop-filter]:bg-[#0a0c10]/70 bg-[#0a0c10]/80 text-white border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-2">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
              {shortNav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/0 px-3 py-1.5 text-xs md:text-[13px] font-bold tracking-wide text-white transition-all duration-300 hover:text-white hover:border-[var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                    style={{ "--brand": "#34eb40" } as React.CSSProperties}
                  >
                    {n.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>

      {/* Intro heading (like SAP’s integrated block) */}
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
              Oracle’s unified cloud suite connects finance, procurement,
              projects, HR, and analytics — enabling real-time insight,
              automated workflows, and agile decision-making across your
              enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Services heading */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            WHAT WE DO IN ORACLE
          </h3>
          <div
            className="h-[2px] w-48 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3 mb-4"
            style={{ "--brand": "#34eb40" } as React.CSSProperties}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-0">
            {oracleServices.map((s) => (
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

      {/* Core Modules */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Core Oracle Offerings
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
                        style={{ "--brand": "#34eb40" } as React.CSSProperties}
                      />
                      <p className="text-[1.05rem] md:text-[1.125rem] leading-7 md:leading-8">
                        {m.overview}
                      </p>

                      <h4 className="mt-5 text-xl md:text-2xl font-semibold">
                        Implementation
                      </h4>
                      <ul className="mt-2 space-y-1.5 list-disc pl-5">
                        {m.impl.map((i) => (
                          <li
                            key={i}
                            className="text-[1.05rem] md:text-[1.125rem]"
                          >
                            {i}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-4 rounded-md border border-gray-200 bg-white p-4 text-[0.975rem] md:text-[1.05rem]">
                        <b>Licensing:</b> {m.licensing}
                      </p>
                    </div>

                    {/* IMAGE */}
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

      {/* Tools & Technologies (black band) */}
      {tools.length > 0 && (
        <section id="tools-tech" className="relative bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-bold">
              Tools & Technologies
            </h3>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
              {tools.map((t) => (
                <div
                  key={t.alt}
                  className="flex items-center justify-center rounded-xl bg-white/5 p-6"
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    width={160}
                    height={60}
                    className="opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Capabilities */}
      <section id="capabilities" className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
          <h3 className="text-2xl md:text-3xl font-extrabold mt-6">
            Capabilities
          </h3>
          <div
            className="h-[2px] w-48 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
            style={{ "--brand": "#34eb40" } as React.CSSProperties}
          />
        </div>
      </section>
      <section className="bg-white text-[#2e2e37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oracleCapabilities.map((cap) => (
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
      {/* Delivery Approach */}
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

          {/* CTA (green bg, black text) */}
          <div className="mt-14 relative overflow-hidden rounded-2xl border border-gray-200">
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_5%_-10%,#151821_0%,#0c0f14_60%,#0a0d12_100%)]" />
            <div className="relative px-6 md:px-10 py-8 md:py-10 text-white grid grid-cols-1 md:grid-cols-3 items-center gap-6">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Ready to transform your enterprise with Oracle?
                </h3>
                <p className="mt-2 text-white/80 text-sm">
                  Request a demo — we’ll tailor it to your business needs and
                  KPIs.
                </p>
              </div>
              <div className="md:justify-self-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-[#34eb40] px-5 py-2 text-sm font-semibold hover:border-[var(--brand)] hover:bg-[var(--brand)] text-[var(--dark)] transition"
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
