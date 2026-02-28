import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ChatWindow from "./ChatWindow";

const AIAgent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <ChatWindow />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle size={24} color="white" />
      </motion.button>
    </>
  );
};

export default AIAgent;