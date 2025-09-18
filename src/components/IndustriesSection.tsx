"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  ShoppingBag,
  Factory,
  Fuel,
  Radio,
  Truck,
  Stethoscope,
} from "lucide-react";

/* -------- brand -------- */
const brand = { green: "#34eb40" } as const;

type Industry = {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  {
    title: "Banking & FSI",
    desc: "Secure, compliant solutions for banks, insurers, and financial institutions.",
    href: "/industries/banking",
    icon: Landmark,
  },
  {
    title: "Retail",
    desc: "Omnichannel solutions to manage inventory, POS, and customer loyalty.",
    href: "/industries/retail",
    icon: ShoppingBag,
  },
  {
    title: "Manufacturing",
    desc: "Digitize production, optimize resources, and ensure quality at scale.",
    href: "/industries/manufacturing",
    icon: Factory,
  },
  {
    title: "Energy & Utilities",
    desc: "Asset lifecycle, compliance, and customer engagement for the energy sector.",
    href: "/industries/energy",
    icon: Fuel,
  },
  {
    title: "Telecommunication",
    desc: "Scale networks, launch digital services, and improve customer experiences.",
    href: "/industries/telecommunication",
    icon: Radio,
  },
  {
    title: "Distribution & Logistics",
    desc: "Automate supply chains, track orders, and optimize fleet management.",
    href: "/industries/logistics",
    icon: Truck,
  },
  {
    title: "Healthcare",
    desc: "Hospital and pharma solutions balancing compliance with patient care.",
    href: "/industries/healthcare",
    icon: Stethoscope,
  },
];

export default function IndustriesSection() {
  return (
    <section
      className="
        relative py-20 px-6 md:px-10
        bg-[radial-gradient(120%_120%_at_5%_-10%,#ffffff_0%,#f7f9fc_60%,#eef2f7_100%)]
        text-[#2E2E37]
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Industries We Serve
        </h2>
        <div
          className="h-[2px] w-56 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3 mb-6"
          style={{ "--brand": brand.green } as React.CSSProperties}
        />

        <p className="text-[#2E2E37]/80 max-w-3xl">
          ERP and CRM solutions tailored to the world’s most critical sectors.
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item, index }: { item: Industry; index: number }) {
  const Icon = item.icon;
  return (
    <Link href={item.href} className="block focus:outline-none group">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="
          relative overflow-hidden rounded-2xl
          border border-gray-200 bg-white
          shadow-[0_6px_20px_rgba(0,0,0,0.06)]
          transition-all duration-300
          group-hover:-translate-y-0.5
          group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)]
        "
      >
        <div className="p-6">
          <div
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4"
            style={{ background: `${brand.green}26`, color: brand.green }}
          >
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="text-lg font-extrabold tracking-tight">{item.title}</h3>
          <p className="mt-2 text-[15px] leading-7 text-[#2E2E37]/90">{item.desc}</p>

          {/* Explore -> underline animation (no layout shift) */}
          <span
            className="
              mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2E2E37]
              relative whitespace-nowrap pb-[2px]
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:bg-[var(--brand)] after:w-0 after:transition-[width] after:duration-300
              group-hover:after:w-full
            "
            style={{ "--brand": brand.green } as React.CSSProperties}
          >
            Explore →
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
