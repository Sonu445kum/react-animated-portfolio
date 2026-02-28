import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/layouts/Navbar";
import ScrollProgress from "./ui/ScrollProgress";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import TechStack from "./components/sections/TechStack";
import Experience from "./components/sections/Experience";
import ProjectsGallery from "./components/sections/ProjectsGallery";
import CaseStudies from "./components/sections/CaseStudies";
import Testimonials from "./components/sections/Testimonials";
import BlogPreview from "./components/sections/BlogPreview";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import CTA from "./components/sections/CTA";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Hero />
          <About />
          <Skills />
          <Services />
          <TechStack />
          <Experience />
          <ProjectsGallery />
          <CaseStudies />
          <Testimonials />
          <BlogPreview />
          <FAQ />
          <Contact />
          <CTA />
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default App;