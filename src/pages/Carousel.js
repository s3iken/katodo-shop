import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../pages/store/img/1.jpg";
import img2 from "../pages/store/img/2.jpg";
import img3 from "../pages/store/img/3.jpg";
import img4 from "../pages/store/img/4.jpg";
import "./carousel.css";

export default () => (
  <Carousel
    autoPlay
    infiniteLoop
    showIndicators={false}
    showArrows={true}
    showStatus={false}
    stopOnHover={true}
    interval={5000}
  >
    <div>
      <img alt="" src={img1} />
    </div>
    <div>
      <img alt="" src={img2} />
    </div>
    <div>
      <img alt="" src={img3} />
    </div>
    <div>
      <img alt="" src={img4} />
    </div>
  </Carousel>
);
