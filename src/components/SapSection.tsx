"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const offerings = [
  {
    title: "SAP Solutions",
    description:
      "Powerful enterprise tools for finance, supply chain, HR, and analytics.",
    link: "/services/sap",
  },
  {
    title: "Oracle Solutions",
    description:
      "Scalable ERP and cloud applications for every industry.",
    link: "/services/oracle",
  },
  {
    title: "Salesforce Solutions",
    description:
      "The world’s #1 CRM platform to connect with your customers.",
    link: "/services/salesforce",
  },
  {
    title: "AI & Automation",
    description:
      "Make your business future-ready with AI-driven insights and automation.",
    link: "/services/ai-automation",
  },
];

export default function OfferingsCarouselSection() {
  return (
    <section
      className="
        relative py-20 px-6 md:px-10
        bg-[radial-gradient(120%_120%_at_5%_-10%,#1e1f23_0%,#141517_60%,#0d0e10_100%)]
        text-white
      "
    >
      {/* ambient brand glow to match Industries */}
      {/* <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[#34eb40]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-[#34eb40]/10 blur-3xl" /> */}

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <h2 className="relative inline-block text-3xl sm:text-4xl font-extrabold">
          <span className="relative z-10 text-[#34eb40]">Explore our Services</span>
        </h2>

        {/* Short intro */}
        <p className="mt-4 text-white/80 max-w-3xl">
          We provide end-to-end enterprise solutions that simplify processes,
          improve efficiency, and boost growth.
        </p>

        {/* Carousel */}
        <div className="mt-8">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {offerings.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-2">
                    <Link href={item.link} className="group block h-full">
                      <Card
                        className="
                          h-full relative overflow-hidden
                          bg-[#1f2125]
                          border border-gray-700
                          shadow-[0_6px_20px_rgba(0,0,0,0.3)]
                          transition-all duration-300
                          group-hover:border-r-2 group-hover:border-b-2
                          group-hover:border-[#34eb40]
                        "
                      >
                        {/* larger side green accent */}
                        <span
                          className="
                            absolute left-0 top-0 h-full w-[4px] bg-[#34eb40]
                            opacity-80 transition-all duration-300
                            group-hover:w-[8px]
                          "
                        />
                        <CardContent className="flex flex-col justify-between h-full p-6 relative z-10">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-300">
                              {item.description}
                            </p>
                          </div>

                          {/* CTA at the end */}
                          <span
                            className="
                              mt-6 w-fit text-sm font-semibold text-white
                              relative after:block after:h-[2px] after:bg-[#34eb40]
                              after:w-0 group-hover:after:w-full after:transition-all after:duration-300
                              group-hover:text-[#34eb40]
                            "
                          >
                            Learn More →
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
