"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Variants } from "framer-motion";

// ✅ Typed animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className="lg:py-20 py-10 bg-[#121212] text-white overflow-hidden relative">
      {/* 🔵 Animated Blob Background */}
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-[blob_8s_infinite] top-10 -left-20 z-0" />

      {/* ✨ Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-10 w-1.5 h-1.5 z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* ✅ Main animation container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-12 items-center max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* ✅ Left Content */}
        <motion.div
          variants={itemVariants}
          className="col-span-8 text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Hello, I&apos;m
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            >
              <TypeAnimation
                sequence={[
                  "Maryam Shahid",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Agentic AI Developer",
                  1000,
                  "WordPress Developer",
                  1000,
                  "Graphic Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold"
                repeat={Infinity}
              />
            </motion.span>
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl"
          >
            I am a passionate Full Stack Developer with expertise in building
            dynamic and responsive web applications. I specialize in creating
            seamless user experiences and robust backend systems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:opacity-90 transition w-full sm:w-fit text-center"
              >
                Hire Me
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-[2px] py-[2px] rounded-full bg-gradient-to-br from-pink-500 to-purple-600 w-full sm:w-fit"
              >
                <span className="block bg-[#0d0d0d] text-white rounded-full px-5 py-2 hover:bg-[#1e1e1e] transition font-medium">
                  Download CV
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ✅ Right Image */}
        <motion.div
          variants={itemVariants}
          className="col-span-4 place-self-center mt-10 lg:mt-0 relative"
        >
          <div className="absolute -z-10 w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] bg-pink-500 opacity-30 blur-3xl rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-2xl shadow-pink-900">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-4 border-[#3a0528] rounded-full hover:scale-105 transition-transform duration-500"
              width={600}
              height={600}
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
