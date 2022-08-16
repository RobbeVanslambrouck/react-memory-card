import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardDeck = () => {
  const shuffleArray = (arr) => {
    let newArr = arr;
    let picked, temp;
    for (let i = newArr.length - 1; i >= 0; i--) {
      picked = Math.floor(Math.random() * i);
      temp = newArr[i];
      newArr[i] = newArr[picked];
      newArr[picked] = temp;
    }
    return newArr;
  };
  const [cards, setCards] = useState(
    shuffleArray([
      "HA",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "H7",
      "H8",
      "H9",
      "H10",
      "HJ",
      "HQ",
      "HK",
    ])
  );

  const handleCardClick = (cardTitle) => {
    setCards(() => [...shuffleArray(cards)]);
  };

  return (
    <div className="card-deck">
      {cards.map((card) => (
        <Card title={card} onClick={handleCardClick} key={card} />
      ))}
    </div>
  );
};

export default CardDeck;
