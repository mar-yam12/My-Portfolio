"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Lazy load animated numbers
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

// Framer Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const achievementsList = [
  {
    metric: "Projects",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Certifications",
    value: "4",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const AchievementsSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-8 px-4 xl:gap-6 sm:py-16 xl:px-16"
    >
      <motion.div
        variants={itemVariants}
        className="sm:border-[#33353F] sm:border rounded-md py-8 px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between bg-[#1a1a1a] shadow-lg shadow-purple-900/20"
      >
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 hover:bg-[#232323] rounded-lg p-4 transition"
          >
            <h2 className="text-white text-4xl font-bold flex items-center">
              <AnimatedNumbers
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
              />
              {achievement.postfix && (
                <span className="text-pink-500 text-4xl font-bold ml-1">
                  {achievement.postfix}
                </span>
              )}
            </h2>
            <p className="text-[#ADB7BE] text-base mt-2 tracking-wide uppercase">
              {achievement.metric}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AchievementsSection;
