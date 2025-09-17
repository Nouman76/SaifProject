import Image from "next/image";
import Link from "next/link";
import ToolCarousel from "@/components/ToolCarousel"; // ✅ shared carousel
import styles from "./page.module.css";
import {
  Cpu,
  Bot,
  Brain,
  BarChart3,
  Workflow,
  LineChart,
} from "lucide-react";

export const metadata = {
  title: "AI & Automation | Intellance",
  description:
    "AI consulting, development, intelligent automation, and predictive analytics — delivered securely and at scale.",
};

export default function AIAutomationOverview() {
  // --------- Content ---------
  const brand = {
  green: "#34eb40",
  dark: "#0c0f14",
} as const;
  type Module = {
  id: string;
  title: string;
  purpose: string;
  features: string[];
  benefits: string[];
};

const modules: Module[] = [
  {
    id: "ai-consulting",
    title: "AI Consulting",
    purpose: "Strategize and implement AI initiatives aligned with your business goals.",
    features: [
      "AI readiness assessment",
      "Roadmap & strategy design",
      "Use case prioritization",
      "Change management support",
    ],
    benefits: [
      "Clear AI adoption strategy",
      "Reduced risk in implementation",
      "Faster time-to-value",
    ],
  },
  {
    id: "ai-dev",
    title: "AI Solution Development",
    purpose: "Build custom AI models and applications for real-world impact.",
    features: [
      "Custom ML model development",
      "Natural language processing",
      "Computer vision & image recognition",
      "MLOps & deployment pipelines",
    ],
    benefits: [
      "Tailored solutions for your business",
      "Improved accuracy with custom models",
      "Scalable, production-ready AI systems",
    ],
  },
  {
    id: "ipa",
    title: "Intelligent Process Automation",
    purpose: "Automate repetitive workflows with AI-enhanced RPA solutions.",
    features: [
      "Robotic Process Automation (RPA)",
      "Cognitive document processing",
      "Chatbots & virtual assistants",
      "Integration with enterprise systems",
    ],
    benefits: [
      "Lower operational costs",
      "Increased efficiency & speed",
      "Fewer human errors",
    ],
  },
  {
    id: "predictive",
    title: "Predictive Analytics",
    purpose: "Turn data into actionable foresight with predictive models.",
    features: [
      "Forecasting & trend analysis",
      "Customer behavior prediction",
      "Risk & anomaly detection",
      "Real-time decision support",
    ],
    benefits: [
      "Data-driven decision-making",
      "Improved customer engagement",
      "Reduced business risks",
    ],
  },
];
  const shortNav = [
  { id: "ai-consulting", short: "Consulting" },
  { id: "ai-dev", short: "Development" },
  { id: "ipa", short: "Automation" },
  { id: "predictive", short: "Analytics" },
] as const;
  const capabilities = [
  {
    title: "AI Strategy & Roadmapping",
    icon: Brain,
    desc: "Define a clear path for AI adoption aligned with your business objectives.",
  },
  {
    title: "Intelligent Automation",
    icon: Workflow,
    desc: "Automate repetitive workflows with AI-enhanced RPA and chatbots.",
  },
  {
    title: "Custom AI Models",
    icon: Cpu,
    desc: "Build and deploy tailored machine learning and deep learning models.",
  },
  {
    title: "Predictive Analytics",
    icon: LineChart,
    desc: "Forecast trends and outcomes with advanced predictive modeling.",
  },
  {
    title: "Conversational AI",
    icon: Bot,
    desc: "Deliver 24/7 intelligent customer support with chatbots and voice AI.",
  },
  {
    title: "Data Insights & Visualization",
    icon: BarChart3,
    desc: "Turn raw data into actionable insights with interactive dashboards.",
  },
] as const;

  const kpis = [
    { kpi: "6–10 weeks", label: "Time to MVP" },
    { kpi: "20–40%", label: "Ops cost impact" },
    { kpi: "3–5×", label: "Analyst productivity" },
    { kpi: "95%+", label: "Automation reliability" },
  ];

  const delivery = [
    {
      step: "01",
      title: "Discovery & Assessment",
      desc: "Use-case discovery, data audit, value targets, and risk profile.",
    },
    {
      step: "02",
      title: "Solution Design & Architecture",
      desc: "Model/stack choices, data contracts, and guardrails.",
    },
    {
      step: "03",
      title: "Model Development & Testing",
      desc: "Training/finetuning, eval harness, and red-team reviews.",
    },
    {
      step: "04",
      title: "Integration & Deployment",
      desc: "APIs/LLM apps, pipelines, CI/CD, and observability.",
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      desc: "Drift alerts, A/Bs, human-in-the-loop, continuous improvement.",
    },
  ];
const toolsAiAutomation = [
  { src: "/logos/python.svg", alt: "Python" },
  { src: "/logos/python.svg", alt: "TensorFlow" },
  { src: "/logos/python.svg", alt: "PyTorch" },
  { src: "/logos/python.svg", alt: "Azure AI" },
  { src: "/logos/python.svg", alt: "AWS SageMaker" },
  { src: "/logos/python.svg", alt: "Google Vertex AI" },
  { src: "/logos/python.svg", alt: "UiPath" },
  { src: "/logos/python.svg", alt: "Automation Anywhere" },
  { src: "/logos/python.svg", alt: "Power Automate" },
  { src: "/logos/python.svg", alt: "Snowflake" },
  { src: "/logos/python.svg", alt: "Databricks" },
  { src: "/logos/python.svg", alt: "Apache Spark" },
  { src: "/logos/python.svg", alt: "Tableau" },
  { src: "/logos/python.svg", alt: "Power BI" },
  { src: "/logos/python.svg", alt: "Qlik" },
  { src: "/logos/python.svg", alt: "Oracle ERP" },
  { src: "/logos/python.svg", alt: "Salesforce" },
  { src: "/logos/python.svg", alt: "SAP" },
] as const;

  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden min-h-[70vh] grid items-center bg-[radial-gradient(120%_120%_at_5%_-10%,#151821_0%,#0c0f14_60%,#0a0d12_100%)] text-white">
  {/* Glow Orbs */}
  <div
    className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full blur-3xl"
    style={{ background: "#34eb401A" }}
  />
  <div
    className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
    style={{ background: "#34eb401A" }}
  />

  <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* LEFT: Copy */}
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          AI-Powered Business Transformation
        </h1>
        <p className="mt-4 text-white/80 text-[1.05rem] leading-7">
          Smarter operations, faster insights, and scalable automation —
          helping enterprises innovate and stay ahead with AI-driven solutions.
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2 text-sm font-semibold transition-all hover:border-[#34eb40] hover:shadow-[0_8px_24px_rgba(52,235,64,0.18)]"
          >
            Let’s Connect
          </a>
        </div>
      </div>

      {/* RIGHT: Visual placeholder */}
      <div className="relative">
        <div
          className="absolute -inset-6 -z-10 rounded-[2rem] blur-2xl"
          style={{ background: "#34eb401A" }}
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
<section className="sticky top-16 z-[10]">
  <nav className="backdrop-blur supports-[backdrop-filter]:bg-[#0a0c10]/70 bg-[#0a0c10]/80 text-white border-y border-white/10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-2">
      <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
        {shortNav.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/0 px-3 py-1.5 text-xs md:text-[13px] font-bold tracking-wide text-white transition-all duration-300 hover:text-white hover:border-[#34eb40] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34eb40]"
            >
              {n.short}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
</section>
{/* INTEGRATED INTELLIGENCE FOR AI & AUTOMATION */}
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
            AI & AUTOMATION
          </span>
          <br />
          <span
            className="box-decoration-clone px-1"
            style={{ background: `${brand.green}4D` }}
          >
            FOR EVERY FUNCTION
          </span>
        </h2>
      </div>
      <p className="text-[16px] leading-7 font-semibold mt-5 md:leading-8 text-[#2E2E37] max-w-xl">
        Our AI & Automation services transform business operations — combining predictive analytics, intelligent process automation, and AI-driven insights to optimize workflows, reduce operational costs, and accelerate decision-making across every function of your enterprise.
      </p>
    </div>
  </div>
</section>


{/* ---------- CORE AI MODULES (alternating deep dives) ---------- */}
<section className="bg-white text-[#2E2E37]">
  <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
    <h3 className="text-2xl md:text-3xl font-extrabold">
      Core AI & Automation Offerings
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
                  {m.purpose}
                </p>

                <h4 className="mt-5 text-xl md:text-2xl font-semibold">
                  Key Features
                </h4>
                <ul className="mt-2 space-y-1.5 list-disc pl-5">
                  {m.features.map((f) => (
                    <li key={f} className="text-[1.05rem] md:text-[1.125rem]">
                      {f}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-5 text-xl md:text-2xl font-semibold">
                  Client Benefits
                </h4>
                <ul className="mt-2 space-y-1.5 list-disc pl-5">
                  {m.benefits.map((b) => (
                    <li key={b} className="text-[1.05rem] md:text-[1.125rem]">
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
                    style={{ background: "#34eb401A" }}
                  />
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                    <div className="aspect-[16/10] md:aspect-[5/3] grid place-items-center">
                      <div className="w-full h-full bg-[linear-gradient(135deg,rgba(46,46,55,0.08),rgba(52,235,64,0.08))] grid grid-cols-12">
                        {Array.from({ length: 60 }).map((_, i) => (
                          <div key={i} className="border border-gray-200/60" />
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
      {/* ---------- TOOLS & TECHNOLOGIES ---------- */}
      <section id="tools-tech" className="relative bg-black text-white">
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
    <h3 className="text-xl md:text-2xl font-bold">Tools & Technologies</h3>
    <ToolCarousel
      logos={toolsAiAutomation}
      speedSec={26}   // smooth scrolling speed
      heightPx={56}   // match Salesforce design
      gapPx={32}      // ~ Tailwind gap-8
      className="mt-8"
    />
  </div>
</section>
      {/* ---------- CAPABILITIES ---------- */}
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
      {capabilities.map((cap) => (
        <div
          key={cap.title}
          className="relative overflow-hidden rounded-2xl border border-black/15 bg-black/10 p-6"
        >
          <div className="flex items-start gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                background: "#34eb4026",
                color: "#34eb40",
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


      {/* ---------- DELIVERY APPROACH ---------- */}
<section id="delivery" className="bg-white text-[#2E2E37]">
  <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-6">
    <h3 className="text-2xl md:text-3xl font-extrabold">Delivery Approach</h3>
    <div
      className="h-[2px] w-56 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
      style={{ "--brand": brand.green } as CSSProperties}
    />
  </div>
</section>

<section className="bg-white text-[#2E2E37]">
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Side visual placeholder */}
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
              style={{ "--brand": brand.green } as CSSProperties}
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

    {/* CTA section */}
    <div className="mt-14 relative overflow-hidden rounded-2xl border border-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_5%_-10%,#151821_0%,#0c0f14_60%,#0a0d12_100%)]" />
      <div className="relative px-6 md:px-10 py-8 md:py-10 text-white grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        <div className="md:col-span-2">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Ready to harness AI & Automation for your business?
          </h3>
          <p className="mt-2 text-white/80 text-sm">
            Let’s tailor an AI roadmap for your operations, workflows, and KPIs.
          </p>
        </div>
        <div className="md:justify-self-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-[#34eb40] px-5 py-2 text-sm font-semibold transition hover:border-[var(--brand)] hover:bg-[var(--brand)] text-[var(--dark)]"
            style={{
              "--brand": brand.green,
              "--dark": brand.dark,
            } as CSSProperties}
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