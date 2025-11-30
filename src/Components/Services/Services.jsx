import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import BuildImg from "../../assets/تاسيس الشركة.jpeg";
import familyIMg from "../../assets/الاسرة.jpeg";
import ecomm from "../../assets/قضاياالتجارية.jpeg";
import house from "../../assets/العقارات.jpeg";
import contract from "../../assets/عقود.jpeg";
import Gan from "../../assets/جنائية.jpeg";
import arbitration from "../../assets/تحكيم.webp";
import rentals from "../../assets/ايجارات.webp";
import labor from "../../assets/العمال.jpeg";
import civil from "../../assets/مدنى.jpeg";
import companyConsult from "../../assets/العقارات.jpeg";
import letters from "../../assets/كتابة.jpeg";
import Header from "../Header/Header";
import Navs from "../Header/Navbar";
import MiniHero from "../MinHero/MiniHero";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function ServiceSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const navigate = useNavigate();
  const services = [
    {
      icon: BuildImg,
      title: "تأسيس الشركات",
      text: "تقديم كافة الخدمات القانونية لتأسيس الشركات وفتح فروع للشركات الأجنبية.",
    },
    {
      icon: ecomm,
      title: "القضايا التجارية",
      text: "متابعة وحل القضايا التجارية وفق القوانين المصرية بكفاءة واحترافية.",
    },
    {
      icon: familyIMg,
      title: "قضايا الأسرة",
      text: "معالجة كافة قضايا الأحوال الشخصية والأسرة مع تقديم المشورة القانونية الدقيقة.",
    },
    {
      icon: house,
      title: "قضايا العقارات",
      text: "حل كافة القضايا العقارية ومتابعة المستندات القانونية بدقة.",
    },
    {
      icon: Gan,
      title: "القضايا الجنائية",
      text: "تمثيل موكلي المكتب أمام المحاكم الجنائية بكفاءة عالية.",
    },
    {
      icon: contract,
      title: "صياغة العقود",
      text: "صياغة عقود قانونية متوافقة مع القانون المصري واحتياجات العملاء.",
    },
    {
      icon: arbitration,
      title: "التحكيم الدولي",
      text: "تمثيل العملاء وحل النزاعات التجارية والدولية عبر التحكيم الدولي.",
    },
    {
      icon: rentals,
      title: "قضايا الإيجارات",
      text: "متابعة كافة النزاعات القانونية المتعلقة بالإيجارات والشقق والمحال.",
    },
    {
      icon: labor,
      title: "قضايا العمال",
      text: "تمثيل الشركات والأفراد في القضايا العمالية وحل النزاعات وفق القانون.",
    },
    {
      icon: civil,
      title: "القضايا المدنية",
      text: "معالجة القضايا المدنية المختلفة مثل التعويضات والنزاعات العقارية والمدنية.",
    },
    {
      icon: companyConsult,
      title: "استشارات قانونية للشركات",
      text: "تقديم استشارات شاملة للشركات الوطنية والأجنبية لتجنب المخاطر القانونية.",
    },
    {
      icon: letters,
      title: "صياغة المراسلات القانونية",
      text: "كتابة كافة المراسلات القانونية والاتفاقيات الرسمية بما يتوافق مع القانون.",
    },
  ];

  return (
    <>
      <Header />
      <Navs />
           <MiniHero
        title="الخدمات القانونية"
        subtitle="مكتب العدل للمحاماة والاستشارات القانونية"
      />
      <Container className="ser_container py-5">
        <h2 data-aos="fade-down" className="text-center mb-3">
          الخدمات الكاملة لمكتب بسمة جمال
        </h2>
        <p data-aos="fade-up" className="text-center mb-5">
          يوفر مكتب بسمة جمال للمحاماة خدمات قانونية متكاملة تغطي كافة فروع
          القانون داخل جمهورية مصر العربية وخارجها، بما يضمن حماية مصالح العملاء
          وتحقيق أفضل النتائج القانونية.
        </p>

        <div className="row">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} aosDelay={idx * 100} />
          ))}
        </div>

        <div className="text-center mt-4">
          <Button className="button" data-aos="zoom-in" onClick={()=>navigate('/contact')}>
            تواصل معنا لحجز الخدمة
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

function ServiceCard({ icon, title, text, aosDelay }) {
  return (
    <div
      className="col-lg-4 col-md-6 mb-4"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="service-card text-center p-3 shadow-sm rounded h-100">
        <div className="service-icon-wrapper mb-3">
          <img
            src={icon}
            alt={title}
            className="service-icon img-fluid rounded"
          />
        </div>
        <h5 className="mt-3 fw-bold">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ServiceSection;
