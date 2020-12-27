import React from "react";
import "./footer.scss";

// Icons
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Icon = ({ children }) => {
  return <div className="icon-wrapper">{children}</div>;
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <h2>
            Kabayan <span>Coding</span>
          </h2>
        </div>
        <div className="social-wrapper">
          <Icon>
            <FaFacebook className="icon-medsos" />
          </Icon>
          <Icon>
            <FaTwitter className="icon-medsos" />
          </Icon>
          <Icon>
            <FaInstagram className="icon-medsos" />
          </Icon>
        </div>
      </div>
      <div className="copyright">
        <p>Copyrigth</p>
      </div>
    </div>
  );
};

export default Footer;
