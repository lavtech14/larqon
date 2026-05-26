import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-charcoal overflow-hidden border-t border-white/5">
      {/* Background glow orbs */}
      <div className="absolute top-[20%] left-0 glow-orb-blue w-[400px] h-[400px] opacity-20"></div>
      <div className="absolute bottom-[20%] right-0 glow-orb-gold w-[400px] h-[400px] opacity-25"></div>

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
            GET IN TOUCH
          </motion.h4>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Engineer Your <br className="hidden sm:inline" />
            <span className="text-gradient-gold-full">Next Digital Masterpiece</span>
          </motion.h2>
          <motion.p
            className="text-mutedGray text-sm font-sans font-light leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to design custom interfaces or scale cloud architectures? Reach out to our specialist engineering team.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto mt-16">
          
          {/* Left Column: Contact details */}
          <motion.div
            className="lg:col-span-5 text-left space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-warmWhite mb-6 font-sans">
              Contact Information
            </h3>
            <p className="text-mutedGray font-sans font-light text-sm leading-relaxed mb-8">
              Fill out the form or reach out directly to set up a comprehensive technology audit. Our leads will respond immediately.
            </p>

            {/* Visual Glass Cards */}
            <div className="space-y-4">
              
              {/* Card 1: Email */}
              <div className="glass-card p-5 rounded-2xl flex items-center gap-5 border border-white/5">
                <div className="p-3 bg-gold/5 border border-gold/15 text-gold rounded-xl shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-mutedGray uppercase tracking-widest font-bold font-sans block mb-1">
                    Direct Mail
                  </span>
                  <a href="mailto:craft@larqon.tech" className="text-sm font-semibold text-warmWhite hover:text-gold transition-colors duration-300 font-sans">
                    craft@larqon.tech
                  </a>
                </div>
              </div>

              {/* Card 2: HQ Location */}
              <div className="glass-card p-5 rounded-2xl flex items-center gap-5 border border-white/5">
                <div className="p-3 bg-gold/5 border border-gold/15 text-gold rounded-xl shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-mutedGray uppercase tracking-widest font-bold font-sans block mb-1">
                    Headquarters
                  </span>
                  <span className="text-sm font-semibold text-warmWhite font-sans">
                    100 Infinite Loop, Silicon Valley, CA
                  </span>
                </div>
              </div>

              {/* Card 3: Response Time */}
              <div className="glass-card p-5 rounded-2xl flex items-center gap-5 border border-white/5">
                <div className="p-3 bg-gold/5 border border-gold/15 text-gold rounded-xl shrink-0">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-mutedGray uppercase tracking-widest font-bold font-sans block mb-1">
                    Response SLA
                  </span>
                  <span className="text-sm font-semibold text-warmWhite font-sans">
                    Average Response Under 2 Hours
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interaction Form Panel */}
          <motion.div
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden border border-white/5 shadow-premium">
              {/* Aesthetic Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-warmWhite/80 font-sans">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Marcus Aurelius"
                        className="premium-input px-4 py-3.5 text-sm font-sans"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-warmWhite/80 font-sans">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="marcus@emperor.com"
                        className="premium-input px-4 py-3.5 text-sm font-sans"
                      />
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-warmWhite/80 font-sans">
                        Message Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Detail your digital platform requirements..."
                        className="premium-input px-4 py-3.5 text-sm font-sans resize-none"
                      ></textarea>
                    </div>

                    {/* Submit button with loading state */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full py-4 rounded-xl text-sm uppercase font-bold tracking-widest flex items-center justify-center gap-2.5 relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M 4 12 a 8 8 0 0 1 8 -8 V 0 C 5.373 0 0 5.373 0 12 h 4 z"></path>
                          </svg>
                          Processing Request...
                        </>
                      ) : (
                        <>
                          Transmit Message
                          <FiSend className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Success Message Container
                  <motion.div
                    key="success-container"
                    className="flex flex-col items-center justify-center py-16 text-center relative z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="p-4 bg-gold/10 border border-gold/30 rounded-full text-gold mb-6"
                    >
                      <FiCheckCircle className="w-16 h-16" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-warmWhite mb-3 font-sans">
                      Transmission Successful!
                    </h3>
                    
                    <p className="text-mutedGray font-sans font-light text-sm leading-relaxed max-w-sm">
                      Thank you. Your project data has been securely routed. Our engineering principal will reach out to you within the hour.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
