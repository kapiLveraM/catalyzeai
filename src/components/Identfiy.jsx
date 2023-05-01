import React from "react";
import Roughly from "../assets/image/png/Roughly.png";
import predicted from "../assets/image/png/predicted.png";
import ofRecent from "../assets/image/png/ofRecent.png";
const Identfiy = () => {
  const CardData = [
    {
      heading: "40%",
      img: Roughly,
      para: "Roughly 4 out of 10 property leads sell within 12 months.",
    },
    {
      heading: "$77Bn",
      img: predicted,
      para: "Predicted total property value that will sell per year.",
    },
    {
      heading: "77%",
      img: ofRecent,
      para: "Of recent seller contacted only one agent before finding the right agent they worked with to sell their home.",
    },
  ];
  return (
    <>
      <section className=" py-5 position-relative">
        <div className="boder_bottom_2nd d-none d-xl-inline"></div>
        <div className=" container container_modified my-xl-5">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className=" fs_5xl fw-semibold max_width_para m-auto text-center"
          >
            Identify Inherited Properties in your local area that will sell
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className=" fs_xl fw-normal text-center max_width_140 mt-5"
          >
            Industry High Prediction Rate
          </p>
          <div className=" row justify-content-center justify-content-lg-between">
            {CardData.map((value, index) => {
              return (
                <div className=" col-md-5 col-lg-3 mt-2" key={index}>
                  <div
                    data-aos="fade-right"
                    className=" d-flex flex-column justify-content-between card_h"
                  >
                    <h2 className=" fs_3xl fw-semibold text-center">
                      {value.heading}
                    </h2>
                    <img src={value.img} alt="" className=" w-100 mt-5" />
                    <p className=" para text-center max_width_263 m-auto mt-4">
                      {value.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Identfiy;
