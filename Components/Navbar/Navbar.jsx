import React, { useState, useEffect } from "react";
import logo from "../../src/assets/cyberTea_Circular.png";
import { Squash as Hamburger } from "hamburger-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [expand, setExpand] = useState(false);
  const [logoText, setLogoText] = useState("CyberTEA");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLogoText("CyberTEA 2.0");
    } else if (location.pathname === "/cybertea1.0") {
      setLogoText("CyberTEA 1.0");
    }
  }, [location.pathname]);

  const NavToggle = () => {
    setExpand(!expand);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 70;
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      if (expand) setExpand(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const navbar = document.getElementById("navbar");
      if (y > 10) {
        navbar.classList.add("navbar_on_move");
      } else {
        navbar.classList.remove("navbar_on_move");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    useEffect(() => {
    const adjustDropdownPadding = () => {
      const dropdownMenu = document.querySelector(".dropdown-menu");
      if (showDropdown && window.scrollY < 10) {
        dropdownMenu.style.padding = "0";
      } else {
        // dropdownMenu.style.padding = ""; // Reset padding
      }
    };
    adjustDropdownPadding();
  }, [showDropdown]);
  return (
    <nav id="navbar">
      <div className="mobview">
        <h1>
          <a href={logo} target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="CyberTEA Logo" id="logo_cyber" />
          </a>
          {logoText}
        </h1>
        <span id="hamburger" onClick={NavToggle}>
          <Hamburger toggled={expand} />
        </span>
      </div>
      <ul id="nav-right" className={expand ? "expand" : ""}>
        <li>
          <Link to="/" onClick={() => { 
            window.scrollTo(0, 0); 
            if (expand) setExpand(false); 
          }}>Home</Link>
        </li>
        <li>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a href="#speakers" onClick={(e) => scrollToSection(e, "speakers")}>
            Speakers
          </a>
        </li>
        <li>
          <a href="/img/CyberTEA_Brochure.pdf" download="CyberTEA_Brochure.pdf">
            Brochure
          </a>
        </li>
        <li>
          <a href="#schedule" onClick={(e) => scrollToSection(e, "schedule")}>
            Schedule
          </a>
        </li>
        <li>
          <a href="#registration" onClick={(e) => scrollToSection(e, "registration")}>
            Register
          </a>
        </li>
        <li  onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className="relative">
          <a className="dropdown-toggle">
            Past Events  
            <FiChevronDown className="arrow-icon" /> {/* Dropdown icon */}
          </a>
          {showDropdown && (
            <div  className="dropdown-menu">
              <ul className="drop-down-content">
              <li>
                <Link to="/cybertea1.0" onClick={() => { 
                  if (expand) setExpand(false); 
                  setShowDropdown(false);
                }}>CyberTEA 1.0</Link>
              </li>
              <li>
                <Link to="/" onClick={() => { 
                  if (expand) setExpand(false); 
                  setShowDropdown(false);
                }}>CyberTEA 2.0</Link>
              </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
      
    </nav>
  );
}
