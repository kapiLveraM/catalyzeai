import React from "react";
import Footer from "./Footer";
import blurImg from "../assets/image/png/blur.png";
const Form = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className=" bg_dark_blue pt-5 pb-4 mx-2 rounded-2 mb-2 position-relative"
    >
      <img
        src={blurImg}
        alt="blurImg"
        className=" position-absolute  blur_img zoom-in-zoom-out"
      />
      <div className="container container_modified position-relative ">
        <div className="bottom_line d-none d-xxl-inline"></div>
        <div className="row justify-content-between">
          <div data-aos="fade-right" className="col-xl-7 order-2 order-xl-1">
            <form action="" className="form_input">
              <div className="d-md-flex">
                <div className="me-1 w-100 h-100">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input_name"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="input_name"
                  />
                  <div className="d-flex justify-content-between mt-3">
                    <div className="boder_real">
                      <div className=" d-flex text-light align-items-center w-100">
                        <input type="radio" id="one" className=" me-2" />
                        <label htmlFor="one text_white">
                          Financial Services
                        </label>
                      </div>
                    </div>
                    <div className="boder_real">
                      <div className=" d-flex align-items-center text_white  w-100">
                        <input type="radio" id="two" className=" me-2" />
                        <label htmlFor="two">Real Estate</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100 h-100 ms-1">
                  <textarea
                    className="w-100  h-100"
                    placeholder="Message"
                    cols="30"
                  ></textarea>
                  <button className="submit_button mt-2 fs_sm fw-semibold">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div data-aos="fade-left" className=" col-xl-3 order-1 order-xl-2 ">
            <h2 className="contact text_white fs_3xl">Contact us</h2>
            <p className="para text_white opacity_0_7 pt-4">
              Our Predictive Analytics utilize a combination of event-driven
              data, historical data.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-5 pt-xxl-5">
        <Footer />
      </div>
    </div>
  );
};

export default Form;
