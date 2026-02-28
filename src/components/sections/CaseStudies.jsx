import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";

const CaseStudies = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Production-ready applications built with scalability,
            performance, and clean architecture in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-3xl opacity-30 group-hover:opacity-50 transition" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative rounded-3xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Project Content */}
              <div>
                <h3 className="text-3xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-white/60"
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                <p className="text-indigo-400 font-medium mb-6">
                  {project.metrics}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-lg text-white text-sm font-medium flex items-center gap-2 hover:scale-105 transition"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2 border border-white/20 rounded-lg text-white/80 text-sm flex items-center gap-2 hover:bg-white/10 transition"
                    >
                      GitHub <Github size={16} />
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

export default CaseStudies;