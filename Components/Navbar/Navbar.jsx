import React, { useState, useEffect } from "react";
import logo from "../../src/assets/cyberTea_Circular.png";
import { Squash as Hamburger } from "hamburger-react";
import { Link,  useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [expand, setExpand] = useState(false);
  const [logoText, setLogoText] = useState("CyberTEA");
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLogoText("CyberTEA 2.0");
    } else if (location.pathname === "/cybertea1.0") {
      setLogoText("CyberTEA 1.0");
    }
  }, [location.pathname]);
  const SetDropdownItems = () => {
    const navRight = document.getElementById("nav-right");

    // Check if dropdown items already exist to prevent duplication
    const existingDropdownItems = document.querySelectorAll(".dynamic-dropdown-item");
    if (existingDropdownItems.length) {
      existingDropdownItems.forEach((item) => item.remove());
      setShowDropdown(false);
      return;
    }

    const item1 = document.createElement("li");
    item1.className = "dynamic-dropdown-item";
    const link1 = document.createElement("a");
    link1.href = "#/cybertea1.0";
    link1.innerText = "CyberTEA 1.0";
    link1.onclick = () => {
      setShowDropdown(false);
    };
    item1.appendChild(link1);

   
    // Append items to the ul element
    navRight.appendChild(item1);
   
  };
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
      if (expand) setExpand(false); // Collapse the navbar after scroll
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
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              setExpand(false); // Collapse navbar
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              scrollToSection(e, "about");
              setExpand(false); // Collapse navbar
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#speakers"
            onClick={(e) => {
              scrollToSection(e, "speakers");
              setExpand(false); // Collapse navbar
            }}
          >
            Speakers
          </a>
        </li>
        <li>
          <a
             href={
              location.pathname === '/cybertea1.0' || location.hash === '#/cybertea1.0'
                ? '/img/CyberTEA_Brochure.pdf'
                : '/img/CyberTEA2.0_Brochure.pdf' // Ensure paths are correct
            }
            download={
              location.pathname === '/cybertea1.0' || location.hash === '#/cybertea1.0'
                ? 'CyberTEA_Brochure.pdf'
                : 'CyberTEA2.0_Brochure.pdf'
            }
          >
            Brochure
          </a>
        </li>
        <li>
          <a
            href="#schedule"
            onClick={(e) => {
              scrollToSection(e, "schedule");
              setExpand(false); // Collapse navbar
            }}
          >
            Schedule
          </a>
        </li>
        <li>
          <a
            href="#registration"
            onClick={(e) => {
              scrollToSection(e, "registration");
              setExpand(false); // Collapse navbar
            }}
          >
            Register
          </a>
        </li>
        <li
          onClick = { expand? SetDropdownItems: null}// Collapse navbar when dropdown is clicked
          onMouseEnter={!expand ? toggleDropdown : null}
          onMouseLeave={!expand ? toggleDropdown : null}
          className="relative"
        >
          <a className="dropdown-toggle">
            Past Events
            <FiChevronDown className="arrow-icon" /> {/* Dropdown icon */}
          </a>
          {showDropdown && (
            <div className="dropdown-menu">
              <ul className="drop-down-content">
                <li>
                  <Link
                    to="/cybertea1.0"
                    onClick={() => {
                      setExpand(false); // Collapse navbar
                      setShowDropdown(false);
                    }}
                  >
                    CyberTEA 1.0
                  </Link>
                </li>
               
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
