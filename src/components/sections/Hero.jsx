import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb
} from "react-icons/si";

import { STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center px-6 lg:px-12 pt-32"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center"
      >

        {/* ================= LEFT SIDE ================= */}
        <div className="text-center lg:text-left">

          {/* Premium Animated Gradient Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Building Scalable <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              SaaS Products
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-white/70 max-w-xl"
          >
            Full-Stack MERN Developer crafting high-performance web
            applications with clean architecture and modern UI systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition-all duration-300"
            >
              View Work
            </button>
          </motion.div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-white">
                  {stat.value}
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Glow Border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 w-[360px] sm:w-[420px]">

              <img
                src="/SonuImages.jpeg"
                alt="Sonu Kumar"
                className="object-cover w-full h-[520px]"
              />

              {/* Animated Scrolling Tech Line */}
              <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md py-3 overflow-hidden">
                <div className="flex gap-10 whitespace-nowrap animate-scroll text-xl text-white/80 px-6">
                  <SiReact />
                  <SiNextdotjs />
                  <SiTailwindcss />
                  <SiNodedotjs />
                  <SiMongodb />
                  <SiReact />
                  <SiNextdotjs />
                  <SiTailwindcss />
                  <SiNodedotjs />
                  <SiMongodb />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>

      <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40" />
    </section>
  );
};

export default Hero;