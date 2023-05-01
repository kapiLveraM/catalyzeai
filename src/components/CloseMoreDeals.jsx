import React from "react";
import CloseMore from "../assets/image/png/Close More Deals.png";
import tringal from "../assets/image/png/tringal.png";
import { Icon9, Icon5 } from "./Icons";
const CloseMoreDeals = () => {
  return (
    <>
      <section className=" py-5 my-xl-5">
        <div className=" container container_modified">
          <div className="row justify-content-center justify-content-between align-items-center">
            <div data-aos="fade-right" className="col-md-6 col-xl-3 pb-4">
              <img src={CloseMore} alt="CloseMore" className=" w-100" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="500"
              className="col-sm-6 col-md-4 col-xl-3"
            >
              <p className=" para max_width_179 m-auto text-center text-md-start">
                Leverage big data and artificial intelligence to identify your
                next Client
              </p>
              <p className=" para max_width_179 opacity_0_7 m-auto text-center text-md-start pt-3">
                Compliment your current business development with Unconstrained
                predictive analytics.
              </p>

              <div className=" d-flex align-items-center justify-content-center  mt-3">
                <img src={tringal} alt="tringal" />
                <div className=" bg-white p-3 rounded-2">
                  <div className=" d-flex flex-column position-relative">
                    <div className="blur_polygon"></div>
                    <div className="">
                      <div className=" polygon">
                        <a
                          href="#"
                          className=" fw-normal fs_md text-black Unconstrained "
                        >
                          <span className=" pe-3">
                            <Icon9 />
                          </span>
                          Unconstrained
                        </a>
                      </div>
                    </div>
                    <div className=" mt-3 polygon">
                      <div className=" ">
                        <a
                          href="#"
                          className=" fw-normal text-black fs_md Unconstrained"
                        >
                          <span className=" pe-3">
                            <Icon9 />
                          </span>
                          Constrained
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-sm-6 col-md-12 col-lg-2 mt-3 mt-md-0"
            >
              <h2 className=" fs_5xl fw-semibold text-center text-lg-start">
                Close More Deals
              </h2>
              <div className=" text-center  mt-3">
                <a
                  href="#"
                  className=" text_green fw-semibold fs_md d-block book_btn mt-lg-5 pt-lg-5"
                >
                  Book a demo <Icon5 />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloseMoreDeals;
