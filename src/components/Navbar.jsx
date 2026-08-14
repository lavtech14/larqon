import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import AnimatedLogo from "./AnimatedLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* =========================================
     SCROLL DETECTION
  ========================================== */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     CLOSE MOBILE MENU WHEN RESIZING
  ========================================== */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================
     NAVIGATION LINKS
  ========================================== */
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Why Us", href: "#why-us" },
    { name: "Pricing", href: "#pricing" },
  ];

  /* =========================================
     CLOSE MENU
  ========================================== */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================
          NAVBAR
      ====================================== */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-glass"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* =====================================
              BRAND LOGO
          ====================================== */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group shrink-0"
          >
            <AnimatedLogo size={40} />

            <div className="flex flex-col items-start leading-none">
              <span className="text-lg sm:text-xl font-bold tracking-[0.18em] text-warmWhite font-sans uppercase">
                LA<span className="text-gold">R</span>QON
              </span>

              <div className="flex items-center gap-1.5 mt-1.5 w-full">
                <span className="h-[1px] bg-gold/40 flex-grow"></span>

                <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.35em] text-gold uppercase font-sans">
                  TECH
                </span>

                <span className="h-[1px] bg-gold/40 flex-grow"></span>
              </div>
            </div>
          </a>

          {/* =====================================
              DESKTOP NAVIGATION
          ====================================== */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative text-sm font-medium tracking-wide text-mutedGray hover:text-warmWhite transition-colors duration-300 py-2 group"
                  >
                    {link.name}

                    {/* Hover underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="btn-gold px-5 py-2.5 rounded-full text-sm whitespace-nowrap"
            >
              Start a Project
            </a>
          </div>

          {/* =====================================
              MOBILE MENU BUTTON
          ====================================== */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`md:hidden relative z-[60] p-2 rounded-xl border transition-all duration-300 ${
              isMobileMenuOpen
                ? "border-gold/40 bg-gold/10 text-gold"
                : "border-white/10 bg-white/5 text-warmWhite hover:border-gold/40 hover:text-gold"
            }`}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* =====================================
            MOBILE MENU
        ====================================== */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Background overlay */}
              <motion.div
                className="fixed inset-0 top-0 bg-black/60 backdrop-blur-sm md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={closeMobileMenu}
              />

              {/* Mobile menu panel */}
              <motion.div
                className="fixed top-[76px] left-3 right-3 md:hidden bg-charcoal/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-glass overflow-hidden z-50"
                initial={{
                  opacity: 0,
                  y: -15,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                {/* Menu Header */}
                <div className="px-5 pt-5 pb-3 border-b border-white/5">
                  <p className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase">
                    Navigation
                  </p>

                  <p className="text-xs text-mutedGray mt-1">
                    Explore Larqon Tech
                  </p>
                </div>

                {/* Navigation Items */}
                <div className="px-3 py-3 max-h-[65vh] overflow-y-auto">
                  <ul className="space-y-1">
                    {navLinks.map((link, idx) => (
                      <motion.li
                        key={link.name}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: idx * 0.04,
                          duration: 0.25,
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium tracking-wide text-mutedGray hover:text-warmWhite hover:bg-white/5 active:bg-gold/10 transition-all duration-200 group"
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-[9px] text-gold/50 font-semibold tracking-wider">
                              {String(idx + 1).padStart(2, "0")}
                            </span>

                            <span>{link.name}</span>
                          </span>

                          <FiArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gold transition-all duration-200" />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-white/5">
                  <a
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="btn-gold w-full py-3.5 rounded-xl text-center flex items-center justify-center gap-2 text-sm font-semibold"
                  >
                    Start a Project
                    <FiArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-[10px] text-mutedGray text-center mt-3">
                    Let's build something meaningful.
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
