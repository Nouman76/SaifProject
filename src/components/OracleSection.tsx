"use client";

import { CheckCircle, Globe2 } from "lucide-react";

type Reason = {
  title: string;
  desc: string;
  icon?: React.ElementType; // optional, we default to CheckCircle
};

const reasons: Reason[] = [
  {
    title: "Proven Expertise",
    desc: "Certified consultants with years of hands-on delivery across leading platforms.",
  },
  {
    title: "Custom Solutions",
    desc: "Architected to your processes, KPIs, and scale—no cookie-cutter rollouts.",
  },
  {
    title: "End-to-End Service",
    desc: "From discovery and implementation to enablement and 24/7 support.",
  },
  {
    title: "Global Reach",
    desc: "Serving clients across the USA, GCC, and Asia with distributed teams.",
    icon: Globe2,
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-10 bg-[#101114]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Why Choose <span className="text-[#34eb40]">Intellance</span>?
        </h2>

        {/* Divider (⸻) styled */}
        <div className="mt-4 mb-8 h-[2px] w-58 bg-gradient-to-r from-[#34eb40] to-[#34eb40]/40" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#2a2b30] rounded-none overflow-hidden">
          {reasons.map((r, i) => (
            <Tile key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ title, desc, icon: IconOverride }: Reason) {
  const Icon = IconOverride ?? CheckCircle;
  return (
    <div className="group relative bg-[#17181d] p-6 min-h-[170px] flex gap-4 hover:bg-[#1c1d23] transition-colors duration-300">
      {/* Icon */}
      <div
        className="mt-1 shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full
                   bg-[#1f2026] text-[#34eb40] ring-2 ring-[#1f2026]"
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{desc}</p>
      </div>

      {/* Green corner accents on hover */}
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#34eb40] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-[#34eb40] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="pointer-events-none absolute left-0 bottom-0 h-3 w-3 border-l-2 border-b-2 border-[#34eb40] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="pointer-events-none absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-[#34eb40] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
