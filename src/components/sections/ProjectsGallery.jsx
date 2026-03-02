import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects, categories } from "../../data/projects";

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-28 bg-black text-white px-6 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15),_transparent_60%)] pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Selected Work
        </h2>
        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          A curated collection of scalable, production-ready applications 
          built with modern technologies and clean architecture.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-20 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-sm tracking-wide transition ${
              activeCategory === cat
                ? "text-white"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -12 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-purple-500/30"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Category Badge */}
              {/* <div className="absolute top-5 left-5 px-4 py-1 text-xs tracking-wide uppercase bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
                {project.category}
              </div> */}
            </div>

            {/* Content */}
            <div className="p-8 space-y-5">

              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-tight group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 leading-relaxed text-sm line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack (Minimal Style) */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-zinc-500 tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              {project.metrics && (
                <p className="text-xs text-emerald-400 pt-2">
                  {project.metrics}
                </p>
              )}

              {/* Buttons */}
              <div className="flex items-center gap-6 pt-4">
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition flex items-center gap-2"
                  >
                    <Github size={16} /> View Code
                  </a>
                )}

                {project.demoUrl !== "#" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-400 hover:text-purple-300 transition flex items-center gap-2"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;