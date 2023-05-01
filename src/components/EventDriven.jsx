import React from "react";
import { Icon5, Icon6 } from "./Icons";
import catalyze from "../assets/image/png/catalyze.png";
import searchebar from "../assets/image/png/searchebar.png";
import mikeRockwood from "../assets/image/png/mikeRockwood.png";
const EventDriven = () => {
  return (
    <>
      <section className=" py-5 position-relative  ">
        <div className="boder_bottom d-none d-xl-inline"></div>
        <div className="blur_header"></div>
        <div className="blur_header_2"></div>
        <div className=" container container_modified  my-xl-5 py-xl-5">
          <div className=" row justify-content-center justify-content-md-between align-items-center">
            <div className=" col-md-6 col-xl-4 order-2 order-md-1 mt-4 mt-md-0">
              <div
                data-aos="fade-right"
                // data-aos-offset="500"
                // data-aos-duration="600"
              >
                <h1 className=" fs_7xl fw-semibold text-dark text-center text-md-start">
                  Event-Driven Listing Leads
                </h1>
                <p className=" para pt-lg-3 text-center text-md-start">
                  Not your average smart farming, not statistical analysis, but
                  actionable behaviors.
                </p>
                <div className=" d-flex justify-content-center justify-content-md-start align-items-center mt-5">
                  <a href="#" className="common_btn d-block">
                    Get started
                  </a>
                  <a
                    href="#"
                    className=" text_green fw-semibold fs_md d-block ms-4 book_btn"
                  >
                    Book a demo <Icon5 />
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-7 order-1 order-md-2">
              <div
                data-aos="fade-left"
                // data-aos-offset="400"
                // data-aos-duration="500"
                className=" position-relative"
              >
                <img
                  src={searchebar}
                  alt="searchebar"
                  className=" position-absolute searchebar zoom-in-zoom-out"
                />
                <img
                  src={mikeRockwood}
                  alt="searchebar"
                  className=" position-absolute mikeRockwood zoom-in-zoom-out"
                />
                <div className=" position-absolute overViwe_icon zoom-in-zoom-out">
                  <Icon6 />
                </div>
                <img src={catalyze} alt="catalyze" className=" w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDriven;
