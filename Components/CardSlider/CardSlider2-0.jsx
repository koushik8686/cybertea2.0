import React from "react";
import Slider from "react-slick";
import "./CardSlider.css";
import Card from "./Card/Card";

import speakersData from "./speakersData2-0";

export default function CardSlider2() {
  const academicSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
        }
      }, {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  const industrySettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
        }
      }, {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  };

  const academicSpeakers = speakersData.filter(
    (speaker) => speaker.category === "Academic"
  );
  const industrySpeakers = speakersData.filter(
    (speaker) => speaker.category === "Industry"
  );

  return (
    <div id="speaker_container">
      <div id="speakers">
        <h1 className="heading">Speakers</h1>
        <div className="slick-carousel industry">
          <Slider {...industrySettings} >
            {industrySpeakers.map((speaker, index) => (
              <div key={index}>
                <Card
                  photo={speaker.photo}
                  name={speaker.name}
                  abt={speaker.abt}
                  link={speaker.link}
                />
              </div>
            ))}
          </Slider>
        </div>
        <h1 className="heading">Hands-On Speakers</h1>
        <div className="slick-carousel academic">
          <Slider {...academicSettings} >
            {academicSpeakers.map((speaker, index) => (
              <div key={index}>
                <Card
                  photo={speaker.photo}
                  name={speaker.name}
                  abt={speaker.abt}
                  link={speaker.link}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
