import React from "react";
import { Button } from "reactstrap";
import Image from "next/image";
import analytics from "../../public/images/analytics_vector.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-0  ">
      <div className="w-100 px-20 py-3 ">
        {/* <div className="navbar-box d-flex justify-content-between align-items-center bg-theme-primary-extra-sof p-2 px-4 shadow-sm rounded-5"> */}
        <div className="navbar-box d-flex justify-content-between align-items-center ">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <Image src={analytics} alt="Logo" width={40} height={40} />
            <h6>HN & Co Consulting</h6>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
          <div className="" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-3">
                <a
                  className="nav-link active text-theme-primary"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
               <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
             
            </ul>
          </div>

          <Button
            className="btn btn-theme-primary px-4 p-2 rounded-5"
            type="button"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
