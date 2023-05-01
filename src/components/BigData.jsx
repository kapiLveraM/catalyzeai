import React from "react";
import bigDataImg from "../assets/image/png/bigData.png";
const BigData = () => {
  return (
    <>
      <section className=" py-5 my-xl-5 container-fluid">
        <div className=" d-lg-flex justify-content-between ">
          <div
            data-aos="fade-right"
            data-aos-offset="500"
            className="rounded-2 bg_darkBlue py-5 width _box1 w-100 mx -3"
          >
            <div className="container container_modified">
              <div className="row justify-content-center">
                <div className="col-9">
                  <div className=" d-flex flex-column justify-content-between card_h">
                    <div className=" d-flex justify-content-between ">
                      <div className="Big_data">
                        <h2 className=" fs_md hover_color_change text_white fw-semibold bg_blue d-inline-block px-3 py-2 rounded-2">
                          1
                        </h2>
                        <p className=" fs_sm fw-semibold text_white">
                          Big
                          <br /> Data
                        </p>
                      </div>
                      <div className="Big_data">
                        <h2 className=" fs_md hover_color_change text_white fw-semibold bg_blue d-inline-block px-3 py-2 rounded-2">
                          2
                        </h2>
                        <p className=" fs_sm fw-semibold text_white">
                          Event-
                          <br /> Driven
                        </p>
                      </div>
                      <div className="Big_data">
                        <h2 className=" fs_md hover_color_change text_white fw-semibold bg_blue d-inline-block px-3 py-2 rounded-2">
                          3
                        </h2>
                        <p className=" fs_sm fw-semibold text_white">
                          Artificial
                          <br /> Intelligence
                        </p>
                      </div>
                      <div className="Big_data">
                        <h2 className=" fs_md hover_color_change text_white fw-semibold bg_blue d-inline-block px-3 py-2 rounded-2">
                          4
                        </h2>
                        <p className=" fs_sm fw-semibold text_white">
                          Predictive
                          <br /> Analytics
                        </p>
                      </div>
                    </div>
                    <div className="big_data_img mt-3">
                      <div className=" d-md-flex align-items-center">
                        <img
                          src={bigDataImg}
                          alt="bigDataImg"
                          className=" w-100"
                        />
                        <div className="p-3 p-xl-5">
                          <h2
                            className=" fs_xl fw-semibold text_white
                      "
                          >
                            Big Data
                          </h2>
                          <p className=" fs_xsm fw-normal text_white opacity_0_7">
                            We gather hundreds of millions of data points in
                            order to perform advanced analytics to identify the
                            highest propensity prospects
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            className=" m-auto rounded-2 bg_darkBlue ms-lg-3 py-5 mt-3 mt-lg-0 w_xsm_100 w-50"
          >
            <div className=" d-flex flex-column justify-content-between card_h">
              <div className=" ps-4 ">
                <h2 className=" fw-semibold fs_4xl text_white">
                  Our
                  <br /> approach
                </h2>
              </div>
              <div className=" ps-4 pt-5 mt-5">
                <p className=" fw-normal fs_xl text_white">
                  <span className=" fs_30">200k</span>Properties
                </p>
                <p className=" para text-light pt-2">
                  of wealth will be transitioned in <br /> the next 25 years.
                </p>
                <button className=" common_btn border-0 mt-3">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BigData;
