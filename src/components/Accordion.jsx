import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section key={isActive} className="accordion-card">
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div className="title">{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>
      <div className="card-info">
        {isActive && <p className="content">{content}</p>}
      </div>
    </section>
  );
};

export default Accordion;
