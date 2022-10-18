import React from "react";
import { Link } from "react-router-dom";
import FooterWrapper from "./styles";
import { routes } from "../../routes/Application/routes";
import Container from "../../components/atoms/Container";
import logo from "../../assets/svgs/logo-light.svg";
import nafsa from "../../assets/png/Logoes/nafsa.png";
import ola from "../../assets/png/Logoes/ola.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="container footer-container">
          <div className="footer-section">
            <img src={logo} alt="Istante-lending" />
          </div>

          <div className="footer-section footer-logoes">
            <img src={nafsa} alt="nafsa" />
          </div>

          <div className="account footer-section">
            <ul className="account-list">
              <li>
                <Link to={routes.REGISTRATION}>Create Account</Link>
              </li>
              <li>
                <Link to={routes.LOGIN}>Sign Up</Link>
              </li>
              <li>
                <Link to={routes.HOME}>Start Application</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-logoes">
            <img src={ola} alt="ola" />
          </div>

          <div className="policies footer-section">
            <ul className="policies-list footer-section">
              <li>
                <Link
                  to={routes.TERMS_OF_USE}
                  target="_blank"
                  className="link-button"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to={routes.PRIVACY_NOTICE}
                  target="_blank"
                  className="link-button"
                >
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-button">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
