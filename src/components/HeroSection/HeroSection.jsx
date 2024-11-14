import React from 'react';
import './HeroSection.css';
import { Button } from '@mui/material';
import heroImage from '../../assets/hero-image.png'; 

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Get More Done with Whitespace</h1>
        <p className="hero-subtitle">
          Collaborate, organize, and achieve your goals more efficiently with our tool.
          Designed for teams, built for productivity.
        </p>
        <Button variant="contained" color="primary" className="hero-button">
          Get Started
        </Button>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Illustration" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
