import { motion } from "framer-motion";
import { Briefcase, Code2, Brain, Database, Server } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Python Developer",
  "PHP / Laravel Developer",
];

const About = () => {
  return (
    <section   id="about"  className="relative py-28 px-6 overflow-hidden text-white">

      {/* === Premium Background === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1a1a40,transparent_60%),radial-gradient(circle_at_80%_80%,#0f172a,transparent_60%)]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 
                     bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 
                     bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Role Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {roles.map((role, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="px-5 py-2 text-sm rounded-full 
                         bg-white/10 border border-white/20 
                         backdrop-blur-xl text-purple-300"
            >
              {role}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-zinc-300 leading-8 text-lg"
        >
          I'm <span className="text-purple-400 font-semibold">Sonu Kumar</span>, 
          a results-driven Full Stack Engineer specializing in scalable web 
          architectures and enterprise-grade application development.

          I design and develop production-ready systems using 
          <span className="text-indigo-400"> MERN Stack, Python (Django/Flask), and PHP (Laravel)</span>.  

          My expertise includes RESTful API development, JWT-based authentication, 
          microservices architecture, database optimization, performance tuning, 
          and secure deployment strategies.

          I focus on writing clean, maintainable, and scalable code — 
          aligning technical implementation with business goals.
        </motion.p>

        {/* Experience Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-purple-400">1+ Years</h3>
            <p className="text-zinc-400 text-sm">Industry Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-400">5+</h3>
            <p className="text-zinc-400 text-sm">Production Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-pink-400">100+</h3>
            <p className="text-zinc-400 text-sm">DSA Problems Solved</p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <motion.div whileHover={{ y: -8 }} className="cardStyle">
            <Code2 className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="font-semibold mb-3">Full Stack Architecture</h3>
            <p className="text-zinc-400 text-sm">
              End-to-end scalable application design using MERN, Django & Laravel.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="cardStyle">
            <Database className="mx-auto mb-4 text-indigo-400" size={32} />
            <h3 className="font-semibold mb-3">Database Engineering</h3>
            <p className="text-zinc-400 text-sm">
              Optimized MongoDB & MySQL schemas with indexing & caching strategies.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="cardStyle">
            <Server className="mx-auto mb-4 text-green-400" size={32} />
            <h3 className="font-semibold mb-3">Backend Systems</h3>
            <p className="text-zinc-400 text-sm">
              Secure REST APIs, role-based access control & microservices.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="cardStyle">
            <Brain className="mx-auto mb-4 text-pink-400" size={32} />
            <h3 className="font-semibold mb-3">Problem Solving on the Leetcode </h3>
            <p className="text-zinc-400 text-sm">
              Strong analytical thinking with DSA & system design fundamentals.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;