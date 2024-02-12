import React from "react";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We are passionate about creating web solutions that are beautiful, functional, and accessible to
                        everyone.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-section socials">
                    <h4>Follow Us</h4>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} All Rights Reserved.
            </div>
        </footer>
    );
}
