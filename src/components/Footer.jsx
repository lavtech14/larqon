import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi';
import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub className="w-5 h-5" />, href: "https://github.com", name: "GitHub" },
    { icon: <FiTwitter className="w-5 h-5" />, href: "https://twitter.com", name: "Twitter" },
    { icon: <FiLinkedin className="w-5 h-5" />, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: <FiInstagram className="w-5 h-5" />, href: "https://instagram.com", name: "Instagram" }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Selected Work', href: '#portfolio' },
    { name: 'Why Partner Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Investment Pricing', href: '#pricing' }
  ];

  const serviceLinks = [
    { name: 'Website Development', href: '#services' },
    { name: 'Mobile Apps Development', href: '#services' },
    { name: 'Premium UI/UX Design', href: '#services' },
    { name: 'SaaS Platforms Build', href: '#services' },
    { name: 'AI Solutions Integrations', href: '#services' }
  ];

  return (
    <footer className="bg-charcoal-dark border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 glow-orb-gold w-[300px] h-[300px] opacity-15"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
        
        {/* Left branding details */}
        <div className="lg:col-span-4 text-left">
          <a href="#home" className="flex items-center gap-3 group w-fit mb-6">
            <AnimatedLogo size={36} />
            <div className="flex flex-col items-start leading-none">
              <span className="text-lg font-bold tracking-[0.18em] text-warmWhite font-sans uppercase">
                LA<span className="text-gold">R</span>QON
              </span>
              <div className="flex items-center gap-1.5 mt-1.5 w-full">
                <span className="h-[1px] bg-gold/40 flex-grow"></span>
                <span className="text-[7px] font-bold tracking-[0.35em] text-gold uppercase font-sans">
                  TECH
                </span>
                <span className="h-[1px] bg-gold/40 flex-grow"></span>
              </div>
            </div>
          </a>

          <p className="text-sm font-sans font-light text-mutedGray leading-relaxed mb-8 max-w-sm">
            Architecting premium websites, mobile applications, high-performance SaaS platforms, and enterprise software ecosystems. Committed to technical perfection and absolute visual elegance.
          </p>

          {/* Social media connections */}
          <div className="flex items-center gap-3">
            {socialLinks.map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-white/5 bg-slate/20 hover:border-gold hover:text-gold transition-all duration-300 text-mutedGray shadow-inner"
                aria-label={soc.name}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 text-left">
          <h4 className="text-xs font-bold uppercase tracking-widest text-warmWhite font-sans mb-6">
            Navigation
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-sm font-sans font-light text-mutedGray hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-3 text-left">
          <h4 className="text-xs font-bold uppercase tracking-widest text-warmWhite font-sans mb-6">
            Services
          </h4>
          <ul className="space-y-3">
            {serviceLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-sm font-sans font-light text-mutedGray hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter form Column */}
        <div className="lg:col-span-3 text-left">
          <h4 className="text-xs font-bold uppercase tracking-widest text-warmWhite font-sans mb-6">
            Weekly Digest
          </h4>
          <p className="text-sm font-sans font-light text-mutedGray leading-relaxed mb-6">
            Receive exclusive insights on engineering performance, design trends, and AI tools.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
            <input
              type="email"
              placeholder="e.g. ceasar@rome.com"
              required
              className="premium-input px-4 py-3.5 pr-12 w-full text-xs font-sans"
            />
            <button
              type="submit"
              className="absolute right-1 p-2.5 rounded-lg bg-gold hover:bg-gold-light text-charcoal transition-all duration-300"
              aria-label="Subscribe"
            >
              <FiArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar: copyright details */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 border-t border-white/5 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-mutedGray font-sans font-light">
          © {currentYear} Larqon Tech. All rights reserved. Designed with premium tech standards.
        </span>

        {/* Policies links */}
        <div className="flex items-center gap-6">
          <a href="#home" className="text-xs text-mutedGray hover:text-gold transition-colors duration-300 font-sans font-light">
            Privacy Policy
          </a>
          <a href="#home" className="text-xs text-mutedGray hover:text-gold transition-colors duration-300 font-sans font-light">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
