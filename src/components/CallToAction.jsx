import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CallToAction.css';
import cozyCafeImg from './logo192.png';

export function CallToAction() {
    const navigate = useNavigate();

    return (
        <div className="ctaContainer">
            <div className="ctaContent">
                <h1>Cozy Cafe</h1>
                <h2>Heart of New York</h2>
                <p>
                    Dive into the warmth of our cozy cafe, where every dish carries the essence of New York's vibrant flavors and the comfort of home-cooked meals.
                </p>
                <button onClick={() => navigate("/booking")} aria-label="Navigate to booking page.">Book Your Visit</button>
            </div>
            <div className="ctaImage">
                <img src={cozyCafeImg} alt="Cozy Cafe Interior" />
            </div>
        </div>
    );
}
