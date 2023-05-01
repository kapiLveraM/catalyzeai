import React from "react";
import harness from "../assets/image/png/harness.png";
import Increase from "../assets/image/png/increase.png";
import topOf from "../assets/image/png/topAFill.png";
const Hrenas = () => {
  return (
    <>
      <section className=" py-5">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className=" container container_modified"
        >
          <div className="row justify-content-center">
            <div className=" col-sm-6 col-lg-4">
              <div className=" text-center">
                <img src={harness} alt="harness" />
                <p className=" para pt-2">
                  Harness the power of 30 million data points to reach your
                  highest converting target market
                </p>
              </div>
            </div>
            <div className=" col-sm-6 col-lg-4">
              <div className=" text-center">
                <img src={Increase} alt="Increase" />
                <p className=" para pt-2">
                  Increase your marketingdollars <br /> ROI
                </p>
              </div>
            </div>
            <div className=" col-sm-6 col-lg-4 pt-4 pt-lg-0">
              <div className=" text-center">
                <img src={topOf} alt="topOf" />
                <p className=" para pt-2">
                  A top of funnel marketing solution to <br /> fill your
                  prospect pipeline
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hrenas;
