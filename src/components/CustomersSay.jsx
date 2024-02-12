import React from 'react';
import './CustomersSay.css';
import CustomersSayCard from './CustomersSayCard';
import user1 from './user1.png';
import user2 from './user2.png';
import user3 from './user3.png';
import user4 from './user4.png';

export function CustomersSay() {
    return (
        <div className="customersSayContainer">
            <h2 className="customersSayTitle">What Our Customers Say!</h2>
            <div className="customersSayCards">
                <CustomersSayCard
                    rating={5}
                    customerImg={user1}
                    customerName="Mike"
                    testimonial="What a fantastic restaurant experience! The food was superb and the service top-notch. I'll definitely be returning!"
                />
                <CustomersSayCard
                    rating={4}
                    customerImg={user2}
                    customerName="Eva"
                    testimonial="Incredible restaurant! Delicious food, impeccable service. I'll be back for more!"
                />
                <CustomersSayCard
                    rating={4}
                    customerImg={user3}
                    customerName="Steve"
                    testimonial="Outstanding restaurant! The food was delicious and the service was excellent. Will definitely return!"
                />
                <CustomersSayCard
                    rating={5}
                    customerImg={user4}
                    customerName="Max"
                    testimonial="Loved it! Great food, great service. Can't wait to go again!"
                />
            </div>
        </div>
    );
}
