import React from "react";
import "../styles/Footer.css";
import { CgGym } from "react-icons/cg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="glassy-footer">
        <div className="footter-section-one">
          <h4>
            Physiotherapy Clinic <CgGym className="footer-icon"></CgGym>
          </h4>
          <span>Telefon 0470-112 222</span>
          <span>E-post: Physiotherapyclinic@vaxjo.se</span>
        </div>
        <div className="footter-section-two">
          <span>Besöksadress</span>
          <span>Lorem Esplanaden 12</span>
          <span> 112 22 Växjö</span>
        </div>

        <div className="footter-section-three">
          <span> Postadress</span>
          <span>Box 1122</span>
          <span> 112 22 Växjö</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
