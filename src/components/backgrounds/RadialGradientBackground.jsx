import React from "react";
import { motion } from "framer-motion";

const RadialGradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">

      {/* Main Purple Glow */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] 
                   bg-purple-600/40 blur-[150px] rounded-full"
      />

      {/* Pink Glow */}
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] 
                   bg-pink-500/40 blur-[150px] rounded-full"
      />

      {/* Center Soft Radial Layer */}
      <div
        className="absolute inset-0 
                   bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_60%)]"
      />
    </div>
  );
};

export default RadialGradientBackground;