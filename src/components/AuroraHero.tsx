"use client";

import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const GREEN_AURORA = ["#34eb40", "#52ff5a", "#2ecc71", "#34eb40"];

export const AuroraHero = () => {
  const color = useMotionValue(GREEN_AURORA[0]);

  useEffect(() => {
    const controls = animate(color, GREEN_AURORA, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => controls.stop();
  }, [color]);

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 100% 50%, #050301 55%, ${color})
  `;
  const ringGlow = useMotionTemplate`0 0 0 2px ${color}`;
  const boxShadow = useMotionTemplate`0px 8px 30px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-[85vh] overflow-hidden bg-black px-6 pb-24 pt-36 text-white font-sans"
    >
      <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center">
        <div className="w-full max-w-2xl pr-6">
          {/* Title */}
          <h1 className="bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.08] drop-shadow-md">
            Smarter Platforms.
            <br />
            Better Performance.
          </h1>

          {/* Subtitle */}
          <h2 className="mt-5 text-base sm:text-lg md:text-xl text-gray-200">
At Intellance, we empower businesses with world-class ERP, CRM, and AI solutions from SAP, Oracle, and Salesforce. Whether you’re looking to implement, customize, or upgrade, our experts ensure your systems work smarter, faster, and deliver real business results.
          </h2>
        </div>
      </div>

      {/* Stars Background */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
