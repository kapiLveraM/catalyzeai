import React from "react";
import vido from "../assets/image/png/VIDEO.png";
import { Icon7 } from "./Icons";
const WatchDemo = () => {
  return (
    <>
      <section className=" py-5 position-relative">
        <div className="Watch_demo_bg_blur"></div>
        <div className="Watch_demo_bg_blur_2"></div>
        <div className=" container">
          <div className="watch_demo">
            <div className=" position-relative">
              <div className=" text-center position-absolute watch_center">
                <h2 className=" fs_6xl fw-semibold pb-sm-3 text_white hover_green">
                  Watch a demo
                </h2>
                <div className="">
                  <a
                    target=" /"
                    href="https://www.youtube.com/watch?v=tw6ahY8HItk"
                  >
                    <Icon7 />
                  </a>
                </div>
                <p className=" fs_lg fw-semibold mt-4 text_white hover_green">
                  Catalyze AI is a predictive analytics business development
                  platform
                </p>
              </div>
              <img src={vido} alt="vido" className=" w-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchDemo;
