import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiActivity, FiCpu, FiAward } from 'react-icons/fi';
import AnimatedLogo from './AnimatedLogo';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-charcoal">
      {/* Background ambient light glowing circles */}
      <div className="absolute top-[10%] left-[5%] glow-orb-gold w-[400px] h-[400px] animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] right-[10%] glow-orb-blue w-[500px] h-[500px] animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          
          {/* Tagline Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 w-fit mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-xs font-semibold tracking-widest text-gold uppercase font-sans">
              Luxurious Digital Craftsmanship
            </span>
          </motion.div>

          {/* Main Title Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans leading-tight text-warmWhite mb-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Powerful <br />
            <span className="text-gradient-gold-full">Digital Experiences</span>
          </motion.h1>

          {/* Subheading Description */}
          <motion.p
            className="text-lg text-mutedGray max-w-xl leading-relaxed mb-10 font-sans font-light"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Larqon Tech architectures custom websites, mobile application ecosystems, high-performance SaaS platforms, and Apple-grade UI/UX solutions that empower modern business growth.
          </motion.p>

          {/* Call-to-actions Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="btn-gold px-8 py-4 rounded-full text-base flex items-center gap-2 group"
            >
              Get Started
              <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300 w-5 h-5" />
            </a>

            <a
              href="#portfolio"
              className="btn-outline-premium px-8 py-4 rounded-full text-base"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Right Side: Central Rotating Animated LR Logo + Floating Glassmorphic UI Elements */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]">
          
          {/* Logo container circle */}
          <motion.div
            className="relative p-12 rounded-full border border-white/5 bg-slate/10 backdrop-blur-md shadow-glass-gold flex items-center justify-center z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          >
            <AnimatedLogo size={140} />
          </motion.div>

          {/* Floating UI Element 1: Active Projects / System Health */}
          <motion.div
            className="absolute top-[5%] -left-[10%] md:-left-[5%] glass-card p-4 rounded-2xl flex items-center gap-4 z-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.6, delay: 0.8 }
            }}
          >
            <div className="p-3 bg-gold/10 rounded-xl text-gold">
              <FiActivity className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-mutedGray">Active Projects</p>
              <p className="text-sm font-bold text-warmWhite">Continuous Delivery</p>
            </div>
          </motion.div>

          {/* Floating UI Element 2: Performance Output / Load Rate */}
          <motion.div
            className="absolute bottom-[10%] -left-[5%] md:-left-[15%] glass-card p-4 rounded-2xl flex items-center gap-4 z-20"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: [0, 10, 0], opacity: 1 }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.6, delay: 1.0 }
            }}
          >
            <div className="p-3 bg-accentBlue/10 rounded-xl text-accentBlue">
              <FiCpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-mutedGray">Core Architecture</p>
              <p className="text-sm font-bold text-warmWhite">Scalable & Secure</p>
            </div>
          </motion.div>

          {/* Floating UI Element 3: UI Design Standards */}
          <motion.div
            className="absolute top-[25%] -right-[5%] md:-right-[10%] glass-card p-4 rounded-2xl flex items-center gap-4 z-20"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: [0, -8, 0], opacity: 1 }}
            transition={{
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.6, delay: 1.2 }
            }}
          >
            <div className="p-3 bg-white/5 rounded-xl text-warmWhite">
              <FiAward className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-mutedGray">UI/UX Standard</p>
              <p className="text-sm font-bold text-warmWhite">Apple-Grade Premium</p>
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
