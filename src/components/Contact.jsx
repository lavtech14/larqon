import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMessageCircle, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  const email = "larqontech@gmail.com";
  const whatsappNumber = "919666753505";

  const whatsappMessage = encodeURIComponent(
    "Hi Larqon Tech, I'm interested in discussing a project.",
  );

  return (
    <section
      id="contact"
      className="relative py-24 bg-charcoal overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute top-[20%] left-0 glow-orb-blue w-[400px] h-[400px] opacity-20" />
      <div className="absolute bottom-[20%] right-0 glow-orb-gold w-[400px] h-[400px] opacity-25" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-3 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            GET IN TOUCH
          </motion.h4>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have an Idea?
            <br />
            <span className="text-gradient-gold-full">
              Let's Build It Together
            </span>
          </motion.h2>

          <motion.p
            className="text-mutedGray text-sm font-sans font-light leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tell us what you're looking to build. Reach out through email or
            WhatsApp and let's start the conversation.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Email Card */}
          <motion.a
            href={`mailto:${email}?subject=Project%20Inquiry%20-%20Larqon%20Tech`}
            className="glass-card rounded-3xl p-8 border border-white/5 group hover:glass-card-hover transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gold/5 border border-gold/15 flex items-center justify-center">
                <FiMail className="w-6 h-6 text-gold" />
              </div>

              <FiArrowRight className="w-5 h-5 text-mutedGray group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase font-sans">
              Email Us
            </span>

            <h3 className="text-xl font-bold text-warmWhite font-sans mt-2 mb-3">
              Start a Conversation
            </h3>

            <p className="text-sm text-mutedGray font-sans font-light leading-relaxed mb-5">
              Send us your project requirements, questions, or ideas and we'll
              get back to you.
            </p>

            <span className="text-sm font-semibold text-warmWhite group-hover:text-gold transition-colors duration-300">
              {email}
            </span>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-3xl p-8 border border-white/5 group hover:glass-card-hover transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gold/5 border border-gold/15 flex items-center justify-center">
                <FiMessageCircle className="w-6 h-6 text-gold" />
              </div>

              <FiArrowRight className="w-5 h-5 text-mutedGray group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
            </div>

            <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase font-sans">
              WhatsApp
            </span>

            <h3 className="text-xl font-bold text-warmWhite font-sans mt-2 mb-3">
              Chat With Us
            </h3>

            <p className="text-sm text-mutedGray font-sans font-light leading-relaxed mb-5">
              Prefer a quick conversation? Message us directly on WhatsApp and
              tell us about your project.
            </p>

            <span className="text-sm font-semibold text-warmWhite group-hover:text-gold transition-colors duration-300">
              +91 9666753505
            </span>
          </motion.a>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs text-mutedGray font-sans">
            Let's turn your idea into something{" "}
            <span className="text-gold font-medium">meaningful.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
