import React, { useEffect } from "react";
import "./MiniHero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import miniHeroImage from "../../assets/h1_hero1.jpg.webp";

function MiniHero({ title, subtitle }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="mini-hero"
      style={{ backgroundImage: `url(${miniHeroImage})` }}
      data-aos="fade-up"
    >
      <div className="overlay"></div>
      <div className="mini-hero-content text-center">
        <h2 className="fw-bold">{title}</h2>
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </div>
  );
}

export default MiniHero;
