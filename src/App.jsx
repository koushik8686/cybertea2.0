import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import CyberTEA1 from "../Components/CyberTEA1"; // Import CyberTEA1 component for version 1.0
import Carousel from "../Components/Carousel/Carousel"; // Components for CyberTEA 2.0
import CardSlider from "../Components/CardSlider/CardSlider";
import NewsSchedule from "../Components/ScheduleAndRegister/ScheduleAndRegister";
import FooterComponent from "../Components/FooterComponent/FooterComponent";
import InfoIcon from "@mui/icons-material/Info";
import TopHeader from "../Components/Top Header/Header";
import About from "../Components/About/About";
import Patron from "../Components/Patron/Patron";
import TeamHolder from "../Components/Team/TeamHolder";
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
          <h1>Event Date: 02nd-06th January 2025</h1> {/* Date for CyberTEA 2.0 */}
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
      <TeamHolder />
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
