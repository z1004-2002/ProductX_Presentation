import React from 'react';
import './developpers.css';

const Developpers = () => {
  const developerSections = [
    {
      title: "Intégration Facile de l'API",
      icon: "fa-code",
      paragraphs: [
        "AlertX fournit une API robuste et conviviale qui peut être intégrée sans effort dans n'importe quel écosystème d'application. Notre documentation complète et nos SDK prennent en charge plusieurs langages de programmation, y compris JavaScript, Python, Java, et plus encore.",
        "Avec seulement quelques lignes de code, les développeurs peuvent implémenter des capacités de notification puissantes, réduisant ainsi le temps et la complexité du développement. Notre API RESTful garantit une communication fluide et un minimum de surcharge.",
        "Nous offrons des exemples de code étendus, une documentation interactive et un support dédié pour aider les développeurs à démarrer rapidement et efficacement."
      ]
    },
    {
        title: "Portée Mondiale & Internationalisation",
        icon: "fa-globe",
        paragraphs: [
          "Brisez les barrières linguistiques avec les fonctionnalités avancées d'internationalisation d'AlertX. Notre plateforme prend en charge plus de 50 langues et fournit des services de traduction automatique pour le contenu des notifications.",
          "Personnalisez les notifications en fonction des préférences linguistiques des utilisateurs, des paramètres régionaux et des nuances culturelles. Notre moteur de localisation intelligent garantit que vos messages résonnent avec un public mondial.",
          "Gérez sans effort la communication multilingue sans surcharge de développement supplémentaire. AlertX gère la complexité de la messagerie internationale."
        ]
    },
    {
        title: "Métriques d'Engagement des Utilisateurs",
        icon: "fa-chart-line",
        paragraphs: [
          "Obtenez des informations approfondies sur les performances de vos notifications grâce à nos analyses d'engagement complètes. Suivez les taux de livraison, les taux d'ouverture, les taux de clics et les interactions des utilisateurs en temps réel.",
          "Notre tableau de bord des métriques avancées fournit des données granulaires sur le comportement des utilisateurs, vous aidant à optimiser votre stratégie de communication. Comprenez quels messages résonnent, à quels moments et avec quels segments d'utilisateurs.",
          "Exploitez des recommandations alimentées par l'apprentissage automatique pour améliorer l'efficacité de vos notifications et augmenter l'engagement des utilisateurs dans votre application."
        ]
    }
  ];

  return (
    <div className="developpers-section">
      <div className="developpers-header">
        <h2 className="section-title">
          For <span className="title-highlight">Developers</span>
        </h2>
        <p className="section-subtitle">
          Powerful Tools, Seamless Integration, Global Reach
        </p>
      </div>
      
      <div className="developpers-grid">
        {developerSections.map((section, index) => (
          <div key={index} className="developpers-card">
            <div className="developpers-icon-container">
              <i className={`fas ${section.icon}`}></i>
            </div>
            <div className="developpers-content">
              <h3 className="developpers-title">{section.title}</h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="developpers-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developpers;