"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Item = {
  title: string;
  description: string;
  link?: string;
};

export function HoverEffect({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const Wrapper: any = item.link ? Link : "div";
        const wrapperProps = item.link ? { href: item.link } : {};

        return (
          <Wrapper
            {...wrapperProps}
            key={item.title + idx}
            className="relative group block h-full w-full focus:outline-none"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block bg-[#34eb40]/15 ring-1 ring-[#34eb40]/30"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.12 },
                  }}
                />
              )}
            </AnimatePresence>

            <Card>
              <div className="flex flex-col h-full">
                <div>
                  <CardTitle className="group-hover:text-[#2E2E37] transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>

                {/* CTA at bottom */}
                {item.link && (
                  <span
                    className="
                      mt-auto pt-6 inline-flex items-center gap-1
                      text-sm font-semibold text-[#2E2E37]
                      border-b border-black
                      opacity-0 translate-y-1
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300
                      w-fit
                    "
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                )}
              </div>
            </Card>
          </Wrapper>
        );
      })}
    </div>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative z-10 h-full w-full overflow-hidden",
        "bg-white border border-gray-200 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]",
        "p-6 transition-all duration-300",
        "group-hover:border-[#34eb40] group-hover:shadow-[0_8px_30px_rgba(244,206,20,0.18)]",
        "min-h-[220px]", // fixed height feel
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h4
      className={cn(
        "text-[#0f172a] font-semibold text-lg mb-3",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "text-[15px] leading-relaxed text-gray-600",
        className
      )}
    >
      {children}
    </p>
  );
}
