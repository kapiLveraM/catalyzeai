import React from "react";
import pagelogo from "../assets/image/png/Footer_log.png";

const PreLoader = () => {
  return (
    <>
      <div className="loading bg-black d-flex justify-content-center align-items-center">
        <div>
          <img className="loading_svg" src={pagelogo} />
        </div>
      </div>
    </>
  );
};

export default PreLoader;
