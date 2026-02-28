import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const blogData = [
  {
    id: 1,
    title: "Building Scalable MERN Applications",
    category: "Full Stack",
    date: "Feb 2026",
    readTime: "5 min read",
    image: "https://source.unsplash.com/600x400/?coding",
  },
  {
    id: 2,
    title: "Integrating AI Models in Web Apps",
    category: "AI & ML",
    date: "Jan 2026",
    readTime: "7 min read",
    image: "https://source.unsplash.com/600x400/?artificial-intelligence",
  },
  {
    id: 3,
    title: "Optimizing React Performance",
    category: "Frontend",
    date: "Dec 2025",
    readTime: "6 min read",
    image: "https://source.unsplash.com/600x400/?reactjs",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-center px-6">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        Latest Blogs
      </motion.h2>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogData.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
              <span className="absolute top-4 left-4 bg-purple-600 text-xs px-3 py-1 rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-400 transition">
                {blog.title}
              </h3>

              <div className="flex items-center text-zinc-400 text-sm space-x-4 mb-4">
                <span className="flex items-center gap-1">
                  <CalendarDays size={14} /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {blog.readTime}
                </span>
              </div>

              <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition text-sm font-medium">
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default BlogPreview;