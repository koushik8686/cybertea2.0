import "./Header.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";  // Import useLocation to determine the current route

export default function TopHeader() {
  const [subBio, setsubBio] = useState(true);
  const location = useLocation(); // Hook to get the current location

  // Determine the date to display based on the current route
  const dateText = location.pathname === "/cybertea1.0" ? "02nd-06th January 2024" : "01st-05th November 2024";

  const arraySub = subBio ? dateText : "5 Days Online Workshop"; // Use the appropriate date text

  useEffect(() => {
    let xd = setInterval(() => {
      setsubBio((prev) => !prev);
    }, 4000);
    return () => {
      clearInterval(xd);
    };
  }, []);

  return (
    <>
      <div className="header_container">
        <h1>
          CyberTEA:{" "}
          <span>
            Cybersecurity Trends <br /> and Emerging Applications
          </span>
        </h1>
        <div className="div_holder">
          <h4 className="sub_header">{arraySub}</h4>
        </div>
      </div>
    </>
  );
}
