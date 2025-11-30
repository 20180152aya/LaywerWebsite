import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Components/Header/Header";
import Navs from "../Components/Header/Navbar";
import MiniHero from "../Components/MinHero/MiniHero";
import Footer from "../Components/Footer/Footer";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [msg, setMsg] = useState({ text: "", type: "" });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMsg({ text: "تم إرسال الرسالة بنجاح!", type: "success" });
          form.current.reset();
          setTimeout(() => setMsg({ text: "", type: "" }), 4000); // تختفي بعد 4 ثواني
        },
        (error) => {
          setMsg({ text: "فشل الإرسال، حاول مرة أخرى.", type: "danger" });
          console.log("FAILED...", error.text);
          setTimeout(() => setMsg({ text: "", type: "" }), 4000);
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      {msg.text && (
        <div className={`toast-msg ${msg.text ? "show" : ""}`}>{msg.text}</div>
      )}

      <Header />
      <Navs />
      <MiniHero
        title="تواصل معنا"
        subtitle="مكتب العدل للمحاماة والاستشارات القانونية"
      />

      <Container className="py-5 contact-page">
        <Row className="g-5">
          <Col md={6} data-aos="fade-right">
            <div style={{ width: "100%", height: "500px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3456.3279594968844!2d31.32502884!3d29.97000347!3m2!1i1024!2i768!4f13.1!2m1!1z2KfZhNmG2LPYsSDZhdin2LHZg9iq!5e0!3m2!1sar!2seg!4v1764517935157!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </Col>

          <Col md={6} data-aos="fade-left">
            <h2 className="mb-4 contact-title">تواصل معنا</h2>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>الاسم</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="ادخل اسمك"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>البريد الإلكتروني</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="ادخل بريدك الإلكتروني"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>الموضوع</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="الموضوع"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>الرسالة</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="اكتب رسالتك هنا"
                  required
                />
              </Form.Group>

              <Button type="submit" className="contact-btn">
                أرسل الرسالة
              </Button>
            </Form>

            <div className="mt-5 contact-info">
              <h4>مكتب بسمة جمال</h4>
              <p>العنوان: عمارة 42/1 الشطر الثامن زهراء المعادي القاهره</p>
              <p>الهاتف: 01142677273 / 01014547030</p>
              <p>البريد الإلكتروني: gamalbasma14@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
