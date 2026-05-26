import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiLayers, FiShield, FiDollarSign, FiClock } from 'react-icons/fi';

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Fast Delivery",
      description: "Aggressive milestone tracking coupled with modern development practices that ensure your digital product ships without delays.",
      icon: <FiTrendingUp className="w-6 h-6 text-gold" />,
    },
    {
      title: "Modern Design",
      description: "Apple-inspired, minimalistic, and futuristic design interfaces engineered for maximum viewer visual engagement.",
      icon: <FiLayers className="w-6 h-6 text-gold" />,
    },
    {
      title: "Scalable Architecture",
      description: "Cloud-native foundations built to handle sudden millions-of-requests surges without downtime or system lag.",
      icon: <FiShield className="w-6 h-6 text-gold" />,
    },
    {
      title: "Affordable Pricing",
      description: "High-value premium software engineering that fits startup resource levels. Predictable tiers with zero hidden retainers.",
      icon: <FiDollarSign className="w-6 h-6 text-gold" />,
    },
    {
      title: "24/7 Elite Support",
      description: "Direct slack channels and technical support lines to keep your web apps and backend services running continuously.",
      icon: <FiClock className="w-6 h-6 text-gold" />,
    }
  ];

  return (
    <section id="why-us" className="relative py-24 bg-charcoal-light overflow-hidden border-t border-white/5">
      {/* Background glowing gradients */}
      <div className="absolute top-[30%] right-0 glow-orb-gold w-[300px] h-[300px] opacity-25"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Layout: Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and Catchy copy */}
          <div className="lg:col-span-5 text-left">
            <motion.h4
              className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-3 font-sans"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              OUR PROMISE
            </motion.h4>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Why Disruptive Brands <br />
              <span className="text-gradient-gold-full">Choose Larqon Tech</span>
            </motion.h2>
            <motion.p
              className="text-mutedGray font-sans font-light leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We don’t just write code; we architect sustainable digital products. We work as dedicated engineering partners to deliver products that will stun your competitors.
            </motion.p>
            
            {/* Visual Glass highlights card */}
            <motion.div
              className="glass-card p-6 rounded-2xl border-l-4 border-l-gold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-warmWhite font-sans font-medium text-sm leading-relaxed italic">
                "Larqon Tech elevated our platform's load times by 400% while redesigning a gorgeous luxury dashboard that our clients absolutely love."
              </p>
              <span className="text-xs tracking-wider font-semibold text-gold uppercase font-sans mt-4 block">
                — CEO, Aether Analytics
              </span>
            </motion.div>
          </div>

          {/* Right Column: Grid list of benefits */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className={`glass-card p-6 rounded-2xl border border-white/5 hover:glass-card-hover group cursor-default transition-all duration-300 ${
                  idx === benefits.length - 1 && benefits.length % 2 !== 0 ? 'sm:col-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Icon & Title Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gold/5 border border-gold/10 rounded-xl group-hover:bg-gold/10 group-hover:border-gold/25 transition-all duration-300 shrink-0">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-warmWhite group-hover:text-gold transition-colors duration-300 font-sans">
                    {benefit.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-mutedGray font-sans font-light text-sm leading-relaxed text-left">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
