"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

type Dot = {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
};

interface MapProps {
  dots?: Dot[];
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#34eb40",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#FFFFFF26",
    shape: "circle",
    backgroundColor: "#0b0d10",
  });

  const W = 800;
  const H = 400;

  const projectPoint = (lat: number, lng: number) => ({
    x: (lng + 180) * (W / 360),
    y: (90 - lat) * (H / 180),
  });

  const createCurvedPath = (s: { x: number; y: number }, e: { x: number; y: number }) => {
    const midX = (s.x + e.x) / 2;
    const midY = Math.min(s.y, e.y) - 50;
    return `M ${s.x} ${s.y} Q ${midX} ${midY} ${e.x} ${e.y}`;
  };

  return (
    <div className="absolute inset-0">
      {/* base dotted map injected */}
      <div
        className="absolute inset-0"
        dangerouslySetInnerHTML={{ __html: svgMap }}
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* arcs + dots */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="10%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="90%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const s = projectPoint(dot.start.lat, dot.start.lng);
          const e = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={i}
              d={createCurvedPath(s, e)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1.5"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.5 * i }}
            />
          );
        })}
      </svg>
    </div>
  );
}
