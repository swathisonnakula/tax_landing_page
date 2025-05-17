import React from "react";
import { Button, Col, Row } from "reactstrap";
import Image from "next/image";
import contact from "../../public/images/contact.png";
import curve_1 from "../../public/images/curve_lines_1.png";

const Contact: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className="container-fluid mb-10 "
    >
      <div className="p-3 ">
        <Row>
          <Col md={6}>
            <Image src={contact} alt="" />
          </Col>
          <Col md={6} className="bg-theme-primary-extra-soft rounded-5 p-5">
            <h1
              className="text-3xl md:text-4xl fw-semibold text-blue-800 mb-10 title-font text-theme-primary mb-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Ready to Simplify Your Finances?
            </h1>

            <form
              data-aos="fade-up"
              data-aos-duration="1500"
              className=""
              action="https://formspree.io/f/xqkwgqrb"
              method="POST"
            >
              <Row>
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-100 mb-3 p-2 mb-5 "
                    style={{
                      backgroundColor: "transparent",
                      borderBottom: "1px solid black",
                    }}
                    name="name"
                  />
                </Col>
                <Col md={12}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-100 mb-3 p-2 mb-5 "
                    style={{
                      backgroundColor: "transparent",
                      borderBottom: "1px solid black",
                    }}
                    name="email"
                  />
                </Col>
                <Col md={12}>
                  <textarea
                    placeholder="Message"
                    className="w-100 mb-3 p-2 mb-5 "
                    style={{
                      backgroundColor: "transparent",
                      borderBottom: "1px solid black",
                    }}
                    name="message"
                  ></textarea>
                </Col>
                <Col md={12}>
                  <Button
                    type="submit"
                    className="btn btn-theme-primary rounded-5 px-4 p-2 w-100"
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
