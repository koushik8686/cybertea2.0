import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../src/assets/CyberTEA Banner.png";
import { Link,  useLocation } from "react-router-dom";
import "./Carousel.css";

const Carousel = () => {
  const location = useLocation()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const linkOpener=()=>{
    window.open("https://forms.gle/To8gFQaw9cRxEi6z7", "_blank", "noreferrer");
  }
  return (
    <div className="carousel-container" onClick={linkOpener} style={{cursor:"pointer"}}>
      <Slider {...settings} className="carousel">
        <div>
          <img
            src={
              location.pathname === "/"
                ? "/img/CyberTEA 2 Banner.png"
                : "/img/CyberTEA Banner.png"
            }
            alt="Slide 1"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={
              location.pathname === "/"
                ? "/img/CyberTEA 2 Banner.png"
                : "/img/CyberTEA Banner.png"
            }
            alt="Slide 2"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={
              location.pathname === "/"
                ? "/img/CyberTEA 2 Banner.png"
                : "/img/CyberTEA Banner.png"
            }
            alt="Slide 3"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
