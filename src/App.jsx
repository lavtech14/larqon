import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-charcoal text-warmWhite overflow-x-hidden selection:bg-gold/30 selection:text-gold font-sans antialiased">
      {/* Absolute high-end Grid Matrix background overlay across the entire site */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>

      {/* Sticky frosted glass header */}
      <Navbar />

      {/* Landing page sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
