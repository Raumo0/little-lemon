import React from 'react';
import './CustomersSayCard.css';

function CustomersSayCard({ rating, customerImg, customerName, testimonial }) {
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

    return (
        <div className="card">
            <div className="rating">{stars}</div>
            <div className="customerInfo">
                <img src={customerImg} alt={customerName} className="customerImg" />
                <span className="customerName">{customerName}</span>
            </div>
            <p className="testimonial">{testimonial}</p>
        </div>
    );
}

export default CustomersSayCard;
