import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/layouts/Navbar";
import ScrollProgress from "./ui/ScrollProgress";
import Hero from "./components/sections/Hero";
import CaseStudies from "./components/sections/CaseStudies";
import Testimonials from "./components/sections/Testimonials";
import CTA from "./components/sections/CTA";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Apple-Style Page Animation */}
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] // Apple smooth curve
          }}
        >
          {/* ===== Hero ===== */}
          <Hero />

          {/* ===== Case Studies ===== */}
          <CaseStudies />

          {/* ===== Testimonials ===== */}
          <Testimonials />

          {/* ===== CTA Section ===== */}
          <CTA />
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default App;