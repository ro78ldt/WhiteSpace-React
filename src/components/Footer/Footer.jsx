import React from 'react';
import './Footer.css';
import { Button } from '@mui/material';
import Logo from "../../assets/Logo.png"
import SideArrow from '../../assets/Side-Arrow.png'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h2 className="footer-logo">Whitespace</h2>
          <p className="footer-description">
            whitespace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Product</h3>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Customer stories</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Guides & tutorials</li>
            <li>Help center</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Media kit</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Try It Today</h3>
          <p className="footer-description">Get started for free. Add your whole team as your needs grow.</p>
          <Button variant="contained" className="footer-button" sx={{padding: "20px 40px"}}>Start today <img src={SideArrow} alt="Illustration" className="side-arrow" /></Button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <span className="footer-language">🌐 English</span>
          <span>Terms & privacy</span>
          <span>Security</span>
          <span>Status</span>
          <span>©2021 Whitespace LLC.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
