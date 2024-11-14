import React from 'react';
import './Sponsors.css';
import appleLogo from '../../assets/Apple.png';
import microsoftLogo from '../../assets/microsoft.png';
import slackLogo from '../../assets/Slack.png';
import googleLogo from '../../assets/Google.png';

function Sponsors() {
  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">Our sponsors</h2>
      <div className="sponsors-logos">
        <img src={appleLogo} alt="Apple" />
        <img src={microsoftLogo} alt="Microsoft" />
        <img src={slackLogo} alt="Slack" />
        <img src={googleLogo} alt="Google" />
      </div>
    </div>
  );
}

export default Sponsors;
