import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <a href="/">
            <h2 style={{ color: "white", fontWeight: "800" }}> E-COMMERCE</h2>
          </a>
          <p>We Provide Best Deals & Products</p>
        </div>

        <div className="footer-center">
          <h2>Important Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/policy">Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h1>Contact Us</h1>
          <h2>Email</h2>
          <h2>Github</h2>
          <h2>Linkedin</h2>
        </div>
      </div>
      <div className="copyright">
        <p> &copy; Copyright Protected 2023, Corizo Tech </p>
      </div>
    </div>
  );
};

export default Footer;
