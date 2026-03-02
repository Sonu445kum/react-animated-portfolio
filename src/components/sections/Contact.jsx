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
    <section className="py-24 px-6 text-center bg-black">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-white"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto space-y-5 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 bg-zinc-900 rounded-xl outline-none focus:ring-2 focus:ring-purple-600 text-white"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 bg-zinc-900 rounded-xl outline-none focus:ring-2 focus:ring-purple-600 text-white"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          required
          className="w-full p-3 bg-zinc-900 rounded-xl outline-none focus:ring-2 focus:ring-purple-600 resize-none text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl text-white font-medium hover:opacity-90 transition"
        >
          {loading
            ? "Sending..."
            : success
            ? "Message Sent 🚀"
            : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;