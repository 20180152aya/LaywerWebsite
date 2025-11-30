import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import lawyerImage from "../../assets/Myimage.jpeg";

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="about-section container py-5">
      <div className="row align-items-center g-5">
  
        <div className="col-md-6 about-image mb-4 mb-md-0" data-aos="fade-right">
          <img src={lawyerImage} alt="المحامية بسمة جمال" className="img-fluid rounded shadow" />
          <div className="experience-box mt-3 text-center">
            <span className="years fw-bold fs-3">10</span>
            <span className="text d-block">سنوات خبرة</span>
          </div>
        </div>

        <div className="col-md-6 about-text" data-aos="fade-left">
          <h2 className="fw-bold mb-3"> عن مكتب العدل للمحاماه والاستشارات القانونية</h2>
          <p>
            يُعد مكتب بسمة جمال للمحاماة والاستشارات القانونية من المكاتب الرائدة في مصر، مع خبرة واسعة في تقديم خدمات قانونية شاملة ومتابعة القضايا أمام جميع درجات المحاكم.
          </p>
          <p className="extra-text">
            يلتزم المكتب بتقديم خدمات قانونية دقيقة وشفافة، مع مراعاة مصالح الموكلين وتحقيق العدالة وفق القوانين المصرية، سواء في القضايا المدنية أو الجنائية أو التجارية أو العقارية أو الأسرة.
          </p>
          <p className="signature mt-3">
            <strong>بسمة جمال - المحامية بسمه جمال
     بالاستئناف العالى ومجلس الدولة</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
