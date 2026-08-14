import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiTrendingUp, FiUsers, FiCheckCircle } from "react-icons/fi";

export default function About() {
  const pillars = [
    {
      number: "01",
      title: "Build",
      icon: <FiCode className="w-6 h-6 text-gold" />,
      desc: "Modern, reliable digital products built with clean code and thoughtful design.",
    },
    {
      number: "02",
      title: "Scale",
      icon: <FiTrendingUp className="w-6 h-6 text-gold" />,
      desc: "Solutions designed with performance, maintainability, and future growth in mind.",
    },
    {
      number: "03",
      title: "Partner",
      icon: <FiUsers className="w-6 h-6 text-gold" />,
      desc: "We work closely with businesses to turn ideas into practical digital solutions.",
    },
  ];

  const values = [
    "Clean and maintainable software built with modern technologies.",
    "Modern responsive experiences designed for web and mobile.",
    "A collaborative approach from idea, development, and launch.",
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-charcoal overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute top-[20%] right-0 glow-orb-gold w-[300px] h-[300px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-3 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            ABOUT LARQON TECH
          </motion.h4>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building Digital Solutions for <br className="hidden sm:inline" />
            <span className="text-gradient-gold-full">
              Ambitious Businesses
            </span>
          </motion.h2>

          <motion.p
            className="text-mutedGray font-sans font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Larqon Tech is a growing technology studio focused on building
            modern websites, mobile applications, software platforms, and
            digital experiences for businesses and startups.
          </motion.p>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* =========================
              LEFT CONTENT
          ========================== */}
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
              Larqon Tech was created with a simple idea — businesses should
              have access to technology that is powerful, reliable, and
              beautifully designed.
            </p>

            <p className="text-mutedGray font-sans font-light leading-relaxed mb-8">
              We bring together modern software engineering, thoughtful UI/UX,
              and practical business thinking to turn ideas into reliable
              digital products that are built for today's needs and tomorrow's
              growth.
            </p>

            {/* =========================
                CORE VALUES
            ========================== */}
            <div className="space-y-4">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                >
                  <FiCheckCircle className="w-5 h-5 text-gold mt-1 shrink-0" />

                  <span className="text-warmWhite/90 font-sans text-sm font-medium">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =========================
              RIGHT - THREE PILLARS
          ========================== */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-5">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                className="glass-card p-6 md:p-7 rounded-2xl group hover:glass-card-hover transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                }}
              >
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <div className="text-sm font-semibold text-gold/60 font-sans tracking-wider pt-1">
                    {pillar.number}
                  </div>

                  {/* Icon */}
                  <div className="p-3 bg-gold/5 border border-gold/10 rounded-xl group-hover:bg-gold/10 group-hover:border-gold/25 transition-all duration-300 shrink-0">
                    {pillar.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-xl font-bold text-warmWhite font-sans mb-2 group-hover:text-gold transition-colors duration-300">
                      {pillar.title}
                    </h4>

                    <p className="text-sm text-mutedGray font-sans font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================== */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-mutedGray font-sans">
            Building our journey one product at a time.
            <span className="text-gold ml-2 font-medium">
              Creating technology with purpose.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
