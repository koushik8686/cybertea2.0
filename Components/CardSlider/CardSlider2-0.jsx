import React from "react";
import Slider from "react-slick";
import "./CardSlider.css";
import Card from "./Card/Card";
import speakersData from "./speakersData2-0";

function CardSlider2() {
  console.log('Rendering CardSlider2 component');  // Check how many times the component is being rendered

  const keynoteSettings = {
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
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
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
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Filter keynote, academic, and industry speakers
  const keynoteSpeakers = speakersData.filter(
    (speaker) => speaker.category === "Keynote"
  );
  const academicSpeakers = speakersData.filter(
    (speaker) => speaker.category === "Academic"
  );
  const industrySpeakers = speakersData.filter(
    (speaker) => speaker.category === "Industry"
  );

  // Debugging Keynote Speakers
  console.log('Keynote Speakers:', keynoteSpeakers);

  return (
    <>
      <div id="speaker_container">
        <div id="speakers">
          {/* Keynote Speakers Section */}
          <h1 className="heading">Keynote Speakers</h1>
          <div className="slick-carousel keynote" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
              {keynoteSpeakers.map((speaker, index) => (
                // console.log('Rendering keynote speaker:', speaker.name); // Add logging for each keynote speaker
                <div key={speaker.name}>
                  <Card
                    photo={speaker.photo}
                    name={speaker.name}
                    abt={speaker.abt}
                    link={speaker.link}
                  />
                </div>
              ))}
          </div>


          {/* Speakers Section */}
          <h1 className="heading">Acadeemic And Industry Speakers</h1>
          <div className="slick-carousel industry">
            <Slider {...industrySettings}>
              {industrySpeakers.map((speaker, index) => (
                <div key={speaker.name}>
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

          {/* Hands-On Speakers Section */}
          <h1 className="heading">Hands-On Speakers</h1>
          <div className="slick-carousel academic">
            <Slider {...academicSettings}>
              {academicSpeakers.map((speaker, index) => (
                <div key={speaker.name}>
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
    </>
  );
}

export default CardSlider2;