import React from "react";
import linkedin from "./../../Images/linkedin.png";
import logo from "./../../Images/logowhite.png";

const Footer = ({ theme }: { theme: string }) => {
  return (
    <div className="Footer-entire">
      <div className="copyright-footer">
        <a href="https://www.linkedin.com/in/lucile-tronczyk/">
          <img className={`socials-${theme}`} src={linkedin} alt="linkedin" />
        </a>
        <div>Copyright © 2023 Lucile Tronczyk. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
