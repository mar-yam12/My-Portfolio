"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Food Analyzer Agent",
    description: "An AI agent that analyzes food images and provides nutritional information.",
    image: "/images/projects/project1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mar-yam12/Food_Analyzer_Chatbot",
    previewUrl: "https://food-analyzer-chatbot-7w8c.vercel.app",
  },
  {
    id: 2,
    title: "HealthSage Chatbot",
    description: "A health chatbot that provides personalized health advice.",
    image: "/images/projects/project2.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mar-yam12/HealthSage",
    previewUrl: "https://healthsage-production.up.railway.app",
  },
  {
    id: 3,
    title: "One Click Home App",
    description: "A mobile application for home services booking.",
    image: "/images/projects/project3.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/mar-yam12/one_click_home",
    previewUrl: "https://oneclickhome-by-maryamshahid.streamlit.app/",
  },
  {
    id: 4,
    title: "Haveli Restaurant",
    description: "A Website for Haveli Restaurant showcasing their menu and services.",
    image: "/images/projects/project4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mar-yam12/haveli-restaurant",
    previewUrl: "https://github.com/mar-yam12/haveli-restaurant",
  },
  {
    id: 5,
    title: "Makeup Store",
    description: "An e-commerce website for a makeup store with product listings and a shopping cart.",
    image: "/images/projects/project5.JPG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/mar-yam12/makeup-store",
    previewUrl: "https://makeup-store-pearl.vercel.app/",
  },
  {
    id: 6,
    title: "Festive Favors",
    description: "A festive-themed e-commerce website for gifts and decorations.",
    image: "/images/projects/project6.JPG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/mar-yam12/FESTIVE-FAVORS",
    previewUrl: "https://festive-favors.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="relative overflow-hidden py-20 px-4 sm:px-8 bg-[#121212]">
      {/* 🌟 Floating Gradient Blob */}
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-[blob_8s_infinite] top-10 -left-20 z-0"></div>

      {/* 🌟 Floating Particles */}
      {[...Array(15)].map((_, i) => (
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

      <div className="relative z-10">
        <h2 className="text-center text-4xl font-bold text-white mb-8 md:mb-12">
          My Projects
        </h2>

        {/* 🔘 Tags */}
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>

        {/* 📦 Project Cards */}
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
