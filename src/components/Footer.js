import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
    <h1>
    Just scratching the surface
    </h1>
      <div className="footer-segments">
        <div className="company-tagline">
          <div>
            <h2>About our company</h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="quick-links">
          <div className="quick-links-heading">
            <h2>Getting around</h2>
          </div>
          <div className="quick-links-items">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="services-container">
          <div className="services-container-heading">
            <h2>Other things</h2>
          </div>
          <div className="services-container-items">
            <p>Lorem ipsum</p>
            <p>dolor</p>
            <p>sit amet</p>
            <p>consectetur</p>
          </div>
        </div>
        <div className="services-container">
          <div className="services-container-heading">
            <h2>And more</h2>
          </div>
          <div className="services-container-items">
            <p>Lorem ipsum</p>
            <p>dolor</p>
            <p>sit amet</p>
            <p>consectetur</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
