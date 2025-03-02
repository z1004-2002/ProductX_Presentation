import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span className="logo-main">Alert</span>
              <span className="logo-accent">X</span>
            </h2>
            <p className="footer-description">
              Connectez vos équipes avec des notifications multicanales instantanées et sécurisées.
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
              <h4>Canaux</h4>
              <a href="#">WhatsApp</a>
              <a href="#">Email</a>
              <a href="#">SMS</a>
              <a href="#">Push</a>
            </div>
            <div className="link-column">
              <h4>Développeurs</h4>
              <a href="#">API Docs</a>
              <a href="#">Bibliothèques</a>
              <a href="#">Webhooks</a>
              <a href="#">Exemples</a>
            </div>
            <div className="link-column">
              <h4>Entreprise</h4>
              <a href="#">À propos</a>
              <a href="#">Sécurité</a>
              <a href="#">Tarification</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Restez connecté</h4>
            <p>Inscrivez-vous pour des mises à jour d'API et des conseils de notification</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Votre email professionnel" 
                required 
              />
              <button type="submit">S'inscrire</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 AlertX. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#">Politique de confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;