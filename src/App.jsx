import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import QuoteGenerator from './components/QuoteGenerator';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Main content wrapped in semantic HTML */}
      <main id="main-content" role="main">
        {/* Hero section */}
        <section id="hero" aria-labelledby="hero-heading">
          <Hero />
        </section>
        
        {/* Features section */}
        <section id="features" aria-labelledby="features-heading">
          <Features />
        </section>
        
        {/* Quote Generator section */}
        <section id="quote-generator" aria-labelledby="quote-generator-heading">
          <QuoteGenerator />
        </section>
        
        {/* Download section */}
        <section id="download" aria-labelledby="download-heading">
          <Download />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
