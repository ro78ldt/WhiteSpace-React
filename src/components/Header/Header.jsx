import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Logo from "../../assets/Logo.png"
import DownArrow from "../../assets/Down-Arrow.png"
import './Header.css';

function Header() {
  return (
    <AppBar position="static" className="header" sx = {{backgroundColor: "#043873"}}>
      <Toolbar className="toolbar">
        <img src={Logo} alt="Company Logo" />
        <div className="navButtons">
          <Button color="inherit">Products</Button>
          <img src={DownArrow} alt="Company Logo" />
          <Button color="inherit">Features</Button>
          <img src={DownArrow} alt="Company Logo" />
          <Button color="inherit">Resources</Button>
          <img src={DownArrow} alt="Company Logo" />
          <Button color="inherit">Pricing</Button>
          <img src={DownArrow} alt="Company Logo" />
          <Button variant="contained" color="primary" sx= {{backgroundColor: "#FFE492", color: "#043873"}}>Login</Button>
          <Button variant="contained" color="primary">Try it free</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
