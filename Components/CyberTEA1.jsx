import React from "react";
import "../src/App.css";  // Ensure the path is correct
import Carousel from "./Carousel/Carousel";
import Navbar from "./Navbar/Navbar";
import CardSlider from "./CardSlider/CardSlider";
import NewsSchedule from "./ScheduleAndRegister/ScheduleAndRegister";
import FooterComponent from "./FooterComponent/FooterComponent";
import InfoIcon from "@mui/icons-material/Info";
import TopHeader from "./Top Header/Header";
import About from "./About/About";
import Patron from "./Patron/Patron";
import TeamHolder from "./Team/TeamHolder";

function CyberTEA1() {
  return (
    <>
      <Navbar />
      <TopHeader />
      <div className="scrolling-text">
        <div className="scroll_text_con">
          <InfoIcon fontSize="small" />
          <h1>Event Date: 02nd-06th January 2024</h1> {/* Date for CyberTEA 1.0 */}
        </div>
      </div>
      <Carousel />
      <div className="about_container">
        <About />
      </div>
      <Patron />
      <CardSlider />
      <NewsSchedule />
      <TeamHolder />
      <FooterComponent />
    </>
  );
}

export default CyberTEA1;
