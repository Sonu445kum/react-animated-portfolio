import { motion } from "framer-motion";

const skills = ["React", "Node.js", "MongoDB", "Express", "Redux", "Python", "Django", "AI Models"];

const Skills = () => {
  return (
    <section className="py-24 bg-zinc-900">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-black p-6 rounded-xl text-center border border-zinc-800"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;