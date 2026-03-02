import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Django REST Framework", "Laravel"],
  },
  {
    category: "API & Auth",
    skills: ["RESTful API Design", "JWT Authentication", "MVC Architecture"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "Schema Design", "Query Optimization"],
  },
  {
    category: "Core CS",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS"],
  },
  {
    category: "DevOps & Tools",
    skills: ["AWS", "Docker", "Render", "Netlify", "Git", "GitHub", "Postman"],
  },
];

const Skill = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden text-white">

      {/* === Unified Premium Background === */}

      {/* Radial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1a1a40,transparent_60%),radial-gradient(circle_at_80%_80%,#0f172a,transparent_60%)]" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 
                     bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 
                     bg-clip-text text-transparent"
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
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 
                         p-10 rounded-3xl 
                         shadow-[0_0_50px_rgba(168,85,247,0.1)] 
                         hover:shadow-[0_0_80px_rgba(168,85,247,0.25)] 
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-8 text-purple-400">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-2 bg-white/5 text-sm rounded-full 
                               border border-white/10 
                               hover:border-purple-500 
                               hover:bg-purple-500/10 
                               transition"
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