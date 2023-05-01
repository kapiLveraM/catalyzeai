import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import EventDriven from "./components/EventDriven";
import Identfiy from "./components/Identfiy";
import WatchDemo from "./components/WatchDemo";
import OurPlatform from "./components/OurPlatform";
import Hrenas from "./components/Hrenas";
import BigData from "./components/BigData";
import CloseMoreDeals from "./components/CloseMoreDeals";
import SeeWhat from "./components/SeeWhat";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YourTargetMarket from "./components/YourTargetMarket";
import Form from "./components/Form";
import Footer from "./components/Footer";

import "aos/dist/aos.css";
import AOS from "aos";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import PreLoader from "./components/Preloader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("fix-screen");
      // document.body.classList.add("overflow_x_hidden");
    }, 2400);
  }, []);
  AOS.init({
    once: true,
    duration: 1000,
  });
  return (
    <>
      {loading && <PreLoader />}
      <div className=" overflow-hidden">
        <BackToTop />
        <HeaderNav />
        <EventDriven />
        <Identfiy />
        <WatchDemo />
        <OurPlatform />
        <Hrenas />
        <BigData />
        <CloseMoreDeals />
        <SeeWhat />
        <YourTargetMarket />
        <Form />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
