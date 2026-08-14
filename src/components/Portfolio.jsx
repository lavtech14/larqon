import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode } from "react-icons/fi";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 bg-charcoal overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[15%] left-0 glow-orb-gold w-[400px] h-[400px] opacity-25" />
      <div className="absolute bottom-[10%] right-0 glow-orb-blue w-[400px] h-[400px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h4
            className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-3 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            PORTFOLIO
          </motion.h4>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Work Is{" "}
            <span className="text-gradient-gold-full">
              Just Getting Started
            </span>
          </motion.h2>

          <motion.p
            className="mt-5 text-mutedGray font-sans font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're building something exciting. Our portfolio will soon showcase
            the digital products, experiences, and solutions created by Larqon
            Tech.
          </motion.p>
        </div>

        {/* Coming Soon Card */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card rounded-3xl overflow-hidden border border-white/5">
            {/* Visual Area */}
            <div className="relative min-h-[360px] md:min-h-[420px] flex items-center justify-center overflow-hidden">
              {/* Grid */}
              <div
                className="
                  absolute inset-0
                  bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),
                  linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
                  bg-[size:32px_32px]
                "
              />

              {/* Center glow */}
              <div className="absolute w-72 h-72 bg-gold/10 blur-[100px] rounded-full" />

              {/* Decorative circles */}
              <motion.div
                className="absolute w-48 h-48 rounded-full border border-gold/10"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute w-72 h-72 rounded-full border border-white/5"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main Content */}
              <div className="relative z-10 text-center px-6">
                {/* Icon */}
                <motion.div
                  className="mx-auto mb-7 w-16 h-16 rounded-2xl bg-gold/5 border border-gold/15 flex items-center justify-center"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiCode className="w-7 h-7 text-gold" />
                </motion.div>

                {/* Coming Soon */}
                <motion.div
                  className="text-xs font-semibold tracking-[0.35em] text-gold uppercase mb-4"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Coming Soon
                </motion.div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-warmWhite font-sans tracking-tight mb-5">
                  Something Great
                  <br />
                  <span className="text-gradient-gold-full">
                    Is Being Built.
                  </span>
                </h3>

                <p className="max-w-xl mx-auto text-sm md:text-base text-mutedGray font-sans font-light leading-relaxed">
                  We're currently working on our first collection of digital
                  products and experiences. Check back soon to explore what
                  Larqon Tech is building.
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-6 md:px-8 py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />

                <span className="text-xs text-mutedGray font-sans tracking-wide">
                  Building the future, one product at a time.
                </span>
              </div>

              <span className="inline-flex items-center gap-2 text-xs font-semibold text-gold tracking-wider uppercase">
                Stay Tuned
                <FiArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
