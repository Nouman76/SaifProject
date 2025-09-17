"use client";
import Image from "next/image";
import * as React from "react";

type Logo = { src: string; alt: string };

interface ToolsCarouselProps {
  logos: Logo[];
  speedSec?: number;   // default 28
  heightPx?: number;   // default 56
  gapPx?: number;      // default 32
  className?: string;
}

export default function ToolsCarousel({
  logos,
  speedSec = 28,
  heightPx = 56,
  gapPx = 32,
  className = "",
}: ToolsCarouselProps) {
  const trackStyle: React.CSSProperties = {
    width: "200%",
    animation: `scrollX ${speedSec}s linear infinite`,
    columnGap: `${gapPx}px`,
  };

  return (
    <>
      <div className={`overflow-hidden relative ${className}`}>
        <div
          className="flex items-center will-change-transform hover:[animation-play-state:paused] marquee"
          style={trackStyle}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={`${logo.alt}-${i}`} className="shrink-0">
              <div
                className="opacity-90 hover:opacity-100 transition"
                style={{ height: `${heightPx}px` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={Math.round(heightPx * 2.5)}
                  height={heightPx}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee { animation: scrollX var(--speed, 28s) linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none !important; }
        }
      `}</style>
    </>
  );
}
