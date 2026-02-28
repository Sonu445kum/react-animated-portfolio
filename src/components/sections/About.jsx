import { motion } from "framer-motion";
import { Briefcase, Code2, Brain, Database } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Main Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-zinc-300 leading-8 text-lg"
        >
          I'm <span className="text-purple-400 font-semibold">Sonu Kumar</span>, 
          a Full-Stack MERN Developer based in Gurugram with hands-on experience 
          building scalable, high-performance web applications using 
          <span className="text-indigo-400"> MongoDB, Express.js, React.js, and Node.js</span>.  

          I specialize in designing RESTful APIs, secure JWT-based authentication, 
          optimized database schemas, and reusable component-driven UI systems.
          I’ve worked in fast-paced product environments and actively leverage 
          AI tools like ChatGPT & GitHub Copilot to enhance productivity.
        </motion.p>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition"
          >
            <Code2 className="mx-auto mb-4 text-purple-400" size={32} />
            <h3 className="font-semibold mb-2">Full Stack Development</h3>
            <p className="text-zinc-400 text-sm">
              Production-ready MERN, Django REST & Laravel applications with scalable architecture.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition"
          >
            <Database className="mx-auto mb-4 text-indigo-400" size={32} />
            <h3 className="font-semibold mb-2">Database Optimization</h3>
            <p className="text-zinc-400 text-sm">
              Schema design, indexing, and query optimization for MongoDB & MySQL.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition"
          >
            <Brain className="mx-auto mb-4 text-pink-400" size={32} />
            <h3 className="font-semibold mb-2">Problem Solving & DSA</h3>
            <p className="text-zinc-400 text-sm">
              Solved 100+ DSA problems with strong understanding of time & space complexity.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition"
          >
            <Briefcase className="mx-auto mb-4 text-green-400" size={32} />
            <h3 className="font-semibold mb-2">Industry Experience</h3>
            <p className="text-zinc-400 text-sm">
              Software Developer Intern at Jobma, contributing to production-level HR SaaS product.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;