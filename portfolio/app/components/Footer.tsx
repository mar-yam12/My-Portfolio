"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      {/* 🌈 Gradient Glow */}
      <div className="absolute -top-10 left-0 w-72 h-72 bg-gradient-to-tr from-pink-500 to-purple-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse" />

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
        ></div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto p-12 flex justify-between items-center relative z-10"
      >
        {/* 🔥 Logo text with gradient */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-xl font-bold">
          MARYAM SHAHID
        </span>

        {/* Copyright */}
        <p className="text-[#6B7280] text-sm">© {new Date().getFullYear()} All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
