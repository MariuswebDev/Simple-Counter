import React, { useState } from "react";
import "./ToggleBackgroundColor.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setbackgroundColor] = useState("white");
  const [textColor, settextColor] = useState("#1a1a1a");
  const [buttonColor, setbuttonColor] = useState("goldenrod");

  const handleClick = () => {
    setbackgroundColor(backgroundColor === "white" ? "#1a1a1a" : "white");
    settextColor(textColor === "#1a1a1a" ? "goldenrod" : "#1a1a1a");
    setbuttonColor(buttonColor === "goldenrod" ? "#1a1a1a" : "goldenrod");
  };

  return (
    <div className="body" style={{ backgroundColor: backgroundColor }}>
      <div className="content">
        <span
          style={{ color: textColor, fontSize: "10rem", fontWeight: "bold" }}
        >
          Welcome to a <br /> Real World...
        </span>
      </div>

      <button
        style={{
          backgroundColor: buttonColor,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
        onClick={handleClick}
      >
        {backgroundColor === "#1a1a1a" ? "Black Theme" : "White Theme"}
      </button>
    </div>
  );
};

export default ToggleBackgroundColor;
