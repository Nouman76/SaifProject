// /src/app/industries/page.tsx
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  Gauge,
  ShieldCheck,
  BarChart3,
  Boxes,
  ClipboardCheck,
  Users2,
} from "lucide-react";

/* ---------------------------------- BRAND --------------------------------- */
const brand = {
  green: "#34eb40",
  dark: "#0c0f14",
} as const;

/* --------------------------------- METADATA -------------------------------- */
export const metadata = {
  title: "Industries We Serve | Intellance",
  description:
    "Industry-specific ERP & CRM solutions for Banking & FSI, Retail, Manufacturing, Energy & Utilities, Telecommunication, Distribution & Logistics, and Healthcare.",
};

/* ---------------------------------- TYPES ---------------------------------- */
type Sector = {
  id: string;
  title: string;
  intro: string;
  bullets: string[];
};

/* ------------------------------ SECTORS DATA ------------------------------- */
const sectors: Sector[] = [
  {
    id: "banking",
    title: "Banking & FSI",
    intro:
      "Meet regulatory demands while elevating customer experience and agility across banks, insurers, and financial institutions.",
    bullets: [
      "Automated regulatory reporting & audit trails",
      "Risk, KYC & compliance management",
      "Customer relationship & loan lifecycle management",
      "Multi-branch consolidation & financial controls",
      "BI dashboards for real-time decision support",
    ],
  },
  {
    id: "retail",
    title: "Retail",
    intro:
      "Stay competitive in fast-moving markets with unified inventory, POS, and customer engagement.",
    bullets: [
      "Multi-location inventory & warehousing",
      "Integrated POS, eCommerce & marketplaces",
      "Promotions, loyalty & omni-channel CX",
      "Supplier collaboration & demand planning",
      "End-to-end order orchestration & fulfillment",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    intro:
      "Reduce costs, optimize resources, and deliver quality on time with digitized production and supply chains.",
    bullets: [
      "End-to-end production planning & scheduling",
      "Real-time WIP, materials & inventory visibility",
      "Quality assurance & compliance tracking",
      "MES/SCADA integrations & shop-floor data",
      "Costing, variance analysis & profitability",
    ],
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    intro:
      "Operate safely and efficiently with asset reliability, compliance, and customer engagement at scale.",
    bullets: [
      "Asset & equipment lifecycle management",
      "Workforce safety, permits & compliance",
      "Planned/condition-based maintenance",
      "Project cost control & financial reporting",
      "Smart billing & customer portals",
    ],
  },
  {
    id: "telecommunication",
    title: "Telecommunication",
    intro:
      "Scale networks, launch digital services, and deliver superior experiences with cloud-native agility.",
    bullets: [
      "Product catalog & offer lifecycle management",
      "Order-to-activate process automation",
      "Field service & workforce scheduling",
      "Assurance: trouble tickets & SLA tracking",
      "Revenue analytics & churn prevention",
    ],
  },
  {
    id: "logistics",
    title: "Distribution & Logistics",
    intro:
      "Win on speed and visibility with automated warehousing, fleet optimization, and accurate ETAs.",
    bullets: [
      "Route planning, fleet & last-mile optimization",
      "Real-time order tracking & proof-of-delivery",
      "Warehouse automation & inventory control",
      "Cross-border & customs compliance",
      "Predictive ETAs & control-tower analytics",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    intro:
      "Balance care quality, cost, and compliance across providers, payors, and pharma distribution.",
    bullets: [
      "Hospital operations & patient administration",
      "Medicine & medical-supplies inventory",
      "Pharma distribution, serialization & tracking",
      "Regulatory & quality control compliance",
      "Financials, reimbursements & reporting",
    ],
  },
];

/* ---------------------------------- PAGE ----------------------------------- */
export default function IndustriesPage() {
  return (
    <main className="scroll-smooth">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[60vh] grid items-center bg-[radial-gradient(120%_120%_at_5%_-10%,#1e1f23_0%,#141517_60%,#0d0e10_100%)] text-white">
        <div
          className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full blur-3xl"
          style={{ background: `${brand.green}1A` }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: `${brand.green}1A` }}
        />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 items-start">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">
                Industries We Serve
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Purpose-Built Solutions
                <br />
                For Every Sector
              </h1>
              <p className="mt-4 text-white/80 text-[1.05rem] leading-7 max-w-3xl">
                No two industries are alike. We design ERP, CRM, and enterprise
                solutions that reflect your sector’s compliance, workflows, and
                growth levers—so you can streamline operations, gain real-time
                visibility, and scale with confidence.
              </p>

              {/* Impact strip (WITH icons) */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { Icon: Gauge, label: "Operational Efficiency" },
                  { Icon: ShieldCheck, label: "Compliance by Design" },
                  { Icon: BarChart3, label: "Data-Driven Growth" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <Icon
                      className="h-5 w-5 text-[var(--brand)]"
                      style={{ "--brand": brand.green } as CSSProperties}
                    />
                    <span className="text-sm text-white/90">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALTERNATING DEEP DIVES (no icons inside) */}
      <section className="bg-[radial-gradient(120%_120%_at_5%_-10%,#ffffff_0%,#f7f9fc_60%,#eef2f7_100%)] text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="space-y-16 md:space-y-24">
            {sectors.map((s, idx) => {
              const rightImage = idx % 2 === 0;
              return (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="grid gap-8 md:gap-12 items-center grid-cols-1 md:grid-cols-2">
                    {/* TEXT */}
                    <div className={rightImage ? "" : "md:order-2"}>
                      <h3 className="text-[28px] md:text-[34px] font-extrabold">
                        {s.title}
                      </h3>
                      <div
                        className="h-[2px] w-40 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3 mb-5"
                        style={{ "--brand": brand.green } as CSSProperties}
                      />
                      <p className="text-[1.05rem] md:text-[1.125rem] leading-7 md:leading-8">
                        {s.intro}
                      </p>
                      <h4 className="mt-5 text-xl md:text-2xl font-semibold">
                        What You Get
                      </h4>
                      <ul className="mt-2 space-y-2 list-disc pl-5">
                        {s.bullets.map((b) => (
                          <li key={b} className="text-[1.02rem]">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* IMAGE PLACEHOLDER */}
                    <div className={rightImage ? "" : "md:order-1"}>
                      <div className="relative">
                        <div
                          className="absolute -inset-5 -z-10 rounded-[2rem] blur-2xl"
                          style={{ background: `${brand.green}1A` }}
                        />
                        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                          <div className="aspect-[16/10] md:aspect-[5/3] grid place-items-center">
                            <div className="w-full h-full bg-[linear-gradient(135deg,rgba(46,46,55,0.06),rgba(52,235,64,0.08))] grid grid-cols-12">
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

      {/* PARTNER STRIP (WITH icons) */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] p-6 md:p-8 grid gap-6 md:grid-cols-3">
            {[
              {
                Icon: Boxes,
                title: "Clean-Core, Cloud-Ready",
                desc: "Composable architectures on SAP, Oracle, Salesforce—built for scale and change.",
              },
              {
                Icon: ClipboardCheck,
                title: "Compliance-First",
                desc: "Controls designed around your industry mandates and audit needs.",
              },
              {
                Icon: Users2,
                title: "Adoption Obsessed",
                desc: "Role-based enablement, KPI scorecards, and continuous improvement.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md shrink-0"
                  style={{ background: `${brand.green}26`, color: brand.green }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">{title}</h4>
                  <p className="text-[15px] text-[#2E2E37]/80">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (single button) */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200">
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_5%_-10%,#151821_0%,#0c0f14_60%,#0a0d12_100%)]" />
            <div className="relative px-6 md:px-10 py-8 md:py-10 text-white grid grid-cols-1 md:grid-cols-3 items-center gap-6">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Ready to tailor an industry-fit solution?
                </h3>
                <p className="mt-2 text-white/80 text-sm">
                  Tell us about your use case—compliance, integrations, KPIs.
                  We’ll design a plan.
                </p>
              </div>

              <div className="md:justify-self-end">
                <Link
                  href="/contact?type=rfp"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 bg-[#34eb40] px-5 py-2 text-sm font-semibold transition hover:border-[var(--brand)] hover:bg-[var(--brand)] text-[var(--dark)]"
                  style={
                    {
                      "--brand": brand.green,
                      "--dark": brand.dark,
                    } as React.CSSProperties
                  }
                >
                  Request a Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
