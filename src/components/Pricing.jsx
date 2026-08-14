import React from "react";
import { motion } from "framer-motion";
import {
  FiGlobe,
  FiLayers,
  FiCpu,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";

export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      subtitle: "Build your digital foundation",
      description:
        "Perfect for businesses that need a professional digital presence or a focused web solution.",
      icon: <FiGlobe className="w-6 h-6 text-gold" />,
      features: [
        "Business websites",
        "Landing pages",
        "Portfolio websites",
        "Responsive UI/UX",
        "Basic third-party integrations",
      ],
      button: "Start a Conversation",
      featured: false,
    },
    {
      title: "Product",
      subtitle: "Build something bigger",
      description:
        "For businesses ready to turn an idea into a complete digital product with room to grow.",
      icon: <FiLayers className="w-6 h-6 text-gold" />,
      features: [
        "Web applications",
        "Mobile applications",
        "SaaS platforms",
        "Admin dashboards",
        "API & database integration",
        "Scalable architecture",
      ],
      button: "Build Your Product",
      featured: true,
    },
    {
      title: "Custom",
      subtitle: "For ambitious ideas",
      description:
        "Tailored engineering for complex products, advanced systems, and long-term technology needs.",
      icon: <FiCpu className="w-6 h-6 text-gold" />,
      features: [
        "Custom software solutions",
        "AI-powered applications",
        "Advanced SaaS platforms",
        "Enterprise systems",
        "Complex API architecture",
        "Long-term development",
      ],
      button: "Discuss Your Project",
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-24 bg-charcoal-light overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute top-[10%] left-0 glow-orb-blue w-[350px] h-[350px] opacity-20" />
      <div className="absolute bottom-[5%] right-0 glow-orb-gold w-[400px] h-[400px] opacity-25" />

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
            HOW WE CAN WORK TOGETHER
          </motion.h4>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Flexible Solutions for <br className="hidden sm:inline" />
            <span className="text-gradient-gold-full">
              Every Stage of Growth
            </span>
          </motion.h2>

          <motion.p
            className="text-mutedGray font-sans font-light leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every project is different. Instead of forcing your business into a
            fixed package, we shape our approach around your goals,
            requirements, and vision.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              className={`relative rounded-3xl ${
                plan.featured
                  ? "p-[1px] bg-gradient-to-b from-gold/60 via-gold/20 to-transparent"
                  : ""
              }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div
                className={`relative h-full glass-card rounded-3xl p-7 md:p-8 flex flex-col ${
                  plan.featured
                    ? "bg-gradient-to-b from-gold/10 via-charcoal to-charcoal"
                    : ""
                }`}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute top-5 right-5">
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gold bg-gold/10 border border-gold/20 px-3 py-1.5 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center">
                    {plan.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-warmWhite font-sans mb-2">
                  {plan.title}
                </h3>

                <p className="text-sm font-semibold text-gold font-sans mb-4">
                  {plan.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-mutedGray font-sans font-light leading-relaxed mb-7">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-6" />

                {/* Features */}
                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                        <FiCheck className="w-3 h-3 text-gold" />
                      </div>

                      <span className="text-sm text-warmWhite/80 font-sans font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-sans text-sm font-semibold transition-all duration-300 ${
                    plan.featured
                      ? "bg-gold text-charcoal hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/10"
                      : "border border-white/10 text-warmWhite hover:border-gold/40 hover:text-gold bg-white/[0.02]"
                  }`}
                >
                  {plan.button}

                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / No Fixed Pricing */}
        <motion.div
          className="max-w-3xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-card rounded-2xl px-6 py-7 border border-white/5">
            <h3 className="text-lg font-bold text-warmWhite font-sans mb-2">
              Not sure which approach is right for you?
            </h3>

            <p className="text-sm text-mutedGray font-sans font-light leading-relaxed mb-5">
              Tell us what you're trying to build. We'll help you understand the
              scope, technology, timeline, and investment before development
              begins.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-warmWhite transition-colors duration-300"
            >
              Let's Talk
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
