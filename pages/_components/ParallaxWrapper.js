"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ParallaxWrapper({ children }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpeg')",
          y,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}