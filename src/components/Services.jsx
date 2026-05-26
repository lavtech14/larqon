import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiLayout, FiDatabase, FiCloudLightning, FiTerminal } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description: "High-performance enterprise websites engineered with cutting-edge front-end stacks and headless CMS systems. Impeccably responsive, lightning-fast, and search-optimized.",
      icon: <FiCode className="w-6 h-6" />,
      features: ["Vite & React Ecosystems", "Headless CMS Integrations", "Apple-Grade SEO & Speeds"]
    },
    {
      title: "Mobile App Development",
      description: "Elegant native and cross-platform mobile solutions for iOS and Android platforms. Built for fluid interactions, low latency, offline capabilities, and high customer retention.",
      icon: <FiSmartphone className="w-6 h-6" />,
      features: ["React Native & Flutter", "Tailored Mobile UX Solutions", "Store Submission Management"]
    },
    {
      title: "UI/UX Design",
      description: "Futuristic and minimalistic interface designs coupled with intuitive, research-driven user experiences. High-fidelity dynamic interactive wireframes built on elite standards.",
      icon: <FiLayout className="w-6 h-6" />,
      features: ["Stripe & Apple Inspired", "Interactive Prototyping", "Design System Crafting"]
    },
    {
      title: "SaaS Products",
      description: "Highly scalable, secure, and multi-tenant software-as-a-service application ecosystems. Built with robust architectures that allow seamless feature scale and load handling.",
      icon: <FiDatabase className="w-6 h-6" />,
      features: ["Scalable Node & Go Backends", "Multi-Tenant Architectures", "Subscription Billing Systems"]
    },
    {
      title: "API Integration",
      description: "Secure, reliable, and standardized RESTful and GraphQL API layer integrations. Connecting legacy enterprise software with modern SaaS applications seamlessly.",
      icon: <FiCloudLightning className="w-6 h-6" />,
      features: ["Custom Middleware Services", "Secure Webhook Ecosystems", "Real-Time Event Processing"]
    },
    {
      title: "AI Solutions",
      description: "Next-generation artificial intelligence integrations leveraging large language models (LLMs), neural networks, predictive analytics, and conversational agents.",
      icon: <FiTerminal className="w-6 h-6" />,
      features: ["OpenAI & Anthropic APIs", "Custom Vector Databases", "Automated Cognitive Workflows"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-charcoal-light overflow-hidden border-t border-white/5">
      {/* Background glow orb */}
      <div className="absolute bottom-[10%] left-0 glow-orb-blue w-[400px] h-[400px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-18">
          <motion.h4
            className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-3 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            OUR EXPERTISE
          </motion.h4>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Engineered to Scale <br className="hidden sm:inline" />
            <span className="text-gradient-gold-full">Your Digital Growth</span>
          </motion.h2>
          <motion.p
            className="text-mutedGray text-sm font-sans font-light leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We deploy specialized engineering teams to build, scale, and secure premium digital solutions fitted for your business goals.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:glass-card-hover group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Top border glowing line on hover */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold to-accentBlue transition-all duration-500 group-hover:w-full"></span>

              <div>
                {/* Icon Circle */}
                <div className="p-4 bg-gold/5 border border-gold/15 text-gold rounded-xl w-fit mb-8 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:text-warmWhite transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-warmWhite group-hover:text-gold transition-colors duration-300 mb-4 font-sans">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-mutedGray font-sans font-light text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Feature Points */}
              <ul className="space-y-2 border-t border-white/5 pt-6 mt-auto">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/60 group-hover:bg-gold transition-colors duration-300"></span>
                    <span className="text-xs text-warmWhite/80 font-sans font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
