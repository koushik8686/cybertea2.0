import React from "react";
import "./Card.css";

export default function Card({ name, abt, photo, link }) {
  return (
    <div className="card">
      <div className="inner-card">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={photo} alt={name} />
        </a>
        <h3>{name}</h3>
        <h5>{abt}</h5>
      </div>
    </div>
  );
}
