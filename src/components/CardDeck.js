import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/cardDeck.css";

const CardDeck = (props) => {
  const shuffleArray = (arr) => {
    let newArr = arr;
    let index = arr.length,
      randIndex,
      temp;
    while (index !== 0) {
      randIndex = Math.floor(Math.random() * index);
      index--;
      temp = newArr[index];
      newArr[index] = newArr[randIndex];
      newArr[randIndex] = temp;
    }
    return newArr;
  };
  const [deck, setDeck] = useState(shuffleArray(props.cards || []));

  const handleCardClick = (cardTitle) => {
    setDeck(() => [...shuffleArray(deck)]);
    if (props.onCardClick) props.onCardClick(cardTitle);
  };

  return (
    <div className="card-deck">
      {deck.map((card) => (
        <Card title={card} onClick={handleCardClick} key={card} />
      ))}
    </div>
  );
};

export default CardDeck;
