import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Team() {
  const team = [
    {
      name: "Lavanya",
      role: "Full Stack Developer",
      initials: "L",
      icon: <FiCode className="w-6 h-6 text-gold" />,
      description:
        "Focused on building complete digital products across frontend, backend, APIs, and databases.",
    },
    {
      name: "Ramu",
      role: "Mobile Developer",
      initials: "R",
      icon: <FiSmartphone className="w-6 h-6 text-gold" />,
      description:
        "Focused on creating responsive and reliable mobile experiences for modern applications.",
    },
    {
      name: "Manoj",
      role: "Mobile Developer",
      initials: "M",
      icon: <FiSmartphone className="w-6 h-6 text-gold" />,
      description:
        "Focused on developing intuitive mobile applications with performance and usability in mind.",
    },
    {
      name: "Nagamani",
      role: "Tester",
      initials: "N",
      icon: <FiCheckCircle className="w-6 h-6 text-gold" />,
      description:
        "Focused on quality assurance, testing, and helping ensure reliable experiences across our products.",
    },
  ];

  return (
    <section
      id="team"
      className="relative py-24 bg-charcoal overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute top-[15%] left-0 glow-orb-blue w-[350px] h-[350px] opacity-20" />
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
            THE PEOPLE BEHIND LARQON TECH
          </motion.h4>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A Small Team Building <br className="hidden sm:inline" />
            <span className="text-gradient-gold-full">
              Meaningful Technology
            </span>
          </motion.h2>

          <motion.p
            className="text-mutedGray font-sans font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're a focused team of developers and technology professionals
            working together to turn ideas into reliable digital products.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className="glass-card rounded-2xl p-6 h-full border border-white/5 hover:glass-card-hover transition-all duration-300">
                {/* Initial Avatar */}
                <div className="flex items-center justify-between mb-7">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/15 to-white/[0.02] border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-all duration-300">
                      <span className="text-2xl font-bold text-gradient-gold-full font-sans">
                        {member.initials}
                      </span>
                    </div>

                    {/* Small status indicator */}
                    <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 rounded-full bg-charcoal border-2 border-charcoal flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </span>
                  </div>

                  {/* Role Icon */}
                  <div className="p-3 rounded-xl bg-gold/5 border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/25 transition-all duration-300">
                    {member.icon}
                  </div>
                </div>

                {/* Member Name */}
                <h3 className="text-xl font-bold text-warmWhite font-sans mb-1 group-hover:text-gold transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-xs font-semibold tracking-wide text-gold uppercase font-sans mb-5">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-sm text-mutedGray font-sans font-light leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/5 bg-white/[0.02]">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />

            <span className="text-xs sm:text-sm text-mutedGray font-sans">
              Small team.
              <span className="text-warmWhite mx-1.5">
                Direct collaboration.
              </span>
              <span className="text-gold">Serious engineering.</span>
            </span>

            <FiArrowUpRight className="w-4 h-4 text-gold" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
