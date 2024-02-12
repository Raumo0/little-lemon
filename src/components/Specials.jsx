import React from 'react';
import './Specials.css';
import SpecialFoodCard from './SpecialFoodCard';
import pasta from './logo192.png';
import tiramisu from './logo192.png';
import risotto from './logo192.png';

export function Specials() {
    return (
        <div className="specialsContainer" id="menu">
            <div className="specialsTop">
                <h1>Dishes of the Week</h1>
            </div>
            <div className="specialsCards">
                <SpecialFoodCard
                    imageUrl={pasta}
                    title="Classic Pasta"
                    price={15.99}
                    description="A traditional Italian pasta with rich tomato sauce and fresh basil, topped with parmesan cheese."
                />
                <SpecialFoodCard
                    imageUrl={tiramisu}
                    title="Tiramisu"
                    price={9.99}
                    description="Layered Italian dessert made with ladyfingers, coffee, mascarpone cheese, and dusted with cocoa powder."
                />
                <SpecialFoodCard
                    imageUrl={risotto}
                    title="Mushroom Risotto"
                    price={18.99}
                    description="Creamy Arborio rice cooked to perfection with wild mushrooms and a hint of truffle oil."
                />
            </div>
        </div>
    );
}
