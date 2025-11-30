import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import hero2 from "../../assets/download.jpeg";
import hero1 from "../../assets/h1_hero1.jpg.webp";
import hero3 from "../../assets/download (1).jpeg";
import "./Hero.css"

function Hero() {
  const navigate = useNavigate();

  const backgrounds = [hero1, hero2, hero3];
  const texts = [
    {
      line1: "مكتب العدل للمحاماه والاستشارات القانونية",
      line2: "المحامية بسمة جمال",
      line3: "حقوقك أولويتنا.. نسعى لإظهار الحقيقة وتحقيق العدالة."
    },
    {
      line1: "نقدم لك الخبرة القانونية التي تحتاجها",
      line2: "متخصصون في مختلف القضايا",
      line3: "نقف معك في كل خطوة نحو الحق."
    },
    {
      line1: "استشارات قانونية دقيقة",
      line2: "خبرة تتجاوز 10 سنوات",
      line3: "نسعى لتحقيق أفضل النتائج لعملائنا."
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${backgrounds[index]})`,
        transition: "background-image 1s ease-in-out"
      }}
    >
      <div className="hero-content">
        <h1>{texts[index].line1}</h1>
        <h1>{texts[index].line2}</h1>
        <h1>{texts[index].line3}</h1>

        <Button className="button" onClick={() => navigate("/contact")}>
          احجز استشارة الآن
        </Button>
      </div>
    </div>
  );
}

export default Hero;
