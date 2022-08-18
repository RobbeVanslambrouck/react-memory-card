import React, { useState, useEffect } from "react";
import "../styles/card.css";

const Card = (props) => {
  const [title, setTitle] = useState(props.title ? props.title : "no title");

  const handleClick = () => {
    props.onClick(title);
  };
  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ backgroundImage: `url(/cards/${props.imgPath})` }}
    >
      <p className="card-title"></p>
    </div>
  );
};

export default Card;
