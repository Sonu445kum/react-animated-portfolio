import React from "react";
import { Github, Linkedin, Mail, ArrowUp, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../hooks/useScrollSpy";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const resumeDownloadLink =
    "https://drive.google.com/file/d/1eWWRYv-QqoBmijajlitONEeaPRIJExNZ/view?usp=sharing";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 backdrop-blur-xl bg-white/5">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Sonu Kumar
          </h2>

          <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
            Full Stack Developer specializing in MERN Stack and AI-powered
            digital experiences. Building scalable, high-performance, and
            visually engaging web applications.
          </p>

          {/* Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={resumeDownloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2 rounded-xl border border-purple-500 text-white hover:bg-purple-500/20 transition-all duration-300 text-sm font-medium"
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-zinc-400 text-sm">
            {["about", "projects", "services", "contact"].map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className="hover:text-purple-400 transition cursor-pointer capitalize"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://github.com/Sonu445kum"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900 hover:bg-purple-600 transition"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://www.linkedin.com/in/sonu445kum/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900 hover:bg-purple-600 transition"
            >
              <Linkedin size={20} />
            </motion.a>

            {/* LeetCode */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://leetcode.com/u/sonukum123/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900 hover:bg-[#FFA116] transition"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M13.483 0a1 1 0 0 0-.707.293L3.293 9.776a1 1 0 1 0 1.414 1.414L13.483 2.414 22.26 11.19a1 1 0 1 0 1.414-1.414L14.19.293A1 1 0 0 0 13.483 0zM2 12a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H2z" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="mailto:sonuroy1629@gmail.com"
              className="p-3 rounded-xl bg-zinc-900 hover:bg-purple-600 transition"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
        <p>© {currentYear} Sonu Kumar. All rights reserved.</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="mt-4 md:mt-0 p-3 rounded-full bg-zinc-900 hover:bg-purple-600 transition"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
