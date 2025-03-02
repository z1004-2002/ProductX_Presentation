import React, { useState } from 'react';
import './pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "Starter",
      price: {
        monthly: 0,
        yearly: 0
      },
      description: "Perfect for small projects and individual developers",
      features: [
        "Jusqu'à 1 000 notifications mensuelles",
        "Support de base multicanal",
        "Support communautaire",
        "Vitesse de livraison standard",
        "Analytique de base"
      ],
      recommended: false
    },
    {
      name: "Pro",
      price: {
        monthly: 49,
        yearly: 499
      },
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Jusqu'à 50 000 notifications mensuelles",
        "Support multicanal complet",
        "Support par e-mail prioritaire",
        "Personnalisation avancée",
        "Métriques d'engagement détaillées",
        "Capacités de test A/B",
        "Branding personnalisé"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: {
        monthly: 199,
        yearly: 1999
      },
      description: "Comprehensive solution for large organizations",
      features: [
        "Notifications mensuelles illimitées",
        "Support multicanal premium",
        "Gestionnaire de compte dédié",
        "Personnalisation avancée alimentée par l'IA",
        "Tableau de bord analytique complet",
        "Support d'intégration personnalisé",
        "Garantie SLA",
        "Solution en marque blanche",
        "Fonctionnalités de sécurité avancées"
      ],
      recommended: false
    }
  ];

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h2 className="section-title">
          <span className="title-highlight">Pricing</span> Plans
        </h2>
        <p className="section-subtitle">
          Flexible Solutions for Every Business Need
        </p>
        
        <div className="billing-toggle">
          <span>Monthly</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={billingCycle === 'yearly'}
              onChange={toggleBillingCycle}
            />
            <span className="slider"></span>
          </label>
          <span>Yearly <span className="discount-badge">Save 15%</span></span>
        </div>
      </div>
      
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
          >
            {plan.recommended && <div className="recommended-badge">Most Popular</div>}
            <h3 className="pricing-title">{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>
            
            <div className="pricing-price">
              <span className="price-amount">
                {plan.price[billingCycle] === 0 ? 'Free' : `$${plan.price[billingCycle]}`}
              </span>
              <span className="price-period">
                {plan.price[billingCycle] === 0 ? '' : `/${billingCycle === 'monthly' ? 'month' : 'year'}`}
              </span>
            </div>
            
            <ul className="pricing-features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="pricing-cta">
              {plan.price[billingCycle] === 0 ? 'Get Started' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>
      
      <div className="pricing-footer">
        <p>Need a custom solution? <a href="#contact">Contact Sales</a></p>
      </div>
    </div>
  );
};

export default Pricing;