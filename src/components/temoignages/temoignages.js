import React, { useState, useEffect } from 'react';
import './temoignages.css';
import { FaStar, FaUserCircle } from 'react-icons/fa';

const Temoignages = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Jean Dupont",
      role: "Développeur Web",
      rating: 4.5,
      comment: "Un service de notification exceptionnellement fiable et facile à intégrer.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Marie Lefebvre",
      role: "Cheffe de Projet",
      rating: 5,
      comment: "AlertX a révolutionné notre communication d'équipe. Hautement recommandé !",
      date: "2024-02-20"
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    rating: 0,
    comment: ''
  });

  const [hoveredRating, setHoveredRating] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment || newReview.rating === 0) {
      alert('Veuillez remplir tous les champs et donner une note.');
      return;
    }

    const submittedReview = {
      ...newReview,
      id: reviews.length + 1,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([submittedReview, ...reviews]);
    setNewReview({
      name: '',
      role: '',
      rating: 0,
      comment: ''
    });
  };

  const calculateAverageRating = () => {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  return (
    <div className="temoignages-page">
      <div className="temoignages-header">
        <h1>Témoignages <span className="highlight">Utilisateurs</span></h1>
        <div className="overall-rating">
          <h2>{calculateAverageRating()} / 5 
            <span className="rating-stars">
              {[...Array(5)].map((_, index) => (
                <FaStar 
                  key={index} 
                  color={index < Math.floor(calculateAverageRating()) ? "#ffc107" : "#e4e5e9"}
                />
              ))}
            </span>
          </h2>
          <p>{reviews.length} avis</p>
        </div>
      </div>

      <div className="temoignages-content">
        <div className="review-form">
          <h2>Donnez votre avis</h2>
          <form onSubmit={handleSubmitReview}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Votre nom" 
                value={newReview.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="text" 
                name="role" 
                placeholder="Votre rôle" 
                value={newReview.role}
                onChange={handleInputChange}
              />
            </div>
            <div className="rating-input">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <FaStar 
                    key={index}
                    color={ratingValue <= (hoveredRating || newReview.rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHoveredRating(ratingValue)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setNewReview(prev => ({...prev, rating: ratingValue}))}
                  />
                );
              })}
            </div>
            <textarea 
              name="comment"
              placeholder="Votre commentaire"
              value={newReview.comment}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="submit-review-btn">
              Soumettre mon avis
            </button>
          </form>
        </div>

        <div className="reviews-list">
          <h2>Avis récents</h2>
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <FaUserCircle className="user-icon" />
                <div className="review-meta">
                  <h3>{review.name}</h3>
                  <p>{review.role}</p>
                </div>
                <div className="review-rating">
                  {[...Array(5)].map((_, index) => (
                    <FaStar 
                      key={index} 
                      color={index < review.rating ? "#ffc107" : "#e4e5e9"}
                    />
                  ))}
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
              <span className="review-date">{review.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temoignages;