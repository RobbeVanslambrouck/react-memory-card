import React, { useState, useEffect } from "react";

const Card = (props) => {
  const [title, setTitle] = useState(props.title ? props.title : "no title");

  const handleClick = () => {
    props.onClick(title);
  };
  return (
    <div className="card" onClick={handleClick}>
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
