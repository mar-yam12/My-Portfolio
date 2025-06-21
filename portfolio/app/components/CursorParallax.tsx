"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const CursorParallax = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const x = useTransform(mouseX, [0, windowSize.width], [-20, 20]);
  const y = useTransform(mouseY, [0, windowSize.height], [-20, 20]);

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        x,
        y,
      }}
    >
      <div className="w-[300px] h-[300px] bg-purple-600/20 blur-3xl rounded-full absolute top-[30%] left-[20%]" />
      <div className="w-[200px] h-[200px] bg-pink-500/30 blur-2xl rounded-full absolute top-[60%] left-[60%]" />
    </motion.div>
  );
};

export default CursorParallax;
