import React, { useState } from "react";
import "./HeartIcon.css";

const HeartIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="heart-icon"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <span className="heart-icon__emoji" role="img" aria-label="red heart">
          ❤️
        </span>
      ) : (
        <span
          className="heart-icon__emoji"
          role="img"
          aria-label="outline heart"
        >
          🤍
        </span>
      )}
    </div>
  );
};

export default HeartIcon;
