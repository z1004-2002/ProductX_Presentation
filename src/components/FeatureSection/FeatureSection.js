/* FeaturesSection.js */
import React from "react";
import "./FeatureSection.css";

const FeaturesSection = () => {const features = [
  { 
    icon: "fas fa-cogs", 
    title: "Create, Modify, View, and Delete a Resource", 
    desc: "Easily manage resources by creating, editing, viewing, and deleting them with a user-friendly interface.",
    color: "#f39c12"
  },
  { 
    icon: "fas fa-cogs", 
    title: "Create, Modify, View, and Delete a Service", 
    desc: "Effortlessly create, modify, view, and delete services to ensure your offerings are always up to date.",
    color: "#1abc9c"
  },
  { 
    icon: "fa-solid fa-sitemap", 
    title: "Create Service or Resource Variations and Associate with Agencies", 
    desc: "Create variations of services or resources and easily associate them with specific agencies for better management.",
    color: "#e74c3c"
  },
  { 
    icon: "fas fa-store", 
    title: "Post Products on the Marketplace", 
    desc: "Post products to the marketplace, set sales prices, define sales points, and configure delivery options to streamline your sales process.",
    color: "#3498db"
  }
];
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">Our Features</h2>
          <p className="section-subtitle">
          A unique solution to manage products efficiently.
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