import { motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";

const experienceData = [
  {
    role: "Software Developer Intern",
    company: "Jobma AI",
    duration: "2025 - 2026",
    description:
      "Built scalable frontend modules, optimized React performance, and integrated REST APIs for AI-based interview platform.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "REST APIs"],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self Employed",
    duration: "2024 - Present",
    description:
      "Developed full-stack MERN applications including eCommerce, AI tools, and admin dashboards with secure authentication.",
    tech: ["MERN", "JWT", "Stripe", "MongoDB"],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden text-white">

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
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 
                     bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 
                     bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto relative border-l border-purple-500/40 pl-10 space-y-14">

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[30px] top-2 w-7 h-7 
                              bg-purple-500 rounded-full 
                              flex items-center justify-center 
                              shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                <Briefcase size={14} />
              </div>

              {/* Card */}
              <div
                onClick={() => toggle(index)}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 
                           p-8 rounded-3xl cursor-pointer 
                           shadow-[0_0_40px_rgba(168,85,247,0.1)] 
                           hover:shadow-[0_0_70px_rgba(168,85,247,0.25)] 
                           transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-purple-400 text-sm">
                      {exp.company} • {exp.duration}
                    </p>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Expand Section */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 text-zinc-400 text-sm"
                  >
                    <p className="mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-600/20 text-purple-400 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;