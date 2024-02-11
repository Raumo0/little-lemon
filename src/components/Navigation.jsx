import {Component} from "react";

export class Navigation extends Component {
    render() {
        return <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>

                <li><a href="/booking">Booking</a></li>
            </ul>
        </nav>;
    }
}