import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { testimonials } from "../../data/testimonials.js";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Industry Professionals Say
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Feedback from engineers, product leaders, and startup founders I’ve
            collaborated with.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper spaceBetween={40} slidesPerView={1} loop={true}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto"
              >
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

                {/* Quote */}
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  “{testimonial.quote}”
                </p>

                {/* Person Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
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
