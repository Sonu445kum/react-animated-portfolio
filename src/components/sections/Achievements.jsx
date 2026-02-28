import { motion } from "framer-motion";
import { Trophy, Rocket, Briefcase } from "lucide-react";

const achievementsData = [
  {
    icon: <Trophy size={28} />,
    title: "Scalable MERN Apps",
    description: "Built high-performance full-stack applications using MongoDB, Express, React & Node."
  },
  {
    icon: <Rocket size={28} />,
    title: "AI-Powered Solutions",
    description: "Integrated AI models, REST APIs & real-time systems into production-ready apps."
  },
  {
    icon: <Briefcase size={28} />,
    title: "Internship @ Jobma AI",
    description: "Worked as Software Developer Intern building scalable frontend modules."
  }
];

const Achievements = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900 text-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        Achievements
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {achievementsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="flex justify-center mb-4 text-purple-400">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-zinc-400 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Achievements;