import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'UI/UX'];

  const projects = [
    {
      title: "Aether SaaS Dashboard",
      category: "Web",
      tags: ["React", "Tailwind CSS", "Recharts", "Node.js"],
      previewColor: "from-slate-dark to-gold/20",
      svgGraphic: (
        <svg className="w-full h-full opacity-60" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dashboard Outline */}
          <rect x="20" y="20" width="160" height="80" rx="6" stroke="#C8A96B" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="20" y1="40" x2="180" y2="40" stroke="#C8A96B" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="60" y1="40" x2="60" y2="100" stroke="#C8A96B" strokeWidth="1" strokeOpacity="0.2" />
          {/* Line Chart */}
          <path d="M 70,80 Q 90,50 110,70 T 150,45 T 170,55" stroke="#C8A96B" strokeWidth="2" strokeLinecap="round" />
          <circle cx="150" cy="45" r="3" fill="#4F8CFF" />
          {/* Dots representing dashboard elements */}
          <rect x="30" y="50" width="20" height="6" rx="2" fill="#F5F5F5" fillOpacity="0.1" />
          <rect x="30" y="62" width="20" height="6" rx="2" fill="#F5F5F5" fillOpacity="0.1" />
          <rect x="30" y="74" width="20" height="6" rx="2" fill="#F5F5F5" fillOpacity="0.1" />
        </svg>
      )
    },
    {
      title: "Nova Wallet Application",
      category: "Mobile",
      tags: ["React Native", "Expo", "Framer Motion", "Stripe API"],
      previewColor: "from-slate-dark to-accentBlue/20",
      svgGraphic: (
        <svg className="w-full h-full opacity-60" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone Outline */}
          <rect x="75" y="15" width="50" height="90" rx="8" stroke="#F5F5F5" strokeWidth="1.5" strokeOpacity="0.2" />
          <rect x="90" y="19" width="20" height="3" rx="1.5" fill="#F5F5F5" fillOpacity="0.2" />
          {/* Credit Card Graphic inside Phone */}
          <rect x="82" y="32" width="36" height="22" rx="3" fill="#C8A96B" fillOpacity="0.15" stroke="#C8A96B" strokeWidth="0.5" />
          <circle cx="90" cy="38" r="2" fill="#C8A96B" />
          <line x1="86" y1="46" x2="102" y2="46" stroke="#C8A96B" strokeWidth="1" strokeOpacity="0.5" />
          {/* Balance Text representations */}
          <rect x="82" y="62" width="25" height="4" rx="1" fill="#F5F5F5" fillOpacity="0.4" />
          <rect x="82" y="70" width="36" height="6" rx="1.5" fill="#4F8CFF" fillOpacity="0.3" />
          <circle cx="112" cy="64" r="3" fill="#C8A96B" />
        </svg>
      )
    },
    {
      title: "Stratos Design Ecosystem",
      category: "UI/UX",
      tags: ["Figma", "Design Token Library", "UX Research", "Storybook"],
      previewColor: "from-slate-dark to-white/10",
      svgGraphic: (
        <svg className="w-full h-full opacity-60" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid Layout representing design tokens */}
          <circle cx="45" cy="40" r="15" fill="#C8A96B" fillOpacity="0.15" stroke="#C8A96B" strokeWidth="1" />
          <rect x="80" y="25" width="30" height="30" rx="6" fill="#4F8CFF" fillOpacity="0.1" stroke="#4F8CFF" strokeWidth="1" />
          <polygon points="145,25 160,55 130,55" fill="#F5F5F5" fillOpacity="0.05" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.3" />
          {/* Connecting lines */}
          <line x1="60" y1="40" x2="80" y2="40" stroke="#F5F5F5" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
          <line x1="110" y1="40" x2="130" y2="40" stroke="#F5F5F5" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
          {/* Color swatches */}
          <rect x="35" y="80" width="20" height="15" rx="3" fill="#C8A96B" />
          <rect x="65" y="80" width="20" height="15" rx="3" fill="#4F8CFF" />
          <rect x="95" y="80" width="20" height="15" rx="3" fill="#222222" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.2" />
          <rect x="125" y="80" width="40" height="15" rx="3" fill="#161616" stroke="#C8A96B" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      title: "Vortex AI Cognitive Node",
      category: "Web",
      tags: ["Next.js", "Python FastAPI", "LangChain", "Vector DB"],
      previewColor: "from-slate-dark to-gold/25",
      svgGraphic: (
        <svg className="w-full h-full opacity-60" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* AI Neural Net */}
          <circle cx="100" cy="60" r="16" stroke="#C8A96B" strokeWidth="1.5" fill="#C8A96B" fillOpacity="0.1" />
          <circle cx="50" cy="35" r="8" stroke="#4F8CFF" strokeWidth="1" fill="#4F8CFF" fillOpacity="0.05" />
          <circle cx="50" cy="85" r="8" stroke="#4F8CFF" strokeWidth="1" fill="#4F8CFF" fillOpacity="0.05" />
          <circle cx="150" cy="35" r="8" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="150" cy="85" r="8" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.4" />
          {/* Connections */}
          <line x1="58" y1="35" x2="84" y2="52" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="58" y1="85" x2="84" y2="68" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="116" y1="52" x2="142" y2="35" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="116" y1="68" x2="142" y2="85" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="50" y1="43" x2="50" y2="77" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.1" />
          <line x1="150" y1="43" x2="150" y2="77" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.1" />
        </svg>
      )
    },
    {
      title: "Helios Scalable API Gateway",
      category: "Web",
      tags: ["Go", "gRPC", "Kubernetes", "Redis Cache"],
      previewColor: "from-slate-dark to-accentBlue/25",
      svgGraphic: (
        <svg className="w-full h-full opacity-60" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Server Nodes */}
          <rect x="35" y="25" width="45" height="18" rx="4" stroke="#4F8CFF" strokeWidth="1" fill="#4F8CFF" fillOpacity="0.05" />
          <rect x="35" y="51" width="45" height="18" rx="4" stroke="#4F8CFF" strokeWidth="1" fill="#4F8CFF" fillOpacity="0.05" />
          <rect x="35" y="77" width="45" height="18" rx="4" stroke="#4F8CFF" strokeWidth="1" fill="#4F8CFF" fillOpacity="0.05" />
          {/* Indicators */}
          <circle cx="43" cy="34" r="2" fill="#C8A96B" />
          <circle cx="43" cy="60" r="2" fill="#C8A96B" />
          <circle cx="43" cy="86" r="2" fill="#C8A96B" />
          {/* Connected Gateway Hub */}
          <circle cx="135" cy="60" r="18" stroke="#F5F5F5" strokeWidth="1.5" strokeOpacity="0.3" fill="#161616" />
          <path d="M 130,55 L 140,65 M 140,55 L 130,65" stroke="#C8A96B" strokeWidth="2" strokeLinecap="round" />
          {/* Server connectors */}
          <path d="M 80,34 L 117,60 M 80,60 L 117,60 M 80,86 L 117,60" stroke="#F5F5F5" strokeWidth="1" strokeOpacity="0.15" />
        </svg>
      )
    },
    {
      title: "Apex Fitness Companion",
      category: "Mobile",
      tags: ["SwiftUI", "Kotlin Native", "WatchOS", "HealthKit"],
      previewColor: "from-slate-dark to-white/15",
      svgGraphic: (
        <svg className="w-full h-full opacity-60" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Smart Watch Shape */}
          <rect x="80" y="30" width="40" height="60" rx="10" stroke="#F5F5F5" strokeWidth="1.5" strokeOpacity="0.3" />
          <path d="M 90,20 L 90,30 M 110,20 L 110,30 M 90,90 L 90,100 M 110,90 L 110,100" stroke="#F5F5F5" strokeWidth="2" strokeOpacity="0.2" />
          {/* Screen elements */}
          <circle cx="100" cy="60" r="18" stroke="#C8A96B" strokeWidth="2" strokeDasharray="90 30" />
          <path d="M 92,60 A 8,8 0 0,1 108,60" fill="none" stroke="#4F8CFF" strokeWidth="2" strokeLinecap="round" />
          <rect x="94" y="70" width="12" height="4" rx="1" fill="#F5F5F5" fillOpacity="0.5" />
        </svg>
      )
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-charcoal overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-0 glow-orb-gold w-[400px] h-[400px] opacity-30"></div>
      <div className="absolute bottom-[20%] right-0 glow-orb-blue w-[400px] h-[400px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-left">
            <motion.h4
              className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-3 font-sans"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              SELECTED WORK
            </motion.h4>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-warmWhite font-sans tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Showcasing Our <br className="hidden sm:inline" />
              <span className="text-gradient-gold-full">Digital Masterpieces</span>
            </motion.h2>
          </div>

          {/* Filtering Tabs with Smooth Slider indicator */}
          <div className="flex items-center gap-2 bg-slate/40 p-1.5 rounded-full border border-white/5 w-fit shrink-0 overflow-x-auto">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-500 select-none ${
                  activeCategory === cat ? 'text-charcoal' : 'text-mutedGray hover:text-warmWhite'
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gold rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Visual Preview area */}
                <div className={`h-52 bg-gradient-to-br ${project.previewColor} relative flex items-center justify-center p-6 border-b border-white/5 overflow-hidden`}>
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                  
                  {/* Animated SVG Vector Graphic */}
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    {project.svgGraphic}
                  </div>

                  {/* Absolute Corner Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal/80 text-[10px] tracking-widest text-gold uppercase border border-gold/15 font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Info Text Area */}
                <div className="p-6 text-left flex flex-col justify-between min-h-[170px]">
                  <div>
                    {/* Project Title */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="text-lg font-bold text-warmWhite group-hover:text-gold transition-colors duration-300 font-sans line-clamp-1">
                        {project.title}
                      </h3>
                      <FiArrowUpRight className="text-mutedGray group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 w-5 h-5 shrink-0" />
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] text-mutedGray bg-white/5 px-2.5 py-1 rounded-md border border-white/5 font-sans font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action link representation */}
                  <span className="text-xs font-semibold text-gold tracking-wider uppercase inline-flex items-center gap-1.5 group-hover:underline">
                    View Case Study <FiExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
