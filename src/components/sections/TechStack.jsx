import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const techStack = [
  // 🔹 Frontend
  { name: "React.js", icon: "Atom", color: "text-cyan-400" },
  { name: "Redux Toolkit", icon: "Layers", color: "text-purple-400" },
  { name: "JavaScript (ES6+)", icon: "FileCode", color: "text-yellow-400" },
  { name: "HTML5", icon: "Globe", color: "text-orange-400" },
  { name: "CSS3", icon: "Palette", color: "text-blue-400" },
  { name: "Bootstrap", icon: "Layout", color: "text-indigo-400" },

  // 🔹 Backend
  { name: "Node.js", icon: "Server", color: "text-green-400" },
  { name: "Express.js", icon: "ServerCog", color: "text-green-500" },
  { name: "Django REST Framework", icon: "Database", color: "text-emerald-400" },
  { name: "Laravel", icon: "Server", color: "text-red-400" },
  { name: "PHP", icon: "Code", color: "text-indigo-500" },

  // 🔹 API & Auth
  { name: "RESTful API Design", icon: "GitBranch", color: "text-purple-400" },
  { name: "JWT Authentication", icon: "ShieldCheck", color: "text-green-400" },
  { name: "MVC Architecture", icon: "Layers3", color: "text-pink-400" },

  // 🔹 Databases
  { name: "MongoDB", icon: "Database", color: "text-green-500" },
  { name: "MySQL", icon: "DatabaseBackup", color: "text-blue-500" },
  { name: "Schema Design", icon: "Table", color: "text-yellow-400" },
  { name: "Query Optimization", icon: "TrendingUp", color: "text-orange-400" },

  // 🔹 DevOps & Deployment
  { name: "AWS", icon: "Cloud", color: "text-orange-400" },
  { name: "Docker", icon: "Package", color: "text-blue-400" },
  { name: "Render", icon: "UploadCloud", color: "text-cyan-400" },
  { name: "Netlify", icon: "Globe2", color: "text-teal-400" },

  // 🔹 Tools
  { name: "Git", icon: "GitBranch", color: "text-red-500" },
  { name: "GitHub", icon: "Github", color: "text-gray-300" },
  { name: "Postman", icon: "Send", color: "text-orange-500" },
  { name: "VS Code", icon: "Code", color: "text-blue-500" },
  { name: "Bash", icon: "Terminal", color: "text-green-400" },

  // 🔹 Core CS
  { name: "Data Structures & Algorithms", icon: "Brain", color: "text-purple-500" },
  { name: "OOP", icon: "Boxes", color: "text-pink-400" },
  { name: "DBMS", icon: "Layers", color: "text-indigo-400" },

  // 🔹 AI & ML
  { name: "Hugging Face", icon: "Cpu", color: "text-yellow-500" },
  { name: "Coqui TTS", icon: "Mic", color: "text-blue-400" },
  { name: "Coqui STT", icon: "Mic2", color: "text-green-400" },
  { name: "AI Model Integration", icon: "Bot", color: "text-purple-400" },
  { name: "Python", icon: "Code2", color: "text-yellow-400" },
];

const Tech = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900 text-center px-6">
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        Core Tech Stack
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {techStack.map((tech, index) => {
          const Icon = Icons[tech.icon] || Icons.Code;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-6 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
            >
              <div className={`flex flex-col items-center gap-3 ${tech.color}`}>
                <Icon size={36} />
                <span className="font-medium text-sm tracking-wide">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;