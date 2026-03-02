import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What tech stack do you use?",
    answer:
      "I primarily work with the MERN Stack (MongoDB, Express.js, React.js, Node.js). I also have experience with Django REST Framework, Laravel, and AI integrations like Hugging Face and Coqui TTS/STT."
  },
  {
    question: "Do you have industry experience?",
    answer:
      "Yes, I worked as a Software Developer Intern at Jobma (Select Source International), contributing to a production-level HR SaaS product."
  },
  {
    question: "Do you work on backend optimization?",
    answer:
      "Absolutely. I focus heavily on database schema design, indexing, query optimization, and secure JWT-based authentication systems."
  },
  {
    question: "How strong are you in problem-solving?",
    answer:
      "I’ve solved 100+ Data Structures & Algorithms problems and have a strong understanding of time & space complexity."
  },
  {
    question: "Are you open to full-time or remote opportunities?",
    answer:
      "Yes, I am open to full-time roles, product-based companies, and remote international opportunities."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

      <div className="relative z-10 max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 
                     bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 
                     bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 
                         rounded-3xl p-8 cursor-pointer 
                         shadow-[0_0_40px_rgba(168,85,247,0.1)] 
                         hover:shadow-[0_0_70px_rgba(168,85,247,0.25)] 
                         transition-all duration-300"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg">
                  {faq.question}
                </h4>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index
                      ? "rotate-180 text-purple-400"
                      : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-zinc-400 mt-6 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;