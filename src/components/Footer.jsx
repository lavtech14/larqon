import React from "react";
import {
  FiMail,
  FiMessageCircle,
  FiArrowUp,
  FiArrowRight,
} from "react-icons/fi";
import AnimatedLogo from "./AnimatedLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const email = "larqontech@gmail.com";
  const whatsappNumber = "919666753505";

  const whatsappMessage = encodeURIComponent(
    "Hi Larqon Tech, I'm interested in discussing a project.",
  );

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Why Larqon Tech", href: "#why-us" },
    { name: "Investment", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    "Website Development",
    "Mobile App Development",
    "UI/UX Design",
    "SaaS Development",
    "Custom Software",
  ];

  return (
    <footer className="bg-charcoal-dark border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 glow-orb-gold w-[350px] h-[350px] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 py-16">
          {/* Brand */}
          <div className="lg:col-span-5 text-left">
            <a
              href="#home"
              className="flex items-center gap-3 group w-fit mb-6"
            >
              <AnimatedLogo size={36} />

              <div className="flex flex-col items-start leading-none">
                <span className="text-lg font-bold tracking-[0.18em] text-warmWhite font-sans uppercase">
                  LA<span className="text-gold">R</span>QON
                </span>

                <div className="flex items-center gap-1.5 mt-1.5 w-full">
                  <span className="h-[1px] bg-gold/40 flex-grow" />

                  <span className="text-[7px] font-bold tracking-[0.35em] text-gold uppercase font-sans">
                    TECH
                  </span>

                  <span className="h-[1px] bg-gold/40 flex-grow" />
                </div>
              </div>
            </a>

            <p className="text-sm font-sans font-light text-mutedGray leading-relaxed mb-7 max-w-md">
              Larqon Tech builds modern websites, mobile applications, SaaS
              platforms, and custom software solutions for businesses ready to
              grow digitally.
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${email}?subject=Project%20Inquiry%20-%20Larqon%20Tech`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-mutedGray hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <FiMail className="w-4 h-4" />
                Email Us
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gold text-charcoal text-sm font-semibold hover:bg-gold-light transition-all duration-300"
              >
                <FiMessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-warmWhite font-sans mb-6">
              Navigation
            </h4>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
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

          {/* Services */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-warmWhite font-sans mb-6">
              What We Build
            </h4>

            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="flex items-center gap-2 text-sm font-sans font-light text-mutedGray hover:text-gold transition-colors duration-300"
                  >
                    <FiArrowRight className="w-3.5 h-3.5 text-gold/60" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="border-t border-white/5 border-b py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-1">
                Start a Project
              </p>

              <p className="text-sm text-mutedGray font-sans font-light">
                Have an idea? Let's talk about it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${email}`}
                className="text-sm text-warmWhite hover:text-gold transition-colors duration-300"
              >
                {email}
              </a>

              <span className="hidden sm:block text-white/10">|</span>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-warmWhite hover:text-gold transition-colors duration-300"
              >
                +91 9666753505
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <span className="text-xs text-mutedGray font-sans font-light text-center sm:text-left">
            © {currentYear} Larqon Tech. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <span className="text-xs text-mutedGray font-sans font-light">
              Built with modern technology.
            </span>

            <a
              href="#home"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-mutedGray hover:text-gold hover:border-gold/30 transition-all duration-300"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
