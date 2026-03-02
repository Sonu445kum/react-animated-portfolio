import { motion } from "framer-motion";
import { Code, Layers, Brain, Server, Linkedin } from "lucide-react";
import { useState } from "react";

const servicesData = [
  {
    title: "Frontend Engineering",
    icon: <Code size={30} />,
    description:
      "Pixel-perfect, high-performance UI systems using React, optimized state management, and scalable component architecture.",
    tech: ["React", "Redux Toolkit", "Tailwind", "Framer Motion"],
  },
  {
    title: "Full-Stack Systems",
    icon: <Layers size={30} />,
    description:
      "Production-grade MERN applications with authentication, role-based dashboards, payments and scalable backend structure.",
    tech: ["MERN", "JWT", "Stripe", "MongoDB"],
  },
  {
    title: "AI Integration",
    icon: <Brain size={30} />,
    description:
      "Integrating AI APIs, automation pipelines, and intelligent workflows into modern web platforms.",
    tech: ["OpenAI API", "Python", "ML APIs"],
  },
  {
    title: "Backend & APIs",
    icon: <Server size={30} />,
    description:
      "Secure, scalable REST APIs with JWT authentication, validation layers, and performance optimization.",
    tech: ["Node.js", "Express", "MongoDB"],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section  id="services" className="relative py-28 px-6 overflow-hidden text-center text-white">
      
      {/* === Unified Premium Background === */}

      {/* Radial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1a1a40,transparent_60%),radial-gradient(circle_at_80%_80%,#0f172a,transparent_60%)]" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 
                     bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 
                     bg-clip-text text-transparent"
        >
          What I Build
        </motion.h2>

        <p className="text-zinc-400 max-w-2xl mx-auto mb-16">
          I design scalable systems, production-ready applications, and
          intelligent digital products built for performance and growth.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="relative bg-white/5 backdrop-blur-2xl border border-white/10 
                         p-8 rounded-3xl cursor-pointer 
                         shadow-[0_0_50px_rgba(168,85,247,0.1)] 
                         hover:shadow-[0_0_70px_rgba(168,85,247,0.25)] 
                         transition-all duration-500 group"
            >
              <div className="relative z-10">
                <div className="flex justify-center mb-5 text-purple-400 group-hover:scale-110 transition">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold mb-4 group-hover:text-purple-400 transition">
                  {service.title}
                </h3>

                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-zinc-400 text-sm"
                  >
                    <p className="mb-4">{service.description}</p>

                    <div className="flex flex-wrap justify-center gap-2">
                      {service.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="bg-purple-600/20 text-purple-400 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 relative">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/sonu445kum/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-10 py-4 
                       bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
                       rounded-full text-white font-medium shadow-xl 
                       transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full"></span>

            <Linkedin size={18} className="relative z-10" />
            <span className="relative z-10">
              Let’s Connect on LinkedIn
            </span>

            <span className="absolute inset-0 rounded-full border border-purple-400 animate-ping opacity-20"></span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;