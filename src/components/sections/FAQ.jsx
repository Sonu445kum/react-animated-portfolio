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

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-purple-500/20"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg">{faq.question}</h4>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-purple-400" : ""
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
                    className="text-zinc-400 mt-4 leading-relaxed"
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