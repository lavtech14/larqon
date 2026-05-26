import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "CTO, Stratos Analytics",
      quote: "Larqon Tech delivered a product that exceeded every performance metric we laid out. The custom React frontend runs flawlessly, and the clean design has significantly boosted our user retention. A phenomenal team.",
      color: "from-gold/20 to-charcoal",
      initials: "MV",
      logo: (
        <svg className="w-16 h-6 text-gold opacity-60" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="10" r="4" fill="currentColor" />
          <text x="32" y="14" fill="#F5F5F5" fontSize="10" fontWeight="bold" letterSpacing="1">STRATOS</text>
        </svg>
      )
    },
    {
      name: "Elena Rostova",
      role: "VP of Product, NovaPay",
      quote: "Collaborating with Larqon Tech to build our digital payment ecosystem was the best decision of the year. Their team acts as design purists and technical virtuosos. The level of responsive detail in their work is unmatched.",
      color: "from-accentBlue/20 to-charcoal",
      initials: "ER",
      logo: (
        <svg className="w-16 h-6 text-accentBlue opacity-60" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 5,5 L 20,5 L 12.5,15 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <text x="28" y="14" fill="#F5F5F5" fontSize="10" fontWeight="bold" letterSpacing="1">NOVAPAY</text>
        </svg>
      )
    },
    {
      name: "Alexander Sterling",
      role: "Founder, Apex Lifestyle",
      quote: "The design aesthetics Larqon Tech brought to our mobile ecosystem are Apple-grade. Clean typography, premium spacing, and extremely smooth transitions. Our conversion rate increased by 45% immediately after release.",
      color: "from-white/10 to-charcoal",
      initials: "AS",
      logo: (
        <svg className="w-16 h-6 text-warmWhite opacity-60" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <line x1="11" y1="4" x2="11" y2="16" stroke="currentColor" strokeWidth="1" />
          <text x="24" y="14" fill="#F5F5F5" fontSize="10" fontWeight="bold" letterSpacing="1">APEX</text>
        </svg>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: Left, 1: Right

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Autoplay slider interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    })
  };

  return (
    <section id="testimonials" className="relative py-24 bg-charcoal overflow-hidden border-t border-white/5">
      {/* Background glow orb */}
      <div className="absolute top-[20%] left-0 glow-orb-blue w-[400px] h-[400px] opacity-25"></div>
      <div className="absolute bottom-[20%] right-0 glow-orb-gold w-[400px] h-[400px] opacity-25"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h4
            className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-3 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            TESTIMONIALS
          </motion.h4>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-warmWhite mb-6 font-sans tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Endorsed by Leading <br className="hidden sm:inline" />
            <span className="text-gradient-gold-full">Digital Innovators</span>
          </motion.h2>
        </div>

        {/* Carousel Slider Panel */}
        <div className="relative min-h-[360px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`w-full glass-card p-8 md:p-12 rounded-3xl bg-gradient-to-br ${reviews[currentIndex].color} relative flex flex-col justify-between overflow-hidden min-h-[300px] shadow-premium`}
            >
              {/* Subtle Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

              {/* Quote Mark Icon */}
              <div className="absolute top-8 right-8 text-gold/10 pointer-events-none">
                <FaQuoteLeft className="w-16 h-16" />
              </div>

              {/* Quote Content */}
              <div className="text-left relative z-10 mb-8">
                <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-warmWhite/90 italic">
                  "{reviews[currentIndex].quote}"
                </p>
              </div>

              {/* Client Info Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/5 pt-6 relative z-10">
                <div className="flex items-center gap-4">
                  {/* Avatar Symbol */}
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm tracking-wider shadow-inner shrink-0">
                    {reviews[currentIndex].initials}
                  </div>

                  {/* Title & Name */}
                  <div className="text-left">
                    <span className="text-base font-bold text-warmWhite font-sans block">
                      {reviews[currentIndex].name}
                    </span>
                    <span className="text-xs text-mutedGray font-sans font-medium tracking-wide">
                      {reviews[currentIndex].role}
                    </span>
                  </div>
                </div>

                {/* Company Logo representation */}
                <div className="shrink-0">
                  {reviews[currentIndex].logo}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] lg:left-[-50px] p-3 rounded-full border border-white/10 bg-slate hover:border-gold hover:text-gold transition-all duration-300 shadow-glass z-20"
            aria-label="Previous review"
          >
            <FiChevronLeft className="w-5 h-5 text-warmWhite" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] lg:right-[-50px] p-3 rounded-full border border-white/10 bg-slate hover:border-gold hover:text-gold transition-all duration-300 shadow-glass z-20"
            aria-label="Next review"
          >
            <FiChevronRight className="w-5 h-5 text-warmWhite" />
          </button>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentIndex === idx ? 'w-8 bg-gold' : 'w-2.5 bg-white/10 hover:bg-white/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
