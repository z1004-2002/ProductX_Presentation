import React from 'react';
import './about.css';

const About = () => {
  const aboutSections = [
    {
      title: "Notre Mission",
      icon: "fa-bullseye",
      paragraphs: [
        "AlertX est né de la conviction que la communication digitale doit être simple, rapide et efficace. Notre mission est de révolutionner la façon dont les entreprises interagissent avec leurs utilisateurs.",
        "Nous comprenons que chaque notification est une opportunité de créer une connexion significative. C'est pourquoi nous avons développé une plateforme qui permet aux entreprises d'envoyer des messages personnalisés et instantanés à travers plusieurs canaux.",
        "Notre objectif est de transformer la communication numérique en un processus transparent, où chaque message compte et chaque interaction a un impact."
      ]
    },
    {
      title: "Notre Vision Technologique",
      icon: "fa-eye",
      paragraphs: [
        "Nous voyons un avenir où la communication digitale est totalement intégrée, intelligente et centrée sur l'utilisateur. AlertX n'est pas simplement un outil de notification, c'est une plateforme qui anticipe et répond aux besoins dynamiques de la communication moderne.",
        "Notre vision repose sur trois piliers fondamentaux : l'innovation technologique, la personnalisation avancée et l'accessibilité universelle. Nous croyons que la technologie doit simplifier la vie, pas la compliquer.",
        "Nous investissons continuellement dans la recherche et le développement pour rester à la pointe de l'innovation en matière de communication digitale."
      ]
    },
    {
      title: "Nos Avantages Uniques",
      icon: "fa-rocket",
      paragraphs: [
        "AlertX se distinguant par sa capacité à offrir une solution de notification véritablement multicanal. Que ce soit via SMS, WhatsApp, Email ou Notifications Push, nous garantissons une intégration fluide et une expérience utilisateur exceptionnelle.",
        "Contrairement aux solutions traditionnelles, nous offrons une personnalisation poussée. Nos algorithmes intelligents permettent d'adapter chaque message au profil et aux préférences de chaque utilisateur.",
        "Avec des temps de livraison ultra-rapides, une sécurité de pointe et une fiabilité à toute épreuve, AlertX devient le partenaire technologique indispensable pour toute entreprise soucieuse de maintenir une communication de qualité."
      ]
    }
  ];

  return (
    <div className="about-section">
      <div className="about-header">
        <h2 className="section-title">
          About <span className="title-highlight">AlertX</span>
        </h2>
        <p className="section-subtitle">
          Transforming Digital Communication, One Notification at a Time
        </p>
      </div>
      
      <div className="about-grid">
        {aboutSections.map((section, index) => (
          <div key={index} className="about-card">
            <div className="about-icon-container">
              <i className={`fas ${section.icon}`}></i>
            </div>
            <div className="about-content">
              <h3 className="about-title">{section.title}</h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="about-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;