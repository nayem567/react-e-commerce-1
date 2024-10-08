import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>SHOPPER</p>
      </div>
      
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>
          Copyright @ 2024 - All Right Reserved{" "}
          <a href="https://nayem.pw"> Mohaymenul Islam</a>
        </p>
      </div>
    </div>
  );
};
