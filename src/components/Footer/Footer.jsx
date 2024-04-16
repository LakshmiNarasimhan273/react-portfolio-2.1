import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Lakshmi Narasimhan</h1>

        <ul className="footer__list">
          <li>
            <a href="#aboutme" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#Services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/lakshmi-narasimhan-developer/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/LakshmiNarasimhan273"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="mailto:lakshminarasimhan511@gmail.com"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-mail-send"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Lakshmi Narasimhan. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
