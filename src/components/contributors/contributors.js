import React from 'react';
import './contributors.css';

const Contributors = () => {
  const contributorsData = [
    {
      name: "Alain Gérard",
      role: "Team Leader",
      image: "/Alain.jpeg",
      description: "Manager chevronné guidant l'équipe vers l'excellence stratégique.",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Arthur Negoum",
      role: "Frontend & SMS",
      image: "/arthur1.jpeg",
      description: "Architecte du design frontend et expert en services SMS.",
      linkedin: "https://www.linkedin.com/in/yves-arthur-negoum-wouatedem-854967302/",
      github: "https://github.com/arthurogg"
    },
    {
      name: "Varnel Nguiffo",
      role: "WhatsApp Notifications",
      image: "/nguiffo.jpeg",
      description: "Spécialiste des notifications WhatsApp et intégrations API.",
      linkedin: "https://github.com/Ngakou-Rick",
      github: "https://github.com/Ngakou-Rick"
    },
    {
      name: "Audain Meli",
      role: "Email Service",
      image: "/audain.jpeg",
      description: "Expert en solutions de communication électronique personnalisées.",
      linkedin: "#",
      github: "https://github.com/Audain672"
    },
    {
      name: "Elsa Nanfah",
      role: "Push Notifications",
      image: "/elsa1.jpeg",
      description: "Garantit la robustesse et l'efficacité des notifications push.",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <div className="contributors-page">
      <div className="contributors-header">
        <h1 className="section-title">
          Our<span className="title-highlight"> Contributors</span>
        </h1>
        <p className="section-subtitle">
          Les innovateurs derrière AlertX, unis par la passion de la notification intelligente
        </p>
      </div>
      
      <div className="contributors-grid">
        {contributorsData.map((contributor, index) => (
          <div key={index} className="contributor-card">
            <div className="contributor-image-container">
              <img 
                src={contributor.image} 
                alt={contributor.name} 
                className="contributor-image"
              />
            </div>
            <div className="contributor-info">
              <h3 className="contributor-name">{contributor.name}</h3>
              <p className="contributor-role">{contributor.role}</p>
              <p className="contributor-description">{contributor.description}</p>
              <div className="contributor-socials">
                <a href={contributor.linkedin} className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={contributor.github} className="social-link">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;