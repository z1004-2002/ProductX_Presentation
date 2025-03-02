import React from 'react';
import './developpers.css';

const Developpers = () => {
  const developerSections = [
    {
      title: "Easy API Integration",
      icon: "fa-code",
      paragraphs: [
        "ProductX provides a robust and user-friendly API that can be effortlessly integrated into any product ecosystem. Our comprehensive documentation and SDKs support multiple programming languages, including JavaScript, Python, Java, and more.",
        "With just a few lines of code, developers can implement powerful product management capabilities, reducing development time and complexity. Our RESTful API ensures smooth communication and minimal overhead.",
        "We offer extensive code samples, interactive documentation, and dedicated support to help developers get started quickly and efficiently."
      ]
    },
    {
      title: "Global Reach & Internationalization",
      icon: "fa-globe",
      paragraphs: [
        "Break down language barriers with ProductX's advanced internationalization features. Our platform supports over 50 languages and provides automatic translation services for product-related content.",
        "Customize product notifications based on user language preferences, regional settings, and cultural nuances. Our intelligent localization engine ensures your messages resonate with a global audience.",
        "Effortlessly manage multilingual communication without additional development overhead. ProductX handles the complexity of international messaging."
      ]
    },
    {
      title: "User Engagement Metrics",
      icon: "fa-chart-line",
      paragraphs: [
        "Gain in-depth insights into the performance of your product's notifications with our comprehensive engagement analytics. Track delivery rates, open rates, click-through rates, and user interactions in real-time.",
        "Our advanced metrics dashboard provides granular data on user behavior, helping you optimize your communication strategy. Understand which messages resonate, at what times, and with which user segments.",
        "Leverage machine learning-powered recommendations to enhance the effectiveness of your notifications and boost user engagement within your product."
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