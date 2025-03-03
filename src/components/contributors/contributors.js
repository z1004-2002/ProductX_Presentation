import React from 'react';
import './contributors.css';

const Contributors = () => {
  const contributorsData = [
    {
      name: "Pr.THOMAS Djotio",
      role: "CEO",
      image: "/avatar.png",
      description: "Manager chevronné guidant le projet et l'équipe  vers l'excellence stratégique.",
      linkedin: "#",
      github: "#"
    },

    {
      name: "Ing. ETOUGUE",
      role: "COLLABORATOR",
      image: "/avatar.png",
      description: "Capcité et aptitude à expliquer des concepts techniques tout en collaborant de façon efficace.",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Abel ZOGNING",
      role: "Team Leader",
      image: "/Abel.JPG",
      description: "Experienced manager guiding the team towards strategic excellence.",
      linkedin: "www.linkedin.com/in/franc-abel-zogning-tedongmouo-b44908223",
      github: "https://github.com/z1004-2002"
    },
    {
      name: "Arthur Negoum",
      role: "Frontend",
      image: "/arthur1.jpeg",
      description: "Architecte du design frontend.",
      linkedin: "https://www.linkedin.com/in/yves-arthur-negoum-wouatedem-854967302/",
      github: "https://github.com/arthurogg"
    }
  ];

  return (
    <div className="contributors-page">
      <div className="contributors-header">
        <h1 className="section-title">
          Our<span className="title-highlight"> Contributors</span>
        </h1>
        <p className="section-subtitle">
          Les innovateurs derrière ProductX, unis par la passion de la notification intelligente
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
                <a href={contributor.linkedin} target='_blank' className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a target='_blank' href={contributor.github} className="social-link">
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