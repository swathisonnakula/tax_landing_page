import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import Image from "next/image";
import planning from "../../public/images/planning.png";
import payroll from "../../public/images/payroll.png";
import compliance from "../../public/images/complicance_1.png";

const Services: React.FC = () => {
  const data = [
    {
      title: "Income Tax & GST Return",
      icon: planning,
      description:
        "We handle accurate preparation and filing of your Income Tax and GST returns. Stay compliant with zero delays and never miss a deadline with our timely reminders.",
      points: [
        "E-filing of ITR & GST returns",
        "Input tax credit reconciliation",
        "Quarterly & annual compliance",
        "Real-time tax tracking dashboards",
      ],
    },
    {
      title: "Tax Planning",
      icon: compliance,
      description:
        "Maximize your tax savings with personalized planning strategies. We help you structure your income and expenses efficiently to reduce your tax burden legally.",
      points: [
        "Assessment of tax liabilities",
        "Deductions and exemptions planning",
        "Capital gains and investment strategy",
        "Quarterly review sessions",
      ],
    },
    {
      title: "Financial Reports",
      icon: payroll,
      description:
        "Get clear, professional financial statements including Profit & Loss, Balance Sheet, and Cash Flow reports. We provide insights that help you make better business decisions.",
      points: [
        "Profit & Loss Statements",
        "Balance Sheets & Cash Flow Reports",
        "Custom financial insights",
        "Monthly and quarterly reporting",
      ],
    },
    {
      title: "Payroll Services",
      icon: compliance,
      description:
        "We manage complete payroll processing for your team—salary calculations, payslip generation, and compliance with PF, ESI, and TDS regulations included.",
      points: [
        "Automated salary calculations",
        "Payslip generation & distribution",
        "TDS, PF, and ESI filings",
        "Employee compliance records",
      ],
    },
    {
      title: "Bookkeeping",
      icon: planning,
      description:
        "Keep your accounts in perfect order with our daily bookkeeping services. We record transactions, reconcile bank statements, and ensure audit-readiness at all times.",
      points: [
        "Daily transaction recording",
        "Bank & credit card reconciliation",
        "Expense tracking & categorization",
        "Audit-ready documentation",
      ],
    },
    {
      title: "Income Tax Audits",
      icon: payroll,
      description:
        "Facing an audit? We've got your back. We prepare documentation, ensure compliance, and represent you before tax authorities with professional expertise.",
      points: [
        "Pre-audit document review",
        "Representation before authorities",
        "Compliance checks & corrections",
        "Follow-up support post-audit",
      ],
    },
    {
      title: "Registration & Compliance",
      icon: compliance,
      description:
        "Starting a business? We help with company formation, GST/PAN/TAN registration, and ongoing compliance filings so you can stay focused on growth.",
      points: [
        "Company incorporation assistance",
        "GST, PAN, TAN registrations",
        "ROC and MCA filing support",
        "Annual compliance management",
      ],
    },
  ];

  return (
    <div className="container-fluid mb-10 ">
      <section className="  ">
        <div
          className="text-center mb-4 px-20"
          data-aos="fade-out"
          data-aos-duration="2000"
          data-aos-delay={400}
        >
          <h5 className="text-3xl md:text-4xl fw-semibold text-blue-800 mb-10 title-font text-theme-primary text-center mb-4 ">
            Our Services
          </h5>{" "}
          <h1 className="text-orange fw-bold ">
            Our Expertise, Your Advantage
          </h1>
          <p className="text-gray-800 mb-0">
            We offer a wide range of reliable and compliant financial services
            tailored to individuals, startups, and businesses. From tax returns
            to bookkeeping, we ensure accuracy, transparency, so you can focus
            on what matters most: growth & success.
          </p>
        </div>
        <div>
          <div>
            <Row className="align-items-center">
              {/* <Col
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
                    <h3 className="text-orange fw-bold mb-4">
                      Comprehensive Accounting & Tax Solutions
                    </h3>
                    <p className="text-gray-100 mb-0">
                      We offer a wide range of reliable and compliant financial
                      services tailored to individuals, startups, and
                      businesses. From tax returns to bookkeeping, we ensure
                      accuracy, transparency, so you can focus on what matters
                      most: growth & success.
                    </p>
                    
                  </CardBody>
                </Card>
              </Col> */}
              {data?.map((ele, ind) => {
                const isEvenIndex = ind % 2 === 0;
                return (
                  <Col
                    md={12}
                    className={`mb-0`}
                  >
                    <div
                      className={`d-flex justify-content-between align-items-center p-20 py-0 ${
                        isEvenIndex
                          ? "flex-column-reverse flex-md-row-reverse bg-theme-primary-extra-light"
                          : "flex-column-reverse flex-md-row bg-white"
                      }`}
                    >
                      <Image
                        src={ele.icon}
                        alt=""
                        width={400}
                        data-aos="zoom-out"
                        data-aos-duration="1200"
                        data-aos-delay={ind * 100}
                      />
                      <div className={``}>
                        <div
                          data-aos="fade-down"
                          data-aos-duration="1200"
                          //   data-aos-delay={200 * (ind + 1)}
                        >
                          <h5 className="fw-semibold text-theme-primary  title-font">
                            {ele.title}
                          </h5>{" "}
                          <p className="text-gray-600">{ele.description}</p>
                        </div>

                        <ul className="text-gray-800 list-unstyled">
                          {ele.points?.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="d-flex align-items-center mb-2"
                              data-aos="fade-up"
                              data-aos-duration="1800"
                              data-aos-delay={150 * (pointIndex + 1)}
                            >
                              <i className="bx fs-3 text-orange bxs-check-circle me-2"></i>
                              <p className="mb-0">{point}</p>
                            </li>
                          ))}
                        </ul>
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

export default Services;
