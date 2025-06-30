import React from 'react';
import { 
  HiStar, 
  HiCollection, 
  HiHeart, 
  HiDesktopComputer, 
  HiShare, 
  HiGlobeAlt 
} from 'react-icons/hi';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <HiStar />,
      title: 'Daily Inspiration',
      description: 'Get fresh, motivational quotes delivered to you every day to start your morning with positivity and purpose.'
    },
    {
      icon: <HiCollection />,
      title: 'Curated Collection',
      description: 'Access thousands of carefully selected quotes from famous authors, philosophers, and thought leaders throughout history.'
    },
    {
      icon: <HiHeart />,
      title: 'Save Favorites',
      description: 'Keep your most loved quotes close by saving them to your personal favorites collection for easy access.'
    },
    {
      icon: <HiDesktopComputer />,
      title: 'Beautiful Widgets',
      description: 'Add elegant quote widgets to your home screen and lock screen for instant inspiration at a glance.'
    },
    {
      icon: <HiShare />,
      title: 'Easy Sharing',
      description: 'Share meaningful quotes with friends and family through social media, messages, or any app you choose.'
    },
    {
      icon: <HiGlobeAlt />,
      title: 'Works Offline',
      description: 'Access your favorite quotes and discover new ones even when you\'re offline with our fallback collection.'
    }
  ];

  return (
    <section className="features section">
      <div className="features-container">
        <h2 id="features-heading" className="section-title">Why Choose Quotify?</h2>
        <p className="section-subtitle">
          Discover the features that make Quotify the perfect companion for your daily dose of inspiration
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="features-cta">
          <p className="cta-text">Ready to start your journey of daily inspiration?</p>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features; 