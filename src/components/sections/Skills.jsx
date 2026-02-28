import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Django REST Framework", "Laravel"]
  },
  {
    category: "API & Auth",
    skills: ["RESTful API Design", "JWT Authentication", "MVC Architecture"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "Schema Design", "Query Optimization"]
  },
  {
    category: "Core CS",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS"]
  },
  {
    category: "DevOps & Tools",
    skills: ["AWS", "Docker", "Render", "Netlify", "Git", "GitHub", "Postman"]
  }
];

const Skill = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden text-white">

      {/* 🔥 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      {/* 🟣 Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* 🔳 Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-400">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-2 bg-zinc-800/80 text-sm rounded-full border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;