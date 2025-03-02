import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAboutScroll = (e) => {
    e.preventDefault();
    const featuresSection = document.querySelector('.about-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleFeaturesScroll = (e) => {
    e.preventDefault();
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const handleDeveloperScroll = (e) => {
    e.preventDefault();
    const featuresSection = document.querySelector('.developpers-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const handlePricingScroll = (e) => {
    e.preventDefault();
    const featuresSection = document.querySelector('.pricing-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const handleTestiScroll = (e) => {
    e.preventDefault();
    const featuresSection = document.querySelector('.temoignages-page');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignUp = () => {
    // Navigate to signup page
    navigate('/signup');
  };

  const handleSignIn = () => {
    // Navigate to signin page
    navigate('/signin');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo">
            <span className="logo-main">Product</span>
            <span className="logo-accent">X</span>
          </h1>
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><a href="#about-section" onClick={(e) => { handleAboutScroll(e); toggleMenu(); }}>About</a></li>
            <li><a href="#about-section" onClick={(e) => { handleDeveloperScroll(e); toggleMenu(); }}>For Developers</a></li>
            <li><a href="#features" onClick={(e) => { handleFeaturesScroll(e); toggleMenu(); }}>Features</a></li>
            <li><a href="#about-section" onClick={(e) => { handlePricingScroll(e); toggleMenu(); }}>Pricing</a></li>
            <li><a href="#about-section" onClick={(e) => { handleTestiScroll(e); toggleMenu(); }}>User Testimonials</a></li>
          </ul>
        </nav>
        
        <div className="auth-buttons">
          {/* <button 
            className="btn btn-signup"
            onClick={handleSignUp}
          >
            <span className="btn-icon">🚀</span>
            Sign Up
          </button>
          <button 
            className="btn btn-login"
            onClick={handleSignIn}
          >  
            <span className="btn-icon">🔒</span>
            Sign In
          </button> */}
        </div>
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
