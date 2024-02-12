import React from 'react';
import './SpecialFoodCard.css';

function SpecialFoodCard({ imageUrl, title, price, description }) {
    return (
        <div className="foodCard">
            <img src={imageUrl} alt={title} className="foodImage"/>
            <div className="foodHeader">
                <span className="foodTitle">{title}</span>
                <span className="foodPrice">$ {price}</span>
            </div>
            <p className="foodDescription">{description}</p>
            <div className="foodCTA">
                <button className="orderButton">Order Now</button>
            </div>
        </div>
    );
}

export default SpecialFoodCard;
