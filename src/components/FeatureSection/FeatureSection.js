/* FeaturesSection.js */
import React from "react";
import "./FeatureSection.css";

const FeaturesSection = () => {
  const features = [
    { 
      icon: "fab fa-whatsapp", 
      title: "Notifications WhatsApp", 
      desc: "Envoyez des messages instantanés et personnalisés directement sur WhatsApp. Atteignez vos utilisateurs là où ils sont le plus actifs.",
      color: "#25D366"
    },
    { 
      icon: "fas fa-envelope", 
      title: "Notifications Email", 
      desc: "Créez des emails transactionnels et marketing élaborés avec un design responsive et des modèles personnalisables.",
      color: "#3498db"
    },
    { 
      icon: "fas fa-sms", 
      title: "Notifications SMS", 
      desc: "Envoyez des alertes critiques et des codes de vérification avec une livraison instantanée et un taux de lecture élevé.",
      color: "#2ecc71"
    },
    { 
      icon: "fas fa-bell", 
      title: "Notifications Push", 
      desc: "Engagez vos utilisateurs avec des notifications push intelligentes pour les applications web et mobiles.",
      color: "#9b59b6"
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">Nos Fonctionnalités</h2>
          <p className="section-subtitle">
            Une solution unifiée pour notifier vos utilisateurs de maniere efficace.
          </p>
        </div>
        <div className="feature-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{borderTopColor: feature.color}}>
              <div className="feature-icon" style={{backgroundColor: feature.color}}>
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.desc}</p>
              <a href="https://service-de-notication-documentation.vercel.app/AboutRacine/Whatsapp_Meta/configure" className="feature-link">Découvrir →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;