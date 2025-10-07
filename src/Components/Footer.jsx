import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-about">
          <h2>Bloopers Library</h2>
          <p>
            Discover and download your favorite books for free. 
            A world of knowledge, just one click away!
          </p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore Books</a></li>
            <li><a href="#">Top Downloads</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Get updates on the latest book releases and free downloads.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bloopers Library | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
