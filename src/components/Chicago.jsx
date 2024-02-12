import React from 'react';
import './Chicago.css';
import BistroImageA from '../assets/restaurant.jpg';
import BistroImageB from '../assets/restaurant chef B.jpg';

export function Chicago() {
    return (
        <div className="bistroContainer">
            <div className="bistroImages">
                <img src={BistroImageA} alt="Luca and Matteo" />
            </div>
            <div className="bistroContent">
                <h1>Lemon Bistro</h1>
                <h2>Chicago Edition</h2>
                <p>
                    Nestled in the heart of Chicago, Lemon Bistro brings a zest of Italian charm to the windy city, courtesy of the passionate brothers, Luca and Matteo.
                </p>
                <p>
                    Drawing from generational recipes and the vibrant flavors of the Mediterranean, Lemon Bistro offers an exquisite dining experience that transcends the ordinary.
                </p>
            </div>
            <div className="bistroImages">
                <img src={BistroImageB} alt="The Bistro Interior" />
            </div>
        </div>
    );
}
