import React from 'react';
import './CustomersSay.css';
import CustomersSayCard from './CustomersSayCard';

export function CustomersSay() {
    return (
        <div className="customersSayContainer">
            <h2 className="customersSayTitle">What Our Customers Say!</h2>
            <div className="customersSayCards">
                <CustomersSayCard
                    rating={5}
                    customerImg="./logo192.png"
                    customerName="Mike"
                    testimonial="What a fantastic restaurant experience! The food was superb and the service top-notch. I'll definitely be returning!"
                />
                <CustomersSayCard
                    rating={4}
                    customerImg="./logo192.png"
                    customerName="Eva"
                    testimonial="Incredible restaurant! Delicious food, impeccable service. I'll be back for more!"
                />
                <CustomersSayCard
                    rating={4}
                    customerImg="./logo192.png"
                    customerName="Steve"
                    testimonial="Outstanding restaurant! The food was delicious and the service was excellent. Will definitely return!"
                />
                <CustomersSayCard
                    rating={5}
                    customerImg="./logo192.png"
                    customerName="Max"
                    testimonial="Loved it! Great food, great service. Can't wait to go again!"
                />
            </div>
        </div>
    );
}
