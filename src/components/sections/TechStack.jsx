import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const techStack = [
  { name: "React.js", icon: "Atom", color: "text-cyan-400" },
  { name: "Redux Toolkit", icon: "Layers", color: "text-purple-400" },
  { name: "JavaScript (ES6+)", icon: "FileCode", color: "text-yellow-400" },
  { name: "HTML5", icon: "Globe", color: "text-orange-400" },
  { name: "CSS3", icon: "Palette", color: "text-blue-400" },
  { name: "Bootstrap", icon: "Layout", color: "text-indigo-400" },

  { name: "Node.js", icon: "Server", color: "text-green-400" },
  { name: "Express.js", icon: "ServerCog", color: "text-green-500" },
  { name: "Django REST Framework", icon: "Database", color: "text-emerald-400" },
  { name: "Laravel", icon: "Server", color: "text-red-400" },
  { name: "PHP", icon: "Code", color: "text-indigo-500" },

  { name: "RESTful API Design", icon: "GitBranch", color: "text-purple-400" },
  { name: "JWT Authentication", icon: "ShieldCheck", color: "text-green-400" },
  { name: "MVC Architecture", icon: "Layers3", color: "text-pink-400" },

  { name: "MongoDB", icon: "Database", color: "text-green-500" },
  { name: "MySQL", icon: "DatabaseBackup", color: "text-blue-500" },
  { name: "Schema Design", icon: "Table", color: "text-yellow-400" },
  { name: "Query Optimization", icon: "TrendingUp", color: "text-orange-400" },

  { name: "AWS", icon: "Cloud", color: "text-orange-400" },
  { name: "Docker", icon: "Package", color: "text-blue-400" },
  { name: "Render", icon: "UploadCloud", color: "text-cyan-400" },
  { name: "Netlify", icon: "Globe2", color: "text-teal-400" },

  { name: "Git", icon: "GitBranch", color: "text-red-500" },
  { name: "GitHub", icon: "Github", color: "text-gray-300" },
  { name: "Postman", icon: "Send", color: "text-orange-500" },
  { name: "VS Code", icon: "Code", color: "text-blue-500" },
  { name: "Bash", icon: "Terminal", color: "text-green-400" },

  { name: "Data Structures & Algorithms", icon: "Brain", color: "text-purple-500" },
  { name: "OOP", icon: "Boxes", color: "text-pink-400" },
  { name: "DBMS", icon: "Layers", color: "text-indigo-400" },

  { name: "Hugging Face", icon: "Cpu", color: "text-yellow-500" },
  { name: "Coqui TTS", icon: "Mic", color: "text-blue-400" },
  { name: "Coqui STT", icon: "Mic2", color: "text-green-400" },
  { name: "AI Model Integration", icon: "Bot", color: "text-purple-400" },
  { name: "Python", icon: "Code2", color: "text-yellow-400" },
];

const Tech = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden text-center text-white">

      {/* === Unified Premium Background === */}

      {/* Radial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1a1a40,transparent_60%),radial-gradient(circle_at_80%_80%,#0f172a,transparent_60%)]" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16 
                     bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 
                     bg-clip-text text-transparent"
        >
          Core Tech Stack
        </motion.h2>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {techStack.map((tech, index) => {
            const Icon = Icons[tech.icon] || Icons.Code;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.08 }}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 
                           px-8 py-6 rounded-2xl 
                           shadow-[0_0_40px_rgba(168,85,247,0.1)] 
                           hover:shadow-[0_0_70px_rgba(168,85,247,0.25)] 
                           transition-all duration-300 cursor-pointer"
              >
                <div className={`flex flex-col items-center gap-3 ${tech.color}`}>
                  <Icon size={36} />
                  <span className="font-medium text-sm tracking-wide text-white">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tech;