import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb
} from "react-icons/si";

import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden"
    >
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px] top-[-150px] left-[-150px] animate-float" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] bottom-[-150px] right-[-150px] animate-float-reverse" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Build Modern{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              SaaS Applications
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-lg text-white/70 max-w-xl mx-auto lg:mx-0"
          >
            I design and develop scalable, high-performance web applications
            using React, Node.js, and modern technologies.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold shadow-lg overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl" />
            </button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center lg:text-left"
              >
                <h3 className="text-2xl font-bold text-white">
                  {stat.value}
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE 3D FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, y: 60 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ rotateY: 10, rotateX: 5 }}
          className="relative flex justify-center perspective-1000"
        >
          <div className="glass-card p-8 rounded-3xl w-full max-w-md shadow-2xl backdrop-blur-xl transition-all duration-500">
            <h3 className="text-lg font-semibold mb-6 text-white/90">
              Tech Stack
            </h3>

            <div className="grid grid-cols-3 gap-6 text-4xl text-white/80">
              <SiReact className="hover:text-cyan-400 transition-all duration-300" />
              <SiNextdotjs />
              <SiTailwindcss className="hover:text-sky-400 transition-all duration-300" />
              <SiNodedotjs className="hover:text-green-400 transition-all duration-300" />
              <SiMongodb className="hover:text-green-500 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50" />
    </section>
  );
};

export default Hero;