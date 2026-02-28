import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <p className="max-w-3xl mx-auto text-zinc-400 leading-7">
        I'm Sonu Kumar, a Full Stack Developer specializing in MERN Stack,
        AI integrations, and scalable web applications. I build interactive,
        high-performance digital products with modern UI and strong backend architecture.
      </p>
    </section>
  );
};

export default About;