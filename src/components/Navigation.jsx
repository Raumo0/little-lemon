import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Navigation() {
    const navigate = useNavigate();

    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({behavior: 'smooth', block: 'start'});
        } else {
            navigate('/#' + targetId);
        }
    };

    return <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about" onClick={scrollToSection}>About Us</a></li>
            <li><a href="#services" onClick={scrollToSection}>Services</a></li>
            <li><a href="#contact" onClick={scrollToSection}>Contact</a></li>
            <li><a href="/booking">Booking</a></li>
        </ul>
    </nav>;

}