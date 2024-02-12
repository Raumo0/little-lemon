import {Component} from "react";

export class Navigation extends Component {
    render() {
        const scrollToSection = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        </nav>
        ;
    }
}