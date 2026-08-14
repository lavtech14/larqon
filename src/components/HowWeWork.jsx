import React from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiPenTool,
  FiCode,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We start by understanding your business, goals, users, and technical requirements. Every successful product begins with a clear direction.",
      icon: <FiSearch className="w-6 h-6 text-gold" />,
    },
    {
      number: "02",
      title: "Design",
      description:
        "We transform ideas into clear, intuitive, and modern digital experiences with thoughtful UI/UX and a strong focus on usability.",
      icon: <FiPenTool className="w-6 h-6 text-gold" />,
    },
    {
      number: "03",
      title: "Build",
      description:
        "Our development process focuses on clean code, modern technologies, reliable architecture, and a strong foundation for future growth.",
      icon: <FiCode className="w-6 h-6 text-gold" />,
    },
    {
      number: "04",
      title: "Launch & Evolve",
      description:
        "We bring your product to life, help you launch confidently, and continue improving the experience as your business grows.",
      icon: <FiSend className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative py-24 bg-charcoal overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute top-[20%] left-0 glow-orb-blue w-[350px] h-[350px] opacity-20" />
      <div className="absolute bottom-[10%] right-0 glow-orb-gold w-[350px] h-[350px] opacity-25" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-3 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            HOW WE WORK
          </motion.h4>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From Idea to Launch, <br className="hidden sm:inline" />
            <span className="text-gradient-gold-full">
              With Clarity at Every Step
            </span>
          </motion.h2>

          <motion.p
            className="text-mutedGray font-sans font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe great digital products come from a clear process,
            thoughtful collaboration, and purposeful engineering.
          </motion.p>
        </div>

        {/* Process */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                {/* Step Number / Icon */}
                <div className="relative z-10 flex items-center justify-center mb-7">
                  <div className="w-[104px] h-[104px] rounded-full bg-charcoal border border-white/10 group-hover:border-gold/40 transition-all duration-500 flex items-center justify-center shadow-glass">
                    <div className="w-[72px] h-[72px] rounded-full bg-gold/5 border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/25 transition-all duration-500 flex flex-col items-center justify-center">
                      {step.icon}

                      <span className="text-[9px] tracking-[0.2em] text-gold/70 font-semibold mt-1">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 h-full border border-white/5 group-hover:glass-card-hover transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-warmWhite font-sans group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>

                    <FiArrowRight className="w-4 h-4 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  <p className="text-sm text-mutedGray font-sans font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* <p className="text-sm text-mutedGray font-sans">
            Clear process.
            <span className="text-warmWhite mx-2">Thoughtful design.</span>
            <span className="text-gold">Purposeful technology.</span>
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
