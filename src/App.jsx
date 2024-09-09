import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import CyberTEA1 from "../Components/CyberTEA1"; // Import CyberTEA1 component for version 1.0
import Carousel from "../Components/Carousel/Carousel"; // Components for CyberTEA 2.0
import CardSlider from "../Components/CardSlider/CardSlider";
import CardSlider2 from "../Components/CardSlider/CardSlider2-0";
import NewsSchedule from "../Components/ScheduleAndRegister/ScheduleAndRegister";
import NewsSchedule2 from "../Components/ScheduleAndRegister/ScheduleAndRegister2_0";
import FooterComponent from "../Components/FooterComponent/FooterComponent";
import InfoIcon from "@mui/icons-material/Info";
import TopHeader from "../Components/Top Header/Header";
import About from "../Components/About/About";
import Patron from "../Components/Patron/Patron";
import TeamHolder from "../Components/Team/TeamHolder";
import Teamholder1_0 from "../Components/Team/TeamHolder-1.0" 
import "./App.css"; // Import global styles

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainComponent() {
  return (
    <>
      <Navbar />
      <TopHeader />
      <div className="scrolling-text">
        <div className="scroll_text_con">
          <InfoIcon fontSize="small" />
          <h1>Event Date: 01st-05th November 2024</h1> 
        </div>
      </div>
      <Carousel />
      <div className="about_container">
        <About />
      </div>
      <Patron />
      <CardSlider2/>
      <NewsSchedule2/>
      <TeamHolder />
      <FooterComponent />
    </>
  );
}

function CyberTEA1Component() {
  return (
    <>
      <Navbar />
      <TopHeader />
      <Carousel />
      <div className="about_container">
        <About />
      </div>
      <Patron />
      <CardSlider />
      <NewsSchedule />
      <Teamholder1_0 />
      <FooterComponent />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Route for CyberTEA 2.0 */}
        <Route path="/" element={<MainComponent />} />
        
        {/* Route for CyberTEA 1.0 */}
        <Route path="/cybertea1.0" element={<CyberTEA1Component />} />
      </Routes>
    </Router>
  );
}

export default App;


