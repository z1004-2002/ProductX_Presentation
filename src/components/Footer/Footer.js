import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span className="logo-main">Product</span>
              <span className="logo-accent">X</span>
            </h2>
            <p className="footer-description">
            Connect your teams with instant and secure multi-channel notifications.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" title="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" className="social-icon" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-icon" title="Documentation"><i className="fas fa-book"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Channels</h4>
              <a href="#">WhatsApp</a>
              <a href="#">Email</a>
              <a href="#">SMS</a>
              <a href="#">Push</a>
            </div>
            <div className="link-column">
              <h4>Developers</h4>
              <a href="#">API Docs</a>
              <a href="#">Bibliothèques</a>
              <a href="#">Webhooks</a>
              <a href="#">Exemples</a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Connected</h4>
            <p>Sign up for API updates and product management tips.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your professional email" 
                required 
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ProductX. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;