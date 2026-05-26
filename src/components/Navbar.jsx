import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import AnimatedLogo from './AnimatedLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-4 shadow-glass'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <AnimatedLogo size={42} />
          <div className="flex flex-col items-start leading-none">
            <span className="text-xl font-bold tracking-[0.18em] text-warmWhite font-sans uppercase">
              LA<span className="text-gold">R</span>QON
            </span>
            <div className="flex items-center gap-1.5 mt-1.5 w-full">
              <span className="h-[1px] bg-gold/40 flex-grow"></span>
              <span className="text-[8px] font-bold tracking-[0.35em] text-gold uppercase font-sans">
                TECH
              </span>
              <span className="h-[1px] bg-gold/40 flex-grow"></span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium tracking-wide text-mutedGray hover:text-warmWhite transition-colors duration-300 py-2 group"
                >
                  {link.name}
                  {/* Premium Underline Hover Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <a href="#contact" className="btn-gold px-5 py-2.5 rounded-full text-sm">
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-warmWhite hover:text-gold transition-colors duration-300 p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenuAlt3 className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[75px] w-full h-[calc(100vh-75px)] bg-charcoal/98 backdrop-blur-lg z-40 flex flex-col px-6 py-10 md:hidden border-t border-white/5"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          >
            <ul className="flex flex-col gap-6 text-left mb-10">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-medium tracking-wide text-mutedGray hover:text-gold block py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-gold w-full py-4 rounded-xl text-center block text-lg"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
