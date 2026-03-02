import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Email error:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section   id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-transparent">
      
      {/* Ambient Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[160px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-xl text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 
                     bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 
                     bg-clip-text text-transparent"
        >
          Let’s Work Together
        </motion.h2>

        <p className="text-zinc-400 mb-12">
          Have a project idea or collaboration in mind?  
          Send me a message and let’s build something impactful.
        </p>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-white/5 backdrop-blur-2xl p-10 rounded-3xl 
                     border border-white/10 
                     shadow-[0_0_60px_rgba(168,85,247,0.15)]"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-4 bg-zinc-900/60 rounded-xl 
                       border border-white/10 
                       outline-none focus:border-purple-500 
                       transition text-white"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-4 bg-zinc-900/60 rounded-xl 
                       border border-white/10 
                       outline-none focus:border-purple-500 
                       transition text-white"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 bg-zinc-900/60 rounded-xl 
                       border border-white/10 
                       outline-none focus:border-purple-500 
                       transition resize-none text-white"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl text-white font-medium
                       bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
                       shadow-lg transition-all duration-300"
          >
            {loading
              ? "Sending..."
              : success
              ? "Message Sent 🚀"
              : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;