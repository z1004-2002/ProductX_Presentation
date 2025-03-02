import React from 'react';
import './about.css';

const About = () => {
  const aboutSections = [
    {
      title: "Our Mission",
      icon: "fa-bullseye",
      paragraphs: [
        "ProductX was created with the vision that product management tools should be intuitive, agile, and impactful. Our mission is to reshape the way product teams collaborate and innovate.",
        "We recognize that every decision, every update, and every iteration is an opportunity to drive meaningful progress. That's why we developed a platform that empowers product teams to streamline workflows, manage roadmaps, and deliver value faster across multiple channels.",
        "Our goal is to transform product management into a seamless and transparent process, where every move aligns with the bigger picture, and every action contributes to building better products."
      ]      
    },
    {
      title: "Our Technological Vision",
      icon: "fa-eye",
      paragraphs: [
        "We envision a future where product management is fully integrated, intelligent, and user-centric. ProductX is not just a tool; it's a platform that anticipates and adapts to the dynamic needs of modern product teams.",
        "Our vision is built on three core pillars: technological innovation, advanced customization, and universal accessibility. We believe technology should simplify, not complicate, the product development process.",
        "We are committed to continuous investment in research and development to remain at the forefront of innovation in product management tools."
      ]
    },    
    {
      title: "Our Unique Advantages",
      icon: "fa-rocket",
      paragraphs: [
        "ProductX stands out for its ability to offer a truly integrated product management solution. Whether it's for managing roadmaps, sprint planning, or team collaboration, we ensure seamless integration and an exceptional user experience.",
        "Unlike traditional solutions, we offer deep customization. Our intelligent algorithms allow each product process to be tailored to the unique needs and preferences of each team or project.",
        "With ultra-fast delivery times, cutting-edge security, and unbeatable reliability, ProductX becomes the essential technological partner for any business aiming to maintain high-quality product development."
      ]
    }
    
  ];

  return (
    <div className="about-section">
      <div className="about-header">
        <h2 className="section-title">
          About <span className="title-highlight">ProductX</span>
        </h2>
        <p className="section-subtitle">
          Manage your product very easily, with ProductX
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