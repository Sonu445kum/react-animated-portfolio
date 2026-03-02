import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "../../data/testimonials.js";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-32 px-6 overflow-hidden text-white"
    >
      {/* === Premium Background Layer === */}

      {/* Deep Radial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1a1a40,transparent_60%),radial-gradient(circle_at_80%_80%,#0f172a,transparent_60%)]" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            What Industry Professionals Say
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Feedback from engineers, product leaders, and startup founders I’ve collaborated with.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 
                           p-12 rounded-3xl max-w-4xl mx-auto 
                           shadow-[0_0_60px_rgba(168,85,247,0.15)] 
                           hover:shadow-[0_0_80px_rgba(168,85,247,0.25)] 
                           transition-all duration-300"
              >
                {/* Quote Icon */}
                <Quote
                  size={40}
                  className="text-purple-400 mb-6 opacity-70"
                />

                {/* Rating */}
                <div className="flex mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  “{testimonial.quote}”
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white/60">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;