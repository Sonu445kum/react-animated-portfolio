import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/40",
  secondary:
    "bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-800",
  outline:
    "border border-purple-500 text-purple-400 hover:bg-purple-500/10",
  ghost:
    "text-zinc-300 hover:bg-white/5",
};

const sizeVariants = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  loading = false,
  fullWidth = false,
  type = "button",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      type={type}
      disabled={loading}
      className={clsx(
        "rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2",
        buttonVariants[variant],
        sizeVariants[size],
        fullWidth && "w-full",
        loading && "opacity-70 cursor-not-allowed"
      )}
    >
      {loading ? (
        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
};

export default Button;