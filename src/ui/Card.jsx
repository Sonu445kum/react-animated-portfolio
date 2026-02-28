import React from "react";
import { motion } from "framer-motion";

const Card = ({
  title,
  subtitle,
  description,
  image,
  tags = [],
  primaryAction,
  secondaryAction,
  children,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        rounded-2xl
        overflow-hidden
        backdrop-blur-xl
        bg-white/5
        border border-white/10
        shadow-xl
        group
        p-6
      "
    >
      {/* Optional Image */}
      {image && (
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          {title}
        </h3>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-purple-400 mb-2">
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Custom Content */}
      {children}

      {/* Buttons */}
      {(primaryAction || secondaryAction) && (
        <div className="flex gap-3 mt-4">
          {primaryAction && (
            <button
              onClick={primaryAction.onClick}
              className="px-4 py-2 bg-purple-600 rounded-lg hover:scale-105 transition"
            >
              {primaryAction.label}
            </button>
          )}

          {secondaryAction && (
            <button
              onClick={secondaryAction.onClick}
              className="px-4 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition"
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Card;