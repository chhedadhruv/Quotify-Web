import React from 'react';
import { HiStar, HiDownload, HiLightningBolt, HiChevronDown } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero gradient-bg">
      <div className="hero-content">
        <div className="hero-text">
          <h1 id="hero-heading" className="hero-title">
            <span className="hero-logo"><HiStar aria-hidden="true" /></span>
            Quotify
          </h1>
          <p className="hero-subtitle">
            Discover daily inspiration with beautiful quotes that motivate, inspire, and uplift your spirit
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('download')}
            >
              <HiDownload /> Get the App
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('quote-generator')}
            >
              <HiLightningBolt /> Try Random Quote
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-quotes">
            <div className="quote-bubble quote-1">
              <p>"The only way to do great work is to love what you do."</p>
              <span>— Steve Jobs</span>
            </div>
            <div className="quote-bubble quote-2">
              <p>"Innovation distinguishes between a leader and a follower."</p>
              <span>— Steve Jobs</span>
            </div>
            <div className="quote-bubble quote-3">
              <p>"Life is what happens while you're busy making other plans."</p>
              <span>— John Lennon</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"><HiChevronDown /></div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero; 