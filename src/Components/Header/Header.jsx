import React from "react";
import "./Header.css";
import "../../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <>
      <header className="header flexSB">
        <div className="info flexSB">
          <p> العنوان:عمارة 42/1 الشطر الثامن زهراء المعادي القاهره</p>
          <p>|</p>
          <p>الايميل: gamalbasma14@gmail.com</p>
          <p>
            <a
              href="https://wa.me/201273805398"
              target="_blank"
              className="whatsapp-link"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="font" />
              <span className="phone">01142677273</span>
            </a>
          </p>
          <p>
            <a
              href="https://wa.me/201273805398"
              target="_blank"
              className="whatsapp-link"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="font" />
              <span className="phone">01014547030</span>
            </a>
          </p>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/share/16WXVdaymz/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="font" />
          </a>


        </div>
      </header>
    </>
  );
}
export default Header;
