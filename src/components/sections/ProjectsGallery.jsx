import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "AI Interview Platform",
    category: "Full Stack",
    image: "https://source.unsplash.com/600x400/?ai",
    tech: ["React", "Node", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "E-Commerce MERN App",
    category: "MERN",
    image: "https://source.unsplash.com/600x400/?ecommerce",
    tech: ["MERN", "Stripe", "Redux"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Frontend",
    image: "https://source.unsplash.com/600x400/?webdesign",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
];

const categories = ["All", "Full Stack", "MERN", "Frontend"];

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-center px-6">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-white/5 text-zinc-400 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-600/20 text-purple-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition text-sm"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition text-sm"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;