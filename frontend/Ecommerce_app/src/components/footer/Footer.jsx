import React from 'react';
import './Footer.css';
import footer_logo from '../assets/logo.png';

export default function Footer() {
  return (
    <div className="footer">
      {/* Row 1: Logo and SHOPPER */}
      <div className="footer-logo">
        <img src={footer_logo} alt="Logo" className="footer-img" />
        <p>SHOPPER</p>
      </div>

      {/* Row 2: Links */}
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Row 3: Social Media Icons */}
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="footer-icons-container">
          <i className="fa-brands fa-pinterest"></i>
        </div>
        <div className="footer-icons-container">
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>

      {/* Row 4: Copyright */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
}
