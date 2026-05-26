import React from "react";
import { motion } from "framer-motion";

export default function AnimatedLogo({
  size = 48,
  onlyIcon = true,
  className = "",
}) {
  if (onlyIcon) {
    return (
      <motion.div
        className={`relative overflow-hidden rounded-xl flex items-center justify-center shrink-0 border border-gold/20 shadow-glass-gold ${className}`}
        style={{ width: size, height: size }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/logo1.png"
          alt="Larqon Tech Logo Mark"
          className="absolute max-w-none"
          style={{
            width: size * 2.2, // Zoom in to isolate the LR icon
            height: "auto",
            top: "-25%", // Shift up to crop out the text below
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        {/* Ambient gold background glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent pointer-events-none"></div>
      </motion.div>
    );
  }

  // Render the full uploaded brand logo image (symbol + texts)
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-white/5 shadow-glass-gold ${className}`}
      style={{ width: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <img
        src="/logo1.png"
        alt="Larqon Tech Logo"
        className="w-full h-auto block"
      />
    </motion.div>
  );
}
