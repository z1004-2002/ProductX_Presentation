/* HeroSection.js */
import React from "react";
import "./HeroSection.css";
import config from "../../constant/constant.js"

const HeroSection = () => {
  const openDocumentation = () => {
    window.open('https://product-x-documentation-beta.vercel.app/', '_blank');
  };
  const StartDocumentation = () => {
    window.open('https://product-x-documentation-beta.vercel.app/about/Getting_Start/quickStart', '_blank');
  };

  const startWhatAppChat = () => {
    const url = `https://wa.me/${config.NUMBER}?text=${encodeURIComponent(config.MESSAGE)}`;
    window.open(url, "_blank");
  };
  const sendSms = () => {
    const url = `sms:${config.NUMBER}?&body=${encodeURIComponent(config.MESSAGE)}`;
    window.location.href = url;
  };
  const sendEmail = () => {
    const url = `mailto:${config.EMAIL}?subject=${encodeURIComponent(config.EMAIL_SUBJECT)}&body=${encodeURIComponent(config.EMAIL_SUBJECT)}`;
    window.location.href = url; // Ouvre le client e-mail
  };

  const startTelegramChat = () => {
    const url = `https://t.me/${config.TELEGRAM_USERNAME}?text=${encodeURIComponent(config.TELEGRAM_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="title">
            <span className="title-highlight">Product Management Service</span> 
            <br />At Your Fingertips
          </h1>
          <p className="subtitle">
          Instantly connect your teams with our multi-channel product management API.
          Task management, updates, notifications - A unified solution for all your team communications.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={StartDocumentation}>
              <span className="btn-icon">🚀</span>
              Get Started for Free
            </button>
            <button className="btn btn-secondary" onClick={openDocumentation}>
              <span className="btn-icon">📡</span>
              API Documentation
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">+100</span>
              <span className="stat-label">Integrations</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.99%</span>
              <span className="stat-label">Reliability</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="notification-mockup">
            <div className="notification-channels">
              <div className="channel whatsapp" onClick={startWhatAppChat}>
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </div>
              <div className="channel email" onClick={sendEmail}>
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </div>
              <div className="channel sms" onClick={sendSms}>
                <i className="fas fa-sms"></i> 
                <span>SMS</span>
              </div>
              <div className="channel push" onClick={startTelegramChat}>
                <i className="fa-brands fa-telegram"></i>
                <span>Telegram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
