import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function WhyChooseUs() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Container className="why-choose-us my-5">
      <h2 className="text-center mb-4" data-aos="fade-down">
        لماذا تختار مكتب العدل للمحاماه والاستشارات القانونية ⚖؟
      </h2>

      <p className="text-center mb-4" data-aos="fade-up" data-aos-delay="100">
        مكتب بسمة جمال ملتزم تمامًا بتحقيق أفضل النتائج للموكلين بكفاءة واحترافية عالية.
      </p>

      <p className="text-center mb-4" data-aos="fade-up" data-aos-delay="200">
        نقدم استراتيجيات قانونية دقيقة تضمن حماية مصالح العملاء وتحقيق العدالة في جميع القضايا القانونية، مع الالتزام بالقوانين المصرية وأفضل الممارسات القانونية.
      </p>

      <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
        <Button className="button" onClick={()=>navigate("/about")}>اطلع على المزيد عن المكتب</Button>
      </div>
    </Container>
  );
}

export default WhyChooseUs;
