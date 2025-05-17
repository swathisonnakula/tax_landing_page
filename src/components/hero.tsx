import React from "react";
import { Button } from "reactstrap";
import Image from "next/image";
import analytics from "../../public/images/analytics_vector.png";
import curve_1 from "../../public/images/curve_lines_1.png";


const Hero: React.FC = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="container-fluid "
    >
      <div className="d-flex align-items-center justify-content-between px-20 py-5 bg-theme-primary rounded-5">
        <div className="w-50">
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-white title-font"
          >
            Tax & Consulting Services for Individuals, Corporate and
            Non-Corporate.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-white"
          >
            Trusted by individuals and businesses across the country. Let us
            handle your taxes, while you focus on what matters most.
          </p>
          <Button
            data-aos="fade-up"
            data-aos-duration="1500"
            className="btn btn-md btn-light rounded-5 px-4 p-2"
          >
            Get a Free Consultation
          </Button>
        </div>
        <div>
          <Image
            data-aos="zoom-in"
            data-aos-duration="1500"
            src={analytics}
            alt=""
            width={500}
          />
          {/* <Image src={curve_1} alt="" width={500} /> */}

        </div>
      </div>
    </div>
  );
};

export default Hero;
