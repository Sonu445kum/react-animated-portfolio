import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../../hooks/useScrollSpy";

const CTA = () => {
  return (
    <section id="contact-cta" className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] bottom-[-150px] right-[-150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center glass-card p-16 rounded-3xl border border-white/10 backdrop-blur-xl"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Let’s Build Something Impactful Together
        </h2>

        <p className="text-white/70 mb-10 max-w-2xl mx-auto">
          I’m available for full-time roles, freelance collaborations,
          and product development opportunities.
          Let’s create scalable and high-performance digital experiences.
        </p>

        <button
          onClick={() => scrollToSection("contact")}
          className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
        >
          Start a Conversation
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </motion.div>
    </section>
  );
};

export default CTA;