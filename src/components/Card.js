import React, { useState, useEffect } from "react";
import "../styles/card.css";

const Card = (props) => {
  const handleClick = () => {
    props.onClick(props.name);
  };
  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ backgroundImage: `url(${props.imgPath})` }}
    >
      <p className="card-title sr-only">{props.name || "no name"}</p>
    </div>
  );
};

export default Card;
