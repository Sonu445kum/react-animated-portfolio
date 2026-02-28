import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/* Layout */
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

/* Background + Visual */
import RadialGradientBackground from "./components/backgrounds/RadialGradientBackground";
import Scene from "./components/3d/Scene";

/* AI */
import AIAgent from "./components/ai/AIAgent";

/* UI */
import ScrollProgress from "./ui/ScrollProgress";

/* Pages */
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
import SkillsSlider from "./components/sections/SkillsSlider";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 pt-28"
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">

      {/* ===== Background Layers (Persistent) ===== */}
      <RadialGradientBackground />
      <Scene />

      {/* ===== Scroll Progress ===== */}
      <ScrollProgress />

      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Page Transitions ===== */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route
            path="/"
            element={
              <PageWrapper>
                <Hero />
                <SkillsSlider/>
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
              </PageWrapper>
            }
          />

          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />

          <Route
            path="/skills"
            element={
              <PageWrapper>
                <Skills />
                <TechStack />
              </PageWrapper>
            }
          />

          <Route
            path="/projects"
            element={
              <PageWrapper>
                <ProjectsGallery />
                <CaseStudies />
              </PageWrapper>
            }
          />

          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />

          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
                <CTA />
              </PageWrapper>
            }
          />

        </Routes>
      </AnimatePresence>

      {/* ===== Footer ===== */}
      <Footer />

      {/* ===== Floating AI Assistant ===== */}
      <AIAgent />
    </div>
  );
};

export default App;