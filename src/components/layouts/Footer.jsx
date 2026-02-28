import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 backdrop-blur-xl bg-white/5">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Sonu Kumar
          </h2>
          <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
            Full Stack Developer specializing in MERN Stack and AI-powered
            digital experiences. Building scalable, modern, and beautiful web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-zinc-400 text-sm">
            <li className="hover:text-purple-400 transition cursor-pointer">About</li>
            <li className="hover:text-purple-400 transition cursor-pointer">Projects</li>
            <li className="hover:text-purple-400 transition cursor-pointer">Experience</li>
            <li className="hover:text-purple-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900 hover:bg-purple-600 transition"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900 hover:bg-purple-600 transition"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:yourmail@gmail.com"
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