import React from "react";
import yourLeads from "../assets/image/png/yourLeads.png";
import { Icon13, Icon15 } from "./Icons";
const YourTargetMarket = () => {
  return (
    <>
      <section className=" py-5 my-xl-5">
        <div className=" container container_modified">
          <div className=" row align-items-center justify-content-between">
            <div
              data-aos="fade-right"
              className="col-md-6 col-lg-5 order-2 order-md-1 pt-5 pt-md-0"
            >
              <h2 className=" fw-semibold fs_5xl text-black">
                Your Target Market
              </h2>
              <p className=" para mb-0 pt-3">
                {" "}
                <span className=" me-1">
                  <Icon13 />
                </span>{" "}
                Nationwide coverage
              </p>
              <p className=" para text-black opacity_0_7 pt-3">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <button className=" common_btn border-0 mt-3">Get started</button>
            </div>
            <div
              data-aos="fade-left"
              className="col-md-6 col-lg-5 order-1 order-md-2"
            >
              <div className=" position-relative">
                <a
                  href="#"
                  className=" fs_md position-absolute Your_leads text-white"
                >
                  <span className=" me-3">
                    <Icon15 />
                  </span>
                  Your leads
                </a>
                <img src={yourLeads} alt="" className=" w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourTargetMarket;
