// About.jsx
import React from 'react';
import './About.css'; // Import the CSS file for styles

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Us</h1>
                <p>
                    Welcome to our website! We are a team of passionate individuals dedicated to providing the best services to our customers. Our mission is to deliver high-quality products that meet your needs and exceed your expectations.
                </p>
                <p>
                    With years of experience in the industry, we pride ourselves on our commitment to excellence and customer satisfaction. We believe in building lasting relationships with our clients and are always here to help you find the perfect solution for your needs.
                </p>
                <h2>Our Values</h2>
                <ul>
                    <li>Integrity</li>
                    <li>Innovation</li>
                    <li>Customer Focus</li>
                    <li>Collaboration</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
