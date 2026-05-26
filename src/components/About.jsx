import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiCpu, FiTrendingUp } from 'react-icons/fi';

export default function About() {
  const stats = [
    { value: "120+", label: "Projects Completed", icon: <FiCheckCircle className="w-6 h-6 text-gold" />, desc: "High-performance digital products shipped worldwide." },
    { value: "95+", label: "Happy Clients", icon: <FiUsers className="w-6 h-6 text-gold" />, desc: "Collaborations with startups & global enterprises." },
    { value: "5+", label: "Years Experience", icon: <FiCpu className="w-6 h-6 text-gold" />, desc: "Pioneering state-of-the-art tech architectures." },
  ];

  return (
    <section id="about" className="relative py-24 bg-charcoal overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-[20%] right-0 glow-orb-gold w-[300px] h-[300px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-3 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            OUR VISION & MISSION
          </motion.h4>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Pioneering the Future of <br className="hidden sm:inline" />
            <span className="text-gradient-gold-full">Digital Architectures</span>
          </motion.h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text Content & Core values */}
          <motion.div
            className="lg:col-span-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-warmWhite mb-6 font-sans">
              Who We Are
            </h3>
            <p className="text-mutedGray font-sans font-light leading-relaxed mb-6">
              Larqon Tech is an elite digital technology studio. We specialize in engineering elegant software products for visionary businesses that seek premium distinction, flawless performance, and modern scalability.
            </p>
            <p className="text-mutedGray font-sans font-light leading-relaxed mb-8">
              We bridge the gap between creative visual artistry and bleeding-edge software development. Every line of code we write, every pixel we refine, and every cloud server we deploy is tuned to deliver an unmatched standard of excellence.
            </p>

            {/* Micro value-added statements */}
            <div className="space-y-4">
              {[
                "Engineered for speed, performance, and scalability.",
                "Stunning layouts optimized with modern responsive design principles.",
                "Iterative design process built hand-in-hand with brand strategy."
              ].map((value, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FiTrendingUp className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <span className="text-warmWhite/90 font-sans text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Glassmorphic Statistics cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 hover:glass-card-hover group cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Icon wrapper */}
                <div className="p-4 bg-gold/5 border border-gold/10 rounded-xl group-hover:bg-gold/10 group-hover:border-gold/25 transition-all duration-300 shrink-0">
                  {stat.icon}
                </div>

                {/* Stat texts */}
                <div className="text-center md:text-left">
                  <span className="text-3xl md:text-4xl font-extrabold text-gradient-gold-full font-sans tracking-tight block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-warmWhite font-sans block mb-2">
                    {stat.label}
                  </span>
                  <p className="text-xs text-mutedGray font-sans font-light leading-normal max-w-sm">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
