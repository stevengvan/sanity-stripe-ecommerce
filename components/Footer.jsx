import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Pen Store All rights reserved</p>
      <p className="icons">
        <AiFillInstagram title="Instagram icon" />
        <AiOutlineTwitter title="Twitter icon" />
      </p>
    </div>
  );
};

export default Footer;
