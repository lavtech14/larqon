import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedLogo({ size = 48, className = "" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          {/* Elite Multi-stop Metallic Gold Gradient representing the sheen in the image */}
          <linearGradient id="luxury-gold-grad" x1="15%" y1="15%" x2="85%" y2="85%">
            <stop offset="0%" stopColor="#E2CFAD" />     {/* Bright highlight */}
            <stop offset="35%" stopColor="#C8A96B" />    {/* Champagne gold */}
            <stop offset="70%" stopColor="#AA894B" />    {/* Rich medium gold */}
            <stop offset="100%" stopColor="#87682C" />   {/* Deep shadow gold */}
          </linearGradient>

          {/* High-end glow filters */}
          <filter id="gold-logo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient background circular glow */}
        <motion.circle
          cx="50"
          cy="50"
          r="44"
          stroke="url(#luxury-gold-grad)"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          strokeDasharray="4 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* The "L" Shape - Exact Volumetric Representation from the User's Image */}
        <motion.path
          d="M 30,16 C 30,16 43,15 43,24 L 43,58 C 43,63 48,66 56,66 L 76,66 C 76,66 82,66 82,72 C 82,78 76,78 76,78 L 56,78 C 41,78 30,68 30,52 L 30,16 Z"
          fill="url(#luxury-gold-grad)"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
        />

        {/* The "R" Loop and Leg - Exact Volumetric Representation from the User's Image */}
        <motion.path
          d="M 43,32 L 68,32 C 77,32 82,37 82,46 C 82,55 77,60 68,60 L 52,60 L 52,50 L 68,50 C 71,50 72,48 72,46 C 72,44 71,42 68,42 L 43,42 Z"
          fill="url(#luxury-gold-grad)"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
        />

        {/* The "R" Diagonal Leg */}
        <motion.path
          d="M 52,60 L 62,60 L 82,78 L 70,78 Z"
          fill="url(#luxury-gold-grad)"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 100 }}
        />

        {/* Accent Glow Dot (Soft Blue highlight at the leg tip for UI depth) */}
        <motion.circle
          cx="79"
          cy="75"
          r="2.5"
          fill="#4F8CFF"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: 0.8 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="pointer-events-none"
        />

      </motion.svg>
    </div>
  );
}
