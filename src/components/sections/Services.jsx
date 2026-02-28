import { motion } from "framer-motion";
import { Code, Layers, Brain, Server } from "lucide-react";
import { useState } from "react";

const servicesData = [
  {
    title: "Frontend Development",
    icon: <Code size={28} />,
    description:
      "Modern, responsive and high-performance UI development using React, Tailwind and advanced animations.",
    tech: ["React", "Redux", "Tailwind", "Framer Motion"],
  },
  {
    title: "Full Stack Web Apps",
    icon: <Layers size={28} />,
    description:
      "End-to-end scalable MERN applications with authentication, payments and admin dashboards.",
    tech: ["MERN", "JWT", "Stripe", "MongoDB"],
  },
  {
    title: "AI Integration",
    icon: <Brain size={28} />,
    description:
      "Integrating AI models like HuggingFace, Coqui TTS/STT and intelligent automation into web apps.",
    tech: ["AI APIs", "Python", "ML Models"],
  },
  {
    title: "REST API Development",
    icon: <Server size={28} />,
    description:
      "Secure and scalable REST APIs with proper authentication, validation and performance optimization.",
    tech: ["Node.js", "Express", "MongoDB"],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900 text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl cursor-pointer hover:shadow-purple-500/20 transition-all duration-300 group"
          >
            <div className="flex justify-center mb-4 text-purple-400">
              {service.icon}
            </div>

            <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-400 transition">
              {service.title}
            </h3>

            {/* Expand Section */}
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-zinc-400 text-sm"
              >
                <p className="mb-4">{service.description}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {service.tech.map((tech, i) => (
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
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="inline-block px-8 py-3 bg-purple-600 rounded-full text-white font-medium shadow-lg hover:bg-purple-700 transition"
        >
          Let's Work Together
        </motion.a>
      </div>
    </section>
  );
};

export default Services;