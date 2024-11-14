import React from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import SideArrow from '../../assets/Side-Arrow.png'

function Banner() {
  return (
    <div className="banner-section">
      <h1 className="banner-title">Your work, everywhere you are</h1>
      <p className="banner-subtitle">
      Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
      </p>
      <Button variant="contained" color="primary" className="banner-button" sx={{padding: "20px 40px"}}>
        Try Taskey <img src={SideArrow} alt="Illustration" className="side-arrow" />
      </Button>
    </div>
  );
}

export default Banner;
