import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to Our Site</h1>
                <p>Get in touch with us</p>
                <Link to="/services" className="btn">Explore Services</Link>
            </div>
        </div>
    );
};

export default Home;