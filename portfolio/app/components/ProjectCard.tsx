import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#1F1F1F] shadow-lg hover:shadow-2xl transition-transform duration-300 group transform hover:-translate-y-1 hover:scale-[1.02] ease-out">
      {/* 📸 Project Image */}
      <div
        className="h-52 md:h-72 bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        {/* 🧃 Overlay with Icons */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-[#ADB7BE] hover:border-white transition"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white transition" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-[#ADB7BE] hover:border-white transition"
          >
            <EyeIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white transition" />
          </Link>
        </div>
      </div>

      {/* 🔤 Project Info */}
      <div className="p-5 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
