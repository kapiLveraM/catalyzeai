import React from "react";
import Exclusive from "../assets/image/png/Exclusive.png";
import backyard from "../assets/image/png/backyard.png";
import highNet from "../assets/image/png/HighNetWorth.png";
import propensity from "../assets/image/png/propensity.png";
import BgCard from "../assets/image/png/bg_card.png";
import { Icon8 } from "./Icons";
const OurPlatform = () => {
  return (
    <>
      <section className=" py-5 my-xl-5 position-relative z_index_1">
        <div className=" container container_modified">
          <div className="row justify-content-center ">
            <div
              data-aos="fade-right"
              data-aos-offset="600"
              className="col-lg-2 pb-5 pb-lg-0"
            >
              <h2 className=" fs_5xl fw-semibold text-dark text-center text-lg-start">
                Our Platform
              </h2>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="700"
              className="col-md-6 col-lg-5 col-xl-4 "
            >
              <div className="card_1 card_hover">
                <div className="Exclusive_card ">
                  <div className=" d-flex align-items-center justify-content-between pb-5">
                    <h2 className=" fs_xl fw-semibold">Exclusive</h2>
                    <img src={Exclusive} alt="Exclusive" />
                  </div>

                  <p className=" para max_width_prospects opacity_0_7">
                    200 exclusive prospects pushed to your platfrom monthly.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="600"
              className="col-md-6 col-lg-5 col-xl-4 pt-3 pt-md-0"
            >
              <div className="card_1 card_hover">
                <div className="Exclusive_card">
                  <div className=" d-flex align-items-center justify-content-between pb-5">
                    <h2 className=" fs_xl fw-semibold">
                      In your <br /> backyard
                    </h2>
                    <img src={backyard} alt="backyard" />
                  </div>
                  <p className=" para max_ width_prospects opacity_0_7">
                    Radius based leads within 50-miles from you, prioritizing
                    those closer to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 align-items-center justify-content-center justify-content-lg-start">
            <div
              data-aos="fade-right"
              data-aos-offset="600"
              className="col-md-6 col-lg-4 "
            >
              <div className="card_1 card_hover">
                <div className="Exclusive_card ">
                  <div className=" d-flex align-items-center justify-content-between pb-5">
                    <h2 className=" fs_xl fw-semibold">
                      High <br /> net worth
                    </h2>
                    <img src={highNet} alt="highNet" />
                  </div>

                  <p className=" para max_width_prospects opacity_0_7">
                    Average investable assets of $1.5 million.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="600"
              className="col-md-6 col-lg-4 py-3 py-lg-0"
            >
              <div className="card_1 card_hover">
                <div className="Exclusive_card ">
                  <div className=" d-flex align-items-center justify-content-between pb-5">
                    <h2 className=" fs_xl fw-semibold">
                      High
                      <br /> propensity
                    </h2>
                    <img src={propensity} alt="propensity" />
                  </div>

                  <p className=" para opacity_0_7">
                    Our combination of event-driven data, historical data,
                    behavioral analytics, and real-time data results in the
                    highest propensity prospects.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="600"
              className=" col-md-6 col-lg-4 col-xl-3 "
            >
              <div className=" position-relative card_hover">
                <div className=" position-absolute view_setup w-100 px-4">
                  <div className=" d-flex justify-content-between">
                    <a href="#" className=" fs-md text-light fw-semibold">
                      View pricing
                    </a>
                    <span className="">
                      <Icon8 />
                    </span>
                  </div>
                </div>
                <img src={BgCard} alt="" className=" min_hight w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPlatform;
