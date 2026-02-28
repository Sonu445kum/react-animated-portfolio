import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  tech = [],
  liveLink,
  githubLink,
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="
        relative 
        rounded-2xl 
        overflow-hidden 
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        shadow-2xl 
        group
      "
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:scale-105 transition"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;