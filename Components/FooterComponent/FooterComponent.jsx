import React from "react";
import "./FooterComponent.css"; // Import the corresponding CSS file

const FooterComponent = () => {
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 50;
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <footer className="footer">
        <p>&copy;2025 <a href="#">CyberTEA</a> | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default FooterComponent;
