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
    <section id="projects" className="relative py-28 px-6 overflow-hidden text-white">
      
      {/* === Premium Background System === */}

      {/* Radial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1a1a40,transparent_60%),radial-gradient(circle_at_80%_80%,#0f172a,transparent_60%)]" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
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
                  ? "text-purple-400"
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
              className="group relative rounded-3xl overflow-hidden 
                         border border-white/10 
                         bg-white/5 backdrop-blur-2xl 
                         shadow-[0_0_50px_rgba(168,85,247,0.1)] 
                         hover:shadow-[0_0_70px_rgba(168,85,247,0.2)] 
                         transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-5">
                <h3 className="text-2xl font-semibold tracking-tight group-hover:text-purple-400 transition">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm line-clamp-2">
                  {project.description}
                </p>

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

                {project.metrics && (
                  <p className="text-xs text-emerald-400 pt-2">
                    {project.metrics}
                  </p>
                )}

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
      </div>
    </section>
  );
};

export default ProjectsGallery;