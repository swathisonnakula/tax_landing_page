import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/Medical_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container bg-theme-primary py-4 text-center px-md-5 px-3 mt-auto">
      <div className="container">
        <div className="row p-md-3 p-2">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 mb-sm-4 mb-lg-0">
            <div className="single-footer-widget">
              <div className="logo d-flex justify-content-start mb-4">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="TeliMedX logo"
                    width={300}
                    height={50}
                    priority
                    className="img-fluid large-logo"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
                <div className="single-footer-widget ml-md-4 pl-md-5">
                  <ul className="list lh-lg text-start">
                    <li>
                      <Link
                        href="/"
                        className="text-decoration-none text-white"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/"
                        className="text-decoration-none text-white"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/"
                        className="text-decoration-none text-white"
                      >
                        Site Locations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio/"
                        className="text-decoration-none text-white"
                      >
                        Media
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
                <div className="single-footer-widget ml-md-4 pl-md-5">
                  <ul className="list lh-lg text-start">
                    <li>
                      <Link
                        href="/"
                        className="text-decoration-none text-white"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/"
                        className="text-decoration-none text-white"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/"
                        className="text-decoration-none text-white"
                      >
                        Refer and Earn
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio/"
                        className="text-decoration-none text-white"
                      >
                        House Rules
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
                <div className="single-footer-widget ml-md-4 pl-md-5">
                  <ul className="list lh-lg text-start">
                    <li>
                      <Link
                        href="/"
                        className="text-decoration-none text-white"
                      >
                        T&C
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/"
                        className="text-decoration-none text-white"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/"
                        className="text-decoration-none text-white"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio/"
                        className="text-decoration-none text-white"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
                <div className="single-footer-widget ml-md-4 pl-md-5">
                  <ul className="list lh-lg text-start">
                    <li>
                      <Link
                        href="/"
                        className="text-decoration-none text-white"
                      >
                        Covid-19
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/"
                        className="text-decoration-none text-white"
                      >
                        Refunds
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/"
                        className="text-decoration-none text-white"
                      >
                        Partner With Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio/"
                        className="text-decoration-none text-white"
                      >
                        Cookie Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top mt-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 py-3">
            <p className="mb-md-0 mb-3 fs-6 text-light">
              Copyright &copy; 2025 | All Rights Reserved by Telimedx
            </p>
            <ul className="social-links list-unstyled d-flex mb-0">
              <li className="ms-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="bx bxl-facebook-square text-light fs-4"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin-square text-light fs-4"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="bx bxl-twitter text-light fs-4"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
