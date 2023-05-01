import React from "react";
import { Icon10, Icon11, Icon12 } from "./Icons";
import Slider from "react-slick";
import { useRef } from "react";
const SeeWhat = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const SliderControls = useRef();
  return (
    <>
      <section className=" py-5">
        <div className=" container container_modified">
          <div className=" d-none d-sm-flex justify-content-between">
            <button
              onClick={() => SliderControls.current.slickNext()}
              className=" border-0 bg-transparent"
            >
              <Icon10 />
            </button>
            <h2 className=" fs_5xl fw-semibold">See what our users say </h2>{" "}
            <button
              onClick={() => SliderControls.current.slickPrev()}
              className=" border-0 bg-transparent"
            >
              <Icon11 />
            </button>
          </div>
          <h2 className=" fs_5xl fw-semibold text-center d-sm-none">
            See what our users say{" "}
          </h2>{" "}
          <div className=" d-sm-none d-flex justify-content-between">
            <button
              onClick={() => SliderControls.current.slickNext()}
              className=" border-0 bg-transparent"
            >
              <Icon10 />
            </button>

            <button
              onClick={() => SliderControls.current.slickPrev()}
              className=" border-0 bg-transparent"
            >
              <Icon11 />
            </button>
          </div>
          <div className=" mt-4 justify-content-between position-relative">
            <div className="See_what"></div>
            <div className="See_what_2"></div>
            <Slider ref={SliderControls} {...settings}>
              <div className=" col-6">
                <div className=" bg-white p-5 mx-2">
                  <div className=" d-flex justify-content-between">
                    <div className=" d-flex align-items-center">
                      <p className=" para text_green Richard_Chung">RC</p>
                      <div className=" ms-5">
                        <h2 className=" fs_xl fw-semibold ">Richard Chung</h2>
                        <p className=" fw-normal fs_xsm text-black opacity_0_7">
                          Killer Williams
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <Icon12 />
                    </div>
                  </div>
                  <p className=" para opacity_0_7 text-black mt-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The 'Content here, content here', making it look
                    like readable English.
                  </p>
                </div>
              </div>
              <div className=" col-6">
                <div className=" bg-white p-5 mx-2">
                  <div className=" d-flex justify-content-between">
                    <div className=" d-flex align-items-center">
                      <p className=" para text_green Richard_Chung">RC</p>
                      <div className=" ms-5">
                        <h2 className=" fs_xl fw-semibold ">Richard Chung</h2>
                        <p className=" fw-normal fs_xsm text-black opacity_0_7">
                          Killer Williams
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <Icon12 />
                    </div>
                  </div>
                  <p className=" para opacity_0_7 text-black mt-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The 'Content here, content here', making it look
                    like readable English.
                  </p>
                </div>
              </div>
              <div className=" col-6">
                <div className=" bg-white p-5 mx-2">
                  <div className=" d-flex justify-content-between">
                    <div className=" d-flex align-items-center">
                      <p className=" para text_green Richard_Chung">RC</p>
                      <div className=" ms-5">
                        <h2 className=" fs_xl fw-semibold ">Richard Chung</h2>
                        <p className=" fw-normal fs_xsm text-black opacity_0_7">
                          Killer Williams
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <Icon12 />
                    </div>
                  </div>
                  <p className=" para opacity_0_7 text-black mt-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The 'Content here, content here', making it look
                    like readable English.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeeWhat;
