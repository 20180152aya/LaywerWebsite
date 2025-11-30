import "./Footer.css";
import React, { useEffect } from "react";
import "../../App.css";

import { Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,

} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="footer-modern">
      <Container>
        <div className="footer-top text-center mb-4" data-aos="fade-down">
          <img src={logo} alt="مكتب بسمة جمال" className="footer-logo" />
          <p className="footer-desc mt-2">
            نقدم أفضل الخدمات القانونية داخل جمهورية مصر العربية بكفاءة
            واحترافية.
          </p>
        </div>
        <ul className="footer-links text-center mb-4" data-aos="fade-up">
          <li>
            <a href="/">الرئيسية</a>
          </li>
          <li>
            <a href="/services">الخدمات</a>
          </li>
          <li>
            <a href="/about">لماذا تختارنا</a>
          </li>
          <li>
            <a href="/contact">تواصل معنا</a>
          </li>
        </ul>

        <div className="footer-contact-social d-flex justify-content-between align-items-center flex-wrap mb-3">
          <div className="contact-info" data-aos="fade-right">
            <span className="p-2">
              اتصل بنا:{" "}
              <a className="text-white" href="tel:01273805398">
                01142677273 - 01014547030
              </a>
            </span>{" "}
            |
            <span>
              الايميل:{" "}
              <a className="text-white" href="mailto:info@example.com">
                gamalbasma14@gmail.com
              </a>
            </span>
          </div>

          <div className="social-icons" data-aos="fade-up" data-aos-delay="100">
            <a
              href="https://www.facebook.com/share/16WXVdaymz/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} className="font" />
            </a>
          </div>

          <div data-aos="fade-left" data-aos-delay="200">
            <button className="button" onClick={() => navigate("/contact")}>
              حجز موعد
            </button>
          </div>
        </div>

        <p className="text-center mb-3 pt-5" data-aos="fade-up">
          &copy; {new Date().getFullYear()} مكتب بسمة جمال. جميع الحقوق محفوظة.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
