"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

// Navigation links
const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100 border border-[#33353F] backdrop-blur-lg"
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* 🔶 Gradient Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text tracking-wide">
            MARYAM SHAHID
          </Link>
        </motion.div>

        {/* 📱 Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* 🔗 Social Icons (Mobile Hidden by Default) */}
          <a
            href="https://github.com/mar-yam12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/maryamshahid1211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
          </a>

          {/* Hamburger */}
          <motion.button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition"
            whileTap={{ scale: 0.95 }}
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </motion.button>
        </div>

        {/* 🖥 Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink href={link.path} title={link.title} />
              </motion.li>
            ))}
          </ul>

          {/* 🌐 Social Icons */}
          <div className="flex space-x-4 ml-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Overlay Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <MenuOverlay links={navLinks} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
