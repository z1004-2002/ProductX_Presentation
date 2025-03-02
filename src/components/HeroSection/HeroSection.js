/* HeroSection.js */
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const openDocumentation = () => {
    window.open('https://service-de-notication-documentation.vercel.app/', '_blank');
  };
  const StartDocumentation = () => {
    window.open('https://service-de-notication-documentation.vercel.app/AboutRacine/Getting_Start/quickStart', '_blank');
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="title">
            <span className="title-highlight">Service de Notifications</span> 
            <br />à Portée de Main
          </h1>
          <p className="subtitle">
            Connectez instantanément vos équipes avec notre API de notifications multicanales. 
            WhatsApp, Email, SMS, Push - Une solution unifiée pour toutes vos communications.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={StartDocumentation}>
              <span className="btn-icon">🚀</span>
              Commencer Gratuitement
            </button>
            <button className="btn btn-secondary" onClick={openDocumentation}>
              <span className="btn-icon">📡</span>
              Documentation API
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">+100</span>
              <span className="stat-label">Intégrations</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.99%</span>
              <span className="stat-label">Fiabilité</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="notification-mockup">
            <div className="notification-channels">
              <div className="channel whatsapp">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </div>
              <div className="channel email">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </div>
              <div className="channel sms">
                <i className="fas fa-sms"></i>
                <span>SMS</span>
              </div>
              <div className="channel push">
                <i className="fas fa-bell"></i>
                <span>Push</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
