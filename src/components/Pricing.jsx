import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: "$1,499",
      period: "per project",
      desc: "Perfect for emerging startups aiming to launch their initial proof-of-concept with premium visual identity.",
      features: [
        "Single custom landing page",
        "Fully responsive layout",
        "Tailwind CSS custom styling",
        "Subtle micro-animations",
        "Standard contact form integration",
        "1 month post-launch support"
      ],
      isPopular: false,
      btnText: "Get Started",
      btnClass: "btn-outline-premium w-full py-3.5 rounded-xl font-semibold tracking-wider uppercase text-xs"
    },
    {
      name: "Business Plan",
      price: "$3,499",
      period: "per project",
      desc: "The premium sweet spot for scaling businesses requiring comprehensive multi-page application frameworks.",
      features: [
        "Up to 5 custom web pages",
        "Premium Framer Motion animations",
        "Apple/Stripe aesthetic design specs",
        "Basic CMS dashboard integration",
        "Performance optimization (90+ mobile)",
        "Premium contact form & email setup",
        "3 months dedicated SLA support"
      ],
      isPopular: true,
      btnText: "Select Business Plan",
      btnClass: "btn-gold w-full py-3.5 rounded-xl font-semibold tracking-wider uppercase text-xs shadow-gold-glow"
    },
    {
      name: "Premium Plan",
      price: "Custom",
      period: "contract value",
      desc: "Engineered for high-traffic platforms, enterprise software products, scalable SaaS architectures, and AI databases.",
      features: [
        "Unlimited custom pages / app workflows",
        "Advanced SaaS multi-tenant build",
        "Integrated AI/LLM modules & search",
        "Robust REST/gRPC API gateways",
        "Kubernetes cloud scaling deployment",
        "Comprehensive UI/UX design prototype",
        "24/7 priority support & SLA retainer"
      ],
      isPopular: false,
      btnText: "Consult Our Experts",
      btnClass: "btn-outline-premium w-full py-3.5 rounded-xl font-semibold tracking-wider uppercase text-xs"
    }
  ];

  return (
    <section id="pricing" className="relative py-24 bg-charcoal-light overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-0 glow-orb-gold w-[400px] h-[400px] opacity-20"></div>
      <div className="absolute bottom-[20%] left-0 glow-orb-blue w-[400px] h-[400px] opacity-25"></div>

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
            OUR INVESTMENT
          </motion.h4>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transparent Plans Tailored <br className="hidden sm:inline" />
            <span className="text-gradient-gold-full">For Ambitious Growth</span>
          </motion.h2>
          <motion.p
            className="text-mutedGray text-sm font-sans font-light leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Invest in design excellence and bleeding-edge system performance. Select the tier that matches your startup objectives.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-16 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`glass-card p-8 rounded-3xl flex flex-col justify-between relative cursor-default transition-all duration-500 overflow-hidden ${
                plan.isPopular 
                  ? 'border-gold/50 shadow-premium glass-card-hover scale-[1.03] lg:scale-[1.05] z-10' 
                  : 'border-white/5 hover:border-white/10 z-0'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Grid overlay for aesthetic depth */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

              {/* Popular Badge indicator */}
              {plan.isPopular && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-gold to-accentBlue px-3.5 py-1 rounded-full text-[9px] tracking-widest text-charcoal font-bold uppercase shadow-gold-glow animate-pulse">
                  Most Popular
                </span>
              )}

              {/* Top Details */}
              <div className="text-left relative z-10">
                <span className={`text-xs font-bold tracking-[0.2em] uppercase block mb-6 ${plan.isPopular ? 'text-gold' : 'text-mutedGray'}`}>
                  {plan.name}
                </span>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-extrabold text-warmWhite font-sans tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-mutedGray font-sans">
                    / {plan.period}
                  </span>
                </div>

                <p className="text-sm font-sans font-light text-mutedGray leading-relaxed mb-8 border-b border-white/5 pb-6">
                  {plan.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-gold/10 border border-gold/30 text-gold mt-0.5 shrink-0">
                        <FiCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-warmWhite/90 font-sans font-light">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-auto">
                <a
                  href="#contact"
                  className={`${plan.btnClass} flex items-center justify-center gap-2 group`}
                >
                  {plan.btnText}
                  <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300 w-4 h-4 shrink-0" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
