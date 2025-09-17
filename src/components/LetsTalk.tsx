"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, Puzzle, Rocket } from "lucide-react";
import TalkImg from "@/assets/talk.png";

export default function LetsTalk() {
  return (
    <section className="relative py-20 px-6 md:px-10 bg-[radial-gradient(120%_120%_at_5%_-10%,#ffffff_0%,#f7f9fc_60%,#eef2f7_100%)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image frame */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 bg-[#34eb40] rounded-[2rem] blur-2xl" />
          <div className="relative rounded-xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[#34eb40]" />
            <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[#34eb40]" />
            <span className="absolute left-0 bottom-0 h-4 w-4 border-l-2 border-b-2 border-[#34eb40]" />
            <span className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-[#34eb40]" />

            <div className="relative aspect-[5/4]">
              <Image
                src={TalkImg}
                fill
                alt="Let's talk"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right: Heading + steps */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2E2E37] leading-tight mb-4 relative inline-block">
            <span className="relative z-10">Let’s talk</span>
            <span className="absolute left-0 bottom-1 h-2 w-full bg-[#34eb40]/70 z-0"></span>
          </h2>

          <p className="text-sm text-gray-700 mb-10 max-w-xl">
            A quick, low-friction path from idea to impact. We align on goals,
            shape the plan together, and move fast—without surprises.
          </p>

          <ol className="relative">
            <span className="absolute left-6 top-0 bottom-0 border-l border-dashed border-gray-300" />

            <Step
              icon={<PhoneCall className="w-5 h-5 text-white" />}
              title="Hop on a discovery call"
              desc="We learn your context—team, goals, timeline, budget—and map opportunities where we can add real value."
              delay={0}
            />
            <Step
              icon={<Puzzle className="w-5 h-5 text-white" />}
              title="Identify the right solution together"
              desc="We co-define the approach, success metrics, and team shape. Clear milestones, clear ownership."
              delay={0.08}
            />
            <Step
              icon={<Rocket className="w-5 h-5 text-white" />}
              title="Get started and accelerate fast"
              desc="Kickoff, weekly check-ins, transparent progress. We adapt as we learn and keep outcomes front-and-center."
              delay={0.16}
            />
          </ol>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2 text-sm text-[#2E2E37] font-semibold hover:border-[#34eb40] hover:shadow-[0_8px_24px_rgba(52,235,64,0.18)] transition"
            >
              Let’s connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  icon,
  title,
  desc,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className="relative pl-16 pb-8"
    >
      <span className="absolute left-0 top-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#34eb40] ring-4 ring-white">
        {icon}
      </span>

      <h3 className="text-lg font-bold text-[#2E2E37] mb-1">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed max-w-xl">{desc}</p>
    </motion.li>
  );
}
