"use client";
import React from "react";
import { motion } from "framer-motion";

type ProjectTagProps = {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
};

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const baseStyles = `relative inline-block border-2 rounded-full px-6 py-3 text-xl cursor-pointer overflow-hidden transition-all duration-300`;

  const selectedStyles = isSelected
    ? "text-white border-pink-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* ✨ Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-10 w-1 h-1 z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 4}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onClick(name)}
        className={`${baseStyles} ${selectedStyles} z-10 relative`}
      >
        {name}
      </motion.button>
    </motion.div>
  );
};

export default ProjectTag;
