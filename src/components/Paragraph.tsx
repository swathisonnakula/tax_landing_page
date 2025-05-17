import React from "react";
import { Button, Col, Row } from "reactstrap";
import Image from "next/image";
import analytics from "../../public/images/analytics_vector.png";
import personalization from "../../public/images/personalization.png";
const Paragraph: React.FC = () => {
  const data = [
    {
      title: "End‑to‑End Accuracy",
      icon: personalization,
      description:
        "Dual‑layer review by certified accountants ensures every figure is correct—no last‑minute surprises.",
    },
    {
      title: "Regulation‑Ready Compliance",
      icon: personalization,
      description:
        "We track ever‑changing tax laws and statutory deadlines so you remain 100 % compliant, year‑round.",
    },
    {
      title: "Personalized Strategies",
      icon: personalization,
      description:
        "From choosing the right business structure to optimizing deductions, advice is tailored to your exact goals and risk profile.",
    },
    {
      title: "Real‑Time Visibility",
      icon: personalization,
      description:
        "Secure dashboards give you 24 / 7 access to ledgers, GST status, and key financial KPIs—any device, any time.",
    },
    // {
    //   title: "Proactive Savings",
    //   description:
    //     "Quarterly check‑ins identify new allowances, credits, and restructuring opportunities before they expire.",
    // },
    {
      title: "Long‑Term Partnership",
      icon: personalization,
      description:
        "Beyond annual returns, we support funding rounds, audits, and growth‑phase forecasting—so your finances scale with your ambitions.",
    },
  ];

  return (
    <div className="container-fluid ">
      <section className="bg-white p-20  ">
        <div data-aos="fade-up" data-aos-delay="200">
          {/* <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>Your Company Name</strong>, we believe that managing your
            finances shouldn't be a burden. Whether you're an individual, a
            freelancer, or a business owner, our mission is to simplify complex
            tax laws and accounting systems for you.
            <br />
            <br />
            With a focus on accuracy, compliance, and strategic insights, our
            experienced team provides personalized financial solutions tailored
            to your unique needs. We're not just here to file your taxes—we're
            here to build long-term financial clarity and success.
          </p> */}
          <div>
            <Row className="align-items-center">
              <Col md={6} data-aos="fade-right" data-aos-delay="300">
                <h1 className="text-9xl md:text-4xl fw-semibold text-blue-800 mb-10 title-font text-theme-primary-soft">
                  Your{" "}
                  <span className=" text-theme-primary ">Trusted Partner</span>{" "}
                  in Financial Success
                </h1>
              </Col>
              {data?.map((ele, ind) => {
                return (
                  <Col
                    md={6}
                    key={ind}
                    data-aos="zoom-in-up"
                    data-aos-delay={400 + ind * 100}
                  >
                    <div className="shadow-sm border border-1 rounded-4 p-5 mb-4">
                      <div className="d-flex align-items-center">
                        <Image src={ele?.icon} alt="" className="me-4" />
                        <div>
                          <h4 className="text-3xl md:text-4xl fw-semibold text-blue-800  title-font text-theme-primary ">
                            {ele?.title}
                          </h4>
                          <p className="mb-0 text-gray-500">
                            {ele?.description}
                          </p>
                        </div>{" "}
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paragraph;
