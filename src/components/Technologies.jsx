import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiSmartphone,
  FiLayers,
  FiGitBranch,
} from "react-icons/fi";

export default function Technologies() {
  const technologies = [
    {
      name: "React",
      category: "Frontend",
      description: "Modern interfaces and scalable web applications.",
      icon: <FiCode className="w-6 h-6" />,
    },
    {
      name: "Angular",
      category: "Frontend",
      description: "Structured applications for complex business needs.",
      icon: <FiLayers className="w-6 h-6" />,
    },
    {
      name: "Next.js",
      category: "Frontend",
      description:
        "Full-stack React applications with modern routing, rendering, and performance features.",
      icon: <FiLayers className="w-6 h-6" />,
    },
    {
      name: "Node.js",
      category: "Backend",
      description: "Fast and scalable server-side applications.",
      icon: <FiServer className="w-6 h-6" />,
    },
    {
      name: "Express.js",
      category: "Backend",
      description: "Lightweight APIs and backend services.",
      icon: <FiServer className="w-6 h-6" />,
    },
    {
      name: "Python",
      category: "Backend",
      description:
        "Flexible solutions for backend services, automation, and intelligent applications.",
      icon: <FiCode className="w-6 h-6" />,
    },
    {
      name: "React Native",
      category: "Mobile",
      description: "Cross-platform mobile experiences from one codebase.",
      icon: <FiSmartphone className="w-6 h-6" />,
    },
    {
      name: "Flutter",
      category: "Mobile",
      description:
        "Beautiful cross-platform applications for mobile and beyond.",
      icon: <FiSmartphone className="w-6 h-6" />,
    },
    {
      name: "MongoDB",
      category: "Database",
      description: "Flexible data storage for modern applications.",
      icon: <FiDatabase className="w-6 h-6" />,
    },
    {
      name: "MySQL",
      category: "Database",
      description:
        "Reliable relational data storage for structured and business-critical applications.",
      icon: <FiDatabase className="w-6 h-6" />,
    },
    {
      name: "JavaScript",
      category: "Language",
      description: "The foundation behind our modern web applications.",
      icon: <FiCode className="w-6 h-6" />,
    },
    {
      name: "TypeScript",
      category: "Language",
      description: "Type-safe development for maintainable applications.",
      icon: <FiCode className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="technologies"
      className="relative py-24 bg-charcoal-light overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute top-[15%] right-0 glow-orb-gold w-[350px] h-[350px] opacity-20" />
      <div className="absolute bottom-[10%] left-0 glow-orb-blue w-[350px] h-[350px] opacity-20" />

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
            TECHNOLOGIES
          </motion.h4>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Built With{" "}
            <span className="text-gradient-gold-full">Modern Technology</span>
          </motion.h2>

          <motion.p
            className="text-mutedGray font-sans font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We choose technologies based on the product, requirements,
            performance, and long-term maintainability.
          </motion.p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              className="glass-card rounded-2xl p-6 border border-white/5 group hover:glass-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/25 transition-all duration-300">
                  {technology.icon}
                </div>

                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-mutedGray/70">
                  {technology.category}
                </span>
              </div>

              {/* Technology Name */}
              <h3 className="text-lg font-bold text-warmWhite font-sans mb-2 group-hover:text-gold transition-colors duration-300">
                {technology.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-mutedGray font-sans font-light leading-relaxed">
                {technology.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technology Philosophy */}
        <motion.div
          className="max-w-4xl mx-auto mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card rounded-2xl px-6 py-7 border border-white/5">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gold/5 border border-gold/15 flex items-center justify-center">
                <FiGitBranch className="w-5 h-5 text-gold" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-warmWhite font-sans mb-2">
              The Right Technology for the Right Problem
            </h3>

            <p className="text-sm text-mutedGray font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Technology is a tool, not the destination. We focus on choosing
              practical technologies that help us build reliable, maintainable,
              and scalable products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
