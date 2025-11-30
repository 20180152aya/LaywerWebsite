import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from "../../assets/Myimage.jpeg";
import img2 from "../../assets/Myimage.jpeg";
import img3 from "../../assets/Myimage.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faLock,
  faCheckCircle,
  faBalanceScale,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Navs from "../Header/Navbar";

import Footer from "../Footer/Footer";
import "./About.css";
import MiniHero from "../MinHero/MiniHero";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const values = [
    {
      icon: faShieldAlt,
      title: "النزاهة",
      desc: "نلتزم بأعلى معايير النزاهة والشفافية.",
    },
    { icon: faLock, title: "السرية", desc: "نحافظ على سرية معلومات موكلينا." },
    {
      icon: faCheckCircle,
      title: "الالتزام",
      desc: "نتابع كل قضية باهتمام لضمان أفضل النتائج.",
    },
    {
      icon: faBalanceScale,
      title: "الدقة",
      desc: "ندرس كل قضية بدقة وتحليل قانوني متقن.",
    },
    {
      icon: faAward,
      title: "المهنية",
      desc: "نعمل وفق أعلى معايير المهنية لضمان جودة خدماتنا.",
    },
  ];

  return (
    <>
      <Header />
      <Navs />
      <MiniHero
        title="عن المكتب"
        subtitle="مكتب العدل للمحاماة والاستشارات القانونية"
      />
      <Container className="py-5 about-page">
        <Row className="mb-5 text-center">
          <Col data-aos="fade-down">
            <h1 className="fw-bold mb-3">من نحن</h1>
            <p className="text-muted fs-5">
              يُعد مكتب بسمة جمال للمحاماة والاستشارات القانونية واحدًا من
              المكاتب القانونية الرائدة التي تحمل على عاتقها رسالة المحاماة
              السامية، تلك المهنة التي تُعد من أشرف المهن لدورها المحوري في
              تحقيق العدالة وصون الحقوق.
              <br />
              <br />
              يتشرف المكتب بتلقي استشاراتكم وخدماتكم في مجالات متعددة مثل
              القضايا الجنائية، المدني والتجاري وقضايا أموال عامة، الأحوال
              الشخصية، وتأسيس الشركات بكافة أنواعها.
              <br />
              <br />
              تحت إشراف الأستاذة بسمة جمال بالاستئناف العالي ومجلس الدولة، مع
              الالتزام الكامل بالدقة، النزاهة، وتحقيق أفضل النتائج لموكلينا.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <img
              src={img2}
              className="img-fluid rounded shadow"
              alt="mission"
            />
          </Col>
          <Col md={6} data-aos="fade-left" className="mt-4 mt-md-0">
            <h3 className="fw-bold mb-3">رسالتنا</h3>
            <p className="lead">
              نهدف إلى تقديم خدمات قانونية عالية الجودة تعتمد على الدقة،
              الشفافية، والالتزام الكامل بحقوق العملاء، مع توفير الحلول المناسبة
              لكل قضية.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center flex-md-row-reverse mb-5">
          <Col md={6} data-aos="fade-left">
            <img src={img1} className="img-fluid rounded shadow" alt="vision" />
          </Col>
          <Col md={6} data-aos="fade-right" className="mt-4 mt-md-0">
            <h3 className="fw-bold mb-3">رؤيتنا</h3>
            <p className="lead">
              أن نكون من الرواد في تقديم الخدمات القانونية المتميزة، وأن نساهم
              في دعم وتحقيق العدالة لكل العملاء، من خلال فريق متخصص يتمتع
              بالخبرة والكفاءة.
            </p>
          </Col>
        </Row>
        <Container className="my-5">
          <h2 className="text-center mb-4" data-aos="fade-down">
            قيم المكتب
          </h2>
          <Row className="g-4 text-center align-items-center justify-content-center">
            {values.map((val, idx) => (
              <Col
                key={idx}
                md={6}
                lg={4}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <Card className="h-100 text-center shadow-sm border-0">
                  <Card.Body>
                    <div className="mb-3">
                      <FontAwesomeIcon
                        icon={val.icon}
                        size="3x"
                        color="#2e0000"
                      />
                    </div>
                    <Card.Title className="mb-2 fw-bold">
                      {val.title}
                    </Card.Title>
                    <Card.Text>{val.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Row className="align-items-center my-5">
          <Col md={6} data-aos="fade-right">
            <img
              src={img3}
              className="img-fluid rounded shadow"
              alt="founder"
            />
          </Col>
          <Col md={6} data-aos="fade-left" className="mt-4 mt-md-0">
            <h3 className="fw-bold mb-3">الأستاذة بسمة جمال</h3>
            <p className="lead">
              محامية ذات خبرة واسعة في القانون المدني والجنائي، تتميز بالالتزام
              والدقة لضمان حقوق العملاء وتحقيق أفضل النتائج.
            </p>
          </Col>
        </Row>

        <Row className="text-center mt-5 g-4">
          <Col md={4} data-aos="fade-up">
            <h4 className="text-4xl fw-bold text-[#2e0000]">+10</h4>
            <p className="lead">سنوات خبرة</p>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-4xl fw-bold text-[#2e0000]">200+</h4>
            <p className="lead">عملاء موثوقون</p>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-4xl fw-bold text-[#2e0000]">95%</h4>
            <p className="lead">نسبة رضا العملاء</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
