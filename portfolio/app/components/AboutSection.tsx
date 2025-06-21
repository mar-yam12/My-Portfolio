"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Tabs
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>Agentic AI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Intermediate</li>
        <li>University of Karachi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Web Development</li>
        <li>Graphic Designing</li>
        <li>Digital Marketing</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="relative bg-[#121212] overflow-hidden text-white">
      {/* 🔵 Gradient Blob */}
      <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-[blob_7s_infinite] z-0" />

      {/* ✨ Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-10 w-1.5 h-1.5 z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${6 + Math.random() * 5}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* ✅ Animated Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 md:grid md:grid-cols-2 gap-8 items-center py-16 px-4 xl:px-16"
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/about-image.png.jpg"
            width={500}
            height={500}
            alt="About Image"
            className="rounded-xl shadow-lg shadow-purple-900/40"
          />
        </motion.div>

        {/* Right Content */}
        <div className="mt-6 md:mt-0 flex flex-col h-full">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-4"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#ADB7BE] text-base lg:text-lg"
          >
            I am a passionate Full Stack Developer with expertise in building
            dynamic and responsive web applications. I specialize in creating
            seamless user experiences and robust backend systems. My journey in
            web development has equipped me with a diverse skill set, enabling
            me to tackle complex challenges and deliver high-quality solutions.
          </motion.p>

          {/* Tab Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mt-8"
          >
            {TAB_DATA.map((tabItem) => (
              <motion.div
                key={tabItem.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TabButton
                  selectTab={() => handleTabChange(tabItem.id)}
                  active={tab === tabItem.id}
                >
                  {tabItem.title}
                </TabButton>
              </motion.div>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 text-[#E0E0E0]"
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
