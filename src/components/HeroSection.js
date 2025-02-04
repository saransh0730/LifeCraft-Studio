import React, { useState } from 'react';
import '../styles/HeroSection.css';
import { RxHamburgerMenu } from "react-icons/rx";

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="herosection-container">
      <nav className="navbar-container">
        <div className="logo">CRL</div>
        <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>SIGN IN</li>
          <li><button className="signup-btn">SIGN UP</button></li>
        </ul>
        <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <RxHamburgerMenu size={30} />
        </button>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Responsive <br /> layouts <span>don’t <br /> have to be a struggle</span></h1>
        </div>
        <div className="hero-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="learn-btn">I WANT TO LEARN</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
