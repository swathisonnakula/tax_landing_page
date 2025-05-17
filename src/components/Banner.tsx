import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import Image from "next/image";
import personalization from "../../public/images/analytics_vector.png";

const Banner: React.FC = () => {
  return (
    <div className=" mb-10 ">
      <section className=" p-10 bg-theme-primary   ">
        <Row className="align-items-center justify-content-between">
          <Col md={9}>
            <p className="text-orange text-5xl fw-bold">
              Let’s File, Save & Grow — Together
            </p>
            <p className="text-white text-1xl mb-2">
              One click is all it takes to secure a free consultation. We’ll map
              out a clear, cost‑effective strategy so you can focus on scaling
              your business.
            </p>
            <Button className="bg-light text-dark rounded-5 px-4 p-2 mt-3">Get Started</Button>
          </Col>
          <Col className="text-end">
            <Image src={personalization} alt="" width={200} />
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Banner;
