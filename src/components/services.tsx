import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import Image from "next/image";
import personalization from "../../public/images/analytics_vector.png";

const Services: React.FC = () => {
  const data = [
    {
      title: "Income Tax & GST Return",
      icon: personalization,
      description:
        "We handle accurate preparation and filing of your Income Tax and GST returns. Stay compliant with zero delays and never miss a deadline with our timely reminders.",
    },
    {
      title: "Tax Planning",
      icon: personalization,
      description:
        "Maximize your tax savings with personalized planning strategies. We help you structure your income and expenses efficiently to reduce your tax burden legally.",
    },
    {
      title: "Financial Reports",
      icon: personalization,
      description:
        "Get clear, professional financial statements including Profit & Loss, Balance Sheet, and Cash Flow reports. We provide insights that help you make better business decisions.",
    },
    {
      title: "Payroll Services",
      icon: personalization,
      description:
        "We manage complete payroll processing for your team—salary calculations, payslip generation, and compliance with PF, ESI, and TDS regulations included.",
    },
    {
      title: "Bookkeeping",
      icon: personalization,
      description:
        "Keep your accounts in perfect order with our daily bookkeeping services. We record transactions, reconcile bank statements, and ensure audit-readiness at all times.",
    },
    {
      title: "Income Tax Audits",
      icon: personalization,
      description:
        "Facing an audit? We've got your back. We prepare documentation, ensure compliance, and represent you before tax authorities with professional expertise.",
    },
    {
      title: "Registration & Compliance",
      icon: personalization,
      description:
        "Starting a business? We help with company formation, GST/PAN/TAN registration, and ongoing compliance filings so you can stay focused on growth.",
    },
  ];

  return (
    <div className="container-fluid mb-10 ">
      <section className=" p-20 bg-theme-primary-extra-soft rounded-5  ">
        <h1
          className="text-3xl md:text-4xl fw-semibold text-blue-800 mb-10 title-font text-theme-primary text-center mb-5"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Our Services
        </h1>
        <div>
          <div>
            <Row className="align-items-center">
              <Col
                md={8}
                className="mb-4"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <Card className="bg-theme-primary border border-0 rounded-5 p-4">
                  <CardBody>
                    <h5 className="text-white">
                      Our Expertise, Your Advantage
                    </h5>
                    <h3 className="text-theme-primary-extra-soft fw-bold mb-4">
                      Comprehensive Accounting & Tax Solutions
                    </h3>
                    <p className="text-gray-100 mb-0">
                      We offer a wide range of reliable and compliant financial
                      services tailored to individuals, startups, and
                      businesses. From tax returns to bookkeeping, we ensure
                      accuracy, transparency, so you can focus on what matters
                      most: growth & success.
                    </p>
                    {/* <Image src={ele.icon} alt=""  />
                        <h5 className="fw-semibold mt-3">{ele.title}</h5>
                        <p className="text-gray-600">{ele.description}</p> */}
                  </CardBody>
                </Card>
              </Col>
              {data?.map((ele, ind) => {
                return (
                  <Col
                    md={4}
                    className="mb-4 position-relative"
                    data-aos="zoom-out-up"
                    data-aos-duration="1000"
                    data-aos-delay={ind * 300}
                  >
                    <Card
                      className="border border-0 rounded-5 "
                      style={{ height: "240px" }}
                    >
                      <CardBody className="p-3">
                        {/* <Image src={ele.icon} alt="" width={250}/> */}
                        <h5 className="fw-semibold mt-3">{ele.title}</h5>
                        <p className="text-gray-600">{ele.description}</p>
                        <div className="position-absolute end-0 bottom-0 p-0 bg-theme-primary-extra-soft p-2 rounded-5">
                          {" "}
                          <button className="btn btn-theme-primary rounded-4">
                            {ind + 1}
                          </button>
                        </div>
                      </CardBody>
                    </Card>
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

export default Services;
