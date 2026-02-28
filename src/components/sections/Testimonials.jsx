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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
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
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl max-w-4xl mx-auto shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
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