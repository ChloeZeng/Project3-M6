import "./Footer.css";
import logo from "../assets/logo.png";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="NieNieLab logo" className="footer-logo" />

          <div className="footer-social-row">
            <span className="footer-social-label">Social media</span>

            <div className="footer-social-links">
              <a href="/" className="footer-social-link" aria-label="Reddit">
                Reddit
              </a>
              <a href="/" className="footer-social-link" aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>

          <p className="footer-copyright">
            Copyright 2026 © NienieLab, All Rights Reserved
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;